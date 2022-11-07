/* задача 1 */
function f1(a,b){
   if (a<b) console.log(-1);
   else if(a>b) console.log(1);
   else console.log(0); 
}
f1(8,-8);
f1(2,7);
f1(-4,-4);
console.log("------------");

/* задача 2 */
function factorial(a){
   let result=1;
   for (let i=a;i>=1;i--){
      result*=i;
   }
   console.log(result);
}
factorial(5);
factorial(6);
console.log("------------");

/* задача 3 */
function f3(a,b,c){
   console.log(a*100+b*10+c);
}
f3(1,4,9);
console.log("------------");

/* задача 4 */
function square(a,b=a){
   if(b==0) console.log(a**2);
   console.log(a*b);
}
square(9,7);
square(25);
console.log("------------");

/* задача 5 */
function numberIsPerfect(a){
   let sum=0;
   for(let i=1;i<a;i++){
      if(a%i==0) sum+=i;
   }
   if (a==sum) return true;
   else return false;
}
console.log(numberIsPerfect(496));
console.log(numberIsPerfect(7));
console.log("------------");

/* задача 6 */
function perfectOutOfRange(a,b){
   for (let i=a;i<=b;i++){
      if(numberIsPerfect(i)) console.log(i);
   }
}
perfectOutOfRange(1,10000);
console.log("------------");

/* задача 7 */
function time1(h,min="00",sec="00"){
   if(h>0&&h<=9) h='0'+`${h}`;
   if(min>0&&min<=9) min='0'+`${min}`;
   if(sec>0&&sec<=9) sec='0'+`${sec}`;
   console.log(`${h}:${min}:${sec}`);
}
time1(2,45,33);
time1(17,3);
time1(22);
console.log("------------");

/* задача 8 */
function time2(h,min,sec){
   return h*3600+min*60+sec;
}
console.log(time2(12,14,23));
console.log("------------");

/* задача 9 */
function f9(a){
   let h=parseInt(a/3600);
   let min=parseInt((a-h*3600)/60);
   let sec=a-h*3600-min*60;
   time1(h,min,sec);
}
f9(3800);
console.log("------------");

/* задача 10 */
function f10(h1,min1,sec1,h2,min2,sec2){
   let date1=time2(h1,min1,sec1);
   let date2=time2(h2,min2,sec2);
   let date=date1-date2;
   f9(date);
}
f10(23,14,56,12,10,34);
