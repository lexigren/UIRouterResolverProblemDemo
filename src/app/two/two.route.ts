import {Ng2StateDeclaration} from 'ui-router-ng2';
import {TwoComponent} from './two.component';
import {setTimeout} from 'timers';
import {twoRouteResolver} from './two.route.resolver';
export let TWO_STATES: Ng2StateDeclaration[] = [
  {
    name: 'two',
    parent: 'main-container',
    url: '/two',
    views: {
      'mainContent@base': {component: TwoComponent},
    },
    resolve: [
      {
        token: 'two',
        deps: [],
        resolveFn: twoRouteResolver
      }
    ]
  }
];


