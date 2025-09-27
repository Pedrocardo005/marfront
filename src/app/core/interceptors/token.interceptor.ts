import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { TokenService } from "@core/services/token.service";

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(TokenService).getToken();

  const request = req.clone({
    setHeaders: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  return next(request);
};
