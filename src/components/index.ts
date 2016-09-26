import {
  NgModule,
  ModuleWithProviders
} from '@angular/core'

import { XButtonModule } from './button'
import { XActionsheetModule } from './actionsheet'
import { XSwitchModule } from './switch'
import { XGroupModule } from './group'
import { XCellModule } from './cell'
import { XBadgeModule } from './badge'
import { XInputModule } from './input'
import { XTextareaModule } from './textarea'
import { XScrollerModule } from './scroller'

const NGX_MODULES = [
  XButtonModule,
  XActionsheetModule,
  XSwitchModule,
  XGroupModule,
  XCellModule,
  XBadgeModule,
  XInputModule,
  XTextareaModule,
  XScrollerModule
]

@NgModule({
  imports: [
    // no providers
    XButtonModule,
    XActionsheetModule,
    XSwitchModule,
    XGroupModule,
    XCellModule,
    XBadgeModule,
    XInputModule,
    XTextareaModule,
    XScrollerModule

    // with providers
  ],
  exports: NGX_MODULES
})
export class NGXRootModule { }

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
