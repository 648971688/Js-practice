"use strict";

function countSameElements(collection) {
  let count = 0;
  let count1 = 0;
  let str = [];
  let result = [];
  for (let i = 1; i < collection.length; i++) {
    result[count1] = {};
    if (collection[i] == collection[i - 1]) {
      count++;
    } else if (collection[i] != collection[i - 1]) {
      result[count1].key = collection[i - 1];
      result[count1].count = count + 1;
      count = 0;
      count1++;
      if (i == collection.length - 1) {
        result[count1] = {};
        str = collection[i].split("-");
        result[count1].key = str[0];
        result[count1].count = parseInt(str[1]);
      }
    }
  }
  return result;
}
