import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterEvent,
} from "@angular/router";
import { filter } from "rxjs/operators";
import { NavigationService } from "src/app/services/navigation.service";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumbs.component.html",
  styleUrls: ["./breadcrumbs.component.scss"],
})
export class BreadcrumbsComponent implements OnInit {
  static readonly ROUTE_DATA_BREADCRUMB = "breadcrumb";
  readonly home = { icon: "pi pi-home", routerLink: "/" };
  menuItems: MenuItem[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private navigation: NavigationService
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(
        () =>
          (this.menuItems = this.createBreadcrumbs(this.activatedRoute.root))
      );
  }

  private createBreadcrumbs(
    route: ActivatedRoute,
    url = "",
    breadcrumbs: MenuItem[] = []
  ): MenuItem[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length > 0) {
      for (const child of children) {
        const routeURL: string = child.snapshot.url
          .map((segment) => segment.path)
          .join("/");
        if (routeURL !== "") {
          url += `/${routeURL}`;
        }

        const label =
          child.snapshot.data[BreadcrumbsComponent.ROUTE_DATA_BREADCRUMB];
        if (label) {
          breadcrumbs.push({ label, routerLink: url });
        }

        return this.createBreadcrumbs(child, url, breadcrumbs);
      }
    }
    return breadcrumbs;
  }

  syncHistory() {
    this.navigation.syncWithBreadcrumbs();
  }
}
