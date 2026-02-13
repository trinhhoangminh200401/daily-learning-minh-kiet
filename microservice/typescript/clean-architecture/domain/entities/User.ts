// ========================================
// DOMAIN LAYER - ENTITY
// Đây là lớp core business, KHÔNG phụ thuộc vào bất kỳ layer nào khác
// ========================================

export class User {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly age: number,
        public readonly email: string,
        private password: string
    ) {
        this.validateEmail(email);
        this.validateAge(age);
    }

    // Business logic nằm trong Entity
    private validateEmail(email: string): void {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error("Invalid email format");
        }
    }

    private validateAge(age: number): void {
        if (age < 0 || age > 150) {
            throw new Error("Invalid age");
        }
    }

    // Không expose password trực tiếp
    public checkPassword(inputPassword: string): boolean {
        return this.password === inputPassword;
    }

    public updatePassword(newPassword: string): void {
        if (newPassword.length < 6) {
            throw new Error("Password must be at least 6 characters");
        }
        this.password = newPassword;
    }
}
