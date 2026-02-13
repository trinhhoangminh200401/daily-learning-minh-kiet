// ========================================
// APPLICATION LAYER - USE CASE / SERVICE
// Chứa application-specific business logic
// Điều phối giữa Domain entities và Infrastructure
// ========================================

import { Order } from "../../domain/entities/Order";
import { IOrderRepository, IUserRepository, IProductRepository } from "../../domain/repositories";
import { CreateOrderDTO, OrderResponseDTO } from "../dto";

// UUID generator đơn giản
function generateId(): string {
    return Math.random().toString(36).substring(2, 9);
}

export class OrderService {
    // Dependency Injection thông qua constructor
    constructor(
        private readonly orderRepository: IOrderRepository,
        private readonly userRepository: IUserRepository,
        private readonly productRepository: IProductRepository
    ) { }

    async createOrder(dto: CreateOrderDTO): Promise<OrderResponseDTO> {
        // 1. Validate user exists
        const user = await this.userRepository.findById(dto.userId);
        if (!user) {
            throw new Error(`User with id ${dto.userId} not found`);
        }

        // 2. Validate product exists and has stock
        const product = await this.productRepository.findById(dto.productId);
        if (!product) {
            throw new Error(`Product with id ${dto.productId} not found`);
        }

        if (product.stock < dto.quantity) {
            throw new Error(`Insufficient stock. Available: ${product.stock}`);
        }

        // 3. Create order (Domain logic)
        const order = new Order(generateId(), user, product, dto.quantity);

        // 4. Reduce product stock
        product.reduceStock(dto.quantity);
        await this.productRepository.update(product);

        // 5. Save order
        await this.orderRepository.save(order);

        // 6. Return DTO (not Entity!)
        return this.toResponseDTO(order);
    }

    async getOrderById(id: string): Promise<OrderResponseDTO | null> {
        const order = await this.orderRepository.findById(id);
        if (!order) {
            return null;
        }
        return this.toResponseDTO(order);
    }

    async getOrdersByUserId(userId: string): Promise<OrderResponseDTO[]> {
        const orders = await this.orderRepository.findByUserId(userId);
        return orders.map(order => this.toResponseDTO(order));
    }

    async getAllOrders(): Promise<OrderResponseDTO[]> {
        const orders = await this.orderRepository.findAll();
        return orders.map(order => this.toResponseDTO(order));
    }

    async confirmOrder(orderId: string): Promise<OrderResponseDTO> {
        const order = await this.orderRepository.findById(orderId);
        if (!order) {
            throw new Error(`Order with id ${orderId} not found`);
        }

        // Domain logic - state transition
        order.confirm();
        await this.orderRepository.update(order);

        return this.toResponseDTO(order);
    }

    async cancelOrder(orderId: string): Promise<OrderResponseDTO> {
        const order = await this.orderRepository.findById(orderId);
        if (!order) {
            throw new Error(`Order with id ${orderId} not found`);
        }

        // Restore stock when cancelling
        const product = order.product;
        product.addStock(order.quantity);
        await this.productRepository.update(product);

        // Domain logic - state transition
        order.cancel();
        await this.orderRepository.update(order);

        return this.toResponseDTO(order);
    }

    // Private helper: Convert Entity to DTO
    private toResponseDTO(order: Order): OrderResponseDTO {
        return {
            id: order.id,
            userId: order.user.id,
            userName: order.user.name,
            productId: order.product.id,
            productName: order.product.name,
            quantity: order.quantity,
            totalPrice: order.calculateTotal(),
            status: order.status,
            createdAt: order.createdAt.toISOString()
        };
    }
}
