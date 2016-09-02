import {
  Component,
  NgModule,
  ViewEncapsulation,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'x-actionsheet',
  encapsulation: ViewEncapsulation.None,
  inputs: [
    'menus'
  ],
  template: require('./actionsheet.html'),
  styles: [
    require('./actionsheet.less')
  ]
})
export class XActionsheet implements OnChanges {

  private _options: IActionsheetOptions = {
    show: false,
    menus: [],
    onSelect: (key: string) => {},
    onCancel: () => {},
    cancelText: 'Cancel'
  }

  @Input() options: IActionsheetOptions

  emitEvent(event: string, key?: string) {
    if (event === 'menu') {
      this._options.onSelect(key)
    }
    if (event === 'cancel') {
      this._options.onCancel()
    }
    this.hide()
  }

  hide() {
    this.options.show = false
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('options' in changes) {
      const current = changes['options'].currentValue

      // onSelect and onCancel are special
      if (typeof current.onSelect === 'function') {
        this._options.onSelect = current.onSelect
      }
      if (typeof current.onCancel === 'function') {
        this._options.onCancel = current.onCancel
        this.options.showCancel = true
      }

      if (typeof current.cancelText !== 'string') {
        this.options.cancelText = this._options.cancelText
      } else {
        this.options.showCancel = true
      }
    }
  }

}

@NgModule({
  declarations: [
    XActionsheet
  ],
  imports: [
    CommonModule
  ],
  exports: [
    XActionsheet,
    CommonModule
  ]
})
export class XActionsheetModule { }

interface IActionsheetMenu {
  key: string
  value: string
}

export interface IActionsheetOptions {
  show: boolean
  menus: IActionsheetMenu[]
  showCancel?: boolean
  cancelText?: string
  onSelect?: (key: string) => void
  onCancel?: () => void
}
