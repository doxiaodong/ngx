import {
  Component,
  NgModule,
  ViewEncapsulation
} from '@angular/core'

@Component({
  selector: 'x-badge',
  encapsulation: ViewEncapsulation.None,
  template: `
    <span class="ngx-badge">
      <ng-content></ng-content>
    </span>
  `,
  styles: [
    `
      .ngx-badge {
        display: inline-block;
        text-align: center;
        background: #f74c31;
        color: #fff;
        font-size: 12px;
        height: 16px;
        line-height: 16px;
        border-radius: 8px;
        padding: 0 6px;
        background-clip: padding-box;
      }
    `
  ]
})
export class XBadge { }

@NgModule({
  declarations: [
    XBadge
  ],
  exports: [
    XBadge
  ]
})
export class XBadgeModule { }
