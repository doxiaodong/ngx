import {
  Component,
  NgModule
} from '@angular/core'

@Component({
  moduleId: module.id,
  selector: '[x-button]',
  template: require('./button.html'),
  styles: [
    require('./button.scss')
  ]
})
export class XButton { }

@NgModule({
  declarations: [
    XButton
  ],
  exports: [
    XButton
  ]
})
export class XButtonModule { }

