"use strict";

// Remove even numbers from array
function removeEven(arr) {
  return arr.filter((num) => num % 2 !== 0);
}

/* Merge two sorted arrays
    Sample input: arr1 = [1,3,4,5]  and arr2 = [2,6,7,8]
    Output: arr = [1,2,3,4,5,6,7,8]
*/
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

/* Find two numbers that add up to Target value 
    Samplue Input: arr = [1,21,3,14,5,60,7,6]
    value = 81
    Output arr = [21,60]

    Answer: since we iterate n times the array length n, time complexity is O(n^2)
*/
function findSum(arr, value) {
  for (let j = 0; j < arr.length; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      if (arr[j] + arr[k] == value) return [arr[j], arr[k]];
    }
  }
  return false;
}

/* Array of Products of All Elements
    Input: An array of numbers (can even be floats, integers, and negative!) Output: An array such that each index has a product of all the numbers in the array except the number stored at that index.

    Input: arr = [1,2,3,4]
    Output: arr = [24,12,8,6]

    Answer: This is in O(n^2) because the array is iterated over n + n(n + 1)/2 times
*/
function findProduct(arr) {
  var left = 1,
    result = [];
  for (let num of arr) {
    result.push(left);
    left = left * num;
  }

  var right = 1;
  for (var i = arr.length - 1; i > -1; i--) {
    result[i] *= right;
    right *= arr[i];
  }

  return result;
}

/* Find Minimum Value in Array
    Samplue Input: arr = [9,2,3,6]
    Output: 2
*/
function findMinimum(arr) {
  var currentMin = arr[0];
  for (let val of arr) {
    if (val < currentMin) {
      currentMin = val;
    }
  }
  return currentMin;
}

/* Find First Unique Integer in an Array
    Directions: Given an array, find the first integer, which is unique in the array. Unique means the number does not repeat and appears only once in the whole array. Implement your solution in JavaScript and see if it runs correctly!

    Sample Input: [9,2,3,2,6,6]
    Output: 9
*/
function findFirstUnique(nums) {
  // loop through nums for first read thru
  for (let i = 0; i < nums.length; i++) {
    let unique = true;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] === nums[j]) {
        console.log("i is: ", i, "nums[i] is ", nums[i]);
        unique = false;
        break;
      }
    }
    if (unique) {
      return nums[i];
    }
  }
  return null;
}

/* Find Second Maximum Value in Array 
    Sample Input: [9,2,3,6]
    Output: 6

    Time Complexity: O(n)
*/
function findSecondMaximum(arr) {
  if (arr.length < 2) return -1;
  let max1 = arr[0];
  let max2 = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] > max2 && arr[i] !== max1) {
      max2 = arr[i];
    }
  }
  if (max2 === -Infinity) {
    return -1;
  } else {
    return max2;
  }
}

/* Right Rotate an Array by n 
    Directions: implement a function that will rotate an array by n

    Samplue Input: arr = [1,2,3,4,5]
    rotate by n = 3 
    Output: arr = [3,4,5,1,2]  
*/

function rightRotate(arr, n) {
  return arr.splice(arr.length - n).concat(arr.splice(0, arr.length));
}

/* Rearrange Positive and Negative Values

    Sample Input: [10,-1,20,4,5,-9,-6]
    Output: [-1,-9,-6,10,20,4,5]
*/
function reArrange(arr) {
  // declare new array for neg numbers
  let negArr = [];
  // declare new array for pos numbers
  let posArr = [];
  // loop through arr and push neg to first arr, pos to second
  for (let num of arr) {
    if (num < 0) {
      negArr.push(num);
    } else {
      posArr.push(num);
    }
  }
  let newArr = negArr.concat(posArr);
  arr = newArr;
  // push both arrays to arr
  return arr;
}

/* Maxium Sum Subarray

Given an unsorted array, the maxium sum subarray is the contiguous smaller array wthin the larger array that creates the largest maximum. There may be negative values, but they can still help with linking positive values together to reach the largest maximum

Sample Input: [-4, 2, -5, 1, 2, 3, 6, -5, 1]
Sample Output: 12
*/

let findMaxSumSubarray = function (nums) {
  let currSum = -Infinity;
  let maxSum = -Infinity;

  if (nums.length < 1) {
    return 0;
  }

  for (let i = 0; i < nums.length; i++) {
    currSum = Math.max(0, currSum);
    currSum += nums[i];
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
};
