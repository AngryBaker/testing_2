import healthRater from '../app';

test.each([
    [ [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
      ], [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ]
    ],
    [ [
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 100},
        {name: 'маг', health: 100},
        
      ], [
        {name: 'мечник', health: 100},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
      ]
    ]
])("testing health rate function", (obj, expected) => {
    const result = healthRater(obj);
    expect(result).toEqual(expected);
});