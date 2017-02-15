
import {OneComponent} from './one.component';
import {UIRouterModule} from 'ui-router-ng2';
import {NgModule} from '@angular/core';
import {ONE_STATES} from './one.route';
@NgModule({
  declarations: [
    OneComponent
  ],
  imports: [
    UIRouterModule.forChild({states: ONE_STATES})
  ]

})
export class OneModule {
}
