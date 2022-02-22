//HOF

//Higher order functions are the one's that take another function as an argument or returns another function from it.

// const radius=[3,6,8,9,5];

// const area=(r)=>3.14* r*r;
// const circum=(r)=>2*3.14*r;
// const diameter=(r)=>2*r;
 
// const calculate=(radius,logic)=>{
//  const op=[];
//   for(let i=0;i<radius.length;i++){
//     op.push(logic(radius[i]));
   
//   }
//    return op;
// }

// console.log(calculate(radius,area));
// console.log(calculate(radius,circum));
// console.log(calculate(radius,diameter));

//map
//map function is used to transform an array and get a new array

const nos=[1,2,3,4];
const squares=nos.map(no=>{ return no * 2});
console.log(squares)


const nos1=[1,2,3,4];
const cube=(no)=>no*no*no;
const cubeOp=nos1.map(cube);
console.log(cubeOp);

//filter
//filter function is used to filter out elements from an array.

const nosArray=[1,2,3,4,5,6,7];
const ans=nosArray.filter(no=>no%2);
console.log(ans);

//reduce
//reduce fn to find sum of all the elements
const arrElements=[1,2,3,4];
const sum=arrElements.reduce((acc,curr)=>{
  acc=acc+curr;
  return acc;
},0)
console.log(sum);

//find max element using reduce
const arrElements2=[10,30,2,1010,90,4,7];
const maxElement=arrElements2.reduce((acc,curr)=>{
  if(curr>acc){
    acc=curr;
  }
  return acc;
},arrElements2[0]);
console.log(maxElement)

//find smallest element using reduce
const smallestElement=arrElements2.reduce((acc,curr)=>{
  if(curr<acc){
    acc=curr;
  }
  return acc;
},arrElements2[0]);
console.log(smallestElement);

//find age and no of people having that age.

const users=[{name:"shrushti",age:21},{name:"krupa",age:15},{name:"vishakha",age:21},{name:"puja",age:20},{name:"riya",age:21}];

const obj=users.reduce((acc,curr)=>{
  if(acc[curr.age]){
    acc[curr.age]=++acc[curr.age];
  }
  else{
    acc[curr.age]=1;
  }
  return acc;
},{})
console.log(obj);

//find name of users whose age is below 21

const names=users.reduce((acc,curr)=>{
  if(curr.age<21){
    acc.push(curr.name);
  }
  return acc;
},[]);
console.log(names)

console.log('Neog Hw questions')

// 1.find sum of all odd nos;
const array=[1,2,3,4,50,6,70,8];
const sumOfOddNos=array.reduce((acc,curr)=>{
  if(curr%2!=0){
    acc=acc+curr;
  }
  return acc;
},0);
console.log("sum of odd nos",sumOfOddNos);

//2.Sum of all nos at off indices

//3.find nos divisible by 10
const nosDivisibleBy10=array.filter(no=>no%10==0);
console.log(nosDivisibleBy10);

//return an array where odd nos are incremented by 1 and odd nos are decremem=nted by 1

const incDec=array.map(no=>{
  if(no%2==0){
   return  ++no;
  }else{
   return  --no;
  }
  
})
console.log(incDec);

//return an object with sum of all odd nos and even nos seperately
const objOfEvenOddSum=array.reduce((acc,curr)=>{
  if(curr%2==0){
   acc.even=acc['even']+curr;
  }else{
    acc.odd=acc['odd']+curr;
  }
  return acc;
},{even:0,odd:0})
console.log(objOfEvenOddSum);

//find no of strings with similar number of characters

const input=["apple","papaya","orange","mango"];
// const similarNoOfChar=input.reduce((acc,curr)=>{
//   console.log(curr.length)
//   if(acc[curr.length]){
//     acc.curr.length=++acc[curr.length]
//   }else{
//     acc.curr.length=1;
//   }
// },{})
// console.log(similarNoOfChar);

//return an array with objs containing string and no of chars in it.

const ansObj=input.reduce((acc,curr)=>{
  console.log(curr);
  const obj={curr:curr.length}
  acc.push(obj)
  return acc;
},[])
console.log(ansObj);