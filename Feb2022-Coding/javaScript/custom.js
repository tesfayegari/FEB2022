function submitNumber() {
  let n = document.getElementById('inputNumber').value;
  document.getElementById('result').innerHTML = "";

  if (n == '' || n <= 0) {
    alert('Please enter a positive number');
    return;
  }

  for (let i = 1; i <= n; i++) {

    let astrix = "";
    for (let s = 1; s <= n - i; s++) {
      astrix += "&nbsp;";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      astrix += "*";
    }



    document.getElementById('result').innerHTML += astrix + "<br>";
  }

}


function clearData() {
  document.getElementById('inputNumber').value = '';
  document.getElementById('result').innerHTML = '';
}
