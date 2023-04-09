import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { WelcomePageComponent } from "./components/welcome-page/welcome-page.component";
import { ProductsPageComponent } from "./components/products-page/products-page.component";
import { ProductCharacteristicsComponent } from "./components/product-characteristics/product-characteristics.component";
import { dataProductsService } from "./services/data-products.service";

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    ProductsPageComponent,
    ProductCharacteristicsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [dataProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
