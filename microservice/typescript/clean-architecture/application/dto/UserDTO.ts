export interface CreateUserDTO {
    name: string;
    age: number;
    email: string;
    password: string;
}

export interface UserResponseDTO {
    id: string;
    name: string;
    age: number;
    email: string;
    // Không có password! - Security concern
}
