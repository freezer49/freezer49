// EXERCICE 1 : Given the data, define the interface "User" and use it accordingly.

// 1. Définis l'interface User en regardant les données
export interface User {
  name: string;
  age: number;
  occupation: string;
}

// 2. Type le tableau avec User[]

export const users: User[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
];

export function logPerson(user: User) {
  console.log(` - ${user.name}, ${user.age}`);
}
console.log("Users:");
users.forEach(logPerson);
