import GetUpdatedBasicCalendar from './GetUpdatedBasicCalendar';

describe('GetUpdatedBasicCalendar', () => {
  it('sets the first date to the current date substacted by one year', () => {
    const updatedBasicCalendar = GetUpdatedBasicCalendar();
    const expectedDate = new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toLocaleDateString().replace(/. /g, '-').slice(0, 10);

    const actualDate = updatedBasicCalendar.children[0].children[0].children[0].attributes['data-date'];

    expect(actualDate).toEqual(expectedDate);
  });
});
