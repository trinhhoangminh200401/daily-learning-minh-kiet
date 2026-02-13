// ========================================
// APPLICATION LAYER - USE CASE / SERVICE
// ========================================

import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/repositories";
import { CreateUserDTO, UserResponseDTO } from "../dto";

function generateId(): string {
    return Math.random().toString(36).substring(2, 9);
}

export class UserService {
    constructor(private readonly userRepository: IUserRepository) { }

    async createUser(dto: CreateUserDTO): Promise<UserResponseDTO> {
        // Check if email already exists
        const existingUser = await this.userRepository.findByEmail(dto.email);
        if (existingUser) {
            throw new Error(`User with email ${dto.email} already exists`);
        }

        // Create user entity (validation happens in Entity)
        const user = new User(
            generateId(),
            dto.name,
            dto.age,
            dto.email,
            dto.password
        );

        await this.userRepository.save(user);

        return this.toResponseDTO(user);
    }

    async getUserById(id: string): Promise<UserResponseDTO | null> {
        const user = await this.userRepository.findById(id);
        if (!user) {
            return null;
        }
        return this.toResponseDTO(user);
    }

    async getAllUsers(): Promise<UserResponseDTO[]> {
        const users = await this.userRepository.findAll();
        return users.map(user => this.toResponseDTO(user));
    }

    async deleteUser(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }

    // Convert Entity to DTO (hide password!)
    private toResponseDTO(user: User): UserResponseDTO {
        return {
            id: user.id,
            name: user.name,
            age: user.age,
            email: user.email
            // NO PASSWORD HERE - Security!
        };
    }
}
