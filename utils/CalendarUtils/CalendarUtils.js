const DeepCopyObject = object => JSON.parse(JSON.stringify(object));

const GetFillColor = (dataCountValue) => {
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


const GetCalendarData = (calendarData, weekIndex, dayIndex) => {
  if (typeof dayIndex !== 'undefined') {
    return calendarData.children[0].children[weekIndex].children[dayIndex];
  }

  return calendarData.children[0].children[weekIndex];
};

export const MergeSvgs = (actualCalendar, nextCalendar) => {
  const copiedActualCalendar = DeepCopyObject(actualCalendar);

  nextCalendar.children[0].children.forEach((weeklyData, weekIndex) => {
    weeklyData.children.forEach((dailyData, dayIndex) => {
      if (dailyData.attributes['data-count']) {
        const actualCalendarDailyData = GetCalendarData(copiedActualCalendar, weekIndex, dayIndex);
        const sumOfContributions = Number(actualCalendarDailyData.attributes['data-count']) + Number(dailyData.attributes['data-count']);

        copiedActualCalendar.children[0].children[weekIndex].children[dayIndex].attributes = {
          ...actualCalendarDailyData.attributes,
          'data-count': String(sumOfContributions),
          fill: GetFillColor(sumOfContributions),
        };
      }
    });
  });

  return copiedActualCalendar;
};
