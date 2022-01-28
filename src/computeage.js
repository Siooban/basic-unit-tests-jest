function computeAge(birthday, currentDate){

    var age = currentDate.getFullYear() - birthday.getFullYear();

    var m = currentDate.getMonth() - birthday.getMonth();

    if (m < 0 || (m === 0 && currentDate.getDate() < birthday.getDate())) {

      age--;

    }
    console.log(age)
    return age;

}

const data1 = new Date();
data1.setDate(5)
data1.setMonth(11)
data1.setFullYear(1999)
const data2 = new Date();
data2.setDate(20)
data2.setMonth(0)
data2.setFullYear(2022)

const data3 = new Date();
data3.setDate(6)
data3.setMonth(10)
data3.setFullYear(1980)

const data4 = new Date();
data4.setDate(24)
data4.setMonth(6)
data4.setFullYear(2010)

const data5 = new Date();
data5.setDate(20)
data5.setMonth(1)
data5.setFullYear(2021)
computeAge(data1, data2)

computeAge(data3, data2)

computeAge(data4, data2)

computeAge(data5, data2)

module.exports=computeAge