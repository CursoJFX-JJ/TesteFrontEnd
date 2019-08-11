import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxaMensalComponent } from './taxa-mensal.component';

describe('TaxaMensalComponent', () => {
  let component: TaxaMensalComponent;
  let fixture: ComponentFixture<TaxaMensalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxaMensalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxaMensalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
