function changeColor() {
    var body = document.getElementsByTagName("body")[0];
    var color = body.style.backgroundColor;
    var text = body.style.color;

    if (color === "lightgrey") {
      body.style.backgroundColor = "black";
      body.style.color = "lightgrey";
      body.style.a = "lightgrey" ;
    } else {
      body.style.backgroundColor = "lightgrey";
      body.style.color = "black";
      body.style.a = "black";
    }
  }
