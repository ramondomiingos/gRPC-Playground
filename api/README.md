```
sequenceDiagram
User->>API: POST /user
API->>Hidra: gRPC registerUser
Hidra-->>API : UserResponse

User->>API: POST /session
API->>Hidra: gRPC loginUser
Hidra-->>API : LoginUserResponse

User->>API: GET /user/:id
API->>Hidra: gRPC getUserById
Hidra-->>API : UserResponse


User->>API: POST /purchase
API->>NIX: gRPC registerUser
NIX-->>API : PurchaseResponse

User->>API: GET /purchase
API->>NIX: gRPC listAllPurchaseFromUser
NIX-->>API : ListPurchasesResponse


User->>API: GET /purchase/:id
API->>NIX: gRPC getPurchaseById
NIX-->>API : ListPurchasesResponse


```
