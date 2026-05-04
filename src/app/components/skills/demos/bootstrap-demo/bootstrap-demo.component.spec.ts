import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BootstrapDemoComponent } from './bootstrap-demo.component';

describe('BootstrapDemoComponent', () => {
  let component: BootstrapDemoComponent;
  let fixture: ComponentFixture<BootstrapDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootstrapDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
