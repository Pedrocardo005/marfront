import { registerLocaleData } from "@angular/common";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import localeBr from '@angular/common/locales/pt';
import { ApplicationConfig, inject, isDevMode } from "@angular/core";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter, Routes } from "@angular/router";
import { tokenInterceptor } from "@core/interceptors/token.interceptor";
import { AuthService } from "@core/services/auth.service";
import { MyListComponent } from "@features/listings/pages/my-list/my-list.component";
import { SupportComponent } from "@features/support/pages/support/support.component";
import { provideTransloco } from "@jsverse/transloco";
import { providePrimeNG } from "primeng/config";
import { map } from "rxjs";
import { LoginComponent } from "./features/auth/pages/login/login.component";
import { RegisterComponent } from "./features/auth/pages/register/register.component";
import { HomeComponent } from "./features/home/pages/home/home.component";
import { SearchComponent } from "./features/searchs/pages/search/search.component";
import MyPreset from "./mypreset";
import { TranslocoHttpLoader } from "./transloco-loader";

registerLocaleData(localeBr);

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [
      () =>
        inject(AuthService)
          .isAuthenticated()
          .pipe(map((isAuth) => !isAuth)),
    ],
  },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [
      () =>
        inject(AuthService)
          .isAuthenticated()
          .pipe(map((isAuth) => !isAuth)),
    ],
  },
  {
    path: "listsearch",
    component: SearchComponent,
  },
  {
    path: "support",
    component: SupportComponent,
  },
  {
    path: "mylist",
    component: MyListComponent,
    canActivate: [
      () =>
        inject(AuthService)
          .isAuthenticated()
          .pipe(map((isAuth) => isAuth)),
    ],
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([tokenInterceptor])),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyPreset,
      },
    }),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: ["pt-BR", "en", "es", "de"],
        defaultLang: "pt-BR",
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
};
