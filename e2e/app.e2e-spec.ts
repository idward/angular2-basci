import { Angular2BasicPage } from './app.po';

describe('angular2-basic App', () => {
  let page: Angular2BasicPage;

  beforeEach(() => {
    page = new Angular2BasicPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
