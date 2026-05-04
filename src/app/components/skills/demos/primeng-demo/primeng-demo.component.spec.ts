import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimengDemoComponent } from './primeng-demo.component';

describe('PrimengDemoComponent', () => {
  let component: PrimengDemoComponent;
  let fixture: ComponentFixture<PrimengDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimengDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
