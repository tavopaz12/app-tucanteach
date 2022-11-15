let users = [
  {
    id: "1",
    numer: 1212,
    name: "userName",
    userName: "useer12",
    date: "12/05/1995",
  }
];

export function getUsers() {
  return users;
}

export function getUser(userName) {
  return users.find((user) => user.userName === userName);
}
