const faker = require('faker');
const peopleList = [];
const numberOfPeople = 20;

class Person {
  constructor() {
    this.firstname = faker.name.firstName();
    this.lastname = faker.name.lastName();
  }
}

for (let i = 0; i < numberOfPeople; i++) {
  const person = new Person();
  peopleList.push(person);
}

class GroupMaker {
  static generateGroups(peopleList, numberOfGroups) {
    if (peopleList.length % numberOfGroups !== 0) {
      throw new Error('Le nombre de groupes spécifié est invalide.');
    }

    const groupSize = peopleList.length / numberOfGroups;
    const groups = [];

    for (let i = 0; i < numberOfGroups; i++) {
      const startIndex = i * groupSize;
      const endIndex = startIndex + groupSize;
      const group = peopleList.slice(startIndex, endIndex);
      groups.push(group);
    }

    return groups;
  }
}

const groups = GroupMaker.generateGroups(peopleList, 4);
console.log(groups);
