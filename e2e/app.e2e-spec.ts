import { AssistprojectPage } from './app.po';

describe('assistproject App', function() {
  let page: AssistprojectPage;

  beforeEach(() => {
    page = new AssistprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
