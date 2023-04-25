import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExampleThirdComponent } from './example-third.component';

describe('ExampleThirdComponent', () => {
  let component: ExampleThirdComponent;
  let fixture: ComponentFixture<ExampleThirdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleThirdComponent]
    });
    fixture = TestBed.createComponent(ExampleThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
