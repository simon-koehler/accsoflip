import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  clickFlipper() {
    return element(by.className('card')).click();
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getLoaderSrc() {
    return element(by.className('loader')).getAttribute('src');
  }

  getLoaderHidden() {
    return element(by.className('loader')).isDisplayed();
  }

  getBackText() {
    return element(by.className('back')).getText();
  }

  getFrontSrc() {
    return element(by.className('picture')).getAttribute('src');
  }
}
