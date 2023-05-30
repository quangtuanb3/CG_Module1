// Bài 278: Xóa tất cả các phần tử trùng nhau trong mảng và chỉ giữ lại duy nhất 1 phần tử

function exe() {
    let size = 0;
    do {
        size = Number(prompt("Input size of array: "))
    } while (size < 0 || !Number.isInteger(size))
    let array = createArray(size);
    document.write(array.toString());
    document.write('</br>')
    let newArray = removeDuplicateElements(array);
    document.write(newArray.toString());
}

function createArray(arrSize) {
    let array = new Array(arrSize);
    for (let i = 0; i < array.length; i++) {
        array[i] = prompt(`Input number ${i + 1}`)
    }
    return array;
}

function removeDuplicateElements(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}