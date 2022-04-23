import { Schema, model, connect, Model, ObjectId } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
interface IUser {
  id: ObjectId;
  username: String;
  email: String;
  password: string;
  compareHash(hash: string): boolean;
}
interface IUserDocumento extends Model<IUser> {
  generateToken(user: IUser): string;
}
const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: false },
});
userSchema.pre('save', async function hashPassword(next) {
  if (!this.isModified('password')) next();
  this.password = await bcrypt.hash(this.password, 8);
});

userSchema.methods.compareHash = function (hash: string) {
  return bcrypt.compare(hash, this.password);
};

userSchema.statics.generateToken = function ({ id }): string {
  return jwt.sign({ id }, 'sua chave secreta :)', {
    expiresIn: 86400,
  });
};

export const User = model<IUser, IUserDocumento>('User', userSchema);

//DEV TEST
export async function run() {
  await connect('mongodb://localhost:27017/test');

  const user = new User({
    username: 'Bill',
    email: 'bill@initech.com',
    password: '123',
  });
  await user.save();

  console.log(user.email); // 'bill@initech.com'
}
