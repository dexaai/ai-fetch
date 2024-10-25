import { type KyInstance } from 'ky';

import { type KyOptions } from './fetch-api.js';
import {
  type ChatParams,
  type ChatResponse,
  type ChatStreamParams,
  type ChatStreamResponse,
  type CompletionParams,
  type CompletionResponse,
  type CompletionStreamParams,
  type CompletionStreamResponse,
  type EmbeddingParams,
  type EmbeddingResponse,
} from './types.js';

/** Override the default Ky options for a single request. */
export type AIFetchRequestOpts = {
  headers?: KyOptions['headers'];
  signal?: AbortSignal;
};

export interface AIFetchClient {
  name: string;
  api: KyInstance;
}

export interface AIChatClient<
  TChatCompletion extends string = string,
  TChatStream extends string = string,
> extends AIFetchClient {
  createChatCompletion(
    params: ChatParams<TChatCompletion>,
    opts?: AIFetchRequestOpts
  ): Promise<ChatResponse>;

  streamChatCompletion(
    params: ChatStreamParams<TChatStream>,
    opts?: AIFetchRequestOpts
  ): Promise<ChatStreamResponse>;
}

export interface AICompletionClient<
  TCompletion extends string = string,
  TCompletionStream extends string = string,
> extends AIFetchClient {
  createCompletions(
    params: CompletionParams<TCompletion>,
    opts?: AIFetchRequestOpts
  ): Promise<CompletionResponse>;

  streamCompletion(
    params: CompletionStreamParams<TCompletionStream>,
    opts?: AIFetchRequestOpts
  ): Promise<CompletionStreamResponse>;
}

export interface AIEmbeddingClient<TEmbedding extends string = string>
  extends AIFetchClient {
  createEmbeddings(
    params: EmbeddingParams<TEmbedding>,
    opts?: AIFetchRequestOpts
  ): Promise<EmbeddingResponse>;
}
