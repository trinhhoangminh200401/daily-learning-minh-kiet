// ========================================
// APPLICATION LAYER - USE CASE / SERVICE
// ========================================

import { Product } from "../../domain/entities/Product";
import { IProductRepository } from "../../domain/repositories";
import { CreateProductDTO, ProductResponseDTO } from "../dto";

function generateId(): string {
    return Math.random().toString(36).substring(2, 9);
}

export class ProductService {
    constructor(private readonly productRepository: IProductRepository) { }

    async createProduct(dto: CreateProductDTO): Promise<ProductResponseDTO> {
        const product = new Product(
            generateId(),
            dto.name,
            dto.price,
            dto.description,
            dto.stock
        );

        await this.productRepository.save(product);

        return this.toResponseDTO(product);
    }

    async getProductById(id: string): Promise<ProductResponseDTO | null> {
        const product = await this.productRepository.findById(id);
        if (!product) {
            return null;
        }
        return this.toResponseDTO(product);
    }

    async getAllProducts(): Promise<ProductResponseDTO[]> {
        const products = await this.productRepository.findAll();
        return products.map(product => this.toResponseDTO(product));
    }

    async searchProducts(name: string): Promise<ProductResponseDTO[]> {
        const products = await this.productRepository.findByName(name);
        return products.map(product => this.toResponseDTO(product));
    }

    async updateStock(id: string, quantity: number): Promise<ProductResponseDTO> {
        const product = await this.productRepository.findById(id);
        if (!product) {
            throw new Error(`Product with id ${id} not found`);
        }

        product.addStock(quantity);
        await this.productRepository.update(product);

        return this.toResponseDTO(product);
    }

    async deleteProduct(id: string): Promise<void> {
        await this.productRepository.delete(id);
    }

    private toResponseDTO(product: Product): ProductResponseDTO {
        return {
            id: product.id,
            name: product.name,
            price: product.price,
            description: product.description,
            stock: product.stock,
            isAvailable: product.isAvailable()
        };
    }
}
