# Mobile web UI based on Angular and Weui

# Demo
  [http://ngx.darlin.me](http://ngx.darlin.me)

# Usage

* install
`npm i ngx-src --save`
* use (x-input)
```typescript
import { NgModule } from '@angular/core
import { XInputModule } from 'ngx-src/src/components/input'
@NgModule({
  imports: [
    XInputModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
* For shared NgModule
```typescript
import { NgModule } from '@angular/core
import { XInputModule } from 'ngx-src/src/components/input'
@NgModule({
  imports: [
    XInputModule
  ],
  exports: [
    XInputModule
  ]
})
export class SharedModule { }
```

* if you need all
```typescript
import { NgModule } from '@angular/core
import { NGXModule } from 'ngx-src'
@NgModule({
  imports: [
    NGXModule
  ],
  exports: [
    NGXModule
  ]
})
export class SharedModule { }
```

## x-button

## x-actionsheet

## x-group

## x-switch

## x-cell

## x-icon

## x-input

## x-textarea

## x-badge
