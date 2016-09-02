import {
  Component,
  NgModule,
  ViewEncapsulation,
  Input,
  ElementRef,
  Renderer,
  OnInit
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { InlineDescModule } from '../inline-desc'
import { updateClass } from '../utils'

@Component({
  selector: 'x-cell',
  encapsulation: ViewEncapsulation.None,
  template: require('./cell.html'),
  styles: [
    require('./cell.less')
  ]
})
export class XCell implements OnInit {

  @Input() title: string
  @Input() subTitle: string
  @Input() primary: string = 'title' // title|content

  ngOnInit() {
    updateClass(this._renderer, this._elementRef, 'weui_cell', true)
  }

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
  ) { }

}

@NgModule({
  declarations: [
    XCell
  ],
  imports: [
    CommonModule,
    InlineDescModule
  ],
  exports: [
    XCell,
    CommonModule,
    InlineDescModule
  ]
})
export class XCellModule { }
