// ========================================
// DOMAIN LAYER - REPOSITORY INTERFACE
// Định nghĩa contract, KHÔNG chứa implementation
// Infrastructure layer sẽ implement interface này
// ========================================

import { User } from "../entities";

export interface IUserRepository {
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    save(user: User): Promise<void>;
    update(user: User): Promise<void>;
    delete(id: string): Promise<void>;
}
