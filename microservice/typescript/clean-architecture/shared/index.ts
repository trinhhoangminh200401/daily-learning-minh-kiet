// ========================================
// SHARED - MAIN BARREL EXPORT
// ========================================

/**
 * Shared module exports
 * 
 * Import shared resources using:
 * import { HTTP_STATUS, AppError, Result, generateUUID } from './shared';
 * 
 * Or import specific modules:
 * import { HTTP_STATUS } from './shared/constants';
 * import { AppError } from './shared/errors';
 */

// Re-export all modules
export * from './constants';
export * from './errors';
export * from './types';
export * from './utils';
