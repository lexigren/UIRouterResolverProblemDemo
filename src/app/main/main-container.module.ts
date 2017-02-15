import {NgModule} from '@angular/core';
import {MainContainer} from './main-container.component';
import {UIRouterModule} from 'ui-router-ng2';
import {MAIN_CONTAINER_STATES} from './main-container.route';


@NgModule({
  declarations: [
    MainContainer
  ],
  imports: [
    UIRouterModule.forChild({states: MAIN_CONTAINER_STATES})
  ],
  bootstrap: [MainContainer]

})
export class MainContainerModule {
}
