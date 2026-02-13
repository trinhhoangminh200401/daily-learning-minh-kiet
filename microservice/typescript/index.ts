
// cho tôi 1 bài tập kết hợp OOP với typescript chi tiết
// bài tập: 
// 1. Tạo 1 class User với các thuộc tính name, age, email, password
// 2. Tạo 1 class Product với các thuộc tính name, price, description
// 3. Tạo 1 class Order với các thuộc tính user, product, quantity
// 4. Tạo 1 class OrderService với các phương thức addOrder, getOrder, deleteOrder
// 5. Tạo 1 class OrderRepository với các phương thức addOrder, getOrder, deleteOrder
// 6. Tạo 1 class OrderController với các phương thức addOrder, getOrder, deleteOrder
// yêu cầu: chỉ render code khi tôi comment **hãy giúp tôi**
// Không render code
class User {
    private id: string;
    private name: string;
    private age: number;
    private email: string;
    private password: string;
    constructor(id: string, name: string, age: number, email: string, password: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
    }
}

class Product {
    private id: string;
    private name: string;
    private price: number;
    private description: string;
    constructor(id: string, name: string, price: number, description: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

class Order {
    private id: string;
    private user: User;
    private product: Product;
    private quantity: number;
    constructor(id: string, user: User, product: Product, quantity: number) {
        this.id = id;
        this.user = user;
        this.product = product;
        this.quantity = quantity;
    }
}

class OrderService {
    constructor(private orderRepository: OrderRepository) {}
    addOrder(order: Order) {
        this.orderRepository.addOrder(order);
    }
    getOrder(id: string) {
        return this.orderRepository.getOrder(id);
    }
    deleteOrder(id: string) {
        this.orderRepository.deleteOrder(id);
    }
}

interface OrderRepository {
    addOrder(order: Order): void;
    getOrder(id: string): Order | undefined;
    deleteOrder(id: string): void;
}

class OrderController {
    constructor(private orderService: OrderService) {}
    addOrder(order: Order) {
        this.orderService.addOrder(order);
    }
    getOrder(id: string) {
        return this.orderService.getOrder(id);
    }
    deleteOrder(id: string) {
        this.orderService.deleteOrder(id);
    }
}
