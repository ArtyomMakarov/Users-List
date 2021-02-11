import { Component, OnInit } from '@angular/core';
import {HeaderFilterParamsService} from "../../services/header-filter-params.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showIcon: boolean = false;
  public isIncreased: boolean = false;

  constructor(private headerFilterParamsService: HeaderFilterParamsService) { }

  ngOnInit(): void {
  }

  public setFilterParams(val: string): void {
    this.changeShowIcon(val);
    this.changeFilterIncreaseParam(val);
  }

  public changeFilterIncreaseParam(typeOfFilter: string): void {
    this.headerFilterParamsService.setFilterParams({typeOfFilter: typeOfFilter, isIncreased: this.isIncreased});
    this.isIncreased = !this.isIncreased;
  }

  public changeShowIcon(val: string): void {
   this.showIcon = (val === 'name');
  }
}
