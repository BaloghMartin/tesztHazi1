const Greeter = require('./progi');

  test('itShouldWor', () => {
    expect(true).toBe(true);  });

  test('emptyInputTest', () => {
    expect(Greeter()).toBe("Hello, my friend.");
  });
