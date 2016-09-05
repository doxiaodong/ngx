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
import {
  updateClass,
  BooleanFieldValue
} from '../utils'

const TEXTAREA_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => XTextarea),
  multi: true
}

@Component({
  selector: 'x-textarea',
  encapsulation: ViewEncapsulation.None,
  template: require('./textarea.html'),
  styles: [
    require('./textarea.less')
  ],
  providers: [
    TEXTAREA_CONTROL_VALUE_ACCESSOR
  ]

})
export class XTextarea implements ControlValueAccessor, OnInit {
  private onTouchedCallback: () => {}
  private onChangeCallback: (_: any) => {}
  private _innerValue: string

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
  @Input() maxlength: number = null
  @Input() minlength: number = null
  @Input() placeholder: string = ''
  @Input() @BooleanFieldValue() readonly: boolean = false
  @Input() @BooleanFieldValue() required: boolean = false
  @Input() tabindex: number = null
  @Input() rows: number = null
  @Input() cols: number = null

  // add
  @Input() @BooleanFieldValue() showCounter: boolean = true

  count: number = 0

  set value(v: string) {
    if (v !== this._innerValue) {
      this.count = v.length
      this._innerValue = v
      this.onChangeCallback(v)
    }
  }

  get value(): string {
    return this._innerValue
  }

  writeValue(v: string) {
    if (v !== this._innerValue) {
      if (v) {
        this.count = v.length
      }
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
  }

  constructor(
    private _renderer: Renderer,
    private _elementRef: ElementRef
  ) { }

}

@NgModule({
  declarations: [
    XTextarea
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    XTextarea,
    FormsModule,
    CommonModule
  ]
})
export class XTextareaModule { }
