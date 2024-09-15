# AI Fetch 

[![Build Status](https://github.com/dexaai/ai-fetch/actions/workflows/main.yml/badge.svg)](https://github.com/dexaai/ai-fetch/actions/workflows/main.yml) [![npm version](https://img.shields.io/npm/v/ai-fetch.svg?color=0c0)](https://www.npmjs.com/package/ai-fetch)

A minimal and opinionated interface and helper functions for AI provider fetch implementations.

`ai-fetch` provides a streamlined interface and helper functions to implement various AI provider clients, such as `openai-fetch` and `anthropic-fetch`, using a consistent and minimal approach.

### Reasons to consider using `ai-fetch`:

- You want a fast and small client that doesn't patch fetch
- Supports all environments with native fetch: Node 18+, browsers, Deno, Cloudflare Workers, etc
- Provides a consistent interface for different AI providers
- You only need chat, completions, embeddings, and moderations

### Use the official AI provider packages if:

- Your runtime doesn't have native fetch support
- Your app can't handle native ESM code
- You need endpoints other than chat, completions, embeddings, and moderations
- You aren't concerned with library size or fetch patching

## Install

```bash
npm install ai-fetch
```

This package requires `node >= 18` or an environment with `fetch` support.

This package exports [ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). If your project uses CommonJS, consider switching to ESM or use the [dynamic `import()`](https://v8.dev/features/dynamic-import) function.

## Usage

### Definining a AI Client

A client that implements an `AIChatClient`:

```ts
import  { type BaseAIClient, type AIChatClient, createApiInstance } from 'ai-fetch';

class YourAIClient implements BaseAIFetchClient, AIChatClient {
  name = 'YourAIClient'
  api: KyInstance

  constructor() {
    // Create a fetch api client for your provider using the helper function provided.
    this.api = createApiInstance({
        //... provide your ai provider opts here
    })
  }

  /** Create a completion for a chat message. */
  async createChatCompletion(
    params: ChatParams<ChatModel>,
    opts?: RequestOpts
  ): Promise<ChatResponse> {
    // implementation
  }

  /** Create a chat completion and stream back partial progress. */
  async streamChatCompletion(
    params: ChatStreamParams<ChatModel>,
    opts?: RequestOpts
  ): Promise<ChatStreamResponse> {
    // streaming implementation
  }
}

```

## API

The AI Fetch API follows OpenAI very closely, so their [reference documentation](https://beta.openai.com/docs/api-reference) can generally be used. Everything is strongly typed, so you will know if anything is different as soon as TypeScript parses your code.

```ts
// Generate a single chat completion
client.createChatCompletion(params: ChatParams<SomeModel>): Promise<ChatResponse>;

// Stream a single completion via a ReadableStream
client.streamChatCompletion(params: ChatStreamParams<SomeModel>): Promise<ChatStreamResponse>;

// Generate one or more completions
client.createCompletions(params: CompletionParams<SomeModel>): Promise<CompletionResponse>;

// Stream a single completion via a ReadableStream
client.streamCompletion(params: CompletionStreamParams<SomeModel>): Promise<CompletionStreamResponse>;

// Generate one or more embeddings
client.createEmbeddings(params: EmbeddingParams<SomeModel>): Promise<EmbeddingResponse>

// Checks for potentially harmful content
client.createModeration(params: ModerationParams<SomeModel>): Promise<ModerationResponse>
```

### Type Definitions

The type definitions are available through TSServer, and can be found here: [type definitions](/src/types.ts).

## License

MIT © [Dexa](https://dexa.ai)
