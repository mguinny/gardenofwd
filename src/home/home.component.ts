import { Component, inject, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';
import { ProductsComponent } from "../products/products.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  productList : Product[] = [];

  productService : ProductsService = inject(ProductsService);

  constructor () {
    this.productService.getAllTransactions().then((productList: Product[]) => {
      this.productList = productList;
      
    });
  }


}
