import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Product interface to define the structure of each product item
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = []; // Empty array to hold products fetched from API
  token: string = 'your_token_here'; // Replace with your actual token

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    // Define the headers with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}` // Use Bearer token for authentication
    });

    // Call the API to get the product data
    this.http.get<Product[]>('https://your-api-url.com/products', { headers })
      .subscribe(
        (response: Product[]) => {
          // Assign the response to the products array
          this.products = response;
        },
        (error) => {
          // Handle the error if the API call fails
          console.error('Error fetching products:', error);
        }
      );
  }
}
