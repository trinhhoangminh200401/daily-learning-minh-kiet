// ========================================
// SHARED - APPLICATION ERROR CLASS
// ========================================

import { BaseError } from './base.error';
import { HTTP_STATUS, HttpStatusCode } from '../constants/http.constants';

/**
 * Error codes for the application
 * Following a structured naming convention: DOMAIN_ERROR_TYPE
 */
export const ERROR_CODES = {
    // General errors
    INTERNAL_ERROR: 'INTERNAL_ERROR',
    VALIDATION_ERROR: 'VALIDATION_ERROR',
    NOT_FOUND: 'NOT_FOUND',

    // Authentication errors
    AUTH_INVALID_CREDENTIALS: 'AUTH_INVALID_CREDENTIALS',
    AUTH_TOKEN_EXPIRED: 'AUTH_TOKEN_EXPIRED',
    AUTH_TOKEN_INVALID: 'AUTH_TOKEN_INVALID',
    AUTH_UNAUTHORIZED: 'AUTH_UNAUTHORIZED',

    // Authorization errors
    FORBIDDEN: 'FORBIDDEN',
    INSUFFICIENT_PERMISSIONS: 'INSUFFICIENT_PERMISSIONS',

    // Resource errors
    RESOURCE_NOT_FOUND: 'RESOURCE_NOT_FOUND',
    RESOURCE_ALREADY_EXISTS: 'RESOURCE_ALREADY_EXISTS',
    RESOURCE_CONFLICT: 'RESOURCE_CONFLICT',

    // Database errors
    DATABASE_CONNECTION_ERROR: 'DATABASE_CONNECTION_ERROR',
    DATABASE_QUERY_ERROR: 'DATABASE_QUERY_ERROR',

    // Business logic errors
    BUSINESS_RULE_VIOLATION: 'BUSINESS_RULE_VIOLATION',
    INSUFFICIENT_STOCK: 'INSUFFICIENT_STOCK',
    INVALID_OPERATION: 'INVALID_OPERATION',
} as const;

export type ErrorCode = typeof ERROR_CODES[keyof typeof ERROR_CODES];

/**
 * Application Error
 * Used for all application-specific errors with error codes and HTTP status
 * 
 * @example
 * throw new AppError('User not found', ERROR_CODES.NOT_FOUND, HTTP_STATUS.NOT_FOUND);
 */
export class AppError extends BaseError {
    public readonly code: ErrorCode;
    public readonly statusCode: HttpStatusCode;
    public readonly details?: Record<string, unknown>;

    constructor(
        message: string,
        code: ErrorCode = ERROR_CODES.INTERNAL_ERROR,
        statusCode: HttpStatusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR,
        details?: Record<string, unknown>
    ) {
        super(message, true);
        this.code = code;
        this.statusCode = statusCode;
        this.details = details;
    }

    /**
     * Convert error to API response format
     */
    public toResponse(): {
        success: false;
        error: {
            code: ErrorCode;
            message: string;
            statusCode: HttpStatusCode;
            details?: Record<string, unknown>;
        };
    } {
        return {
            success: false,
            error: {
                code: this.code,
                message: this.message,
                statusCode: this.statusCode,
                ...(this.details && { details: this.details }),
            },
        };
    }

    public override toJSON(): Record<string, unknown> {
        return {
            ...super.toJSON(),
            code: this.code,
            statusCode: this.statusCode,
            details: this.details,
        };
    }
}
