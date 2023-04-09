import { Injectable } from "@angular/core";
import { Product } from "../interfaces/product.interface";

@Injectable({
  providedIn: "root",
})
export class nombreDelServicio {
  private products: Product[] = [
    {
      id: 1,
      name: "Manzana",
      image1: "",
      type: "Fruta",
      source: "Zaragoza",
      farmerName: "Juan",
      madurationTime: 30,
      priceKg: 1.5,
    },
    {
      id: 2,
      name: "Pera",
      image1: "",
      type: "Fruta",
      source: "Andalucía",
      farmerName: "Pedro",
      madurationTime: 40,
      priceKg: 2.5,
    },
    {
      id: 3,
      name: "Naranja",
      image1: "",
      type: "Fruta",
      source: "Valencia",
      farmerName: "Luis",
      madurationTime: 10,
      priceKg: 3.5,
    },
    {
      id: 4,
      name: "Guisantes",
      image1: "",
      type: "Verdura",
      source: "Castilla la Mancha",
      farmerName: "Rosa",
      madurationTime: 15,
      priceKg: 1.3,
    },
    {
      id: 5,
      name: "Espárragos",
      image1: "",
      type: "Verdura",
      source: "Cataluña",
      farmerName: "Marta",
      madurationTime: 40,
      priceKg: 2.7,
    },
    {
      id: 6,
      name: "Brócoli",
      image1: "",
      type: "Verdura",
      source: "Galicia",
      farmerName: "Antonio",
      madurationTime: 30,
      priceKg: 1.5,
    },
  ];

  getProducts() {
    return this.products;
  }
}
