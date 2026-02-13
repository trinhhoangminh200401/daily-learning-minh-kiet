// ========================================
// DOMAIN LAYER - ENTITY
// ========================================

import { User } from "./User";
import { Product } from "./Product";

export enum OrderStatus {
    PENDING = "PENDING",
    CONFIRMED = "CONFIRMED",
    SHIPPED = "SHIPPED",
    DELIVERED = "DELIVERED",
    CANCELLED = "CANCELLED"
}

export class Order {
    public status: OrderStatus = OrderStatus.PENDING;
    public readonly createdAt: Date = new Date();

    constructor(
        public readonly id: string,
        public readonly user: User,
        public readonly product: Product,
        public readonly quantity: number
    ) {
        this.validateQuantity(quantity);
    }

    private validateQuantity(quantity: number): void {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than 0");
        }
    }

    // Business logic: Tính tổng tiền
    public calculateTotal(): number {
        return this.product.price * this.quantity;
    }

    // State machine cho Order status
    public confirm(): void {
        if (this.status !== OrderStatus.PENDING) {
            throw new Error("Only pending orders can be confirmed");
        }
        this.status = OrderStatus.CONFIRMED;
    }

    public ship(): void {
        if (this.status !== OrderStatus.CONFIRMED) {
            throw new Error("Only confirmed orders can be shipped");
        }
        this.status = OrderStatus.SHIPPED;
    }

    public deliver(): void {
        if (this.status !== OrderStatus.SHIPPED) {
            throw new Error("Only shipped orders can be delivered");
        }
        this.status = OrderStatus.DELIVERED;
    }

    public cancel(): void {
        if (this.status === OrderStatus.DELIVERED) {
            throw new Error("Cannot cancel delivered orders");
        }
        this.status = OrderStatus.CANCELLED;
    }
}
