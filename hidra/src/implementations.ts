import { User } from './schemas/User';

export default {
  async getUserById(call: any, callback: any) {
    const { id } = call.request;

    const user = await User.findById(id);
    return callback(null, { user });
  },
  async registerUser(call: any, callback: any) {
    const { email, username, password } = call.request.user;
    const user = await User.create({
      email,
      username,
      password,
    });
    return callback(null, { user });
  },
  async loginUser(call: any, callback: any) {
    const { email, password } = call.request.user;
    const user = await User.findOne({ email });

    if (!user) {
      return callback({ error: 'User not found' }, null);
    }
    if (!(await user.compareHash(password))) {
      return callback({ error: 'Invalid Password' }), null;
    }
    return callback(null, { token: User.generateToken(user) });
  },
};
