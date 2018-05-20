import {AppPage} from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display text', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello, my name is...');
  });

  it('should display loader on start', () => {
    expect(page.getLoaderSrc()).toContain('http');
  });

  it('should display a name as back text', () => {
    page.clickFlipper();
    expect(page.getBackText()).not.toBe('');
  });

  it('should display a another image after clicking twice', () => {
    const lastPicture = page.getFrontSrc();
    page.clickFlipper();
    page.clickFlipper();
    expect(page.getFrontSrc).not.toBe(lastPicture);
  });
});
