import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {HeaderFilterParamsService} from "../../services";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockHeaderFilterParamsService = {
    setFilterParams: jasmine.createSpy('setFilterParams')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [ {provide: HeaderFilterParamsService, useValue: mockHeaderFilterParamsService}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('display sort icon', () => {
    it('change input value should hide sort icon ', () => {
      const debugElement = fixture.debugElement;
      const input: DebugElement = debugElement.query(By.css('.header__filter__input'));
      const sortIcon: DebugElement = debugElement.query(By.css('[alt=sortIcon]'));

      input.triggerEventHandler('change', null);
      fixture.detectChanges();

      expect(sortIcon.nativeElement.hidden).toBeTruthy();
    });

    it('click name button should show sort icon', () => {
      const debugElement = fixture.debugElement;
      const nameButton: DebugElement = debugElement.query(By.css('[type=button]'));
      const sortIcon: DebugElement = debugElement.query(By.css('[alt=sortIcon]'));

      nameButton.triggerEventHandler('click', null);
      fixture.detectChanges();

      expect(sortIcon.nativeElement.hidden).toBeFalse();
    });
  });

  describe('rotate sort icon', () => {
    it('sort icon should rotate when name button is clicked', () => {
      const debugElement = fixture.debugElement;
      const nameButton: DebugElement = debugElement.query(By.css('[type=button]'));
      nameButton.triggerEventHandler('click', null);
      fixture.detectChanges();

      let sortIcon: DebugElement = debugElement.query(By.css('.sortIcon_rotate'));
      expect(sortIcon.nativeElement).toBeTruthy();

      nameButton.triggerEventHandler('click', null);
      fixture.detectChanges();

      sortIcon = debugElement.query(By.css('.sortIcon'));
      expect(sortIcon.nativeElement).toBeTruthy();
    });
  });

  describe('setFilterParams', () => {
    it('should be called when input is changed', () => {
      spyOn(component, 'setFilterParams');
      const debugElement = fixture.debugElement;
      const input: DebugElement = debugElement.query(By.css('.header__filter__input'));
      const inputElement = input.nativeElement;
      inputElement.value = 'someValue';

      input.triggerEventHandler('change', inputElement.value);
      fixture.detectChanges();

      expect(component.setFilterParams).toHaveBeenCalledWith('someValue');
    });
  })
});
