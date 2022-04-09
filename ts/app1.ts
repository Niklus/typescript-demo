interface User {
  name: string;
}

class UserAccount {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const user: User = new UserAccount('Nicholas');

const userName: Node = document.createElement('h1');

userName.textContent = user.name;

document.body.appendChild(userName);
