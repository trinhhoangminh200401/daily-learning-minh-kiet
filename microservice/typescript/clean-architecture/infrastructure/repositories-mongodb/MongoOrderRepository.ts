// ========================================
// INFRASTRUCTURE LAYER - MongoDB Repository Implementation
// ========================================

import { Order } from "../../domain/entities/Order";
import { IOrderRepository } from "../../domain/repositories";

export class MongoOrderRepository implements IOrderRepository {
    private connectionUri: string;
    private collectionName: string = "orders";

    constructor(connectionUri: string = "mongodb://localhost:27017/mydb") {
        this.connectionUri = connectionUri;
        console.log(`[MongoDB] Order repository connected to: ${this.connectionUri}`);
    }

    async findById(id: string): Promise<Order | null> {
        console.log(`[MongoDB] db.${this.collectionName}.aggregate([
            { $match: { _id: "${id}" } },
            { $lookup: { from: "users", localField: "userId", foreignField: "_id", as: "user" } },
            { $lookup: { from: "products", localField: "productId", foreignField: "_id", as: "product" } }
        ])`);
        return null;
    }

    async findByUserId(userId: string): Promise<Order[]> {
        console.log(`[MongoDB] db.${this.collectionName}.find({ userId: "${userId}" })`);
        return [];
    }

    async findAll(): Promise<Order[]> {
        console.log(`[MongoDB] db.${this.collectionName}.find({})`);
        return [];
    }

    async save(order: Order): Promise<void> {
        console.log(`[MongoDB] db.${this.collectionName}.insertOne({ 
            _id: "${order.id}", 
            userId: "${order.user.id}", 
            productId: "${order.product.id}", 
            quantity: ${order.quantity}, 
            status: "${order.status}" 
        })`);
    }

    async update(order: Order): Promise<void> {
        console.log(`[MongoDB] db.${this.collectionName}.updateOne(
            { _id: "${order.id}" }, 
            { $set: { status: "${order.status}" } }
        )`);
    }

    async delete(id: string): Promise<void> {
        console.log(`[MongoDB] db.${this.collectionName}.deleteOne({ _id: "${id}" })`);
    }
}
