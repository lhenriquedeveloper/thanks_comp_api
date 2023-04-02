import { model, Schema} from 'mongoose';

export const User = model('User', new Schema({
  description: {
    type: String,
    required: true
  },
  imagePath: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}));