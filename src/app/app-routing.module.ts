import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { WelcomePageComponent } from "./components/welcome-page/welcome-page.component";
import { ProductsPageComponent } from "./components/products-page/products-page.component";
import { ProductCharacteristicsComponent } from "./components/product-characteristics/product-characteristics.component";

import { TrucksPageComponent } from "./components/trucks-page/trucks-page.component";
import { TrucksCharacteristicsComponent } from "./components/trucks-characteristics/trucks-characteristics.component";
import { PagenotfoundComponent } from "./components/pagenotfound/pagenotfound.component";

const routes: Routes = [
  {
    path: "",
    data: {
      breadcrumb: "Home",
    },
    children: [
      {
        path: "",
        data: {
          breadcrumb: null,
        },
        component: WelcomePageComponent,
      },
      {
        path: "products",
        data: {
          breadcrumb: "Products",
        },
        children: [
          {
            path: "",
            data: {
              breadcrumb: null,
            },
            component: ProductsPageComponent,
          },
          {
            path: ":id/product-characteristics",
            data: {
              breadcrumb: "Characteristics",
            },
            children: [
              {
                path: "",
                data: {
                  breadcrumb: null,
                },
                component: ProductCharacteristicsComponent,
              },
            ],
          },
        ],
      },
      {
        path: "trucks",
        data: {
          breadcrumb: "Trucks",
        },
        children: [
          {
            path: "",
            data: {
              breadcrumb: null,
            },
            component: TrucksPageComponent,
          },
          {
            path: ":id/trucks-characteristics",
            data: {
              breadcrumb: "Characteristics",
            },
            children: [
              {
                path: "",
                data: {
                  breadcrumb: null,
                },
                component: TrucksCharacteristicsComponent,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "**",
    component: PagenotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
