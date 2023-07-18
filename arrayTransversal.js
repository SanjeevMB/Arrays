/* ===== Array transversal 1 ===== */


function arrayTransversal(array, k) {

    let n = array.length;

    for (let i = 0; i < k; i++) {

        array.unshift(array[n - 1]);
        array.pop();

    }

    return array;

}

let arrayTransversalResult = arrayTransversal([-1, -100, 3, 99], 4);

console.log(arrayTransversalResult);


/* ===== Array transversal 2 ===== */


function arrayTransversalWithExtraSpace(nums, k) {

    let n = nums.length;

    k = k % n;

    let resultArray = [];

    let startPoint = k;

    let endPoint = n - k

    for (let i = 0; i < n; i++) {

        if (startPoint > 0) {

            resultArray.push(nums[n - startPoint]);
            startPoint--;
            endPoint++;

        } else {

            resultArray.push(nums[endPoint - n]);
            endPoint++;

        }

    }

    return resultArray;

}

let arrayTransversalWithExtraSpaceResult = arrayTransversalWithExtraSpace([1, 2, 3, 4, 5, 6, 7], 10);

console.log(arrayTransversalWithExtraSpaceResult);


/* ===== Array transversal 3 ===== */


function arrayTransversalWithoutExtraSpace(nums, k) {

    let n = nums.length;

    k = k % n;

    for (let i = 0; i < k; i++) {

        nums.unshift(nums[n - 1]);
        nums.pop();

    }

    return nums;

}

let arrayTransversalWithoutExtraSpaceResult = arrayTransversalWithoutExtraSpace([-1, -100, 3, 99], 4);

console.log(arrayTransversalWithoutExtraSpaceResult);