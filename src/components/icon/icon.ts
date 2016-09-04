import {
  Component,
  NgModule,
  ViewEncapsulation
} from '@angular/core'

@Component({
  selector: 'x-icon',
  encapsulation: ViewEncapsulation.None,
  inputs: [
    'type'
  ],
  template: `
    <i [attr.class]="className"></i>
  `,
  styles: [
    require('./icon.less')
  ]
})
export class XIcon {
  private _type: string

  className: string = ''

  set type(value: string) {
    this.className = `weui_icon weui_icon_${value}`
    this._type = value
  }

  get type(): string {
    return this._type
  }
}

@NgModule({
  declarations: [
    XIcon
  ],
  exports: [
    XIcon
  ]
})
export class XIconModule { }
