import { Purchase } from './schemas/Purchase';
export default {
  async getPurchaseById(call: any, callback: any) {
    const { id } = call.request;
    const response = await Purchase.findById({ id });
    return callback(null, { purchase: response });
  },
  async listAllPurchaseFromUser(call: any, callback: any) {
    const { userId } = call.request;
    const purchases = await Purchase.find({ userId });
    return callback(null, { purchases });
  },
  async purchase(call: any, callback: any) {
    const { title, value, userId } = call.request;
    const purchase = await Purchase.create({ title, value, userId });
    return callback(null, {
      purchase: { ...purchase.toObject(), id: purchase._id },
    });
  },
};
