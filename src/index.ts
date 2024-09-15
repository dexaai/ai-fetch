export type { 
  AIChatClient,
  AICompletionClient,
  AIEmbeddingClient,
  AIFetchClient,
  AIFetchRequestOpts,
  AIModerationClient,
 } from './ai-fetch-client.js';
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
  ChatStreamChunk,
  ChatStreamParams,
  ChatStreamResponse,
  CompletionParams,
  CompletionResponse,
  CompletionStreamParams,
  CompletionStreamResponse,
  EmbeddingParams,
  EmbeddingResponse,
  ModerationParams,
  ModerationResponse,
} from './types.js';