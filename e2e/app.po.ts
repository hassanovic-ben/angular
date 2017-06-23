import { browser, element, by } from 'protractor';

export class BlankPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.tagName('h1')).getText();
  }
}
