import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null; // Define a property to hold the product

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get('id'); // Get the product ID from the route parameters

      if (productId) {
        this.productService.getProduct(productId).subscribe((product) => {
          this.product = product; // Assign the fetched product to the component property
          console.log(product);
        });
      }
    });
  }
}
