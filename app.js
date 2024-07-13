export function arraySum(arr1, arr2) { 
    let totalSum = 0;
  
    for (let i = 0; i < arr1.length; i++) {
      if (Number.isInteger(arr1[i]) && Number.isInteger(arr2[i])) {
        totalSum += arr1[i] + arr2[i];
     } else {
      throw new Error('at least one number is not an integer');
  }
    }
    return totalSum;
  }
