// ========================================
// INFRASTRUCTURE LAYER - In-Memory Repository Implementation
// Fake database using Map for development/testing
// ========================================

import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/repositories";

export class InMemoryUserRepository implements IUserRepository {
    // Fake database - In-memory Map
    private users: Map<string, User> = new Map();

    async findById(id: string): Promise<User | null> {
        return this.users.get(id) || null;
    }

    async findByEmail(email: string): Promise<User | null> {
        for (const user of this.users.values()) {
            if (user.email === email) {
                return user;
            }
        }
        return null;
    }

    async findAll(): Promise<User[]> {
        return Array.from(this.users.values());
    }

    async save(user: User): Promise<void> {
        this.users.set(user.id, user);
    }

    async update(user: User): Promise<void> {
        if (!this.users.has(user.id)) {
            throw new Error(`User with id ${user.id} not found`);
        }
        this.users.set(user.id, user);
    }

    async delete(id: string): Promise<void> {
        if (!this.users.has(id)) {
            throw new Error(`User with id ${id} not found`);
        }
        this.users.delete(id);
    }
}
