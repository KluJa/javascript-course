"use strict";

//Assortment of small challenges that did not have their own chapter

// #1 Getting values out of an object

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  friends: ["Michael", "Peter", "Steven"],
  age: 46,
  job: "teacher",

  jonasSummary: function () {
    return `${this.firstName} is a ${this.age} old ${this.job}, who has ${this.friends.length} friends whose names are: ${this.friends}`;
  },
};

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[1]}`
);

console.log(jonas.jonasSummary());
