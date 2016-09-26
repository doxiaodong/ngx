import {
  Component,
  NgModule,
  ViewEncapsulation,
  OnInit
} from '@angular/core'
import { assign } from '../utils'

const XScroll = require('xscroll/build/cmd/xscroll.js')
const Pulldown = require('xscroll/build/cmd/plugins/pulldown.js')
const Pullup = require('xscroll/build/cmd/plugins/pullup.js')

let nextUniqueId = 0

const pulldownDefaultConfig: IPulldownConfig = {
  content: 'Pull Down To Refresh',
  height: 60,
  autoRefresh: false,
  downContent: 'Pull Down To Refresh',
  upContent: 'Release To Refresh',
  loadingContent: 'Loading...',
  clsPrefix: 'xs-plugin-pulldown-'
}
const pullupDefaultConfig: IPullupConfig = {
  content: 'Pull Up To Refresh',
  pullUpHeight: 60,
  height: 40,
  autoRefresh: false,
  downContent: 'Release To Refresh',
  upContent: 'Pull Up To Refresh',
  loadingContent: 'Loading...',
  clsPrefix: 'xs-plugin-pullup-'
}

@Component({
  selector: 'x-scroller',
  encapsulation: ViewEncapsulation.None,
  inputs: [
    'options'
  ],
  template: `
    <div class="xs-container" [attr.id]="id">
      <ng-content></ng-content>
      <ng-content name="pulldown"></ng-content>
      <ng-content name="pullup"></ng-content>
    </div>
  `,
  styles: [
    `
      .xs-plugin-pullup-container {
        text-align: center;
      }
    `
  ]
})
export class XScroller implements OnInit {
  private _options: IScrollerOptions = {

  }
  private _xscroll: any
  id: string = `ngx-scroller-${nextUniqueId++}`

  set options(value: IScrollerOptions) {
    assign(this._options, value)
  }

  get options(): IScrollerOptions {
    return this._options
  }

  ngOnInit() {
    // this._xscroll = new XScroll({
    //   renderTo: this.id,
    //   lockX: this.options.lockX,
    //   lockY: this.options.lockY,
    //   scrollbarX: this.options.scrollbarX,
    //   scrollbarY: this.options.scrollbarY,
    //   // content: this.options,
    //   bounce: this.options.bounce,
    //   useOriginScroll: false,
    //   useTransition: true,
    //   preventDefault: true,
    //   boundryCheck: true,
    //   gpuAcceleration: true,
    //   stopPropagation: false
    // })
  }
}

@NgModule({
  declarations: [
    XScroller
  ],
  exports: [
    XScroller
  ]
})
export class XScrollerModule { }

export interface IPulldownConfig {
  content?: string
  height?: number
  autoRefresh?: boolean
  downContent?: string
  upContent?: string
  loadingContent?: string
  clsPrefix?: string
}

export interface IPullupConfig {
  content?: string
  pullUpHeight?: number
  height?: number
  autoRefresh?: boolean
  downContent?: string
  upContent?: string
  loadingContent?: string
  clsPrefix?: string
}

export interface IScrollerOptions {
  height?: string
  lockX?: boolean
  lockY?: boolean
  scrollbarX?: boolean
  scrollbarY?: boolean
  bounce?: boolean
  usePulldown?: boolean
  usePullup?: boolean
  pulldownConfig?: IPulldownConfig
  pullupConfig?: IPullupConfig
}
