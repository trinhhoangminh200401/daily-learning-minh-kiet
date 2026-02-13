// ========================================
// INFRASTRUCTURE LAYER - In-Memory Repository Implementation
// ========================================

import { Order } from "../../domain/entities/Order";
import { IOrderRepository } from "../../domain/repositories";

export class InMemoryOrderRepository implements IOrderRepository {
    private orders: Map<string, Order> = new Map();

    async findById(id: string): Promise<Order | null> {
        return this.orders.get(id) || null;
    }

    async findByUserId(userId: string): Promise<Order[]> {
        const results: Order[] = [];
        for (const order of this.orders.values()) {
            if (order.user.id === userId) {
                results.push(order);
            }
        }
        return results;
    }

    async findAll(): Promise<Order[]> {
        return Array.from(this.orders.values());
    }

    async save(order: Order): Promise<void> {
        this.orders.set(order.id, order);
    }

    async update(order: Order): Promise<void> {
        if (!this.orders.has(order.id)) {
            throw new Error(`Order with id ${order.id} not found`);
        }
        this.orders.set(order.id, order);
    }

    async delete(id: string): Promise<void> {
        if (!this.orders.has(id)) {
            throw new Error(`Order with id ${id} not found`);
        }
        this.orders.delete(id);
    }
}
