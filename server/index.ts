import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app'

function main(): Promise<any> {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => {
      console.log(err)
    })
}

document.addEventListener('DOMContentLoaded', () => main())
