import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have skills defined', () => {
    expect(component.skills.length).toBeGreaterThan(0);
  });

  it('should have skill categories', () => {
    expect(component.skillCategories.length).toBe(3);
  });

  it('should filter skills by category', () => {
    const languages = component.getSkillsByCategory('Languages');
    expect(languages.every(s => s.category === 'Languages')).toBeTrue();
  });
});
