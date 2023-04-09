import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { WelcomePageComponent } from "./components/welcome-page/welcome-page.component";
import { ProductsPageComponent } from "./components/products-page/products-page.component";
import { ProductCharacteristicsComponent } from "./components/product-characteristics/product-characteristics.component";

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
        path: "products-page",
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
