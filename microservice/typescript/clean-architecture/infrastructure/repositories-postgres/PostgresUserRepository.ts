// ========================================
// INFRASTRUCTURE LAYER - PostgreSQL Repository Implementation
// ========================================

import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/repositories";

export class PostgresUserRepository implements IUserRepository {
    private connectionString: string;

    constructor(connectionString: string = "postgresql://localhost:5432/mydb") {
        this.connectionString = connectionString;
        console.log(`[PostgreSQL] Connected to: ${this.connectionString}`);
    }

    async findById(id: string): Promise<User | null> {
        console.log(`[PostgreSQL] SELECT * FROM users WHERE id = '${id}'`);
        return null;
    }

    async findByEmail(email: string): Promise<User | null> {
        console.log(`[PostgreSQL] SELECT * FROM users WHERE email = '${email}'`);
        return null;
    }

    async findAll(): Promise<User[]> {
        console.log(`[PostgreSQL] SELECT * FROM users`);
        return [];
    }

    async save(user: User): Promise<void> {
        console.log(`[PostgreSQL] INSERT INTO users VALUES ('${user.id}', '${user.name}', ${user.age}, '${user.email}', '***')`);
    }

    async update(user: User): Promise<void> {
        console.log(`[PostgreSQL] UPDATE users SET name = '${user.name}', age = ${user.age} WHERE id = '${user.id}'`);
    }

    async delete(id: string): Promise<void> {
        console.log(`[PostgreSQL] DELETE FROM users WHERE id = '${id}'`);
    }
}
