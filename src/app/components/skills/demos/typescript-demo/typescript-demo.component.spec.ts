import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypeScriptDemoComponent } from './typescript-demo.component';

describe('TypeScriptDemoComponent', () => {
  let component: TypeScriptDemoComponent;
  let fixture: ComponentFixture<TypeScriptDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypescriptDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypescriptDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
