import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { dataProductsService } from "src/app/services/data-products.service";
import { Product } from "src/app/interfaces/product.interface";

@Component({
  selector: "app-product-characteristics",
  templateUrl: "./product-characteristics.component.html",
  styleUrls: ["./product-characteristics.component.scss"],
})
export class ProductCharacteristicsComponent implements OnInit {
  product: Product = {} as Product;

  constructor(
    private route: ActivatedRoute,
    private dataProducts: dataProductsService
  ) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.dataProducts
      .getProduct(id)
      .subscribe((product) => (this.product = product));
  }
}
