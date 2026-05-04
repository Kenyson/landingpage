import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperienceComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have experiences defined', () => {
    expect(component.experiences.length).toBe(2);
  });

  it('should have NTT DATA experience', () => {
    const nttData = component.experiences.find(e => e.company.includes('NTT DATA'));
    expect(nttData).toBeTruthy();
    expect(nttData?.role).toContain('Front-End Developer');
  });
});
