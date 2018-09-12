module.exports = function getZerosCount(number, base) {
var myBase = base;

  //Ищем простые делители основания
  var simpleNumOfBase = [];
  var i = 2;

  while(myBase != 1){
    if(myBase % i == 0){
      simpleNumOfBase.push(i);
      myBase = myBase / i;
    } else {
      i++;
    }
  }



  //Записываем их степени
  var powOfSimpleNum = [];

  for(i = 0; i < simpleNumOfBase.length; i++){
    var pow = 1;

    while(simpleNumOfBase[i] == simpleNumOfBase[i + 1]){
      simpleNumOfBase.splice(i + 1, 1);
      pow++;
    }
    powOfSimpleNum[i] = pow;
  }

  var sumTimesInto = [];

  for(i = 0; i < simpleNumOfBase.length; i++){
    var sum = 0;
    var tmp = number;
    var n = 1;
    while(tmp > 1){
      tmp = Math.floor( number / Math.pow(simpleNumOfBase[i], n) );
      sum += tmp;
      n++;
    }
    sumTimesInto.push(sum);
  }

  var sumPlusPow = [];
  var tmpSumPlusPow = [];
  for(i = 0; i < simpleNumOfBase.length; i++){
    tmpSumPlusPow[0] = sumTimesInto[i];
    tmpSumPlusPow[1] = powOfSimpleNum[i];
    sumPlusPow[i] = tmpSumPlusPow;
    tmpSumPlusPow = [];
  }

  sumPlusPow.sort(function(a,b) {return  a[0] - b[0]});

  return Math.floor(sumPlusPow[0][0]/sumPlusPow[0][1]);
} 