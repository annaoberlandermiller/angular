import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberReaderComponent } from './number-reader.component';

describe('NumberReaderComponent', () => {
  let component: NumberReaderComponent;
  let fixture: ComponentFixture<NumberReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
