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
  BooleanFieldValue,
  NgModelBase
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
export class XInput extends NgModelBase implements ControlValueAccessor, OnInit {

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
  @Input() placeholder: string = ''
  @Input() @BooleanFieldValue() readonly: boolean = false
  @Input() @BooleanFieldValue() required: boolean = false
  @Input() tabindex: number = null
  @Input() type: string = 'text' // text number password
  @Input() name: string = null

  // add
  @Input() title: string
  @Input() subTitle: string
  @Input() @BooleanFieldValue() showClear: boolean
  @Input() vcode: string
  @Input() id: string = `x-input-${nextUniqueId++}`

  get inputId(): string {
    return `${this.id}-input`
  }

  ngOnInit() {
    updateClass(this._renderer, this._elementRef, 'weui-cell', true)
    if (this.vcode) {
      updateClass(this._renderer, this._elementRef, 'weui-cell_vcode', true)
    }
  }

  constructor(
    private _renderer: Renderer,
    private _elementRef: ElementRef
  ) {
    super()
  }

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
