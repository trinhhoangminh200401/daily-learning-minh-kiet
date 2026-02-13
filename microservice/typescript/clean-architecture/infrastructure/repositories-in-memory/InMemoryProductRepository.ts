// ========================================
// INFRASTRUCTURE LAYER - In-Memory Repository Implementation
// ========================================

import { Product } from "../../domain/entities/Product";
import { IProductRepository } from "../../domain/repositories";

export class InMemoryProductRepository implements IProductRepository {
    private products: Map<string, Product> = new Map();

    async findById(id: string): Promise<Product | null> {
        return this.products.get(id) || null;
    }

    async findAll(): Promise<Product[]> {
        return Array.from(this.products.values());
    }

    async findByName(name: string): Promise<Product[]> {
        const results: Product[] = [];
        for (const product of this.products.values()) {
            if (product.name.toLowerCase().includes(name.toLowerCase())) {
                results.push(product);
            }
        }
        return results;
    }

    async save(product: Product): Promise<void> {
        this.products.set(product.id, product);
    }

    async update(product: Product): Promise<void> {
        if (!this.products.has(product.id)) {
            throw new Error(`Product with id ${product.id} not found`);
        }
        this.products.set(product.id, product);
    }

    async delete(id: string): Promise<void> {
        if (!this.products.has(id)) {
            throw new Error(`Product with id ${id} not found`);
        }
        this.products.delete(id);
    }
}
