import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxaAnualComponent } from './taxa-anual.component';

describe('TaxaAnualComponent', () => {
  let component: TaxaAnualComponent;
  let fixture: ComponentFixture<TaxaAnualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxaAnualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxaAnualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
