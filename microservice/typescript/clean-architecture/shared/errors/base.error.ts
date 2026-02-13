// ========================================
// SHARED - BASE ERROR CLASS
// ========================================

/**
 * Base error class for the application
 * Extends the built-in Error class with proper stack traces
 * 
 * @see https://www.joyent.com/node-js/production/design/errors
 */
export abstract class BaseError extends Error {
    public readonly isOperational: boolean;
    public readonly timestamp: Date;

    constructor(
        message: string,
        isOperational: boolean = true
    ) {
        super(message);

        // Set the prototype explicitly (required for extending built-in classes)
        Object.setPrototypeOf(this, new.target.prototype);

        this.name = this.constructor.name;
        this.isOperational = isOperational;
        this.timestamp = new Date();

        // Capture stack trace (excluding constructor from stack)
        Error.captureStackTrace(this, this.constructor);
    }

    /**
     * Convert error to a plain object for logging/serialization
     */
    public toJSON(): Record<string, unknown> {
        return {
            name: this.name,
            message: this.message,
            isOperational: this.isOperational,
            timestamp: this.timestamp.toISOString(),
            stack: this.stack,
        };
    }
}
