import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BreadcrumbModule } from "primeng/breadcrumb";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { WelcomePageComponent } from "./components/welcome-page/welcome-page.component";
import { ProductsPageComponent } from "./components/products-page/products-page.component";
import { ProductCharacteristicsComponent } from "./components/product-characteristics/product-characteristics.component";
import { dataProductsService } from "./services/data-products.service";

import { BreadcrumbsComponent } from "./components/breadcrumbs/breadcrumbs.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    ProductsPageComponent,
    ProductCharacteristicsComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
  ],
  providers: [dataProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
