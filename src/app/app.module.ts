import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BreadcrumbModule } from "primeng/breadcrumb";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { WelcomePageComponent } from "./components/welcome-page/welcome-page.component";
import { ProductsPageComponent } from "./components/products-page/products-page.component";
import { ProductCharacteristicsComponent } from "./components/product-characteristics/product-characteristics.component";

import { dataProductsService } from "./services/data-products.service";

import { BreadcrumbsComponent } from "./components/breadcrumbs/breadcrumbs.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ChristFooterModule } from "christ-footer";
import { TrucksPageComponent } from "./components/trucks-page/trucks-page.component";
import { TrucksCharacteristicsComponent } from "./components/trucks-characteristics/trucks-characteristics.component";
import { dataTrucksService } from "./services/data-trucks.service";
import { PagenotfoundComponent } from "./components/pagenotfound/pagenotfound.component";

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    ProductsPageComponent,
    ProductCharacteristicsComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    FooterComponent,
    TrucksPageComponent,
    TrucksCharacteristicsComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
    ChristFooterModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [dataProductsService, dataTrucksService],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
