import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
const URL_HIDRA = process.env.URL_HIDRA || '0.0.0.0';
const packageDefinition = protoLoader.loadSync(
  path.resolve(__dirname, '../pb', 'hidra.proto'),
  { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true }
);

const users = grpc.loadPackageDefinition(packageDefinition) as any;

const hidraClient = new users.users.UserService(
  `${URL_HIDRA}:50051`,
  grpc.credentials.createInsecure()
);
export default hidraClient;
