import { animate, group, state, style, transition, trigger } from '@angular/animations';

export const SLIDE_UP_DONW = [
  trigger('slideUpdown', [
    state('in', style({ height: '*', opacity: 0 })),
    transition(':leave', [
      style({ height: '*', opacity: 1 }),

      group([
        animate(300, style({ height: 0 })),
        animate('200ms ease-in-out', style({ opacity: '0' })),
      ]),
    ]),
    transition(':enter', [
      style({ height: '0', opacity: 0 }),

      group([
        animate(300, style({ height: '*' })),
        animate('400ms ease-in-out', style({ opacity: '1' })),
      ]),
    ]),
  ]),
];

export const SLIDE_IN_OUT = [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ width: '0px' }),
        animate('0.2s ease-in', style({ width: '256px' })),
      ]),
      transition(':leave', [
        style({ width: '256px' }),
        animate('0.1s ease-out', style({ width: '0px' })),
      ]),
    ])
];
