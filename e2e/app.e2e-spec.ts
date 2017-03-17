import { MarkTimePage } from './app.po';

describe('mark-time App', () => {
  let page: MarkTimePage;

  beforeEach(() => {
    page = new MarkTimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
