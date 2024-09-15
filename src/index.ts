export type {
  APIConnectionError,
  APIConnectionTimeoutError,
  APIError,
  APIUserAbortError,
  AuthenticationError,
  BadRequestError,
  ConflictError,
  InternalServerError,
  NotFoundError,
  OpenAIError,
  PermissionDeniedError,
  RateLimitError,
  UnprocessableEntityError,
} from './errors.js';
export type { 
  BaseAIFetchClient,
  AIChatClient,
  AICompletionClient,
  AIEmbeddingClient,
  AIModerationClient,
 } from './ai-client.js';
export type {
  ChatMessage,
  ChatParams,
  ChatResponse,
  ChatStreamParams,
  ChatStreamResponse,
  CompletionParams,
  CompletionResponse,
  CompletionStreamParams,
  CompletionStreamResponse,
  EmbeddingParams,
  EmbeddingResponse,
} from './types.js';
export {
  createApiInstance,
  type KyOptions,
} from './fetch-api.js';