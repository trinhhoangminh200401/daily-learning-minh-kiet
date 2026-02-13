// ========================================
// INFRASTRUCTURE LAYER - PostgreSQL Repository Implementation
// ========================================

import { Product } from "../../domain/entities/Product";
import { IProductRepository } from "../../domain/repositories";

export class PostgresProductRepository implements IProductRepository {
    private connectionString: string;

    constructor(connectionString: string = "postgresql://localhost:5432/mydb") {
        this.connectionString = connectionString;
        console.log(`[PostgreSQL] Product repository connected to: ${this.connectionString}`);
    }

    async findById(id: string): Promise<Product | null> {
        console.log(`[PostgreSQL] SELECT * FROM products WHERE id = '${id}'`);
        return null;
    }

    async findAll(): Promise<Product[]> {
        console.log(`[PostgreSQL] SELECT * FROM products`);
        return [];
    }

    async findByName(name: string): Promise<Product[]> {
        console.log(`[PostgreSQL] SELECT * FROM products WHERE name ILIKE '%${name}%'`);
        return [];
    }

    async save(product: Product): Promise<void> {
        console.log(`[PostgreSQL] INSERT INTO products VALUES ('${product.id}', '${product.name}', ${product.price}, '${product.description}', ${product.stock})`);
    }

    async update(product: Product): Promise<void> {
        console.log(`[PostgreSQL] UPDATE products SET name = '${product.name}', price = ${product.price}, stock = ${product.stock} WHERE id = '${product.id}'`);
    }

    async delete(id: string): Promise<void> {
        console.log(`[PostgreSQL] DELETE FROM products WHERE id = '${id}'`);
    }
}
