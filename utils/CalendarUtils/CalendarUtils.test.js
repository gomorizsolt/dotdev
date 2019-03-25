import * as CalendarUtils from './CalendarUtils';
import BasicCalendar from '../../resources/BasicCalendar/BasicCalendar.json';

describe('CalendarUtils', () => {
  describe('AdjustFetchedCalendarStyle', () => {
    const fakeCalendar = {
      attributes: {
        width: '700',
        height: '150',
      },
      children: [
        {
          attributes: {
            transform: 'translate(0, 0)',
          },
          children: [
            {
              attributes: {
                class: 'month',
              },
            },
            {
              attributes: {
                class: 'wday',
              },
            },
          ],
        },
      ],
    };

    it('sets the width to the BasicCalendar`s width', () => {
      const expectedWidth = BasicCalendar.attributes.width;
      const actualWidth = CalendarUtils.AdjustFetchedCalendarStyle(fakeCalendar).attributes.width;

      expect(actualWidth).toEqual(expectedWidth);
    });

    it('sets the height to the BasicCalendar`s height', () => {
      const expectedHeight = BasicCalendar.attributes.height;
      const actualHeight = CalendarUtils.AdjustFetchedCalendarStyle(fakeCalendar).attributes.height;

      expect(actualHeight).toEqual(expectedHeight);
    });

    it('sets `transform` to the BasicCalendar`s transform', () => {
      const expectedTransform = BasicCalendar.children[0].attributes.transform;
      const actualTransform = CalendarUtils.AdjustFetchedCalendarStyle(fakeCalendar)
        .children[0].attributes.transform;

      expect(actualTransform).toEqual(expectedTransform);
    });

    describe('month names', () => {
      it('sets the `font-size` attribute to 13', () => {
        const adjustedCalendar = CalendarUtils.AdjustFetchedCalendarStyle(fakeCalendar);

        const fontSize = adjustedCalendar.children[0].children[0].attributes['font-size'];

        expect(fontSize).toEqual('13');
      });
    });

    describe('day names', () => {
      it('sets the `font-size` attribute to 13', () => {
        const adjustedCalendar = CalendarUtils.AdjustFetchedCalendarStyle(fakeCalendar);

        const fontSize = adjustedCalendar.children[0].children[1].attributes['font-size'];

        expect(fontSize).toEqual('13');
      });

      it('sets the `dx` attribute to -20', () => {
        const adjustedCalendar = CalendarUtils.AdjustFetchedCalendarStyle(fakeCalendar);

        const { dx } = adjustedCalendar.children[0].children[1].attributes;

        expect(dx).toEqual('-20');
      });
    });
  });
});
