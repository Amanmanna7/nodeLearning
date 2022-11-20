// let a=(3,2);
// console.log(a);
// a="Aman";

// let arr1=[1,2,3];
// // arr1.push(4);
// // console.log(arr1);
// // arr1.pop();
// // console.log(arr1);

// console.log(arr1[0]);


// let a =10;
// if(a>15){
//     console.log(1);
// }
// else if(a>9){
//     console.log(2);
// }
// else if(a>10){
//     console.log(3);
// }
// else{
//     console.log(4);
// }


// let arr=[1,2,3,4,5];

//  1      | 2          | 3
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
//     if(i==4){
//         i=-1;
//     }
//     //4
// }
// 1
// 2
// 4
// 3

// 2
// 4
// 3
// loop

// 2
//break

//i=0 -> arr[0] -> 1
//i=1 -> arr[1] -> 2
//i=2 -> arr[2] -> 3
//i=3 -> arr[3] -> 4
//i=4 -> arr[4] -> 5
//i=5 
//

let arr=['a','b','c'];

// indexes
// for(let i in arr){
//     console.log(i);
// }

// values
// for(let i of arr){
//     console.log(i);
// }

// let obj={
//     name:"Aman",
//     favNum:7,
//     developer: true,
//     name:"Amol"
//     // myFunc : function (){
//     //     console.log("Hello");
//     // }
// }

// console.log(obj.name);

let i=0;

while(i<5){
    
    // if(i==3){
    //     break;
    // }
    console.log(i);
    if(i==3){
        i++;
        continue;
    }
    console.log('a');
    i++;
}
