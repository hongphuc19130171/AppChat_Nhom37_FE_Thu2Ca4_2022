import {
  animate,
  AnimationTriggerMetadata,
  keyframes,
  style,
  transition,
  trigger,
  animation,
  useAnimation,
  AnimationReferenceMetadata,
} from '@angular/animations';
import { MdbAnimationOptions } from '../animation.options';
import { getOptions } from '../animations.utils';

const fadeInUpOptions: MdbAnimationOptions = {
  trigger: 'fadeInUp',
  delay: 0,
  duration: 500,
};

const fadeInUpEnterOptions: MdbAnimationOptions = {
  trigger: 'fadeInUpEnter',
  delay: 0,
  duration: 500,
};

const fadeInUp = (options: MdbAnimationOptions): AnimationReferenceMetadata => {
  const params = {
    delay: options.delay,
    duration: options.duration,
  };

  return animation(
    [
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ opacity: 0, transform: 'translate3d(0, 100%, 0)', easing: 'ease', offset: 0 }),
          style({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 }),
        ])
      ),
    ],
    { params }
  );
};

export function fadeInUpAnimation(options?: MdbAnimationOptions): AnimationTriggerMetadata {
  options = getOptions(options, fadeInUpOptions);

  return trigger(options.trigger, [transition('0 => 1', [useAnimation(fadeInUp(options))])]);
}

export function fadeInUpEnterAnimation(options?: MdbAnimationOptions): AnimationTriggerMetadata {
  options = getOptions(options, fadeInUpEnterOptions);

  return trigger(options.trigger, [transition(':enter', [useAnimation(fadeInUp(options))])]);
}
