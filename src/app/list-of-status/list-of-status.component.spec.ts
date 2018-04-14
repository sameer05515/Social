import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfStatusComponent } from './list-of-status.component';

describe('ListOfStatusComponent', () => {
  let component: ListOfStatusComponent;
  let fixture: ComponentFixture<ListOfStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
