import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core'

import { IActionsheetOptions } from '../../src/components/actionsheet/'

@Component({
  selector: 'ngx-app',
  encapsulation: ViewEncapsulation.None,
  template: require('./app.html'),
  styles: [
    require('./app.less')
  ]
})
export class AppComponent implements OnInit {

  disabled: boolean = false

  buttonOptions = {
    // ? d: ''
    // size: 'mini',
    // ? d: false
    isPlain: true
  }

  groupOptions = {
    // ?
    color: 'blue',
    // ? d: false
    isAccess: true
  }

  // showCancel is true cancelText or onCancel is set
  actionsheetOptions: IActionsheetOptions = {
    show: false,
    menus: [{
      key: 'wechat',
      value: 'Pang you Quan'
    }, {
      key: 'qq',
      value: 'QQ'
    }],
    // ? d: false
    showCancel: true,
    // ? d: Cancel
    cancelText: '取消',
    // ?
    onSelect(key: string) {
      console.log('actionsheet selected', key)
    },
    // ?
    onCancel() {
      console.log('actionsheet cancel')
    }
  }

  switch = {
    value: false,
    OnChange(v) {
      console.log('switch change', v)
    }
  }

  showActionsheet() {
    this.actionsheetOptions.show = true
  }

  ngOnInit() {
    setTimeout(() => {
      this.disabled = true
      this.buttonOptions.isPlain = false
      this.groupOptions.color = 'orange'
    }, 5000)
  }

}
