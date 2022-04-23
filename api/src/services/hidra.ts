import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

const packageDefinition = protoLoader.loadSync(
  path.resolve(__dirname, '../pb', 'hidra.proto'),
  { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true }
);

const users = grpc.loadPackageDefinition(packageDefinition) as any;

const hidraClient = new users.users.UserService(
  '0.0.0.0:50051',
  grpc.credentials.createInsecure()
);
export default hidraClient;
