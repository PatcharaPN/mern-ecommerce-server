import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  price: number;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  productImage: string;
  @Prop({ required: true })
  rating: number;
}

const ProductSchema = SchemaFactory.createForClass(Product);
export { ProductSchema };
