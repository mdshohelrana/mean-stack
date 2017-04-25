import { FullStackAngular2NodejsMongodbPage } from './app.po';

describe('full-stack-angular2-nodejs-mongodb App', () => {
  let page: FullStackAngular2NodejsMongodbPage;

  beforeEach(() => {
    page = new FullStackAngular2NodejsMongodbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
