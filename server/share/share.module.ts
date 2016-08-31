import {
  NgModule,
  ModuleWithProviders
} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NGXModule } from '../../src/components'

@NgModule({
  imports: [
    BrowserModule,
    NGXModule
  ],
  exports: [
    BrowserModule,
    NGXModule
  ]
})
export class ShareModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ShareModule
    }
  }
}
