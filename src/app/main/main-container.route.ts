import {Ng2StateDeclaration} from 'ui-router-ng2';
import {MainContainer} from './main-container.component';
export let MAIN_CONTAINER_STATES: Ng2StateDeclaration[] = [
  {
    name: 'main-container',
    parent: 'base',
    abstract: true,
    component: MainContainer
  }
];


