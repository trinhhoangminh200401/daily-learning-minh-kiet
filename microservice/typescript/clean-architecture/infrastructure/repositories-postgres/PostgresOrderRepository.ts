// ========================================
// INFRASTRUCTURE LAYER - PostgreSQL Repository Implementation
// ========================================

import { Order } from "../../domain/entities/Order";
import { IOrderRepository } from "../../domain/repositories";

export class PostgresOrderRepository implements IOrderRepository {
    private connectionString: string;

    constructor(connectionString: string = "postgresql://localhost:5432/mydb") {
        this.connectionString = connectionString;
        console.log(`[PostgreSQL] Order repository connected to: ${this.connectionString}`);
    }

    async findById(id: string): Promise<Order | null> {
        console.log(`[PostgreSQL] SELECT o.*, u.*, p.* FROM orders o 
            JOIN users u ON o.user_id = u.id 
            JOIN products p ON o.product_id = p.id 
            WHERE o.id = '${id}'`);
        return null;
    }

    async findByUserId(userId: string): Promise<Order[]> {
        console.log(`[PostgreSQL] SELECT o.*, u.*, p.* FROM orders o 
            JOIN users u ON o.user_id = u.id 
            JOIN products p ON o.product_id = p.id 
            WHERE o.user_id = '${userId}'`);
        return [];
    }

    async findAll(): Promise<Order[]> {
        console.log(`[PostgreSQL] SELECT o.*, u.*, p.* FROM orders o 
            JOIN users u ON o.user_id = u.id 
            JOIN products p ON o.product_id = p.id`);
        return [];
    }

    async save(order: Order): Promise<void> {
        console.log(`[PostgreSQL] INSERT INTO orders (id, user_id, product_id, quantity, status, created_at) 
            VALUES ('${order.id}', '${order.user.id}', '${order.product.id}', ${order.quantity}, '${order.status}', NOW())`);
    }

    async update(order: Order): Promise<void> {
        console.log(`[PostgreSQL] UPDATE orders SET status = '${order.status}' WHERE id = '${order.id}'`);
    }

    async delete(id: string): Promise<void> {
        console.log(`[PostgreSQL] DELETE FROM orders WHERE id = '${id}'`);
    }
}
