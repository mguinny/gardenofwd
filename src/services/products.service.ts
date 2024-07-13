import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import Products from '../assets/data/products.json'; 

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly productList: Product[] = []

  constructor() {
    this.productList = Products.response;
  }

async getAllTransactions():  Promise <Product[]>{
          return this.productList
}
  // getTransactionsById(id: Number): Transactions | undefined  {
  //   console.log('transactionsList', this.transactionsList)
  //   return this.transactionsList.find(transaction => transaction.id === id)
  // }

}
