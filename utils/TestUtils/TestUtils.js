export const mockOriginalFunctionality = (name) => {
  const actualModule = require.requireActual(name);

  return {
    ...Object.getOwnPropertyNames(actualModule)
      .map(functionName => ({
        [functionName]: jest.fn().mockImplementation((...args) => actualModule[functionName](args)),
      }))
      .reduce((accumulator, currentValue) => ({ ...accumulator, ...currentValue })),
  };
};

export const getFakeContributionsObjectWithDailyCounts = dailyCounts => dailyCounts.map(count => ({
  children: [
    {
      children: [
        {
          children: [
            {
              attributes: {
                class: 'day',
                'data-count': count,
                'data-date': '2018-03-18',
                fill: '#ebedf0',
                height: '10',
                width: '10',
                x: '13',
                y: '0',
              },
            },
          ],
        },
      ],
    },
  ],
}));
