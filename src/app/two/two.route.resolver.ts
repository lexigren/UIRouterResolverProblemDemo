export function twoRouteResolver() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('%cchecking', 'color:red;');
      console.log('resolving');
      resolve();
    }, 1000);
  });
}
