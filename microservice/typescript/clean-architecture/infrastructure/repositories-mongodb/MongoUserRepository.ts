// ========================================
// INFRASTRUCTURE LAYER - MongoDB Repository Implementation
// ========================================

import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/repositories";

export class MongoUserRepository implements IUserRepository {
    private connectionUri: string;
    private collectionName: string = "users";

    constructor(connectionUri: string = "mongodb://localhost:27017/mydb") {
        this.connectionUri = connectionUri;
        console.log(`[MongoDB] Connected to: ${this.connectionUri}`);
    }

    async findById(id: string): Promise<User | null> {
        console.log(`[MongoDB] db.${this.collectionName}.findOne({ _id: "${id}" })`);
        return null;
    }

    async findByEmail(email: string): Promise<User | null> {
        console.log(`[MongoDB] db.${this.collectionName}.findOne({ email: "${email}" })`);
        return null;
    }

    async findAll(): Promise<User[]> {
        console.log(`[MongoDB] db.${this.collectionName}.find({})`);
        return [];
    }

    async save(user: User): Promise<void> {
        console.log(`[MongoDB] db.${this.collectionName}.insertOne({ _id: "${user.id}", name: "${user.name}", ... })`);
    }

    async update(user: User): Promise<void> {
        console.log(`[MongoDB] db.${this.collectionName}.updateOne({ _id: "${user.id}" }, { $set: { name: "${user.name}", ... } })`);
    }

    async delete(id: string): Promise<void> {
        console.log(`[MongoDB] db.${this.collectionName}.deleteOne({ _id: "${id}" })`);
    }
}
