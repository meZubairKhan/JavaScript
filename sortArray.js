// Sorting An Array ***************************************

// let arr = [0, 1, 6, 3, 4, 9, 2, 7, 8, 5];
// let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// let arr = ['b', 'd', 'a', 'c', 'e', 'a'];
// let arr = [10, 'hello', true, 3.14, 'world'];
// let arr = [-5, 2, -1, 4, -3, 0];
// let arr = [12345, 9876, 54321, 10293, 87654];

function arraySorting(arr) {
    for (let i = 0; i < arr.length; i++) {

        for(let j = 0; j < arr.length; j++) {

            if (arr[i] < arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }

        }

    }
    
    console.log(arr);
}

arraySorting(arr);