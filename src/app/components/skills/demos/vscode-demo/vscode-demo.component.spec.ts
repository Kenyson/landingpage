import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VscodeDemoComponent } from './vscode-demo.component';

describe('VscodeDemoComponent', () => {
  let component: VscodeDemoComponent;
  let fixture: ComponentFixture<VscodeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VscodeDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VscodeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
