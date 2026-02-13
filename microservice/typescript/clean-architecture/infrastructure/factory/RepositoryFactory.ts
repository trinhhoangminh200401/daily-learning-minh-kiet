// ========================================
// INFRASTRUCTURE - Repository Factory
// Tạo repository instances dựa trên config
// ========================================

import { IUserRepository, IProductRepository, IOrderRepository } from "../../domain/repositories";

// In-Memory implementations
import { InMemoryUserRepository, InMemoryProductRepository, InMemoryOrderRepository } from "../repositories-in-memory";

// PostgreSQL implementations
import { PostgresUserRepository, PostgresProductRepository, PostgresOrderRepository } from "../repositories-postgres";

// MongoDB implementations
import { MongoUserRepository, MongoProductRepository, MongoOrderRepository } from "../repositories-mongodb";

// Database types
export type DatabaseType = "in-memory" | "postgres" | "mongodb";

// Database configuration
export interface DatabaseConfig {
    type: DatabaseType;
    connectionString?: string;
}

// Repository instances container
export interface Repositories {
    userRepository: IUserRepository;
    productRepository: IProductRepository;
    orderRepository: IOrderRepository;
}

/**
 * Repository Factory - Creates repository instances based on database type
 * 
 * USAGE:
 * const repos = RepositoryFactory.create({ type: "postgres", connectionString: "..." });
 * const userService = new UserService(repos.userRepository);
 */
export class RepositoryFactory {

    static create(config: DatabaseConfig): Repositories {
        switch (config.type) {
            case "in-memory":
                return this.createInMemoryRepositories();

            case "postgres":
                return this.createPostgresRepositories(config.connectionString);

            case "mongodb":
                return this.createMongoRepositories(config.connectionString);

            default:
                throw new Error(`Unsupported database type: ${config.type}`);
        }
    }

    private static createInMemoryRepositories(): Repositories {
        console.log("📦 Using In-Memory repositories (for development/testing)");
        return {
            userRepository: new InMemoryUserRepository(),
            productRepository: new InMemoryProductRepository(),
            orderRepository: new InMemoryOrderRepository(),
        };
    }

    private static createPostgresRepositories(connectionString?: string): Repositories {
        const connStr = connectionString || "postgresql://localhost:5432/mydb";
        console.log(`🐘 Using PostgreSQL repositories`);
        return {
            userRepository: new PostgresUserRepository(connStr),
            productRepository: new PostgresProductRepository(connStr),
            orderRepository: new PostgresOrderRepository(connStr),
        };
    }

    private static createMongoRepositories(connectionString?: string): Repositories {
        const connStr = connectionString || "mongodb://localhost:27017/mydb";
        console.log(`🍃 Using MongoDB repositories`);
        return {
            userRepository: new MongoUserRepository(connStr),
            productRepository: new MongoProductRepository(connStr),
            orderRepository: new MongoOrderRepository(connStr),
        };
    }
}
