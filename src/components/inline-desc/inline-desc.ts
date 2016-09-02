import {
  Component,
  NgModule,
  ViewEncapsulation
} from '@angular/core'

@Component({
  selector: 'inline-desc',
  encapsulation: ViewEncapsulation.None,
  template: `
    <span class="ngx-label-desc">
      <ng-content></ng-content>
    </span>
  `,
  styles: [
    `
      .ngx-label-desc {
        font-size:14px;
        color:#666;
      }
    `
  ]
})
export class InlineDesc { }

@NgModule({
  declarations: [
    InlineDesc
  ],
  exports: [
    InlineDesc
  ]
})
export class InlineDescModule { }
