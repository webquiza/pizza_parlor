// Business logic

function Pizza(toppings) {
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.chosenToppings = function() {
  this.price = this.price + (this.toppings.length * 1);
  return this.price;
}

// User interface logic 

$( document ).ready(function() {
  $("form#pizza_order").submit(function(event) {
    event.preventDefault();

  let toppingSelected = $("input:checkbox[name=toppings]:checked").map(function() {
    return this.value;
  });

  let guestPizza = new Pizza(toppingSelected);

  guestPizza.chosenToppings();

  const answer = guestPizza.price;

  $("#answer").show();
  $("#output").text(answer)

  });
});