export interface CreateProductDTO {
    name: string;
    price: number;
    description: string;
    stock: number;
}

export interface ProductResponseDTO {
    id: string;
    name: string;
    price: number;
    description: string;
    stock: number;
    isAvailable: boolean;
}