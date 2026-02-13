// ========================================
// SHARED - COMMON TYPES
// ========================================

/**
 * Result type for operations that can succeed or fail
 * Following the Result Pattern (functional error handling)
 * 
 * @see https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions
 */
export type Result<T, E = Error> =
    | { success: true; data: T }
    | { success: false; error: E };

/**
 * Create a successful result
 */
export function ok<T>(data: T): Result<T, never> {
    return { success: true, data };
}

/**
 * Create a failed result
 */
export function err<E>(error: E): Result<never, E> {
    return { success: false, error };
}

/**
 * Pagination parameters
 */
export interface PaginationParams {
    page: number;
    pageSize: number;
}

/**
 * Paginated result with metadata
 */
export interface PaginatedResult<T> {
    data: T[];
    pagination: {
        page: number;
        pageSize: number;
        totalItems: number;
        totalPages: number;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
    };
}

/**
 * Create a paginated result
 */
export function paginate<T>(
    data: T[],
    page: number,
    pageSize: number,
    totalItems: number
): PaginatedResult<T> {
    const totalPages = Math.ceil(totalItems / pageSize);
    return {
        data,
        pagination: {
            page,
            pageSize,
            totalItems,
            totalPages,
            hasNextPage: page < totalPages,
            hasPreviousPage: page > 1,
        },
    };
}

/**
 * Standard API Response format
 */
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: {
        code: string;
        message: string;
        statusCode: number;
        details?: Record<string, unknown>;
    };
    meta?: {
        timestamp: string;
        requestId?: string;
    };
}

/**
 * Create a successful API response
 */
export function apiSuccess<T>(data: T, requestId?: string): ApiResponse<T> {
    return {
        success: true,
        data,
        meta: {
            timestamp: new Date().toISOString(),
            ...(requestId && { requestId }),
        },
    };
}

/**
 * Nullable type helper
 */
export type Nullable<T> = T | null;

/**
 * Optional type helper
 */
export type Optional<T> = T | undefined;

/**
 * Deep partial type helper
 */
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * ReadOnly type helper for immutable objects
 */
export type Immutable<T> = {
    readonly [P in keyof T]: T[P] extends object ? Immutable<T[P]> : T[P];
};
