import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RightsService {

  private rights$ = new BehaviorSubject<string[]>([]);

  setRights(rights: string[]): void {
    this.rights$.next(rights);
  }

  hasRight(right: string): boolean {
    const userRights = this.rights$.getValue();
    return userRights.includes('ALL') || userRights.includes(right);
  }
}
