// let dom = document.getElementById('title');
// console.log(dom.id);
// console.log(dom.className);

// const listItem = document.querySelectorAll('li');

// console.log(listItem);
// console.log(listItem[0]);
// console.log(listItem[0].textContent);
// console.log(listItem[3].textContent);
// console.log(listItem[2].style.color = 'red')
// console.log(listItem[1].innerHTML = '<span></span>');
// console.log(listItem[1].style.display = 'none');

// let val;
// val = 6;
// console.log(val);

const Person = function (name, birthYaer) {
    this.name = name;
    this.birthYaer = birthYaer;
    // this.clac = function(){
    //     console.log(2022-birthYaer);
    // };
}


const uchkun = new Person('Uchkun', 1987);
const temur = new Person('Temur', 2014)

console.log(Person.prototype)
Person.prototype.calcAge = function(){
    console.log(2022-this.birthYaer);
};

uchkun.calcAge()
temur.calcAge()