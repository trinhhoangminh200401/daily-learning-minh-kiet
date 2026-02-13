// ========================================
// COMPOSITION ROOT - DEPENDENCY INJECTION CONTAINER
// Nơi wire up tất cả dependencies
// ========================================

// Infrastructure - Repository Factory
import { RepositoryFactory, DatabaseType } from "./infrastructure/factory";

// Application - Services
import { UserService } from "./application/services/UserService";
import { ProductService } from "./application/services/ProductService";
import { OrderService } from "./application/services/OrderService";

// Presentation - Controllers
import { OrderController } from "./presentation/controllers/OrderController";

// ========================================
// DATABASE CONFIGURATION
// Thay đổi dòng này để chuyển database!
// ========================================
const DATABASE_TYPE: DatabaseType = "in-memory"; // "in-memory" | "postgres" | "mongodb"
const CONNECTION_STRING = "postgresql://user:password@localhost:5432/mydb"; // hoặc mongodb://...

// ========================================
// DEPENDENCY INJECTION SETUP
// ========================================

// 1. Create ALL Repository instances từ Factory (Infrastructure layer)
// Service KHÔNG CẦN BIẾT database nào đang được sử dụng!
const repositories = RepositoryFactory.create({
    type: DATABASE_TYPE,
    connectionString: CONNECTION_STRING
});

// Destructure để dễ sử dụng
const { userRepository, productRepository, orderRepository } = repositories;

// 2. Create Service instances với DI (Application layer)
const userService = new UserService(userRepository);
const productService = new ProductService(productRepository);
const orderService = new OrderService(
    orderRepository,
    userRepository,
    productRepository
);

// 3. Create Controller instances với DI (Presentation layer)
const orderController = new OrderController(orderService);

// ========================================
// DEMO: Chạy thử hệ thống
// ========================================

async function demo() {
    console.log("🚀 Clean Architecture Demo\n");
    console.log("=".repeat(50));

    // Step 1: Tạo User
    console.log("\n📝 Step 1: Creating Users...");
    const user1 = await userService.createUser({
        name: "Nguyen Van A",
        age: 25,
        email: "nguyenvana@email.com",
        password: "password123"
    });
    console.log("✅ User created:", user1);

    const user2 = await userService.createUser({
        name: "Tran Thi B",
        age: 30,
        email: "tranthib@email.com",
        password: "password456"
    });
    console.log("✅ User created:", user2);

    // Step 2: Tạo Product
    console.log("\n📦 Step 2: Creating Products...");
    const product1 = await productService.createProduct({
        name: "iPhone 15 Pro",
        price: 25000000,
        description: "Apple iPhone 15 Pro 256GB",
        stock: 10
    });
    console.log("✅ Product created:", product1);

    const product2 = await productService.createProduct({
        name: "MacBook Pro M3",
        price: 55000000,
        description: "Apple MacBook Pro 14 inch M3 chip",
        stock: 5
    });
    console.log("✅ Product created:", product2);

    // Step 3: Tạo Order thông qua Controller
    console.log("\n🛒 Step 3: Creating Orders via Controller...");

    const createOrderResponse = await orderController.createOrder({
        body: {
            userId: user1.id,
            productId: product1.id,
            quantity: 2
        }
    });
    console.log("📨 HTTP Response:", JSON.stringify(createOrderResponse, null, 2));

    // Step 4: Lấy tất cả orders
    console.log("\n📋 Step 4: Get All Orders...");
    const allOrdersResponse = await orderController.getAllOrders({});
    console.log("📨 HTTP Response:", JSON.stringify(allOrdersResponse, null, 2));

    // Step 5: Confirm order
    if (createOrderResponse.body.data) {
        console.log("\n✔️ Step 5: Confirm Order...");
        const confirmResponse = await orderController.confirmOrder({
            params: { id: createOrderResponse.body.data.id }
        });
        console.log("📨 HTTP Response:", JSON.stringify(confirmResponse, null, 2));
    }

    // Step 6: Check product stock after order
    console.log("\n📊 Step 6: Check Product Stock After Order...");
    const updatedProduct = await productService.getProductById(product1.id);
    console.log("Product stock after order:", updatedProduct);

    // Step 7: Test error handling
    console.log("\n❌ Step 7: Test Error Handling (insufficient stock)...");
    const errorResponse = await orderController.createOrder({
        body: {
            userId: user1.id,
            productId: product1.id,
            quantity: 999 // More than available stock
        }
    });
    console.log("📨 HTTP Response:", JSON.stringify(errorResponse, null, 2));

    console.log("\n" + "=".repeat(50));
    console.log("🎉 Demo completed!");
}

// Run demo
demo().catch(console.error);
