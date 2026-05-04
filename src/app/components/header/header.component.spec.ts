import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle mobile menu', () => {
    const initialValue = component.mobileMenuOpen();
    component.toggleMenu();
    expect(component.mobileMenuOpen()).toBe(!initialValue);
  });

  it('should close menu', () => {
    component.mobileMenuOpen.set(true);
    component.closeMenu();
    expect(component.mobileMenuOpen()).toBe(false);
  });
});
