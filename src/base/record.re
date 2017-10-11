let me: Person.person = {age: 12, name: "arvin"};

let you = {...me, age: me.age + 1};

type mutablePerson = {
  name: string,
  mutable age: int
};

let he: mutablePerson = {name: "hehe", age: 1};

he.age = 12;