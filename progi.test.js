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
  test('multipleNamesAsArray', () => {
    expect(Greeter('Martin', 'Beni')).toBe("Hello, Martin, and Beni.");
  })
  test('multipleNamesAsArrayAndNotArray', () => {
    expect(Greeter('Martin', 'Beni, Gaga')).toBe("Hello, Martin, Beni, and Gaga.");
  })
  test('multipleNamesAsArrayAndNotArray2', () => {
    expect(Greeter('Martin, Kris', 'Beni, Gaga')).toBe("Hello, Martin, Kris, Beni, and Gaga.");
  })
  test('ONEnAMEiNPUTtEST', () => {
    expect(Greeter('BÉLAA')).toBe("HELLO BÉLAA!");
  })
