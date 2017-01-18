angular2-sdk
===
[![npm version](https://img.shields.io/npm/v/@backand/angular2-sdk.svg?style=flat-square)](https://www.npmjs.org/package/@backand/angular2-sdk)
[![npm downloads](https://img.shields.io/npm/dt/@backand/angular2-sdk.svg?style=flat-square)](http://npm-stat.com/charts.html?package=@backand/angular2-sdk)

>  Backand SDK for [Angularjs2](https://angular.io/).
This SDK enables you to communicate comfortably and quickly with your Backand app.
It wraps the [vanilla-sdk](https://github.com/backand/vanilla-sdk) to allow easier work on projects involving Angularjs2.


## Installation
- npm:
```bash
$ npm i -S @backand/angular2-sdk
```
- yarn:
```bash
$ yarn add @backand/angular2-sdk
```


## Import
```javascript
import { BackandService } from '@backand/angular2-sdk'
```


## Quick start
#### app.module.ts:
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
```javascript
@Component({
  selector: 'my-app',
  template: `<h1>{{res}}</h1>`
})
export class AppComponent implements OnInit {
  res: string;
  constructor(private backand: BackandService) { }
  getList(): void {
    this.backand.object.getList('items').then((res: any) => {
      this.res = 'Hello angular2-sdk';
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


## Examples
***To view the demo web page, just run npm start - [example page](https://github.com/backand/angular2-sdk/blob/master/example/).***


## License

  [MIT](LICENSE)
