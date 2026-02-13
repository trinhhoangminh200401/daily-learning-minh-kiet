// ========================================
// PRESENTATION LAYER - CONTROLLER
// Nhận request từ client, gọi Service, trả response
// KHÔNG chứa business logic!
// ========================================

import { OrderService } from "../../application/services/OrderService";
import { CreateOrderDTO } from "../../application/dto/OrderDTO";

// Giả lập HTTP Request/Response
interface HttpRequest {
    body?: any;
    params?: { [key: string]: string };
    query?: { [key: string]: string };
}

interface HttpResponse {
    statusCode: number;
    body: any;
}

export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    async createOrder(request: HttpRequest): Promise<HttpResponse> {
        try {
            const dto: CreateOrderDTO = {
                userId: request.body.userId,
                productId: request.body.productId,
                quantity: request.body.quantity
            };

            const order = await this.orderService.createOrder(dto);

            return {
                statusCode: 201,
                body: {
                    success: true,
                    message: "Order created successfully",
                    data: order
                }
            };
        } catch (error: any) {
            return {
                statusCode: 400,
                body: {
                    success: false,
                    message: error.message
                }
            };
        }
    }

    async getOrder(request: HttpRequest): Promise<HttpResponse> {
        try {
            const orderId = request.params?.id;
            if (!orderId) {
                return {
                    statusCode: 400,
                    body: { success: false, message: "Order ID is required" }
                };
            }

            const order = await this.orderService.getOrderById(orderId);

            if (!order) {
                return {
                    statusCode: 404,
                    body: { success: false, message: "Order not found" }
                };
            }

            return {
                statusCode: 200,
                body: { success: true, data: order }
            };
        } catch (error: any) {
            return {
                statusCode: 500,
                body: { success: false, message: error.message }
            };
        }
    }

    async getAllOrders(_request: HttpRequest): Promise<HttpResponse> {
        try {
            const orders = await this.orderService.getAllOrders();

            return {
                statusCode: 200,
                body: {
                    success: true,
                    data: orders,
                    count: orders.length
                }
            };
        } catch (error: any) {
            return {
                statusCode: 500,
                body: { success: false, message: error.message }
            };
        }
    }

    async confirmOrder(request: HttpRequest): Promise<HttpResponse> {
        try {
            const orderId = request.params?.id;
            if (!orderId) {
                return {
                    statusCode: 400,
                    body: { success: false, message: "Order ID is required" }
                };
            }

            const order = await this.orderService.confirmOrder(orderId);

            return {
                statusCode: 200,
                body: {
                    success: true,
                    message: "Order confirmed",
                    data: order
                }
            };
        } catch (error: any) {
            return {
                statusCode: 400,
                body: { success: false, message: error.message }
            };
        }
    }

    async cancelOrder(request: HttpRequest): Promise<HttpResponse> {
        try {
            const orderId = request.params?.id;
            if (!orderId) {
                return {
                    statusCode: 400,
                    body: { success: false, message: "Order ID is required" }
                };
            }

            const order = await this.orderService.cancelOrder(orderId);

            return {
                statusCode: 200,
                body: {
                    success: true,
                    message: "Order cancelled",
                    data: order
                }
            };
        } catch (error: any) {
            return {
                statusCode: 400,
                body: { success: false, message: error.message }
            };
        }
    }
}
