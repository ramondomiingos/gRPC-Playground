import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import implementation from './implementations';
import { connect } from 'mongoose';

const url_mongo = process.env.URL_MONGO || 'localhost';
console.log(url_mongo);
try {
  connect(`mongodb://${url_mongo}:27017/test`);
} catch (e) {
  console.log(e);
}

const packageDefinition = protoLoader.loadSync(
  path.resolve(__dirname, 'pb', 'messages.proto'),
  { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true }
);

const { purchases } = grpc.loadPackageDefinition(packageDefinition) as any;
const server = new grpc.Server();

server.addService(purchases.PurchaseService.service, implementation);
server.bindAsync(
  '0.0.0.0:50052',
  grpc.ServerCredentials.createInsecure(),
  () => {
    server.start();
  }
);

// run().catch((err) => console.log(err));
// console.log(
//   implementation.loginUser(
//     { request: { email: 'bill@initech.com', password: '123' } },
//     console.log
//   )
// );
