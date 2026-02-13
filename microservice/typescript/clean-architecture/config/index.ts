// ========================================
// CONFIGURATION MODULE
// Centralized configuration loader
// ========================================

import { DATABASE_TYPES, DatabaseType } from '../shared/constants';

/**
 * Configuration interface
 */
export interface Config {
    app: {
        name: string;
        version: string;
        env: 'development' | 'production' | 'test';
        port: number;
    };
    database: {
        type: DatabaseType;
        postgres: {
            host: string;
            port: number;
            user: string;
            password: string;
            database: string;
            url: string;
        };
        mongodb: {
            host: string;
            port: number;
            user: string;
            password: string;
            database: string;
            url: string;
        };
    };
    redis: {
        host: string;
        port: number;
        password: string;
        url: string;
    };
    jwt: {
        secret: string;
        accessTokenExpiry: string;
        refreshTokenExpiry: string;
    };
    bcrypt: {
        saltRounds: number;
    };
}

/**
 * Get environment variable with type safety
 */
function getEnv(key: string, fallback?: string): string {
    const value = process.env[key] ?? fallback;
    if (value === undefined) {
        throw new Error(`Missing required environment variable: ${key}`);
    }
    return value;
}

/**
 * Get environment variable as number
 */
function getEnvNum(key: string, fallback?: number): number {
    const value = process.env[key];
    if (value === undefined) {
        if (fallback !== undefined) return fallback;
        throw new Error(`Missing required environment variable: ${key}`);
    }
    const num = parseInt(value, 10);
    if (isNaN(num)) {
        throw new Error(`Environment variable ${key} must be a number`);
    }
    return num;
}

/**
 * Validate database type
 */
function validateDatabaseType(type: string): DatabaseType {
    const validTypes = Object.values(DATABASE_TYPES);
    if (!validTypes.includes(type as DatabaseType)) {
        throw new Error(
            `Invalid DATABASE_TYPE: ${type}. Must be one of: ${validTypes.join(', ')}`
        );
    }
    return type as DatabaseType;
}

/**
 * Load configuration from environment variables
 * 
 * @see https://github.com/goldbergyoni/nodebestpractices#31-extract-secrets-from-config-files-or-use-packages-to-encrypt-them
 */
export function loadConfig(): Config {
    // Load .env file in non-production environments
    // You need to install dotenv: npm install dotenv
    // import 'dotenv/config'; // Uncomment after installing dotenv

    return {
        app: {
            name: getEnv('APP_NAME', 'microservice-app'),
            version: getEnv('APP_VERSION', '1.0.0'),
            env: getEnv('NODE_ENV', 'development') as Config['app']['env'],
            port: getEnvNum('PORT', 3000),
        },
        database: {
            type: validateDatabaseType(getEnv('DATABASE_TYPE', 'in-memory')),
            postgres: {
                host: getEnv('POSTGRES_HOST', 'localhost'),
                port: getEnvNum('POSTGRES_PORT', 5432),
                user: getEnv('POSTGRES_USER', 'postgres'),
                password: getEnv('POSTGRES_PASSWORD', ''),
                database: getEnv('POSTGRES_DB', 'products_db'),
                url: getEnv('POSTGRES_URL', ''),
            },
            mongodb: {
                host: getEnv('MONGODB_HOST', 'localhost'),
                port: getEnvNum('MONGODB_PORT', 27017),
                user: getEnv('MONGODB_USER', 'admin'),
                password: getEnv('MONGODB_PASSWORD', ''),
                database: getEnv('MONGODB_DB', 'users_db'),
                url: getEnv('MONGODB_URL', ''),
            },
        },
        redis: {
            host: getEnv('REDIS_HOST', 'localhost'),
            port: getEnvNum('REDIS_PORT', 6379),
            password: getEnv('REDIS_PASSWORD', ''),
            url: getEnv('REDIS_URL', ''),
        },
        jwt: {
            secret: getEnv('JWT_SECRET', 'development-secret-change-in-production'),
            accessTokenExpiry: getEnv('JWT_ACCESS_TOKEN_EXPIRY', '15m'),
            refreshTokenExpiry: getEnv('JWT_REFRESH_TOKEN_EXPIRY', '7d'),
        },
        bcrypt: {
            saltRounds: getEnvNum('BCRYPT_SALT_ROUNDS', 12),
        },
    };
}

// Singleton instance
let configInstance: Config | null = null;

/**
 * Get the configuration singleton
 */
export function getConfig(): Config {
    if (!configInstance) {
        configInstance = loadConfig();
    }
    return configInstance;
}

/**
 * Reset configuration (useful for testing)
 */
export function resetConfig(): void {
    configInstance = null;
}

export default getConfig;
