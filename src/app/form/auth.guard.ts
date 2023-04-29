import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { ApiiService } from './apii.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private dataService: ApiiService,private router: Router ) {}
canActivate(
route: ActivatedRouteSnapshot,
state: RouterStateSnapshot): any {
const routeurl: string = state.url!;
return this.isLogin(routeurl);
}

isLogin(routeurl: string) {
if (this.dataService.isLoggedIn()) {
return true;
}
else{
    return false;
}

this.dataService.redirectUrl = routeurl;
this.router.navigate(['/form'], {queryParams: { returnUrl: routeurl }} );
}
  
}
