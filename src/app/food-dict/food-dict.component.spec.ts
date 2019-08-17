import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDictComponent } from './food-dict.component';

describe('FoodDictComponent', () => {
  let component: FoodDictComponent;
  let fixture: ComponentFixture<FoodDictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodDictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodDictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
