import {
  NgModule,
  ModuleWithProviders
} from '@angular/core'

import { XButtonModule } from './button'
import { XActionsheetModule } from './actionsheet'
import { XSwitchModule } from './switch'
import { XGroupModule } from './group'

const NGX_MODULES = [
  XButtonModule,
  XActionsheetModule,
  XSwitchModule,
  XGroupModule
]

@NgModule({
  imports: [
    // no providers
    XButtonModule,
    XActionsheetModule,
    XSwitchModule,
    XGroupModule

    // with providers
  ],
  exports: NGX_MODULES
})
export class NGXRootModule {}

@NgModule({
  imports: NGX_MODULES,
  exports: NGX_MODULES
})
export class NGXModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NGXRootModule
    }
  }
}
