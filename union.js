const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [2, 777, 3, 78, 97];

function findUnion(a, b) {
  if (!Array.isArray(a) || !Array.isArray(a)) {
    return "Please enter a valid array";
  }

  const union = [];
  const merge = [];
  const intersection = [];

  for (let c = 0; c < a.length; c++) {
    merge.push(a[c]);
  }
  for (let d = 0; d < b.length; d++) {
    merge.push(b[d]);
  }

  let temp = [];
  for (let i = 0; i < merge.length; i++) {
    temp.push(0);
  }
  // console.log(merge);

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        intersection.push(a[i]);
      }
    }
  }
  // console.log(intersection);

  for (let i = 0; i < intersection.length; i++) {
    for (let j = 0; j < merge.length; j++) {
      if (merge[j] == intersection[i]) {
        temp[j] = temp[j] + 1;
      }
    }
  }
  // console.log(temp);

  let result = [];
  for (let l = 0; l < merge.length; l++) {
    if (temp[l] == 0) {
      result.push(merge[l]);
    }
  }
  for (let i = 0; i < intersection.length; i++) {
    result.push(intersection[i]);
  }

  // console.log(result);
  return result;
}

console.log(findUnion(arr1, arr2)); // [1,2,3,4,5,6,7,777,78,97]
