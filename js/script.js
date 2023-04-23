
async function addStuff() {
  let url = 'https://www.kyleyarb.com/stuff.html';
  let response = await fetch(url);

  let text = await response.text(); // read response body as text


  // alert(text);
  var p = document.getElementById('addStuffHere');
  p.innerHTML += text;
}

