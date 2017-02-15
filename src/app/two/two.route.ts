import {Ng2StateDeclaration} from 'ui-router-ng2';
import {TwoComponent} from './two.component';
import {setTimeout} from 'timers';
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
        resolveFn: () => {
          return new Promise(resolve => {
            setTimeout(() => {
              console.log('%cchecking', 'color:red;');
              console.log('resolving');
              resolve();
            }, 1000);
          });
        }
      }
    ]
  }
];


