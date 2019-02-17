import { RoutersPage } from './app.po';

describe('routers App', () => {
  let page: RoutersPage;

  beforeEach(() => {
    page = new RoutersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
