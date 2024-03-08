import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'assets/api/products.json'; // Updated API URL to local JSON file

  constructor(private http: HttpClient) {}

  // Fetch products from local JSON file
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching products:', error);
        return of([]); // Return empty array if there's an error
      })
    );
  }

  // Fetch a single product by ID from local JSON file
  getProduct(productId: string): Observable<Product | null> {
    return this.getProducts().pipe(
      map(
        (products) =>
          products.find((product) => product.id === productId) || null
      ),
      catchError((error) => {
        console.error('Error fetching product:', error);
        return of(null); // Return null if there's an error
      })
    );
  }
}
