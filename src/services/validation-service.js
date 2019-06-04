module.exports = class AuthService {
    constructor() {}
  
    isValidRegisterBody(user) {
      if (!user.name || !user.surname) {
        return false;
      }
      if (!this.isValidEmailAddress(user.email)) {
        return false;
      }
      if (!this.isValidPassword(user.password)) {
        return false;
      }
  
      return true;
    }
    };
  