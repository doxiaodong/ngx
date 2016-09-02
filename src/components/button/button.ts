import {
  Component,
  NgModule,
  OnInit,
  ElementRef,
  Renderer,
  ViewEncapsulation,
  Input,
  DoCheck
} from '@angular/core'
import { updateClass } from '../utils'


interface IOptions {
  size?: 'mini' | ''
  isPlain?: boolean
}

@Component({
  selector: 'button[x-button]',
  encapsulation: ViewEncapsulation.None,
  inputs: [
    'color',
    'disabled'
  ],
  template: require('./button.html'),
  styles: [
    require('./button.less')
  ]
})
export class XButton implements OnInit, DoCheck {
  private _color: string = 'default'
  private _disabled: boolean

  @Input() options: IOptions = {
    isPlain: false
  }
  private _options: IOptions = {}

  ngDoCheck() {
    const oldPlain = this._options.isPlain
    const newPlain = this.options.isPlain
    if (oldPlain !== newPlain) {
      updateClass(this._renderer, this._elementRef,
        oldPlain ? `weui_btn_plain_${this.color}` : '', false)
      this._options.isPlain = newPlain
      updateClass(this._renderer, this._elementRef,
        newPlain ? `weui_btn_plain_${this.color}` : '', true )
    }

    const oldSize = this._options.size
    const newSize = this.options.size
    if (oldSize !== newSize) {
      updateClass(this._renderer, this._elementRef, `weui_btn_${oldSize}`, false)
      this._options.size = newSize
      updateClass(this._renderer, this._elementRef, `weui_btn_${newSize}`, true)
    }
  }

  ngOnInit() {
    updateClass(this._renderer, this._elementRef, 'weui_btn', true)
  }

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
  ) {}

  set color(value: string) {
    updateClass(this._renderer, this._elementRef, `weui_btn_${this._color}`, false)
    this._color = value
    updateClass(this._renderer, this._elementRef, `weui_btn_${this._color}`, true)
  }

  get color() {
    return this._color
  }

  set disabled(value: boolean) {
    updateClass(this._renderer, this._elementRef, this._disabled ? 'weui_btn_disabled' : '', false)
    this._disabled = value
    updateClass(this._renderer, this._elementRef, this._disabled ? 'weui_btn_disabled' : '', true)
  }

  get disabled() {
    return this._disabled
  }

}

@NgModule({
  declarations: [
    XButton
  ],
  exports: [
    XButton
  ]
})
export class XButtonModule { }
