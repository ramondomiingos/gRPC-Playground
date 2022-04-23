# 🛝 gRPC Playground 🛝

## 🎯 Objetivo

Criar uma estrutura simplificada, subdividida em **microserviços** baseado em suas responsabilidades usando **gRPC** para comunicação entre a API (_express_) e o microserviço.

## 👨‍💻 Tecnologias usadas

- TypeScript
- NodeJs
- Express
- MongoDB
- Docker
- gRPC

## Microserviços

### 🐝 API

Api contruida usando Typescript e express, que recebe requisiçoes HTTP, se conecta com os demais microserviços, através de gRPC.

### 🐝 Hidra

O Microseviço responsável para criacao de contas, detalhamento e login, usando JWT. O microseriviço possui toda parte lógica e comunicação com banco de dados, expondo basicamente somente as assinaturas e models para os clients.

### 🐝 Nix

O Microseviço responsável para criacao de compras de um usuário;

🔎 Os nomes dos microserviços foram baseados nos satélites naturais de Plutão. Hidra foi descoberto junto com Nix em junho de 2005.

Para subir somente o mongodb

```shell
docker run -d --name=mongo -p 27017:27017 bitnami/mongodb
```

```mermaid
flowchart LR
graph TD
    A[user] -->|POST /user| B[API]
    B -->|GRPC registerUser| C[Hidra]

    A[user] -->|POST /session| B
    B -->|GRPC loginUser| C[Hidra]

    A[user] -->|GET /user/:id| B[API]
    B -->|GRPC getUserById| C[Hidra]

    A[user] -->|POST /purchase| B[API]
    B -->|GRPC purchase| D[NIX]

    A[user] -->|GET /purchase/id| B[API]
    B -->|GRPC getPurchaseById| D[NIX]

    A[user] -->|GET /purchase| B[API]
    B -->|GRPC listAllPurchaseFromUser| D[NIX]
```
