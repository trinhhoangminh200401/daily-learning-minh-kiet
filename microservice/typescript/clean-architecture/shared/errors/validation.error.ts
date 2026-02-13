// ========================================
// SHARED - VALIDATION ERROR CLASS
// ========================================

import { AppError, ERROR_CODES } from './app.error';
import { HTTP_STATUS } from '../constants/http.constants';

/**
 * Validation error field details
 */
export interface ValidationErrorField {
    field: string;
    message: string;
    value?: unknown;
}

/**
 * Validation Error
 * Used for input validation failures with detailed field-level errors
 * 
 * @example
 * throw new ValidationError('Invalid input', [
 *     { field: 'email', message: 'Invalid email format' },
 *     { field: 'password', message: 'Password must be at least 8 characters' }
 * ]);
 */
export class ValidationError extends AppError {
    public readonly fields: ValidationErrorField[];

    constructor(
        message: string = 'Validation failed',
        fields: ValidationErrorField[] = []
    ) {
        super(
            message,
            ERROR_CODES.VALIDATION_ERROR,
            HTTP_STATUS.BAD_REQUEST,
            { fields }
        );
        this.fields = fields;
    }

    /**
     * Create a validation error from a single field
     */
    public static fromField(
        field: string,
        message: string,
        value?: unknown
    ): ValidationError {
        return new ValidationError('Validation failed', [
            { field, message, value }
        ]);
    }

    /**
     * Create a validation error from multiple fields
     */
    public static fromFields(fields: ValidationErrorField[]): ValidationError {
        return new ValidationError('Validation failed', fields);
    }

    public override toJSON(): Record<string, unknown> {
        return {
            ...super.toJSON(),
            fields: this.fields,
        };
    }
}
