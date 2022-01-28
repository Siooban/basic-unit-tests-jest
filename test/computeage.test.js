const computeAge = require("../src/computeage")











test('computeAge case birthdayMonth < currentMonth', () => {
    const data1 = new Date();
    data1.setDate(5)
    data1.setMonth(0)
    data1.setFullYear(1999)

    const data2 = new Date();
    data2.setDate(20)
    data2.setMonth(1)
    data2.setFullYear(2022)

    expect(computeAge(data1, data2)).toBe(23)
})

test('computeAge case birthdayMonth =CurrentMonth', () => {

    const data2 = new Date();
    data2.setDate(20)
    data2.setMonth(1)
    data2.setFullYear(2022)
    const data3 = new Date();
    data3.setDate(6)
    data3.setMonth(10)
    data3.setFullYear(1980)
    expect(computeAge(data3, data2)).toBe(41)
})

test('computeAge birthdayMonth=currentMonth and Birthday<Currentday', () => {
    const data2 = new Date();
    data2.setDate(24)
    data2.setMonth(6)
    data2.setFullYear(2022)
    const data4 = new Date();
    data4.setDate(20)
    data4.setMonth(6)
    data4.setFullYear(2010)

    expect(computeAge(data4, data2)).toBe(12)
})

test('computeAge case same month, same day', () => {
    const data2 = new Date();
    data2.setDate(20)
    data2.setMonth(1)
    data2.setFullYear(2022)

    const data5 = new Date();
    data5.setDate(20)
    data5.setMonth(1)
    data5.setFullYear(2021)
    expect(computeAge(data5, data2)).toBe(1)
})