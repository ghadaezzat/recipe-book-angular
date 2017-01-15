import { browser, element, by } from 'protractor';

export class RecipeBookPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('trb-root h1')).getText();
  }
}
