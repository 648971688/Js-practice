'use strict';

function collectSameElements(collectionA, collectionB) {
  let collectionC = new Array(collectionB.size);
  let count = 0;
  for(let i = 0; i < collectionA.length; i++){
    for(let j = 0; j < collectionB.length; j++){
      if(collectionA[i]==collectionB[j]){
        collectionC[count] = collectionA[i];
        count++;
      }
    }
  }
  return collectionC;
}
