import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Css3DemoComponent } from './css3-demo.component';

describe('Css3DemoComponent', () => {
  let component: Css3DemoComponent;
  let fixture: ComponentFixture<Css3DemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Css3DemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Css3DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
