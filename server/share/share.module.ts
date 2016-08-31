import {
  NgModule,
  ModuleWithProviders
} from '@angular/core'

@NgModule({
  imports: [

  ],
  exports: [

  ]
})
export class ShareModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ShareModule
    }
  }
}
