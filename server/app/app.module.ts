import { NgModule } from '@angular/core'
import { ShareModule } from '../share'
import { AppComponent } from './app.component'

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    ShareModule
  ]
})
export class AppModule {

}
