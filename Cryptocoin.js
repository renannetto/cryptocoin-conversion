// bugfix modification
// bugfix modification 2
// new feature implementation
// new feature 2

exports.Cryptocoin = class {
  constructor(id, name, price_usd) {
    this.id = id;
    this.name = name;
    this.price_usd = price_usd;
  }

  convert_to(other_coin) {
    return this.price_usd / other_coin.price_usd;
  }
}
