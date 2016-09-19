import {
  Component,
  NgModule,
  ViewEncapsulation,
  Input,
  forwardRef,
  ElementRef,
  Renderer,
  OnInit
} from '@angular/core'
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor
} from '@angular/forms'
import { DomSanitizer } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { InlineDescModule } from '../inline-desc'
import {
  updateClass,
  NgModelBase
} from '../utils'

const SWITCH_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => XSwitch),
  multi: true
}

@Component({
  selector: 'x-switch',
  encapsulation: ViewEncapsulation.None,
  inputs: [
    'title'
  ],
  template: require('./switch.html'),
  styles: [
    require('./switch.less')
  ],
  providers: [
    SWITCH_CONTROL_VALUE_ACCESSOR
  ]
})
export class XSwitch extends NgModelBase implements ControlValueAccessor, OnInit {
  private _title: string = ''
  labelStyle: any = {}
  @Input() subTitle: string = ''

  set title(value: any) {
    this.labelStyle = genLabelStyle(value)
    this._title = value
  }
  get title(): any {
    const html = this._sanitizer.bypassSecurityTrustHtml(this._title)
    return html
  }

  ngOnInit() {
    updateClass(this._renderer, this._elementRef, 'weui_cell', true)
    updateClass(this._renderer, this._elementRef, 'weui_cell_switch', true)
  }

  constructor(
    private _sanitizer: DomSanitizer,
    private _renderer: Renderer,
    private _elementRef: ElementRef
  ) {
    super()
  }

}

@NgModule({
  declarations: [
    XSwitch
  ],
  imports: [
    FormsModule,
    CommonModule,
    InlineDescModule
  ],
  exports: [
    XSwitch,
    FormsModule,
    CommonModule,
    InlineDescModule
  ]
})
export class XSwitchModule { }

function genLabelStyle(title) {
  let isHTML = /<\/?[^>]*>/.test(title)
  let width = Math.min(isHTML ? 5 : (title.length + 1), 12) + 'em'
  return {
    width: width
  }
}
