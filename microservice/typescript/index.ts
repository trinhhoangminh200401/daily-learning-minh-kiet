/**
 * =========================================================
 * BÀI TẬP ÔN LUYỆN OOP TRONG TYPESCRIPT DÀNH CHO THỰC TẬP SINH
 * =========================================================
 * 
 * Các tính chất cần focus:
 * 1. Encapsulation (Đóng gói)
 * 2. Inheritance (Kế thừa) 
 * 3. Polymorphism (Đa hình)
 * 4. Abstraction (Trừu tượng)
 */

// =====================================================================
// BÀI TẬP 1: QUẢN LÝ NHÂN SỰ (Focus: Đóng gói, Kế thừa, Đa hình)
// =====================================================================
/* 
YÊU CẦU:
1. Tạo class `Employee`:
   - Báo cáo thuộc tính: `id` (readonly), `name` (public), `_salary` (private).
   - Hãy tạo getter/setter cho `salary`. Nếu gán salary < 0 thì ném ra Error.
   - Phương thức: `getRole(): string` (mặc định trả về "Employee").
   - Phương thức: `calculateBonus(): number` (mặc định trả về 10% salary).

2. Tạo class `Manager` kế thừa `Employee`:
   - Thêm thuộc tính: `teamSize: number` (số lượng nhân viên quản lý).
   - Override `getRole()` -> trả về "Manager".
   - Override `calculateBonus()` -> trả về 20% salary + (teamSize * 1000).

3. Tạo class `Developer` kế thừa `Employee`:
   - Thêm thuộc tính `programmingLanguage: string` (vd: "TypeScript").
   - Override `getRole()` -> trả về "Developer".
   - Override `calculateBonus()` -> trả về 15% salary.
*/

// TODO: Viết code Bài tập 1 ở đây
export abstract class User {
    private id: string
    private name: string
    private role: string
    private _salary: number
    constructor(id: string, name: string, role: string, salary: number) {
        this.id = id;
        this.name = name;
        this.role = role;
        this._salary = salary;
    }
    get salary(){
        return this._salary
    }
    set salary(value: number){
        if(value < 0){
            throw new Error("Salary cannot be negative")
        }
        this._salary = value
    }
    getRole(): string {
        return this.role
    }
    abstract calculateBonus(): number
}

// export class Manager ...
class Manager extends User {
    private teamSize: number;
    constructor(id: string, name: string, salary: number, teamSize: number) {
        super(id, name, "Manager", salary);
        this.teamSize = teamSize;
    }
    calculateBonus(): number {
        return this.salary * 0.2 + this.teamSize * 1000;
    }
}

// export class Developer ...
class Developer extends User {
    private programmingLanguage: string;
    constructor(id: string, name: string, salary: number, programmingLanguage: string) {
        super(id, name, "Developer", salary);
        this.programmingLanguage = programmingLanguage;
    }
    calculateBonus(): number {
        return this.salary * 0.15;
    }
}
// =====================================================================
// BÀI TẬP 2: HỆ THỐNG THANH TOÁN (Focus: Trừu tượng, Kế thừa, Đa hình)
// =====================================================================
/*
YÊU CẦU:
1. Tạo một `interface ILogger`:
   - Chứa phương thức: `log(message: string): void`.

2. Tạo `abstract class PaymentGateway` implements `ILogger`:
   - Implement hàm `log` in ra console với prefix "[PaymentGateway]".
   - Chứa phương thức trừu tượng `abstract processPayment(amount: number): boolean`.
   - (Tính trừu tượng báo hiệu rằng Gateway nào cũng phải có quy trình xử lý thanh toán cơ bản).

3. Tạo 2 class `MomoPayment` và `StripePayment` kế thừa `PaymentGateway`:
   - Triển khai cụ thể hàm `processPayment(...)`. In ra log dạng "Processing thanh toán [amount] qua [Momo/Stripe]..." và trả về true.

4. Tạo class `CheckoutService`:
   - Áp dụng Dependency Injection: Constructor nhận vào một `PaymentGateway` bất kỳ.
   - Hàm `checkout(amount: number)` sẽ gọi `processPayment` của gateway đó. 
   - (Ví dụ về tính Đa hình: CheckoutService không cần biết nó đang dùng Momo hay Stripe, chỉ cần biết nó thoả mãn PaymentGateway).
*/

// TODO: Viết code Bài tập 2 ở đây
export interface ILogger {
    log(message: string): void;
}

export abstract class PaymentGateway implements ILogger {
    log(message: string): void {
        console.log(`[PaymentGateway] ${message}`);
    }
    abstract processPayment(amount: number): boolean;
}

// export class MomoPayment ...
class MomoPayment extends PaymentGateway {
    processPayment(amount: number): boolean {
        console.log(`Processing thanh toán ${amount} qua Momo...`);
        return true;
    }
}
// export class StripePayment ...
class StripePayment extends PaymentGateway {
    processPayment(amount: number): boolean {
        console.log(`Processing thanh toán ${amount} qua Stripe...`);
        return true;
    }
}
// export class CheckoutService ...
class CheckoutService {
    constructor(private paymentGateway: PaymentGateway) { }
    checkout(amount: number): void {
        this.paymentGateway.processPayment(amount);
    }
}
// ==== TEST CASES TỰ CHẠY ====
function runTests() {
    const checkoutService = new CheckoutService(new MomoPayment());
    checkoutService.checkout(100000);
    const checkoutService2 = new CheckoutService(new StripePayment());
    checkoutService2.checkout(200000);
}
runTests()