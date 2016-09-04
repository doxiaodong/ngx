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
