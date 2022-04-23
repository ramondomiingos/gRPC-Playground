import { Schema, model, connect, Model, ObjectId } from 'mongoose';
interface IPurchase {
  id?: ObjectId;
  userId: string;
  title: string;
  value: number;
}

const purchaseSchema = new Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  value: { type: Number, required: true },
});

export const Purchase = model<IPurchase>('Purchase', purchaseSchema);
