// ========================================
// SHARED - DATABASE CONSTANTS
// ========================================

/**
 * Database Types supported by the application
 * Matches the DatabaseType in infrastructure/factory
 */
export const DATABASE_TYPES = {
    IN_MEMORY: 'in-memory',
    POSTGRES: 'postgres',
    MONGODB: 'mongodb',
} as const;

/**
 * Default database ports
 */
export const DATABASE_PORTS = {
    MONGODB: 27017,
    POSTGRES: 5432,
    REDIS: 6379,
} as const;

/**
 * Default connection pool settings
 * @see https://node-postgres.com/features/pooling
 */
export const DATABASE_POOL = {
    MIN_CONNECTIONS: 2,
    MAX_CONNECTIONS: 10,
    IDLE_TIMEOUT_MS: 30000,
    CONNECTION_TIMEOUT_MS: 10000,
} as const;

// Types for type safety
export type DatabaseType = typeof DATABASE_TYPES[keyof typeof DATABASE_TYPES];
