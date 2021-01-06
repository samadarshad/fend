const ds = require('../shared/data_scheme.js');

test('shared data scheme', () => {
    const newData = new ds.dataScheme(25, "1/2/2020", "happy", 12345);
    expect(newData.temperatureDegreesCelcius).toBe(25);
    expect(newData.date).toBe("1/2/2020");
    expect(newData.user_input).toBe("happy");
    expect(newData.location).toStrictEqual({zip: 12345})    
});