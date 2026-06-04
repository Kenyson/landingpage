import { Directive, Input, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appSlideAnimation]',
  standalone: true,
})
export class SlideAnimationDirective implements OnInit, OnDestroy {
  @Input('appSlideAnimation') slideDirection: 'left' | 'right' = 'left';

  private onScroll = () => {
    const el = this.el.nativeElement;
    const rect = el.getBoundingClientRect();
    const visible = rect.top < window.innerHeight - 100 && rect.bottom > 100;
    if (visible) {
      el.style.transform = '';
      el.style.opacity = '1';
    } else {
      const offset = this.slideDirection === 'left' ? '-500px' : '500px';
      el.style.transform = `translateX(${offset})`;
      el.style.opacity = '0';
    }
  };

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const el = this.el.nativeElement;
    el.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    el.style.willChange = 'transform, opacity';
    window.addEventListener('scroll', this.onScroll, { passive: true });
    requestAnimationFrame(() => requestAnimationFrame(() => this.onScroll()));
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  }
}
