import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  @Input() products !: Product[];

constructor() {
}

}
