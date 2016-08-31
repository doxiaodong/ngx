import {
  Component,
  OnInit
} from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'ngx-app',
  template: require('./app.html'),
  styles: [
    require('./app.scss')
  ]
})
export class AppComponent implements OnInit {

  ngOnInit() {
    console.log('start')
  }

}
