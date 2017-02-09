angular2-sdk
===
>  Backand SDK for [Angular.js 2](https://angular.io/).
 This is the documentation for Back&'s Angular 2 SDK. This SDK enables you to communicate comfortably and quickly with your Backand app.
It wraps the [vanilla-sdk](https://github.com/backand/vanilla-sdk) to allow you to work with Back& more easily when working on projects based on Angular.js 2.


## Overview
This SDK is an Angular 2 wrapper around our [vanilla-sdk](https://github.com/backand/vanilla-sdk). This provides convenient objects and properties for Angular 2 apps working with Back&. You can refer to the [vanilla-sdk](https://github.com/backand/vanilla-sdk)'s readme for a full API reference. Follow the instructions below to install our Angular 2 SDK!


## Installation
To install the Angular 2 SDK, use the correct command for your dependency management platform:

| Provider | Command |
| -------- | ------- |
| npm | `$ npm i -S @backand/angular2-sdk` |
| yarn | `$ yarn add @backand/angular2-sdk` |

## Import
Use the following import statement to include the Angular2 SDK in your project:

```javascript
import { BackandService } from '@backand/angular2-sdk'
```


## Quick start

Using the Back& Angular2 SDK requires two steps - configuring access to the BackandService provider, and then actually calling the provider using the [vanilla-sdk](https://github.com/backand/vanilla-sdk) methods.

#### app.module.ts:
Update `app.module.ts` to include the BackandService as a provider

```javascript
@NgModule({
  imports: [ ... ],
  declarations: [ ... ],
  providers: [ BackandService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

#### app.component.ts:
Now, call the SDK from `app.component.ts`. The SDK is initialized during `ngOnInit()`, and `getList` is called as a property on `AppComponent`

```javascript
@Component({
  selector: 'my-app',
  template: `<h1>Hello angular2-sdk</h1>
    <h3>{{res}}</h3>`
})
export class AppComponent implements OnInit {
  res: string;
  constructor(private backand: BackandService) { }
  getList(): void {
    this.res = 'fetching objects...';
    this.backand.object.getList('users').then((res: any) => {
      this.res = `${res.data.length} objects fetched`;
      console.log(res);
    })
  }
  ngOnInit(): void {
    this.backand.init({
      appName: 'APP_NAME',
      anonymousToken: 'ANONYMOUS_TOKEN'
    });
    this.getList();
 }
}
```

Review the full API reference at our [vanilla-sdk's github](https://github.com/backand/vanilla-sdk) to get started with your back end!

## Examples
***To view a demo of the SDK in action, just run `npm start` - [example page](https://github.com/backand/angular2-sdk/blob/master/example/).***


## License

  [MIT](LICENSE)
