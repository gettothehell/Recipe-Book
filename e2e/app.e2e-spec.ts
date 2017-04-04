import { MyCourseAppPage } from './app.po';

describe('my-course-app App', () => {
  let page: MyCourseAppPage;

  beforeEach(() => {
    page = new MyCourseAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
