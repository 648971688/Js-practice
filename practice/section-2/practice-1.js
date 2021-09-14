'use strict';

function countSameElements(collection) {
let count=0; 
let count1=0;
let result = [];
for (let i = 0; i <collection.length; i++){
    result[count1] = {};
    if(collection[i]==collection[i+1]){
        count++;
    }
    else if(collection[i]!=collection[i+1])
    {
        result[count1].key = collection[i];
        result[count1].count=count+1;
        count=0;
        count1++;
    }
    // console.log(count+1);
}
  return result;
}
