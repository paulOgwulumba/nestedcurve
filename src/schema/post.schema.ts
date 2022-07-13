import { Prop, Schema, SchemaFactory,  } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type PostDocument = Post & mongoose.Document;

@Schema()
export class Post {
  @Prop({ required: true })
  text: string;

  @Prop({ required: false })
  image: string;

  @Prop({ required: true })
  likes: mongoose.Types.ObjectId[];

  @Prop({ required: true })
  createdAt: string;

  @Prop({ required: true })
  createdBy: mongoose.Types.ObjectId;

  @Prop({ required: true })
  comments: string[];

  @Prop({ required: true })
  isFree: boolean;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  subscribersFromCreator: string[];

  @Prop({ required: true })
  subscribers: string[];

  @Prop({ required: true })
  isComment: boolean;

  @Prop({ required: false })
  parent: mongoose.Types.ObjectId | null;
}

export const PostSchema = SchemaFactory.createForClass(Post);

export const editPostDTO = {
    text: "",
}
