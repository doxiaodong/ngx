import {
  Component,
  NgModule,
  ViewEncapsulation,
  Input
} from '@angular/core'

@Component({
  selector: 'x-tip',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="ngx-group-tip" [style.text-align]="align">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .ngx-group-tip, .ngx-group-tip p {
        font-size:14px;
        color:#888;
        text-align:center;
        padding-top:0.3em;
        padding-left:10px;
        padding-right:5px;
      }
      .ngx-group-tip .weui_icon {
        padding-right: 3px;
      }
    `
  ]
})
export class XTip {
  @Input() align: string = 'left'
}

@NgModule({
  declarations: [
    XTip
  ],
  exports: [
    XTip
  ]
})
export class XTipModule { }
