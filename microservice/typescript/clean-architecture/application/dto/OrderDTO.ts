// ========================================
// APPLICATION LAYER - DTOs (Data Transfer Objects)
// DTOs dùng để transfer data giữa các layers
// Tách biệt Domain Entity khỏi external representation
// ========================================

export interface CreateOrderDTO {
    userId: string;
    productId: string;
    quantity: number;
}

export interface OrderResponseDTO {
    id: string;
    userId: string;
    userName: string;
    productId: string;
    productName: string;
    quantity: number;
    totalPrice: number;
    status: string;
    createdAt: string;
}