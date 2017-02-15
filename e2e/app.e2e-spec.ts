import { UIRouterTestPage } from './app.po';

describe('uirouter-test App', function() {
  let page: UIRouterTestPage;

  beforeEach(() => {
    page = new UIRouterTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
