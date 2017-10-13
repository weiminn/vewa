import { RestaurantPage } from './app.po';

describe('restaurant App', () => {
  let page: RestaurantPage;

  beforeEach(() => {
    page = new RestaurantPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
