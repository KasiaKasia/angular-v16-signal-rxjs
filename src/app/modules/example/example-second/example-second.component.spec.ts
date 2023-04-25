import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExampleSecondComponent } from './example-second.component';

describe('ExampleSecondComponent', () => {
  let component: ExampleSecondComponent;
  let fixture: ComponentFixture<ExampleSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleSecondComponent]
    });
    fixture = TestBed.createComponent(ExampleSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
