// Business logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size; 
  this.price = 0;
}

Pizza.prototype.chosenToppings = function() {
  this.price = this.price + (this.toppings.length * 1);
  return this.price;
}

Pizza.prototype.chosenSize = function() {
  if (this.size === "small") {
    this.price += 10;
  } else if (this.size === "medium") {
    this.price += 15;
  } else if (this.size === "large") {
    this.price += 20;
  }
   return this.price;
};

// User interface logic 

$( document ).ready(function() {
  $("form#pizza_order").submit(function(event) {
    event.preventDefault();

  let toppingSelected = $("input:checkbox[name=toppings]:checked").map(function() {
    return this.value;
  });

  let sizeSelected = $("input:radio[name=size]:checked").val();

  let guestPizza = new Pizza(toppingSelected, sizeSelected);

  guestPizza.chosenToppings();
  guestPizza.chosenSize();

  const answer = guestPizza.price;

  $("#answer").show();
  $("#output").text(answer)

  });
});