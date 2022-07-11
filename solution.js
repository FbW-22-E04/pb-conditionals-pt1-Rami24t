int1 = 25
int2 = 50

if((int1>=50&&int1<=99)||(int2>=50&&int2<=99))
console.log(true);
int3 = 75
if((int1>=50&&int1<=99)||(int2>=50&&int2<=99)||(int3>=50&&int3<=99))
console.log(true);

//3.
a = 10
b = 20
c = 30

console.log(a>=b ? (a>=c ? a : c) : b>=c ? b : c);
console.log(int1>=int2 ? (int1>=int3 ? int1 : int3) : int2>=int3 ? int2 : int3);

//4.
str = "thon";
if(!str.startsWith('Py'))
str = 'Py' + str;
console.log(str);

//5.
console.log(int1+int2<=80 && int1+int2>=50 ? 65 : 80)

//6.
int4 = 75;
int5 = 100;
console.log(int4+int5==8|| Math.abs(int4-int5)==8);
//7.
console.log(int4==15||int5==15||int4+int5==15);
//8.
console.log(int4%7==0||int4%11==0||int5%11==0||int5%7==0);
//9.
console.log(int4==int5? 3*(int4+int5) : int4+int5)

//10.
console.log(int5 > 19 ? 2*(int5-19):19-int5);
//11.

firstName = 'Rami'
age = 32;
if(age<13)
console.log(firstName , 'is a child')
else if(age<20)
console.log(firstName, 'is a teenager')
else
console.log(firstName, 'is an adult')
