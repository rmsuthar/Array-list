const list = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

class Dict {
  constructor(list) {
    this.dict = list;
  }
  inRegEx(word) {
    const regTemplate = word.replaceAll("*", "(.*)");
    return new RegExp(`^${regTemplate}$`, "g");
  }
  isInDict(word) {
    return this.dict.some((exp) => {
      return this.inRegEx(word).test(exp);
    });
  }
  inAll(word) {
    return this.dict.filter((el) => {
      return el.match(this.inRegEx(word));
    });
  }
}

const ls = new Dict(list);
console.log(ls.isInDict("m*n"));
console.log(ls.inAll("t*"));
