let arr = [20, 6, -4, 45, 10, 9, 67];
// function selectionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let maxIndex = 0;

//     for (let j = 1; j < arr.length - i; j++) {
//       if (arr[j] > arr[maxIndex]) {
//         maxIndex = j;
//       }
//     }

//     let temp = arr[maxIndex];
//     arr[maxIndex] = arr[arr.length - i - 1];
//     arr[arr.length - i - 1] = temp;
//   }
// }

// selectionSort(arr);
// console.log(arr);

// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const pivotIndex = Math.floor(arr.length / 2);
//   const pivot = arr[pivotIndex];

//   const left = [];
//   const right = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i === pivotIndex) {
//       continue;
//     }

//     if (arr[i] > pivot) {
//       right.push(arr[i]);
//     } else {
//       left.push(arr[i]);
//     }
//   }

//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// console.log(quickSort(arr));

// 378282246310005

function credit(creditNumber) {
  const creditString = creditNumber.toString();
  let length = creditString.length;

  if (length !== 13 && length !== 15 && length !== 16) {
    return "INVALID";
  }

  const firstTwoDigits = Number(creditString.substring(0, 2));
  const firstDigit = Number(creditString[0]);

  if (
    firstDigit !== 4 &&
    firstTwoDigits !== 34 &&
    firstTwoDigits !== 37 &&
    firstTwoDigits !== 51 &&
    firstTwoDigits !== 52 &&
    firstTwoDigits !== 53 &&
    firstTwoDigits !== 54 &&
    firstTwoDigits !== 55
  ) {
    return "INVALID";
  }

  let checkSum = 0;

  while (creditNumber > 0) {
    let digit = Math.floor((creditNumber % 100) / 10);
    let product = digit * 2;

    if (product >= 10) {
      product = (product % 10) + Math.floor(product / 10);
    }

    checkSum += product;

    const remainedDigit = creditNumber % 10;
    checkSum += remainedDigit;

    creditNumber = Math.floor(creditNumber / 100);
  }

  if (checkSum % 10 !== 0) {
    return "INVALID";
  }

  if (length === 15 && (firstTwoDigits === 34 || firstTwoDigits === 37)) {
    return "AMEX";
  } else if (
    length == 16 &&
    (firstTwoDigits === 51 ||
      firstTwoDigits === 52 ||
      firstTwoDigits === 53 ||
      firstTwoDigits === 54 ||
      firstTwoDigits === 55)
  ) {
    return "MASTERCARD";
  } else if ((length === 13 || length === 16) && firstDigit === 4) {
    return "VISA";
  } else {
    ("INVALID");
  }
}

console.log(credit(5105105105105100));
