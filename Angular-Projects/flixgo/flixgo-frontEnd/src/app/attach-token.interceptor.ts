import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalstateService } from './services/globalstate.service';

@Injectable()
export class AttachTokenInterceptor implements HttpInterceptor {

  constructor(private globalstate: GlobalstateService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.globalstate.userInfo.value.token) {
      const authReq = request.clone({
        headers: request.headers.set(
          'authorization',
          'Bearer ' + this.globalstate.userInfo.value.token
        ),
      });
      return next.handle(authReq);
    }
    return next.handle(request);
  }
}
