import { AngularTestPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Starting tests for angular-app', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be angular-app', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('angular-app');
    })
  });

  it('navbar-brand should be healthcare-information-exchange-network@0.0.4',() => {
    var navbarBrand = element(by.css('.navbar-brand')).getWebElement();
    expect(navbarBrand.getText()).toBe('healthcare-information-exchange-network@0.0.4');
  });

  
    it('Treatment component should be loadable',() => {
      page.navigateTo('/Treatment');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Treatment');
    });

    it('Treatment table should have 4 columns',() => {
      page.navigateTo('/Treatment');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });

  

});
