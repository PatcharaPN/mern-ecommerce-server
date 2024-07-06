import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}
  create(createProductDto: CreateProductDto) {
    const product = new this.productModel(createProductDto).save();
    return product;
  }

  findAll() {
    const product = this.productModel.find();
    return product;
  }

  findOne(productId: string) {
    const product = this.productModel.findById(productId);
    return product;
  }

  update(productId: string, updateProductDto: UpdateProductDto) {
    return `This action updates a #${productId} product`;
  }

  remove(productId: string) {
    return `This action removes a #${productId} product`;
  }
}
