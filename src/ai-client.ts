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
  type ModerationParams,
  type ModerationResponse,
} from './types.js';

/** Override the default Ky options for a single request. */
type RequestOpts = {
  headers?: KyOptions['headers'];
  signal?: AbortSignal;
};

export interface BaseAIFetchClient {
  name: string;
  api: KyInstance;
  getApi(opts?: KyOptions): KyInstance;
}

export interface AIChatClient<
  TChatCompletion extends string = string,
  TChatStream extends string = string
> extends BaseAIFetchClient {
  createChatCompletion(
    params: ChatParams<TChatCompletion>,
    opts?: RequestOpts
  ): Promise<ChatResponse>;

  streamChatCompletion(
    params: ChatStreamParams<TChatStream>,
    opts?: RequestOpts
  ): Promise<ChatStreamResponse>;
}

export interface AICompletionClient<
  TCompletion extends string = string,
  TCompletionStream extends string = string
> extends BaseAIFetchClient {
  createCompletions(
    params: CompletionParams<TCompletion>,
    opts?: RequestOpts
  ): Promise<CompletionResponse>;

  streamCompletion(
    params: CompletionStreamParams<TCompletionStream>,
    opts?: RequestOpts
  ): Promise<CompletionStreamResponse>;
}

export interface AIEmbeddingClient<TEmbedding extends string = string> extends BaseAIFetchClient {
  createEmbeddings(
    params: EmbeddingParams<TEmbedding>,
    opts?: RequestOpts
  ): Promise<EmbeddingResponse>;
}

export interface AIModerationClient<TModeration extends string = string> extends BaseAIFetchClient {
  createModeration(
    params: ModerationParams<TModeration>,
    opts?: RequestOpts
  ): Promise<ModerationResponse>;
}
