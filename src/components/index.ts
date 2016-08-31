import {
  NgModule,
  ModuleWithProviders
} from '@angular/core'

import { XButtonModule } from './button'

const NGX_MODULES = [
  XButtonModule
]

@NgModule({
  imports: [
    // no providers
    XButtonModule

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
