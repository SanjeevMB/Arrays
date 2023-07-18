var missingElement = function (arr) {

    let array = [];

    for (let i = 0; i < arr.length; i++) {

        let flag = 0;
        let temp = i + 1;

        for (let j = 0; j < arr.length; j++) {

            if (arr[j] === temp) {

                flag++;

            }

        }

        if (flag === 0) {

            array.push(temp);

        }

    }

    return array;

};

let missingElementResult = missingElement([1, 1]);

console.log(missingElementResult);