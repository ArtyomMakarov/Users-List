import { Component, OnInit } from '@angular/core';
import {HeaderFilterParamsService} from "../../services/header-filter-params.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showIcon: boolean = false;
  public isIncreased: boolean;

  constructor(private headerFilterParamsService: HeaderFilterParamsService) { }

  ngOnInit(): void {
  }

  public setFilterParams(val: string): void {
    this.changeShowIcon(val);
    this.isIncreased === true ? this.changeFilterIncreaseParam(val, true) :
      this.changeFilterIncreaseParam(val, false);
  }

  public changeFilterIncreaseParam(typeOfFilter: string, isIncreased: boolean): void {
    if (isIncreased) {
      this.isIncreased = false;
      this.headerFilterParamsService.setFilterParams({typeOfFilter: typeOfFilter, isIncreased: true});
    } else {
      this.isIncreased = true;
      this.headerFilterParamsService.setFilterParams({typeOfFilter: typeOfFilter, isIncreased: false});
    }
  }

  public changeShowIcon(val: string): void {
   val === 'name' ? this.showIcon = true : this.showIcon = false;
  }
}
