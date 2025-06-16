function addNum(firNum, secNum){


    return firNum/secNum
}

console.log(addNum(8,2))





function sumArr(arr){
let sum =0;
    for(let i=0; i<arr.length; i++){
        sum = sum +arr[i]
    }

    return "the sum of "+ arr + " is " + sum;
}
let array1 = [4,8,12,16,20,22]
let myArr = [1,3,5,7,9,11,14];

console.log(sumArr(array1))
console.log(sumArr(myArr));