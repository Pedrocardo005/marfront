import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "@core/services/auth.service";
import { TokenService } from "@core/services/token.service";
import { catchError, throwError } from "rxjs";

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(TokenService).getToken();
  const authService = inject(AuthService);

  const request = req.clone({
    setHeaders: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  return next(request).pipe(catchError((error) => {
    if (error.status === 401) {
      authService.logout();
    }
    return throwError(() => error);
  }));
};
