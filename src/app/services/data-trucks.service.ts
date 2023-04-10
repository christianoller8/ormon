import { Injectable } from "@angular/core";
import { Truck } from "../interfaces/truck.interface";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class dataTrucksService {
  private trucks: Truck[] = [
    {
      id: 1,
      name: "Volkswagen",
      image1: "./../../assets/trucks/camion1.jpg",
      image2: "",
    },
    {
      id: 2,
      name: "Ford",
      image1: "./../../assets/trucks/camion2.jpg",
      image2: "",
    },
    {
      id: 3,
      name: "Mercedes",
      image1: "./../../assets/trucks/camion3.jpg",
      image2: "",
    },
    {
      id: 4,
      name: "Seat",
      image1: "./../../assets/trucks/camion4.jpg",
      image2: "",
    },
  ];

  getTrucks() {
    return this.trucks;
  }
  getTruck(id: number): Observable<Truck> {
    const truck = this.trucks.find((h) => h.id === id)!;
    return of(truck);
  }
}
