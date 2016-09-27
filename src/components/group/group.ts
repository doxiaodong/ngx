import {
  Component,
  NgModule,
  Input,
  ViewEncapsulation
} from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'x-group',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="weui-cells__title"
      *ngIf="title"
      [style.color]="options.color"
      [innerHTML]="title"></div>
    <div class="weui-cells"
      [class.weui-cells_access]="options.isAccess">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    require('./group.less')
  ]
})
export class XGroup {

  @Input() title: string
  @Input() options: IGroupOptions = {
    isAccess: false
  }

}

@NgModule({
  declarations: [
    XGroup
  ],
  imports: [
    CommonModule
  ],
  exports: [
    XGroup,
    CommonModule
  ]
})
export class XGroupModule { }

export interface IGroupOptions {
  color?: string
  isAccess?: boolean
}
