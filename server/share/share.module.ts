import {
  NgModule,
  ModuleWithProviders
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { NGXModule } from '../../src/components'

@NgModule({
  imports: [
    CommonModule,
    NGXModule
  ],
  exports: [
    CommonModule,
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
