// ========================================
// DOMAIN LAYER - REPOSITORY INTERFACE
// ========================================

import { Product } from "../entities";

export interface IProductRepository {
    findById(id: string): Promise<Product | null>;
    findAll(): Promise<Product[]>;
    findByName(name: string): Promise<Product[]>;
    save(product: Product): Promise<void>;
    update(product: Product): Promise<void>;
    delete(id: string): Promise<void>;
}
