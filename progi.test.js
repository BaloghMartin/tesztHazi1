const Greeter = require('./progi');

  test('itShouldBeTrue', () => {
    expect(true).toBe(true);  });

  test('itShouldGreetWithoutGivingNames', () => {
    expect(Greeter()).toBe("Hello, my friend.");
  });

  test('itShouldGreetWithOneNameGiven', () => {
    expect(Greeter("Martin")).toBe("Hello, Martin.");
  });

  test('itShouldGreetWithMultipleNamesGivenAsString', () => {
    expect(Greeter("Martin, Beni")).toBe("Hello, Martin, and Beni.");
  })
  test('itShouldGreetWithMultipleNamesGivenAsArray', () => {
    expect(Greeter('Martin', 'Beni')).toBe("Hello, Martin, and Beni.");
  })
  test('itShouldGreetWithMultipleNamesGivenAsArrayAndString', () => {
    expect(Greeter('Martin', 'Beni, Gaga')).toBe("Hello, Martin, Beni, and Gaga.");
  })
  test('itShouldGreetWithMultipleNamesGivenAsMultipleStrings', () => {
    expect(Greeter('Martin, Kris', 'Beni, Gaga')).toBe("Hello, Martin, Kris, Beni, and Gaga.");
  })
  test('itShouldShoutWithOneAllCapitalNameGiven', () => {
    expect(Greeter('BÉLAA')).toBe("HELLO BÉLAA!");
  })
  test('itShouldShoutWithMultipleAllCapitalNamesGivenAsString', () =>{
    expect(Greeter('BÉLA, SANYI')).toBe("HELLO BÉLA, AND SANYI!");
  })
  test('itShouldShoutWithMultipleAllCapitalNamesGivenAsStringAndArray', () =>{
    expect(Greeter('BÉLA, SANYI', 'GERI')).toBe("HELLO BÉLA, SANYI, AND GERI!");
  })
  test('itShouldGreetLowerCaseNamesAndShoutAllCapitalNames', () =>{
  expect(Greeter('JAY', 'Maya', 'Alice', 'BOB', 'Charlotte')).toBe("Hello, Maya, Alice, and Charlotte. AND HELLO JAY, AND BOB!");
  })
  test('itShouldGreetLowerCaseNamesAndShoutAllCapitalNamesGivenAsAMixOfStringAndArray', () =>{
    expect(Greeter('JAY', 'Maya', 'Alice', 'BOB, Martin', 'Charlotte')).toBe("Hello, Maya, Alice, Martin, and Charlotte. AND HELLO JAY, AND BOB!");
    })