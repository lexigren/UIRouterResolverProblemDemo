import {Ng2StateDeclaration} from 'ui-router-ng2';
import {OneComponent} from './one.component';
export let ONE_STATES: Ng2StateDeclaration[] = [
  {
    name: 'one',
    parent: 'main-container',
    url: '/one',
    views: {
      'mainContent@base': {component: OneComponent},
    }
  }
];


