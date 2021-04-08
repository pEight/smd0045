// Creating private attributes with ES5
function people() {
  let pName, pAge;

  function People(name, age) {
    pName = name;
    pAge = age;
  }

  function getName() {
    return pName;
  }

  function getAge() {
    return pAge;
  }

  People.prototype = { getName, getAge };
  People.constructor = People;

  function gen(name, age) {
    return new People(name, age);
  }

  return {
    People,
  };
}

const  { People } = people();

const p1 = new People('Phillipe', 22);

console.log('NOME: ', p1.getName());
console.log('IDADE: ', p1.getAge());
console.log(p1 instanceof People);
