import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ContactComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have contact info', () => {
    expect(component.email).toBe('kenysonoliveira@gmail.com');
    expect(component.phone).toBe('+39 392 887 6051');
    expect(component.githubUrl).toBe('https://github.com/Kenyson');
  });

  it('should submit form with valid data', () => {
    component.formData = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'Test message'
    };

    component.onSubmit();

    expect(component.isSubmitting).toBeTrue();
  });
});
