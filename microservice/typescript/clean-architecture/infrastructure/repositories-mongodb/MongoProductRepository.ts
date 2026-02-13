// ========================================
// INFRASTRUCTURE LAYER - MongoDB Repository Implementation
// ========================================

import { Product } from "../../domain/entities/Product";
import { IProductRepository } from "../../domain/repositories";

export class MongoProductRepository implements IProductRepository {
    private connectionUri: string;
    private collectionName: string = "products";

    constructor(connectionUri: string = "mongodb://localhost:27017/mydb") {
        this.connectionUri = connectionUri;
        console.log(`[MongoDB] Product repository connected to: ${this.connectionUri}`);
    }

    async findById(id: string): Promise<Product | null> {
        console.log(`[MongoDB] db.${this.collectionName}.findOne({ _id: "${id}" })`);
        return null;
    }

    async findAll(): Promise<Product[]> {
        console.log(`[MongoDB] db.${this.collectionName}.find({})`);
        return [];
    }

    async findByName(name: string): Promise<Product[]> {
        console.log(`[MongoDB] db.${this.collectionName}.find({ name: { $regex: "${name}", $options: "i" } })`);
        return [];
    }

    async save(product: Product): Promise<void> {
        console.log(`[MongoDB] db.${this.collectionName}.insertOne({ _id: "${product.id}", name: "${product.name}", ... })`);
    }

    async update(product: Product): Promise<void> {
        console.log(`[MongoDB] db.${this.collectionName}.updateOne({ _id: "${product.id}" }, { $set: { ... } })`);
    }

    async delete(id: string): Promise<void> {
        console.log(`[MongoDB] db.${this.collectionName}.deleteOne({ _id: "${id}" })`);
    }
}
