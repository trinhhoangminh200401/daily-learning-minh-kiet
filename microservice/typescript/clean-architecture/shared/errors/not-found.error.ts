// ========================================
// SHARED - NOT FOUND ERROR CLASS
// ========================================

import { AppError, ERROR_CODES } from './app.error';
import { HTTP_STATUS } from '../constants/http.constants';

/**
 * Not Found Error
 * Used when a requested resource does not exist
 * 
 * @example
 * throw new NotFoundError('User');            // "User not found"
 * throw new NotFoundError('Product', '123');  // "Product with id '123' not found"
 */
export class NotFoundError extends AppError {
    public readonly resourceName: string;
    public readonly resourceId?: string;

    constructor(
        resourceName: string,
        resourceId?: string
    ) {
        const message = resourceId
            ? `${resourceName} with id '${resourceId}' not found`
            : `${resourceName} not found`;

        super(
            message,
            ERROR_CODES.NOT_FOUND,
            HTTP_STATUS.NOT_FOUND,
            { resourceName, resourceId }
        );

        this.resourceName = resourceName;
        this.resourceId = resourceId;
    }

    public override toJSON(): Record<string, unknown> {
        return {
            ...super.toJSON(),
            resourceName: this.resourceName,
            resourceId: this.resourceId,
        };
    }
}
