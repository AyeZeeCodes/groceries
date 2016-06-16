$(document).ready(function() {

  var groceryList = [];

  $("#groceries").submit(function(event) {
    event.preventDefault();

    var item = $("input#item").val();
    groceryList.push(item);
  });
});
