function collatzNumarasi(numara) {
    if(numara % 2 == 0) {
      return numara / 2;
    }
    else {
      return (numara * 3) + 1;
    }
  }
    function collatzSirasi(numara) {
    var sayac = 1;
    while(numara != 1) {
      numara = collatzNumarasi(numara);
      sayac++;
    }
    return sayac;
  }
    function enUzunZincir(numara) {
    var enBuyuk = 0;
    var enBuyukIndex;
          for(var i=1; i<numara; i++) {
      var sayac = collatzSirasi(i);
      if(sayac > enBuyuk) {
        enBuyuk = sayac;
        enBuyukIndex = i;
      }
    }
    return enBuyukIndex;
  }
  
  console.log(enUzunZincir(1000000));
