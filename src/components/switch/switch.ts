import {
  Component,
  NgModule,
  ViewEncapsulation,
  Input,
  Output,
  forwardRef,
  EventEmitter,
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
import { updateClass } from '../utils'

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
export class XSwitch implements ControlValueAccessor, OnInit {
  private onTouchedCallback: () => {}
  private onChangeCallback: (_: any) => {}

  private _title: string = ''
  private _innerValue: boolean = false
  labelStyle: any = {}
  @Input() subTitle: string = ''
  @Output() OnChange: EventEmitter<boolean> = new EventEmitter()

  set title(value: any) {
    this.labelStyle = genLabelStyle(value)
    this._title = value
  }
  get title(): any {
    const html = this._sanitizer.bypassSecurityTrustHtml(this._title)
    return html
  }

  set value(v: boolean) {
    if (v !== this._innerValue) {
      this._innerValue = v
      this.OnChange.emit(v)
      this.onChangeCallback(v)
    }
  }

  get value(): boolean {
    return this._innerValue
  }

  writeValue(v: boolean) {
    if (v !== this._innerValue) {
      this._innerValue = v
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn
  }

  ngOnInit() {
    updateClass(this._renderer, this._elementRef, 'weui_cell', true)
    updateClass(this._renderer, this._elementRef, 'weui_cell_switch', true)
  }

  constructor(
    private _sanitizer: DomSanitizer,
    private _renderer: Renderer,
    private _elementRef: ElementRef
  ) { }

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
  let width = Math.min(isHTML ? 5 : (title.length + 1), 14) + 'em'
  return {
    width: width
  }
}
