import {
  Component,
  NgModule,
  OnInit,
  ElementRef,
  Renderer,
  ViewEncapsulation
} from '@angular/core'

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
    this._updateClasses('weui_btn', true)
  }

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
  ) {}

  set color(value: string) {
    this._updateClasses(`weui_btn_${this._color}`, false)
    this._color = value
    this._updateClasses(`weui_btn_${this._color}`, true)
  }

  get color() {
    return this._color
  }

  set disabled(value: boolean) {
    this._updateClasses(this._disabled ? 'weui_btn_disabled' : '', false)
    this._disabled = value
    this._updateClasses(this._disabled ? 'weui_btn_disabled' : '', true)
  }

  get disabled() {
    return this._disabled
  }

  set size(value: string) {
    this._updateClasses(`weui_btn_${this._size}`, false)
    this._size = value
    this._updateClasses(`weui_btn_${this._size}`, true)
  }

  get size() {
    return this._size
  }

  set plain(value: boolean) {
    this._updateClasses(this._plain ? `weui_btn_plain_${this._color}` : '', false)
    this._plain = value
    this._updateClasses(this._plain ? `weui_btn_plain_${this._color}` : '', true)
  }

  get plain() {
    return this._plain
  }

  _updateClasses(className: string, isAdd: boolean) {
    if (className != null && className !== '') {
      this._renderer.setElementClass(this._elementRef.nativeElement, className, isAdd)
    }
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
