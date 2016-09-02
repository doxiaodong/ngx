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
  inputs: [
    'access'
  ],
  template: `
    <div class="weui_cells_title"
      *ngIf="title"
      [style.color]="color"
      [innerHTML]="title"></div>
    <div class="weui_cells"
      [class.weui_cells_access]="access"
      [class.ngx-no-group-title]="!title">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    require('./group.less')
  ]
})
export class XGroup {
  private _access: boolean = false

  @Input() color: string
  @Input() title: string

  set access(value: boolean) {
    this._access = value
  }

  get access(): boolean {
    return this._access
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
