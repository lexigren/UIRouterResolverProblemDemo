import {Ng2StateDeclaration} from 'ui-router-ng2';
import {MainContainer} from './main/main-container.component';

export let MAIN_STATES: Ng2StateDeclaration[] = [
  {
    name: 'base',
    abstract: true,
    component: MainContainer
  }
];
