// ========================================
// DOMAIN LAYER - REPOSITORY INTERFACE
// ========================================

import { Order } from "../entities";

export interface IOrderRepository {
    findById(id: string): Promise<Order | null>;
    findByUserId(userId: string): Promise<Order[]>;
    findAll(): Promise<Order[]>;
    save(order: Order): Promise<void>;
    update(order: Order): Promise<void>;
    delete(id: string): Promise<void>;
}
