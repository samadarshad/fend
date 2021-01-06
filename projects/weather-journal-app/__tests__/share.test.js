const share = require('../shared/share.js');

test('shared data object', () => {
    const newData = new share.dataScheme(25, "1/2/2020", "happy");
    expect(newData.temperatureDegreesCelcius).toBe(25);
    expect(newData.date).toBe("1/2/2020");
    expect(newData.user_input).toBe("happy");    
});