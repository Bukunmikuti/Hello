export default class Hello {
  constructor (name) {
    this.name = name;
  }
  
  hello () {
    return `Hello ${this.name}!`;
  }
  
  hi() {
    return `Hi ${this.name}!`;
  }
  
  hey() {
    return `Heyy ${this.name}!`;
  }
}