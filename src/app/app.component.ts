import { Component } from '@angular/core';
import { ProductsComponent } from '../components/products/products.component';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  // to render the component
  selector: 'app-root',
  // outer modules and component
  imports: [ProductsComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'meanG4';
}
