let age =18
console.log(age)

var welcome;

if (age < 18) {

  welcome = function() {
    console.log("Hello!");
  }

} else {

  welcome = function() {
    console.log("Greetings!");
  };

}
welcome()
