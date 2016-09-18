import {
  ElementRef,
  Renderer
} from '@angular/core'

export function updateClass(
  _renderer: Renderer,
  _elementRef: ElementRef,
  className: string,
  isAdd: boolean
) {
  if (className != null && className !== '') {
    _renderer.setElementClass(_elementRef.nativeElement, className, isAdd)
  }
}

export * from './annotations'

export class NgModelBase {
  public onTouchedCallback: () => {}
  public onChangeCallback: (_: any) => {}
  public _innerValue: any

  set value(v: any) {
    if (v !== this._innerValue) {
      this._innerValue = v
      this.onChangeCallback(v)
    }
  }

  get value(): any {
    return this._innerValue
  }

  writeValue(v: any) {
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
}
