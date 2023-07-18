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