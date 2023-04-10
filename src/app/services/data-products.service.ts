import { Injectable } from "@angular/core";
import { Product } from "../interfaces/product.interface";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class dataProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: "Manzana",
      image1: "./../../assets/products/manzana.jpg",
      image2: "./../../assets/products/manzana-producto.jpg",
      type: "Fruta",
      source: "Zaragoza",
      farmerName: "Juan",
      madurationTime: 30,
      priceKg: 1.5,
    },
    {
      id: 2,
      name: "Pera",
      image1: "./../../assets/products/pera.jpg",
      image2: "./../../assets/products/pera-producto.jpg",
      type: "Fruta",
      source: "Andalucía",
      farmerName: "Pedro",
      madurationTime: 40,
      priceKg: 2.5,
    },
    {
      id: 3,
      name: "Naranja",
      image1: "./../../assets/products/naranja.jpg",
      image2: "./../../assets/products/naranja-producto.jpg",
      type: "Fruta",
      source: "Valencia",
      farmerName: "Luis",
      madurationTime: 10,
      priceKg: 3.5,
    },
    {
      id: 4,
      name: "Guisantes",
      image1: "./../../assets/products/guisantes.jpg",
      image2: "./../../assets/products/guisantes-producto.jpg",
      type: "Verdura",
      source: "Castilla la Mancha",
      farmerName: "Rosa",
      madurationTime: 15,
      priceKg: 1.3,
    },
    {
      id: 5,
      name: "Espárragos",
      image1: "./../../assets/products/esparragos.jpg",
      image2: "./../../assets/products/esparragos-producto.jpg",
      type: "Verdura",
      source: "Cataluña",
      farmerName: "Marta",
      madurationTime: 40,
      priceKg: 2.7,
    },
    {
      id: 6,
      name: "Brócoli",
      image1: "./../../assets/products/brocoli.jpg",
      image2: "./../../assets/products/brocoli-producto.jpg",
      type: "Verdura",
      source: "Galicia",
      farmerName: "Antonio",
      madurationTime: 30,
      priceKg: 1.5,
    },
    {
      id: 7,
      name: "Platano",
      image1: "./../../assets/products/platano.jpg",
      image2: "./../../assets/products/brocoli-producto.jpg",
      type: "Fruta",
      source: "Canarias",
      farmerName: "Mi primo",
      madurationTime: 60,
      priceKg: 2.5,
    },
    {
      id: 8,
      name: "Cebolla",
      image1: "./../../assets/products/cebolla.jpg",
      image2: "./../../assets/products/brocoli-producto.jpg",
      type: "Hortaliza",
      source: "Murcia",
      farmerName: "Mi prima",
      madurationTime: 20,
      priceKg: 1.2,
    },
  ];

  getProducts() {
    return this.products;
  }
  getProduct(id: number): Observable<Product> {
    const product = this.products.find((h) => h.id === id)!;
    return of(product);
  }
}
