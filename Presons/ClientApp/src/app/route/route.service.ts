import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RouteService {
  constructor(private router: Router) { }

  route(link: string): void {
    this.router.navigate(['/' + link]);
  }
}
