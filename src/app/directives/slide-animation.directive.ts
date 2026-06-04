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
      el.classList.add('animate-in');
      el.classList.remove('animate-out');
    } else {
      el.classList.remove('animate-in');
      el.classList.add('animate-out');
    }
  };

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const el = this.el.nativeElement;
    el.classList.add('slide-from-' + this.slideDirection);
    window.addEventListener('scroll', this.onScroll, { passive: true });
    requestAnimationFrame(() => requestAnimationFrame(() => this.onScroll()));
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  }
}
