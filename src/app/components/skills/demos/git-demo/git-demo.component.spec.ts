import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GitDemoComponent } from './git-demo.component';

describe('GitDemoComponent', () => {
  let component: GitDemoComponent;
  let fixture: ComponentFixture<GitDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
