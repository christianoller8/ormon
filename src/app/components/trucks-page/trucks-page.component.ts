import { Component, OnInit } from "@angular/core";
import { dataTrucksService } from "src/app/services/data-trucks.service";
import { Truck } from "src/app/interfaces/truck.interface";

@Component({
  selector: "app-trucks-page",
  templateUrl: "./trucks-page.component.html",
  styleUrls: ["./trucks-page.component.scss"],
})
export class TrucksPageComponent implements OnInit {
  trucks: Truck[] = [];

  constructor(private dataTrucks: dataTrucksService) {}

  ngOnInit(): void {
    this.trucks = this.dataTrucks.getTrucks();
  }
}
