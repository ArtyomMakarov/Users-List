import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HeaderFilterParamsService {
  public filterParams: EventEmitter<{typeOfFilter: string, isIncreased: boolean}> = new EventEmitter<{typeOfFilter: string, isIncreased: boolean}>();

  public setFilterParams(params: {typeOfFilter: string, isIncreased: boolean}): void {
    this.filterParams.emit(params);
  }
}
