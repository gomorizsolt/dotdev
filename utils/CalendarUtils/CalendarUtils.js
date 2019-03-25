import BasicCalendar from '../../resources/BasicCalendar/BasicCalendar.json';

// Deep copies the given nested object, but it won't work in the case of arrays.
// We may use lodash, that provides the `cloneDeep` function to copy extremely nested structures
// and also supports arrays.
const DeepCopyObject = object => JSON.parse(JSON.stringify(object));

const UpdateMonthAttributes = monthData => ({
  ...monthData.attributes,
  'font-size': '13',
});

const UpdateDayAttributes = dayData => ({
  ...dayData.attributes,
  'font-size': '13',
  dx: '-20',
});

export const TransformCalendarStyle = (calendar) => {
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
