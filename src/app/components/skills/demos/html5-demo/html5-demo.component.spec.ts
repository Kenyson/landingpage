import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Html5DemoComponent } from './html5-demo.component';

describe('Html5DemoComponent', () => {
  let component: Html5DemoComponent;
  let fixture: ComponentFixture<Html5DemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Html5DemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Html5DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
