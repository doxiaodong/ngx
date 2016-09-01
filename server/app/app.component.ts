import {
  Component,
  OnInit
} from '@angular/core'

@Component({
  selector: 'ngx-app',
  template: require('./app.html'),
  styles: [
    require('./app.less')
  ]
})
export class AppComponent implements OnInit {

  disabled: boolean = false

  actionsheet: any = {
    show: false,
    menus: {
      wechat: 'Pang you Quan',
      qq: 'QQ'
    },
    OnClickMenu(key: string) {
      console.log('actionsheet selected', key)
    },
    OnCancel() {
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
    this.actionsheet.show = true
  }

  ngOnInit() {
    setTimeout(() => {
      this.disabled = true
    }, 5000)
  }

}
