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
import { CommonModule } from '@angular/common'
import { InlineDescModule } from '../inline-desc'
import { XIconModule } from '../icon'
import {
  updateClass,
  BooleanFieldValue
} from '../utils'

const INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => XInput),
  multi: true
}

let nextUniqueId = 0

@Component({
  selector: 'x-input',
  encapsulation: ViewEncapsulation.None,
  template: require('./input.html'),
  styles: [
    require('./input.less')
  ],
  providers: [
    INPUT_CONTROL_VALUE_ACCESSOR
  ]
})
export class XInput implements ControlValueAccessor, OnInit {

  private onTouchedCallback: () => {}
  private onChangeCallback: (_: any) => {}
  private _innerValue: string | number

  @Input('aria-label') ariaLabel: string
  @Input('aria-labelledby') ariaLabelledBy: string
  @Input('aria-disabled') @BooleanFieldValue() ariaDisabled: boolean
  @Input('aria-required') @BooleanFieldValue() ariaRequired: boolean
  @Input('aria-invalid') @BooleanFieldValue() ariaInvalid: boolean

  @Input() autocomplete: string
  @Input() autocorrect: string
  @Input() autocapitalize: string
  @Input() @BooleanFieldValue() autofocus: boolean = false
  @Input() @BooleanFieldValue() disabled: boolean = false
  @Input() max: string | number = null
  @Input() maxlength: number = null
  @Input() min: string | number = null
  @Input() minlength: number = null
  @Input() placeholder: string = null
  @Input() @BooleanFieldValue() readonly: boolean = false
  @Input() @BooleanFieldValue() required: boolean = false
  @Input() tabindex: number = null
  @Input() type: string = 'text' // text number password
  @Input() name: string = null

  // add
  @Input() title: string
  @Input() subTitle: string
  @Input() @BooleanFieldValue() showClear: boolean
  @Input() @BooleanFieldValue() vcode: boolean
  @Input() id: string = `x-input-${nextUniqueId++}`

  get inputId(): string {
    return `${this.id}-input`
  }

  set value(v: string | number) {
    if (v !== this._innerValue) {
      this._innerValue = v
      this.onChangeCallback(v)
    }
  }

  get value(): string | number {
    return this._innerValue
  }

  writeValue(v: string | number) {
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
    if (this.vcode) {
      updateClass(this._renderer, this._elementRef, 'weui_vcode', true)
    }
  }

  constructor(
    private _renderer: Renderer,
    private _elementRef: ElementRef
  ) { }

  clear() {
    this.value = null
  }

}

@NgModule({
  declarations: [
    XInput
  ],
  imports: [
    FormsModule,
    CommonModule,
    InlineDescModule,
    XIconModule
  ],
  exports: [
    XInput,
    FormsModule,
    CommonModule,
    InlineDescModule,
    XIconModule
  ]
})
export class XInputModule { }
