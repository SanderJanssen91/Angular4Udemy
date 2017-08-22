import { GalgadotPage } from './app.po';

describe('galgadot App', () => {
  let page: GalgadotPage;

  beforeEach(() => {
    page = new GalgadotPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
