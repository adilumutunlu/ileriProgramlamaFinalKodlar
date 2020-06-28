window.addEventListener('load', function(e) {
    document.querySelector('#test').innerHTML = main();
  }, false);
  
  function factorial(n) {
    var tot = 1;
    var i;
  
    if (n === 0) return 1;
  
    for (i = 1; i <= n; i++) {
      tot = tot * i;
    }
  
    return tot;
  }
  
  function main() {
    var i;
    var currentI;
    var nextDigit;
    var sumOfFactorials;
    var sumOfMatches = 0;
  
    // pre-cache factorials from 0 to 9
    var factorials = new Array();
    for (i = 0; i < 10; i++) {
      factorials[i] = factorial(i);
    }
  
    for (i = 3; i < 9999999; i++) {
      currentI = i;

      sumOfFactorials = 0;
      while (currentI > 0) {

        nextDigit = currentI % 10;

        sumOfFactorials = sumOfFactorials + factorials[nextDigit];

        if (sumOfFactorials > i) break;
        currentI = Math.floor(currentI / 10);

      }
  
      if (i === sumOfFactorials) {

        sumOfMatches = sumOfMatches + i;
      }
    }
  
    document.write(sumOfMatches);

    return "";
  }