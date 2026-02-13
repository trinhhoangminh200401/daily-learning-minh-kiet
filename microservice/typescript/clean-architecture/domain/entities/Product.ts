// ========================================
// DOMAIN LAYER - ENTITY
// ========================================

export class Product {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public price: number,
        public readonly description: string,
        public stock: number = 0
    ) {
        this.validatePrice(price);
        this.validateStock(stock);
    }

    private validatePrice(price: number): void {
        if (price < 0) {
            throw new Error("Price cannot be negative");
        }
    }

    private validateStock(stock: number): void {
        if (stock < 0) {
            throw new Error("Stock cannot be negative");
        }
    }

    public updatePrice(newPrice: number): void {
        this.validatePrice(newPrice);
        this.price = newPrice;
    }

    public addStock(quantity: number): void {
        if (quantity < 0) {
            throw new Error("Cannot add negative stock");
        }
        this.stock += quantity;
    }

    public reduceStock(quantity: number): void {
        if (quantity > this.stock) {
            throw new Error("Insufficient stock");
        }
        this.stock -= quantity;
    }

    public isAvailable(): boolean {
        return this.stock > 0;
    }
}
