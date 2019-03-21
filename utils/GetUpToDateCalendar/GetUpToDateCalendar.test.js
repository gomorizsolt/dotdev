import GetUpToDateCalendar from './GetUpToDateCalendar';

describe('GetUpToDateCalendar', () => {
  it('sets the first date to the current date subtracted by one year', () => {
    const updatedBasicCalendar = GetUpToDateCalendar();
    const expectedDate = new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toLocaleDateString().replace(/. /g, '-').slice(0, 10);

    const actualDate = updatedBasicCalendar.children[0].children[0].children[0].attributes['data-date'];

    expect(actualDate).toEqual(expectedDate);
  });
});
