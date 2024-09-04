import { Component, OnInit } from '@angular/core';

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
  // Dummy data for products
  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is a brief description of Product 1.',
      price: 29.99,
      imageUrl: 'https://via.placeholder.com/300'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is a brief description of Product 2.',
      price: 39.99,
      imageUrl: 'https://via.placeholder.com/300'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is a brief description of Product 3.',
      price: 49.99,
      imageUrl: 'https://via.placeholder.com/300'
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'This is a brief description of Product 4.',
      price: 59.99,
      imageUrl: 'https://via.placeholder.com/300'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }
}
