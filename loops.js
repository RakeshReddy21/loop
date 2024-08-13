// // let x;
// // for(x=0;x<=100;x++){
// //     if(x%2==0){
// //         console.log(x);
// //     }
// // }



// let distance=+prompt()
// if(distance>0 && distance<=5){
//     console.log("Your taxi fare is $5")
// }
// else if(distance>6 && distance <=10){
//     console.log("Your taxi fare is $10")
// }
// else if(distance>11 && distance <=20){
//     console.log("Your taxi fare is $20")
// }
// else if(distance>20){
//     console.log("Your taxi fare is $20 and +5 for every kilometer")
// }

// let items=+prompt()
// if(items>0 && items<=5){
//     console.log("No discount");
// }
// else if(items>=6 && items <=10){
// console.log("5% discount");
// }
// else if(items>=11 && items <= 20 ){
//     console.log("10% discount");
// }
// else if(items>20){
//     console.log("20% discount");
// }

// let coffee=+prompt();

// switch (coffee){
//     case 1: console.log("espresso");
//     break;
//     case 2: console.log("Cappuccino");
//     break;
//     case 3: console.log("Latte");
//     break;
//     case 4: console.log("Mocha");
//     break;
//     default: console.log("please select the coffe in  the list ");
    
// }


// let cost=prompt()
// switch (cost) {
//     case "north-america" : console.log("Cost for shipping to north-america is $10");
//     break;
//     case "south-america" : console.log("Cost for shipping to south-america is $20");
//     break;
//     case "europe" : console.log("Cost for shipping to europe is $30");
//     break;
//     case "asia" : console.log("Cost for shipping to asia is $40");
//     break;
//     case "austraila" : console.log("Cost for shipping to australia is $50");
//     break;

//     default: console.log("please select the country in the following list.");
// }

// let sum=0;
// for(x=0;x<=100;x++){
//     if(x%2==0){
//         sum=sum+x;
//     }
// }
// console.log("the sum of even numbers from 1 to 100 is",sum);

// let num=0;
// for (let x = 0; x <= 50; x++){
//     if(x%2==0){
//         num=num+x;
//     }
// }
// console.log("the sum of even numbers from 1 to 50 is",num);

// // let sum=+prompt();
// // let fact=1;
// // for (x=0; x>=sum; x++){
// //     fact*=x;
// // }
// // console.log(fact);


// let num = 3;
// let factorial = num => {
//    let res = 1;
//    for(let i = num; i > 1; i--){
//       res *= i;
//    };
//    return res;
// };
// console.log(factorial(num));

 
// let num=304;
// for (x=0;x<=num;x++);{
//     num=num/10;
// }
// console.log(num);

// let x;
// for(x=20;x>0;x-=3){
//     console.log(x);

// } //20, 17, 14...5, 2

// for(i=20, j=10; i>0 && j>0; i-=3,j-=2){
//     console.log(i,j);
// }
// 20 10
// 17 8
// 14 6
// 11 4
// 8  2

// for(i=20, j=10; i>0 && j>0; i-=3,j-=2){
//     console.log(i,j);
// }
// // 20 10
// // 17 8
// // 14 6
// // 11 4
// // 8 2
// // 5 0
// // 2 -2
// debugger;
// for(i=0;i<5;i++){
//     // console.log(i);//0,1,2,3,4
// }
// console.log(i); //5 because in the loop 5 is not less than 5 then it declares i as 5 and returns to 5

for(i=10;i!=0;i--){
    console.log(i);
}

for(x=10;!(x<1); x--){
    console.log(x);
}

for(y=-1;y!=-10-1;y--){
    console.log(y);
}

for(z=-1;!(z<-10);z--){
    console.log(z);
}