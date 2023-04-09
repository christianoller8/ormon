import { Component, OnInit } from "@angular/core";
import { dataProductsService } from "src/app/services/data-products.service";
import { Product } from "src/app/interfaces/product.interface";

import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-products-page",
  templateUrl: "./products-page.component.html",
  styleUrls: ["./products-page.component.scss"],
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("1s", style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ProductsPageComponent implements OnInit {
  products: Product[] = [];

  constructor(private dataProducts: dataProductsService) {}

  ngOnInit(): void {
    this.products = this.dataProducts.getProducts();
  }
}
