import { IOrder } from './calculate-total-amount';

export class ShoppingCart implements IOrder {
  calculateTotal() {
    let totalPrice = 0;
    this.products.forEach(p => totalPrice += p);
    return totalPrice;
  }
  products: number[] = [100, 200, 50];
}
