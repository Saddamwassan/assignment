
// counting *****************
// for(var i=1;i<=10;i++){
//     document.write(i);
//     document.write("<br>");
// }
// counting-reverse**************
// for(var i=10;i>=1;i--){
//     document.write(i);
//     document.write("<br>");
// }
// odd number******************
// for(var i=1;i<=10;i++){
//     if(i%2==1){
//         document.write(i);
//         document.write("<br>");
//     }
// }
// even reverse **************
// for(var i=10;i>=1;i--){
//     if(i%2==0){
//         document.write(i);
//         document.write("<br>");
//     }
// }
// star 2nd loop *************
// for(var i=1;i<=5;i++){
//     for(var j=1;j<=i;j++){
//         for(var k=4;k>=1;k--){
//         document.write(" ");
//         }
//         document.write("*");

//     }
//     document.write("<br>")
 
// }
// star 3rd loop**************
// for(var i=1;i<=5;i++){
//     for(var k=5;k>=i;k--){
//         document.write("&nbsp ");
//     }
//     for(var j=1;j<=i;j++){
//         document.write("*");
//     }
//     document.write("<br>");
// }
// diamond 
// for(var i=1;i<=5;i++){
//     for(var k=5;k>=i;k--){
//         document.write("&nbsp ");
//     }
//     for(var j=1;j<=i;j++){
//         document.write("&nbsp ");
//         document.write("*");
//     }
//     document.write("<br>");
// }
// number triganle *****************
// for(var i=1;i<=5;i++){
//     for(var j=1;j<=i;j++){
//         document.write(j);
//     }
//     document.write("<br>");
// }
// number triganle 2 **************
// var a=1;
// for(var i=0;i<=5;i++){
//     for(var j=0;j<i;j++){
//         document.write(" &nbsp "+a);
//         a++;
//     }
//     document.write("<br>");
// }
// even odd function **************
// function number(a){
//     if(a%2==0){
//         document.write(a+" Even");
//     }else{
//         document.write(a+" Odd");
//     }
// }
// number(9);
// return reminder ***************
// function number(a){
//    var b = a%2;
//    return b;
// }
// var c = number(7);
// document.write(c);
// program *******************
// addition 
// function add(a,b){
//     var c = a+b;
//     document.write(c);
// }
// add(12,33);
// document.write("<br>");
// subtraction***************
// function sub(a,b){
//     var c = a-b;
//     document.write(c);
// }
// sub(12,33);
// document.write("<br>");
// Multiplication ************
// function mul(a,b){
//     var c = a*b;
//     document.write(c);
// }
// mul(12,33);
// document.write("<br>");
// division *****************
// function div(a,b){
//     var c = a/b;
//     document.write(c);
// }
// div(12,33);
// document.write("<br>");
// Exponent *****************
// function exp(a,b){
//     var c = a**b;
//     document.write(c);
// }
// exp(5,3);
// modulus **********************
// function mod(a,b){
//         var c = a%b;
//         document.write(c);
//     }
//     mod(25,10);
// 20jan 2024******************************************
// min************
// var a=[22,113,3,1];
// function min(){
//   var b=a[0];
//     for(var i=0;i<a.length;i++){
//       if(b>a[i]) {
//          b = a[i];
//        }
//     }
//     document.write(b);

// }
// min();
// max with function *************
// var a=[242,113,233,1000];
// function max(){
//   var b=a[0];
//     for(var i=0;i<a.length;i++){
//       if(b<a[i]) {
//          b = a[i];
//        }
//     }
//     document.write(b);

// }
// max();
// sort in ascending ****************
// var a=[2,13,10,1,116];
// function sort(){
//   var b = 0;
//     for(var i=0;i<a.length;i++){
//       for(var j=0;j<a.length;j++){
//          if(a[j]>a[j+1]){
//            b= a[j];
//             a[j]=a[j+1];
//             a[j+1] = b;
//        }
//        }
//       }
//       document.write(a);
// }
// sort();

// sort descending **************
// var a=[2,13,10,1,116];
// function sort(){
//   var b = 0;
//     for(var i=0;i<a.length;i++){
//       for(var j=0;j<a.length;j++){
//          if(a[j]<a[j+1]){
//            b= a[j];
//             a[j]=a[j+1];
//             a[j+1] = b;
//        }
//        }
//         document.write(a);
//         document.write("<br>");
//       }
// }
// sort();
// reverse array ******************
// var a=[2,13,110,10,6];
// function reverse(){
//   var b = 0;
//     for(var i=0;i<a.length;i++){
//       for(var j=a.length-1;j>i;j--){
//          b= a[j];
//             a[j]=a[j-1];
//             a[j-1] = b;
//        }
//       }
//         document.write(a);
// }
// reverse();
// 27/1/2024 
// var target = document.getElementById("heading");
// var a = [10,20,30,40,50];
// var value = 0;
// var next = 0;
// var loop = setInterval(()=>{
//   // forward 
//   if(value < a.length){
//     target.innerHTML = a[value++];
//     next++;
//     console.log("forward"+next);
//   } 
//   // backward 
//   else if(next<=value && next>=0){
//     console.log("backward"+next);
//     var dec = next--;
//     target.innerHTML= a[dec];
//     if(dec == 0){
//       value = 0;
//     }
//   }
// },1000);
// printing letter from array 
// let array=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// for(var i=array.length;i>0;i-=3){
//   console.log(array[i]);
// }

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
// toggle the type attribute
const type = password.getAttribute("type") === "password" ? "text" : "password";
password.setAttribute("type", type);    

// toggle the eye icon
this.classList.toggle('fa-eye');
console.log("hi");
});







        


