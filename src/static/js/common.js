function emaildecode() {
  var emails = document.getElementsByClassName("encoded");

  for (var i = 0; i < emails.length; i++) {
    var b64 = emails[i].dataset.encoded;
    var decoded = window.atob(b64);
    emails[i].innerHTML = decoded;
    emails[i].href = "mailto:" + decoded;
  }
}

function hidenojs() {
  var nojs = document.getElementsByClassName("nojs");

  for (var i = 0; i < nojs.length; i++) {
    nojs[i].style.display = "none";
  }
}

emaildecode();
hidenojs();
