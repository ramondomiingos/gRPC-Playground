import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
const URL_NIX = process.env.URL_NIX || '0.0.0.0';
const packageDefinition = protoLoader.loadSync(
  path.resolve(__dirname, '../pb', 'nix.proto'),
  { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true }
);

const users = grpc.loadPackageDefinition(packageDefinition) as any;

const nixClient = new users.users.UserService(
  `${URL_NIX}:50052`,
  grpc.credentials.createInsecure()
);
export default nixClient;
