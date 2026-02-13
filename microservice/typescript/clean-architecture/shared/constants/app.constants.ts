// ========================================
// SHARED - APP CONSTANTS
// ========================================

/**
 * Application-wide constants
 * @see https://github.com/goldbergyoni/nodebestpractices#-31-extract-secrets-from-config-files-or-use-packages-to-encrypt-them
 */
export const APP_CONSTANTS = {
    // Application Info
    APP_NAME: 'Microservice Product Management',
    APP_VERSION: '1.0.0',

    // Pagination defaults
    DEFAULT_PAGE: 1,
    DEFAULT_PAGE_SIZE: 10,
    MAX_PAGE_SIZE: 100,

    // Token expiration (in seconds)
    ACCESS_TOKEN_EXPIRY: 15 * 60,         // 15 minutes
    REFRESH_TOKEN_EXPIRY: 7 * 24 * 60 * 60, // 7 days

    // Password hashing
    BCRYPT_SALT_ROUNDS: 12,

    // Rate limiting
    RATE_LIMIT_WINDOW_MS: 15 * 60 * 1000, // 15 minutes
    RATE_LIMIT_MAX_REQUESTS: 100,
} as const;

// Type for accessing constants with autocomplete
export type AppConstantsType = typeof APP_CONSTANTS;
