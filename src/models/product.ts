import { Supplier } from './supplier';

export class Product {
  id: number
  name: string
  unit: string
  price: number
  stock: number
  minstock: number
  picture: string
  suppliers: Array<Supplier>
  edited: boolean

  constructor(id: number, name: string, price: number, unit: string, stock: number, minstock: number, picture: string, suppliers: Array<Supplier> = []) {
    this.id = id
    this.name = name
    this.price = price
    this.unit = unit
    this.stock = stock
    this.minstock = minstock
    this.picture = picture
    this.suppliers = suppliers
    this.edited = false;
  }

}