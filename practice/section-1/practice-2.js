'use strict';

function collectSameElements(collectionA, collectionB) {
  let collectionC = new Array(collectionB[0].length);
  let count = 0;
  for (let i = 0; i < collectionA.length; i++) {
    for (let j = 0; j < collectionB.length; j++) {
      for (let k = 0; k < collectionB[j].length; k++) {
        if(collectionA[i] == collectionB[j][k]){
          collectionC[count] = collectionA[i];
          count++;
        }
      }
    }
  }
  return collectionC;
}
