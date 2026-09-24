import { SelectMenuPage } from '../pages/SelectMenuPage';

describe('Select Menu', () => {
  const menu = new SelectMenuPage();
  beforeEach(() => {
    menu.visit();
  });
  it('TC-SEL-01: selects multiple and removes colors in the React dropdown', () => {
    const colors = ['Green', 'Blue'];
    menu.selectColors(colors);
    menu.expectSelectedColors(colors);
    menu.removeColor('Green');
    menu.expectSelectedColors(['Blue']);
  });
});
