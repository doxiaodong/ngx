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

  ngOnInit() {
    setTimeout(() => {
      this.disabled = true
    }, 5000)
  }

}
