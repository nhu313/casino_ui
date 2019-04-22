import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighloComponent } from './highlo.component';

describe('HighloComponent', () => {
  let component: HighloComponent;
  let fixture: ComponentFixture<HighloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
