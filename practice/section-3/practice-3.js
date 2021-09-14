'use strict';

function createUpdatedCollection(collectionA, objectB) {
let count=0; 
let count1=0;
let result = [];
for (let i = 0; i <collectionA.length; i++){
    result[count1] = {};
    if(collectionA[i]==collectionA[i+1]){
        count++;
    }
    else if(collectionA[i]!=collectionA[i+1])
    {
        result[count1].key = collectionA[i];
        result[count1].count=count+1;
        count=0;
        count1++;
    }
    // console.log(count+1);
}
for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < objectB.value.length; j++) {
        if (result[i].key == objectB.value[j]) {
            result[i].count-= Math.floor(result[i].count/3);
        }
    }
}
return result;
}
