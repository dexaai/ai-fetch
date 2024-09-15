export type { 
  AIChatClient,
  AICompletionClient,
  AIEmbeddingClient,
  AIModerationClient,
  BaseAIFetchClient,
 } from './ai-client.js';
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
export {
  createApiInstance,
  type KyOptions,
} from './fetch-api.js';
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