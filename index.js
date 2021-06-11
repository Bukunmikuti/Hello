export default class Hello {
  constructor (name) {
    this.name = name;
    this.greet = [this.hello(), this.hey(), this.hi()];
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