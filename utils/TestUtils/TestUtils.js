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

export const GetFakeContributionsData = () => [{
  children: [
    {
      children: [
        {
          children: [
            {
              attributes: {
                class: 'day',
                'data-count': '5',
                'data-date': '2018-03-18',
                fill: '#ebedf0',
                height: '10',
                width: '10',
                x: '13',
                y: '0',
              },
            },
            {
              attributes: {
                class: 'day',
                'data-count': '7',
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
}];
