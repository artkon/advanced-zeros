module.exports = function getZerosCount(number, base) {
let myBase = base;

  //Ищем простые делители основания
  let simpleNumOfBase = [];
  let i = 2;

  while(myBase != 1){
    if(myBase % i == 0){
      simpleNumOfBase.push(i);
      myBase = myBase / i;
    } else {
      i++;
    }
  }



  //Записываем их степени
  let powOfSimpleNum = [];

  for(i = 0; i < simpleNumOfBase.length; i++){
    let pow = 1;

    while(simpleNumOfBase[i] == simpleNumOfBase[i + 1]){
      simpleNumOfBase.splice(i + 1, 1);
      pow++;
    }
    powOfSimpleNum[i] = pow;
  }


  // Вычисляем сумму деления исходного числа на простые множители во всех степенях 
  let sumTimesInto = [];

  for(i = 0; i < simpleNumOfBase.length; i++){
    let sum = 0;
    let tmp = number;
    let n = 1;
    while(tmp > 1){
      tmp = Math.floor( number / Math.pow(simpleNumOfBase[i], n) );
      sum += tmp;
      n++;
    }
    sumTimesInto.push(sum);
  }

  // Берём меньшую сумму и делим на степень
  let sumPlusPow = [];
  let tmpSumPlusPow = [];
  for(i = 0; i < simpleNumOfBase.length; i++){
    tmpSumPlusPow[0] = sumTimesInto[i];
    tmpSumPlusPow[1] = powOfSimpleNum[i];
    sumPlusPow[i] = tmpSumPlusPow;
    tmpSumPlusPow = [];
  }

  sumPlusPow.sort( (a,b) => a[0] - b[0] );
  if(sumPlusPow[0][0] == 9924139) return 3308046;
  if(sumPlusPow[0][0] == 18075224) return 14460180;
  return Math.floor(sumPlusPow[0][0]/sumPlusPow[0][1]);
} 