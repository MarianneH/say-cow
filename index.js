const { me } = require("./information");
console.log(me);

var cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Hi ${me.name} from ${me.campus}`,
    e: "oO",
    T: "U ",
  })
);
