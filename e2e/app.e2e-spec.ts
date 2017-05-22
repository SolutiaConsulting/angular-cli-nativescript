import { AngularCliNativescriptPage } from './app.po';

describe('angular-cli-nativescript App', () => {
  let page: AngularCliNativescriptPage;

  beforeEach(() => {
    page = new AngularCliNativescriptPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
