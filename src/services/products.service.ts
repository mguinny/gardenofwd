import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {



  constructor() { }


  readonly url = 'http://localhost:3000/transactions';
  readonly productList: Product[] = []

async getAllTransactions():  Promise <Product[]>{
  
  return 
  }

  // getTransactionsById(id: Number): Transactions | undefined  {
  //   console.log('transactionsList', this.transactionsList)
  //   return this.transactionsList.find(transaction => transaction.id === id)
  // }

}
