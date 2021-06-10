export default class Hello {
  constructor (name) {
    this.name = name;
    this.greet = [hello(), hey(), hi()];
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
  
  random() {
    let random = Math.floor(Math.random() * this.greet.length);
    return this.greet[random];
  }
}