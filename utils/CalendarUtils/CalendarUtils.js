import BasicCalendar from '../../resources/BasicCalendar/BasicCalendar.json';

// Deep copies the given nested object, but it won't work in the case of arrays.
// We may use `lodash`, that provides the `cloneDeep` function to copy extremely nested structures
// - and also supports arrays.
// SO: https://stackoverflow.com/a/28876564/9599137
const DeepCopyObject = object => JSON.parse(JSON.stringify(object));

const UpdateMonthAttributes = monthData => ({
  ...monthData.attributes,
  'font-size': '13',
});

// SMALLER CALENDARS DO NOT FIT THE BASIC CALENDAR.
const UpdateDayAttributes = dayData => ({
  ...dayData.attributes,
  'font-size': '13',
  dx: '-20',
});

export const AdjustFetchedCalendarStyle = (calendar) => {
  const deepCopiedCalendar = DeepCopyObject(calendar);

  deepCopiedCalendar.attributes.width = BasicCalendar.attributes.width;
  deepCopiedCalendar.attributes.height = BasicCalendar.attributes.height;
  deepCopiedCalendar.children[0].attributes.transform = BasicCalendar
    .children[0].attributes.transform;

  deepCopiedCalendar.children[0].children.forEach((weeklyData, weekIndex) => {
    if (weeklyData.attributes.class === 'month') {
      deepCopiedCalendar.children[0].children[weekIndex].attributes = {
        ...UpdateMonthAttributes(weeklyData),
      };
    }

    if (weeklyData.attributes.class === 'wday') {
      deepCopiedCalendar.children[0].children[weekIndex].attributes = {
        ...UpdateDayAttributes(weeklyData),
      };
    }
  });

  return deepCopiedCalendar;
};

const SetFillColor = (dataCountValue) => {
  let fillColor = '#ebedf0';

  if (dataCountValue > 0 && dataCountValue < 10) {
    fillColor = '#c6e48b';
  }

  if (dataCountValue >= 10 && dataCountValue < 20) {
    fillColor = '#7bc96f';
  }

  if (dataCountValue >= 20 && dataCountValue < 30) {
    fillColor = '#239a3b';
  }

  if (dataCountValue >= 30) {
    fillColor = '#196127';
  }

  return fillColor;
};

const GetSvgCountValue = (svgData, weekIndex, dayIndex) => Number(svgData.children[0].children[weekIndex].children[dayIndex].attributes['data-count']);

export const MergeSvgs = (actualCalendar, parsedSvgData) => {
  const deepCopiedActualCalendar = DeepCopyObject(actualCalendar);

  deepCopiedActualCalendar.children[0].children.forEach((weeklyData, weekIndex) => {
    weeklyData.children.forEach((dailyData, dayIndex) => {
      if (dailyData.attributes['data-count']) {
        const sumOfCountValues = GetSvgCountValue(actualCalendar, weekIndex, dayIndex)
          + GetSvgCountValue(parsedSvgData, weekIndex, dayIndex);

        deepCopiedActualCalendar.children[0].children[weekIndex].children[dayIndex].attributes = {
          ...deepCopiedActualCalendar.children[0].children[weekIndex].children[dayIndex].attributes,
          'data-count': String(sumOfCountValues),
          fill: SetFillColor(sumOfCountValues),
        };
      }
    });
  });

  return deepCopiedActualCalendar;
};
