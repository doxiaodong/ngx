import {
  Component,
  NgModule,
  Input,
  ViewEncapsulation
} from '@angular/core'
import { CommonModule } from '@angular/common'

interface IOptions {
  color?: string
  isAccess?: boolean
}

@Component({
  selector: 'x-group',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="weui_cells_title"
      *ngIf="title"
      [style.color]="options.color"
      [innerHTML]="title"></div>
    <div class="weui_cells"
      [class.weui_cells_access]="options.isAccess">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    require('./group.less')
  ]
})
export class XGroup {

  @Input() title: string
  @Input() options: IOptions = {
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
