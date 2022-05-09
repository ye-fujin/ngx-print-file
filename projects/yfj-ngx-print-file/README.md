# YfjNgxPrintFile

Angular directive to print files in a new tab. Please, refer to the demo app [here](https://github.com/ye-fujin/yfj-ngx-print-file)

## Usage

1. Install package

    `npm i yfj-ngx-print-file`

2. Import `YfjNgxPrintFileModule` module into your app
    ```
    import { YfjNgxPrintFileModule } from 'yfj-ngx-print-file';

    @NgModule({
    ...
    imports: [YfjNgxPrintFileModule, ...],
    ...
    })
    export class AppModule {
    }
    ```

3. Use `[yfjNgxPrintFile]="yourObservableReturningBlob()"` to print your file
    ```
    <button class="yjf-get-file-btn" [yfjNgxPrintFile]="getFile()">Print file</button>
    ```

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Code scaffolding

Run `ng generate component component-name --project yfj-ngx-print-file` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project yfj-ngx-print-file`.
> Note: Don't forget to add `--project yfj-ngx-print-file` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build yfj-ngx-print-file` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build yfj-ngx-print-file`, go to the dist folder `cd dist/yfj-ngx-print-file` and run `npm publish`.

## Running unit tests

Run `ng test yfj-ngx-print-file` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
