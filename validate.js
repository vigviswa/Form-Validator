// Implement focus and Blur on each element

window.onload = function() {
  var span1 = document.createElement("span");
  span1.innerHTML = "test";
  span1.className = "info";
  span1.style.display = "none";

  var span2 = document.createElement("span");
  span2.innerHTML = "test";
  span2.className = "info";
  span2.style.display = "none";

  var span3 = document.createElement("span");
  span3.innerHTML = "test";
  span3.className = "info";
  span3.style.display = "none";

  var username = document.getElementById("username");
  username.parentNode.appendChild(span1);

  var password = document.getElementById("password");
  password.parentNode.appendChild(span2);

  var email = document.getElementById("email");
  email.parentNode.appendChild(span3);

  username.onfocus = function() {
    span1.className = "info";
    span1.innerHTML = "infoMsg";
    span1.style.display = "inline";
  };

  username.onblur = function() {
    var alphanums = /^[a-z0-9A-Z]+$/;
    if (username.value.match(alphanums)) {
      span1.className = "ok";
      span1.innerHTML = "Accepted";
    } else {
      span1.className = "error";
      span1.innerHTML = "error";
    }
    if (username.value.length == 0) {
      span1.className = "info";
      span1.innerHTML = "infoMsg";
      span1.style.display = "none";
    }
  };

  password.onfocus = function() {
    span2.innerHTML = "infoMsg";
    span2.className = "info";
    span2.style.display = "inline";
  };

  password.onblur = function() {
    if (password.value.length < 6 && password.value.length > 0) {
      span2.className = "error";
      span2.innerHTML = "error";
    }
    if (password.value.length > 6) {
      span2.className = "ok";
      span2.innerHTML = "Accepted";
    }
    if (password.value.length == 0) {
      span2.className = "info";
      span2.innerHTML = "infoMsg";
      span2.style.display = "none";
    }
  };

  email.onfocus = function() {
    span3.innerHTML = "infoMsg";
    span3.className = "info";
    span3.style.display = "inline";
  };

  email.onblur = function() {
    var res = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (res.test(email.value)) {
      span3.className = "ok";
      span3.innerHTML = "Accepted";
    } else {
      span3.className = "error";
      span3.innerHTML = "error";
    }
    if (email.value.length == 0) {
      span3.className = "info";
      span3.innerHTML = "infoMsg";
      span3.style.display = "none";
    }
  };
};
