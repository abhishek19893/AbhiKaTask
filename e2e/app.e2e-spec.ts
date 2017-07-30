import { AbhiKaTaskPage } from './app.po';

describe('abhi-ka-task App', () => {
  let page: AbhiKaTaskPage;

  beforeEach(() => {
    page = new AbhiKaTaskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
