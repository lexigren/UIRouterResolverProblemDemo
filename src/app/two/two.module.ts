import {TwoComponent} from './two.component';
import {UIRouterModule} from 'ui-router-ng2';
import {NgModule} from '@angular/core';
import {TWO_STATES} from './two.route';
@NgModule({
  declarations: [
    TwoComponent
  ],
  imports: [
    UIRouterModule.forChild({states: TWO_STATES})
  ]

})
export class TwoModule {
}
