# 🚀 Microservice Learning Roadmap

> **Mục tiêu:** Xây dựng hệ thống microservice với TypeScript, Next.js, Node.js, MongoDB, PostgreSQL, Redis
> **Level:** Fresher → Junior → Middle

---

## 📋 Tổng quan dự án

Xây dựng một hệ thống **Microservice Product Management** với:
- **MongoDB**: Lưu trữ thông tin người dùng
- **PostgreSQL**: Lưu trữ thông tin sản phẩm
- **Redis**: Lưu trữ session/cache
- **Frontend**: Next.js + Tailwind CSS
- **Backend**: Node.js + Express/NestJS

---

## 🎯 PHASE 1: FRESHER LEVEL (Tuần 1-4)

### 1.1 Setup môi trường & Git cơ bản
- [ ] **Cài đặt môi trường làm việc**
  - [x] Cài Node.js (v18+) và npm/yarn
  - [x] Cài Docker Desktop
  - [x] Cài Git
  - [x] Cài VS Code + extensions (Prettier, ESLint, GitLens)
  
- [ ] **Học Git cơ bản**
  - [x] Các lệnh: `git init`, `git add`, `git commit`, `git push`, `git pull`
  - [x] Conventional Commits: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`
  - [x] Tạo `.gitignore` chuẩn cho Node.js project
  - [x] Tạo branch: `main`, `develop`, `feature/*`

### 1.2 TypeScript cơ bản
- [ ] **Học TypeScript fundamentals**
  - [x] Types: `string`, `number`, `boolean`, `array`, `object`
  - [x] Interface vs Type
  - [x] Generic types `<T>`
  - [ ] Enum và Union types
  - [x] `tsconfig.json` cơ bản

### 1.3 Database cơ bản
- [ ] **MongoDB cơ bản**
  - [ ] Docker compose cho MongoDB
  - [ ] MongoDB Compass để xem data
  - [ ] CRUD operations với Mongoose
  - [ ] Schema design cho User collection
  
- [ ] **PostgreSQL cơ bản**
  - [ ] Docker compose cho PostgreSQL
  - [ ] PgAdmin để xem data
  - [ ] CRUD operations với Prisma
  - [ ] Schema design cho Product table

### 1.4 API Design cơ bản
- [ ] **RESTful API basics**
  - [ ] HTTP Methods: `GET`, `POST`, `PUT`, `DELETE`
  - [ ] Status codes: `200`, `201`, `204`, `400`, `401`, `403`, `404`, `500`
  - [ ] Request/Response format: JSON
  - [ ] Thiết kế endpoints cơ bản cho User và Product

---

## 🎯 PHASE 2: JUNIOR LEVEL (Tuần 5-10)

### 2.1 Backend Architecture
- [ ] **Project structure chuẩn**
  ```
  backend/
  ├── src/
  │   ├── controllers/
  │   ├── services/
  │   ├── models/
  │   ├── routes/
  │   ├── middlewares/
  │   ├── utils/
  │   └── config/
  ├── tests/
  ├── docker-compose.yml
  └── package.json
  ```

- [ ] **Implement User Service (MongoDB)**
  - [ ] User model với Mongoose
  - [ ] UserController với CRUD
  - [ ] UserService layer
  - [ ] Validation với Zod/Joi

- [ ] **Implement Product Service (PostgreSQL)**
  - [ ] Product model với Prisma
  - [ ] ProductController với CRUD
  - [ ] ProductService layer
  - [ ] Pagination, filtering, sorting

### 2.2 Authentication & Authorization
- [ ] **JWT Authentication**
  - [ ] Đăng ký user (hash password với bcrypt)
  - [ ] Đăng nhập và tạo JWT token
  - [ ] Access Token (15 phút) + Refresh Token (7 ngày)
  - [ ] Middleware xác thực token

- [ ] **Authorization (Phân quyền)**
  - [ ] Role-based: `admin`, `user`
  - [ ] Admin: CRUD tất cả users và products
  - [ ] User: Chỉ CRUD products của mình
  - [ ] Middleware kiểm tra quyền

### 2.3 Error Handling
- [ ] **Global Error Handler**
  - [ ] Custom Error class
  - [ ] Error response format thống nhất
  ```json
  {
    "success": false,
    "error": {
      "code": "VALIDATION_ERROR",
      "message": "Email is invalid",
      "statusCode": 400
    }
  }
  ```
  - [ ] Async error wrapper
  - [ ] Validation errors

### 2.4 Redis Cache
- [ ] **Setup Redis**
  - [ ] Docker compose cho Redis
  - [ ] Redis client với `ioredis`
  
- [ ] **Caching strategy**
  - [ ] Cache user session
  - [ ] Cache product list (TTL 5 phút)
  - [ ] Cache invalidation khi update

### 2.5 Testing cơ bản
- [ ] **Unit Tests với Jest**
  - [ ] Test UserService
  - [ ] Test ProductService
  - [ ] Mock database calls

- [ ] **Integration Tests**
  - [ ] Test API endpoints với Supertest
  - [ ] Test database operations

### 2.6 Comment & Documentation
- [ ] **Code Comments chuẩn**
  - [ ] JSDoc cho functions
  - [ ] Inline comments cho logic phức tạp
  ```typescript
  /**
   * Tạo mới user
   * @param userData - Thông tin user cần tạo
   * @returns User đã được tạo
   * @throws ValidationError nếu email đã tồn tại
   */
  async createUser(userData: CreateUserDto): Promise<User> { ... }
  ```

- [ ] **API Documentation**
  - [ ] Swagger/OpenAPI
  - [ ] README.md cho mỗi service

---

## 🎯 PHASE 3: MIDDLE LEVEL (Tuần 11-16)

### 3.1 OOP & SOLID Principles
- [ ] **Single Responsibility Principle (SRP)**
  - [ ] Mỗi class chỉ làm 1 việc
  - [ ] Tách Controller, Service, Repository

- [ ] **Open/Closed Principle (OCP)**
  - [ ] Mở rộng thông qua interface
  - [ ] Không sửa code cũ khi thêm tính năng

- [ ] **Liskov Substitution Principle (LSP)**
  - [ ] Subclass có thể thay thế superclass

- [ ] **Interface Segregation Principle (ISP)**
  - [ ] Tách nhỏ interface

- [ ] **Dependency Inversion Principle (DIP)**
  - [ ] Phụ thuộc vào abstraction, không phải implementation

### 3.2 Design Patterns
- [ ] **Repository Pattern**
  - [ ] Abstract data access layer
  - [ ] UserRepository, ProductRepository

- [ ] **Factory Pattern**
  - [ ] Tạo database connection

- [ ] **Singleton Pattern**
  - [ ] Database instance

- [ ] **Strategy Pattern**
  - [ ] Auth strategies (JWT, OAuth)

### 3.3 Microservice Architecture
- [ ] **Service Discovery**
  - [ ] Mỗi service chạy độc lập
  - [ ] Service-to-service communication
  
- [ ] **API Gateway**
  - [ ] Routing requests
  - [ ] Rate limiting
  - [ ] Load balancing

- [ ] **Docker Compose full stack**
  ```yaml
  services:
    user-service:
      build: ./user-service
      ports: ["3001:3001"]
    product-service:
      build: ./product-service
      ports: ["3002:3002"]
    api-gateway:
      build: ./api-gateway
      ports: ["3000:3000"]
    mongodb:
      image: mongo:6
    postgres:
      image: postgres:15
    redis:
      image: redis:7
  ```

### 3.4 Frontend với Next.js
- [ ] **Setup Next.js + Tailwind**
  - [ ] Next.js 14 với App Router
  - [ ] Tailwind CSS configuration
  - [ ] Layout component

- [ ] **Authentication UI**
  - [ ] Login page
  - [ ] Register page
  - [ ] Protected routes

- [ ] **User Management (Admin)**
  - [ ] User list với pagination
  - [ ] User detail/edit
  - [ ] Delete user

- [ ] **Product Management**
  - [ ] Product list với filtering/sorting
  - [ ] Add/Edit product form
  - [ ] Delete product

### 3.5 Advanced Features
- [ ] **OAuth Integration**
  - [ ] Google OAuth
  - [ ] Social login flow

- [ ] **File Upload**
  - [ ] Product images
  - [ ] User avatar

- [ ] **Real-time notifications**
  - [ ] WebSocket hoặc Server-Sent Events

### 3.6 DevOps Basics
- [ ] **Docker**
  - [ ] Dockerfile cho mỗi service
  - [ ] Multi-stage builds
  - [ ] Docker Compose cho development

- [ ] **CI/CD với GitLab**
  - [ ] `.gitlab-ci.yml`
  - [ ] Stages: lint, test, build, deploy
  - [ ] Environment variables

- [ ] **Environment Management**
  - [ ] `.env.development`, `.env.production`
  - [ ] Config validation

---

## 📁 Cấu trúc thư mục cuối cùng

```
microservice/
├── api-gateway/          # API Gateway (routing, auth)
├── user-service/         # User Service (MongoDB)
├── product-service/      # Product Service (PostgreSQL)
├── frontend/            # Next.js Frontend
├── shared/              # Shared types, utils
├── docker-compose.yml   # Full stack docker
├── docker-compose.dev.yml
├── requirements.md
└── readme.md
```

---

## 📚 Tài liệu tham khảo

### TypeScript & Node.js
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

### Database
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [Prisma Documentation](https://www.prisma.io/docs/)

### Authentication
- [JWT.io](https://jwt.io/)
- [Passport.js](http://www.passportjs.org/)

### Testing
- [Jest Documentation](https://jestjs.io/docs/getting-started)

### DevOps
- [Docker Documentation](https://docs.docker.com/)
- [GitLab CI/CD](https://docs.gitlab.com/ee/ci/)

---

## ✅ Đánh giá tiến độ

| Phase | Level | Thời gian | Trạng thái |
|-------|-------|-----------|------------|
| Phase 1 | Fresher | Tuần 1-4 | ⬜ Chưa bắt đầu |
| Phase 2 | Junior | Tuần 5-10 | ⬜ Chưa bắt đầu |
| Phase 3 | Middle | Tuần 11-16 | ⬜ Chưa bắt đầu |

---

> 💡 **Tip:** Sau khi hoàn thành mỗi phase, hãy review lại code và refactor nếu cần. Học từ mistakes và improve dần dần!

