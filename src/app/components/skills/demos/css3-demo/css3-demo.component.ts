import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../translation.pipe';

@Component({
  selector: 'app-css3-demo',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './css3-demo.component.html',
  styleUrls: ['./css3-demo.component.css']
})
export class Css3DemoComponent {
  // Animation states
  hoverAnimation = false;
  transformAnimation = false;
  keyframeAnimation = false;
  loadingAnimation = false;
  gradientAnimation = false;
  pulseAnimation = false;

  // Custom controls
  animationSpeed = signal(1);
  easingFunction = signal('ease');

  toggleHoverAnimation() {
    this.hoverAnimation = !this.hoverAnimation;
  }

  toggleTransformAnimation() {
    this.transformAnimation = !this.transformAnimation;
  }

  toggleKeyframeAnimation() {
    this.keyframeAnimation = !this.keyframeAnimation;
  }

  toggleLoadingAnimation() {
    this.loadingAnimation = !this.loadingAnimation;
  }

  toggleGradientAnimation() {
    this.gradientAnimation = !this.gradientAnimation;
  }

  togglePulseAnimation() {
    this.pulseAnimation = !this.pulseAnimation;
  }

  setAnimationSpeed(speed: number) {
    this.animationSpeed.set(speed);
    this.updateAnimationDuration();
  }

  setEasingFunction(easing: string) {
    this.easingFunction.set(easing);
    this.updateAnimationEasing();
  }

  resetAnimations() {
    this.hoverAnimation = false;
    this.transformAnimation = false;
    this.keyframeAnimation = false;
    this.loadingAnimation = false;
    this.gradientAnimation = false;
    this.pulseAnimation = false;
    this.animationSpeed.set(1);
    this.easingFunction.set('ease');
  }

  private updateAnimationDuration() {
    const speed = this.animationSpeed();
    document.documentElement.style.setProperty('--animation-duration', `${speed}s`);
  }

  private updateAnimationEasing() {
    const easing = this.easingFunction();
    document.documentElement.style.setProperty('--animation-easing', easing);
  }
}
