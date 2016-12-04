import { browser, element, by } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('lgn-root h1')).getText();
  }
}
