// let str = 'Hi';
//
// str[0] = 'h'; // ошибка
// //alert( str[0] );
// console.log(str[0]);
//
// let num = 75;
//
// let z = num.toString();
// console.log(z+5);
// console.log(num+5);

// var stringToNumber = function(str){
//     // put your code here
//     num = +str;
//   //  return null;
//
// }
//
// console.log(stringToNumber("134"));

// function fakeBin(x) {
//     var outputString = "";
//
//     for (var i = 0; i < x.length; i++) {
//
//         if (Number(x[i]) <= 4) {
//             outputString += "0";
//         } else {
//             outputString += "1";
//         }
//     }
//     // return outputString;
//     console.log (outputString);
// }
//
//
// fakeBin("4534545345");
//
//     function digits(n) {
        // count = 0;
        // while (n > 0) {
        //     if (n % 10) count += 1;
        //     n = (n - (n % 10)) /10;
        // }
//
//        // str = n.toString()
//        //  z = str.length
//         z = n.toString().length
//        // return count;
//         console.log(z);
//     }
//       //   console.log(n % 10);
//       //   m = n % 10;
//       // //  m = n - (n % 10);
//       //   z= n-8;
//       //   console.log(z);
//       //   console.log(z % 10);
//       //   console.log(n);
//       //   n = n-(n%10);
//       //   console.log(n);
//       //
//     // }
//
// digits(9876543210)
//
//         function opposite(number) {
//           //  return number;
//             console.log(-number);
//         }
//
// opposite(1)

function removeChar(str){
    //You got this!
    outputString = "";
    for (var i = 1; i < str.length-1; i++) {

        outputString += str[i];

    }
    return outputString;
   // console.log(outputString);

};

removeChar("victor");