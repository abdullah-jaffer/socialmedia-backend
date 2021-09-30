interface User {
    id: number;
    firstName: string;
    lastName: string | null;
    email: string;
    image: string | null;
    dateOfBirth: string | null;
  }

  export default User;