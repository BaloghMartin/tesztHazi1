const Greeter = require('./progi');

  test('itShouldWor', () => {
    expect(true).toBe(true);  });

  test('emptyInputTest', () => {
    expect(Greeter()).toBe("Hello, my friend.");
  });

  test('oneNameInputTest', () => {
    expect(Greeter("Martin")).toBe("Hello, Martin.");
  });

  test('multipleNames', () => {
    expect(Greeter("Martin, Beni")).toBe("Hello, Martin, and Beni.");
  })

