function theBeatlesPlay(arr1, arr2){
  var finalArr=[];
for ( var i = 0 ; i < arr1.length; i ++){
  for ( var j = 0 ; j < arr2.length; j ++){
    finalArr.push(arr1[i] + arr2[j]);
  }
}
  return finalArr;
}
