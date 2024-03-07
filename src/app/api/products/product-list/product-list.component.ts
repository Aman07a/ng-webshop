import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  images: {
    FV: string;
    BV: string;
    SV: string;
    POV: string;
  };
  price: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  currentImage: string = '';
  originalFVImages: { [productId: string]: string } = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get<Product[]>('assets/api/products.json').subscribe(
      (data) => {
        this.products = data;
        this.storeOriginalFVImages();
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  storeOriginalFVImages() {
    for (const product of this.products) {
      this.originalFVImages[product.id] = product.images.FV;
    }
  }

  addToCart(product: Product) {
    console.log('Product added to cart:', product);
  }

  changeImage(product: Product, isHovering: boolean) {
    if (isHovering) {
      product.images.FV = product.images.BV;
    } else {
      product.images.FV = this.originalFVImages[product.id];
    }
  }
}

