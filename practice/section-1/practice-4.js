'use strict';

function collectSameElements(collectionA, objectB) {
  let collectionC = new Array(objectB.value.length);
  let count = 0;
  for (let i = 0; i < collectionA.length; i++) {
    for (let j = 0; j < objectB.value.length; j++) {
      if (collectionA[i].key == objectB.value[j]){
        collectionC[count++] = collectionA[i].key;
      }
    }
  }
  return collectionC;
}
