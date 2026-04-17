# Summary

- Built following Clean Architecture and Domain-Driven Design (DDD) principles, with clear separation into Domain, Application, Infrastructure, and Ports/Adapters layers.
- Modular monolithic architecture: each business context is organized as a set of independent modules within the same codebase.
- Uses a single transactional database, implementing schema-per-context separation to achieve data isolation between modules.
- Supports transactions, ensuring data integrity and consistency in multi-module operations.
- No joins are used between schemas/contexts, avoiding tight coupling between tables and enabling future evolution towards microservices.
- Includes an in-memory event bus implementation to facilitate communication and propagation of domain events between modules.
- Designed for maintainability, scalability, and testability, making the system easy to evolve and extend.
