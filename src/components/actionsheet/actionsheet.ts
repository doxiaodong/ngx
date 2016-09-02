import {
  Component,
  NgModule,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from '@angular/core'
import { CommonModule } from '@angular/common'

interface IActionsheetMenu {
  key: string
  value: string
}

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
export class XActionsheet {

  private _menus: IActionsheetMenu[] = []

  @Input() show: boolean = false
  @Input() showCancel: boolean = false
  @Input() cancelText: string = 'Cancel'

  @Output() OnClickMenu: EventEmitter<string> = new EventEmitter()
  @Output() OnCancel: EventEmitter<any> = new EventEmitter()
  @Output('show') showChange: EventEmitter<boolean> = new EventEmitter()

  set menus(value: any) {
    this._menus = []
    // change {} => []
    for (let key in value) {
      this._menus.push({
        key: key,
        value: value[key]
      })
    }
  }
  get menus(): any {
    return this._menus
  }

  emitEvent(event: string, key?: string) {
    if (event === 'menu') {
      this.OnClickMenu.emit(key)
    }
    if (event === 'cancel') {
      this.OnCancel.emit()
    }
    this.hide()
  }

  hide() {
    this.show = false
    this.showChange.emit(this.show)
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
