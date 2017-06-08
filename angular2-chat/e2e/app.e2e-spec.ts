import { Angular2ChatPage } from './app.po';

describe('angular2-chat App', () => {
  let page: Angular2ChatPage;

  beforeEach(() => {
    page = new Angular2ChatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
