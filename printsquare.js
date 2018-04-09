function printSquare(num) {
    for (var row = 0; row < num; row++) {
      var square = "";
      for (var col = 0; col < num; col++) {
      square += "*";
      }
    console.log(square);
    }
  };
  
printSquare(6);