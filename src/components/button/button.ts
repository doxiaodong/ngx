import {
  Component,
  NgModule,
  OnInit,
  ElementRef,
  Renderer,
  ViewEncapsulation
} from '@angular/core'
import { updateClass } from '../utils'

@Component({
  selector: 'button[x-button]',
  encapsulation: ViewEncapsulation.None,
  inputs: [
    'color',
    'disabled',
    'size',
    'plain'
  ],
  template: require('./button.html'),
  styles: [
    require('./button.less')
  ]
})
export class XButton implements OnInit {
  private _color: string = 'default'
  private _disabled: boolean
  private _size: string
  private _plain: boolean

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

  set size(value: string) {
    updateClass(this._renderer, this._elementRef, `weui_btn_${this._size}`, false)
    this._size = value
    updateClass(this._renderer, this._elementRef, `weui_btn_${this._size}`, true)
  }

  get size() {
    return this._size
  }

  set plain(value: boolean) {
    updateClass(this._renderer, this._elementRef,
      this._plain ? `weui_btn_plain_${this._color}` : '', false )
    this._plain = value
    updateClass(this._renderer, this._elementRef,
      this._plain ? `weui_btn_plain_${this._color}` : '', true)
  }

  get plain() {
    return this._plain
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
