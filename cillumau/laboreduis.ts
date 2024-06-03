// Interface to describe the structure of a User object
interface User {
  username: string;
}

// Class to create a User object and display the username
class UserAccount {
  private user: User;

  constructor(username: string) {
    this.user = { username };
  }

  // Method to display the username
  public displayUsername(): void {
    console.log(`The username is: ${this.user.username}`);
  }
}

// Creating a new UserAccount instance with the username "Bret"
const userAccount = new UserAccount("Bret");

// Calling the method to display the username
userAccount.displayUsername();
