import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {UIRouterModule} from 'ui-router-ng2';
import {MAIN_STATES} from './app.module.routes';
import {OneModule} from './one/one.module';
import {TwoModule} from './two/two.module';
import {MainContainerModule} from './main/main-container.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UIRouterModule.forRoot({
      states: MAIN_STATES,
      useHash: true,
      otherwise: {state: 'one'},
    }),
    MainContainerModule,
    OneModule,
    TwoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
