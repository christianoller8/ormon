import { Component } from "@angular/core";
import { NavigationService } from "src/app/services/navigation.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  constructor(
    public navigation: NavigationService,
    public translate: TranslateService
  ) {
    translate.addLangs(["en", "es"]);
    translate.setDefaultLang("en");
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
