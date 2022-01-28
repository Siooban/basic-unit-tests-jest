const fizzBuzz = require("../src/fizzbuzz")

test('fizzbuzz case 3', () => {

    expect(fizzBuzz(33)).toBe("Fizz")
})
test('fizzbuzz case 5 ',() => {
    expect(fizzBuzz(25)).toBe("Buzz")
})

test('fizzbuzz case 15 ',() => {
    expect(fizzBuzz(30)).toBe("Fizzbuzz")
})

test('fizzbuzz case none ',() => {
    expect(fizzBuzz(11)).toBe(undefined)
})