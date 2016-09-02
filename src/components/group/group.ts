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
    <div class="weui_cells_title"
      *ngIf="title"
      [style.color]="color"
      [innerHTML]="title"></div>
    <div class="weui_cells"
      [class.ngx-no-group-title]="!title">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    require('./group.less')
  ]
})
export class XGroup {

  @Input() color: string
  @Input() title: string

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
