HTMLS:
#Question1.HtmL2
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<script src="exercise_1.js"></script>
</body>
</html>
#Question2.Html2
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<script src="exercise_2.js"></script>
</body>
</html>
#Question3.Html2
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<p id="target"></p>

<script src="exercise_3.js"></script>
</body>
</html>
#Question4.Html2
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<script src="exercise_4.js"></script>
</body>
</html>
#Question5.Html2
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<script src="exercise_5.js"></script>
</body>
</html>
#Question6.Html2
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<script src="exercise_6.js"></script>
</body>
</html>
#Question7.Html2
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<script src="exercise_7.js"></script>
</body>
</html>
#Question8.Html2
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<script src="exercise_8.js"></script>
</body>
</html>
#Question9.Html2
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<script src="exercise_9.js"></script>
</body>
</html>
#Question10.Html2
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<script src="exercise_10.js"></script>
</body>
</html>

JS:
//Question1.JS2
var numList=[]
var reverseList=[]

for (let i=0;i<5;i++){
    let num=prompt("Enter 5 number");
    numList.push(num);

}
for (let i=numList.length;i>=0;i--){
    reverseList.push(numList[i])
}
for (let i =0;i<reverseList.length;i++){
    console.log(reverseList[i])
}
//Question2.JS2

const nameList=[]
let name
let sort_list

const numParticipants=prompt("Enter number of participants:");

for(let i=1;i<=numParticipants;i++){
    name=prompt("enter name of participants:");
    nameList.push(name);
}

sort_list=nameList.sort();
document.writeln("<ol>")

for (let i=0;i<sort_list.length;i++){
    document.write("<li>" + sort_list[i]+"</li>")
}

document.writeln("<ol>")
//Question3.Js2

const nameDog=[];
let name;
let reverse_list;

for (let i=0;i<6;i++){
    name=prompt("Enter name of Dogs");
    nameDog.push(name);
}
reverse_list=nameDog.sort().reverse()

document.write("<ul>")
for (let i=0;i<reverse_list.length;i++){
    document.write("<li>" +reverse_list[i]+ "</li>")
}
document.write("<ul>")
//Question4.Js2

const numList=[]
let sortList
var number=parseInt(prompt("enter number,if you want to finish enter *ZERO*:"));
while ( number != 0){
    numList.push(number);
    number=parseInt(prompt("enter number,if you want to finish enter *ZERO*:"))
}
for (let i=0;i<numList.length;i++){
    sortList=numList.sort(function (x,y){
        return x-y
    })
}
for (let i=0;i<sortList.length;i++){
    console.log(sortList[i])
}
//Question5.JS2

let numberList=[];
let sortlist_5;
let number =prompt("enter number, for being finish program enter repeated number");

while (!numberList.includes(number)){
    numberList.push(number);
    number =prompt("enter number, for being finish program enter repeated number");

}

sortlist_5=numberList.sort(function (x,y){return x-y})

for (let i = 0; i < sortlist_5.length; i++) {
    console.log(sortlist_5[i]);
}
//Question6.JS2


let randNum_list=[];
let randNum=0;
function randomFunction (){
    return Math.floor(Math.random()*6)+1;
}

while (randNum != 6){
    randNum=randomFunction();
    randNum_list.push(randNum);
}

document.write("<ul>");
for (let i =0;i<randNum_list.length;i++){
    document.write("<li>" + randNum_list[i]+ "</li>");
}
document.write("<ul>");
//Question7.JS2

let randNum_list=[];
let randNum=0;
let rollSide

function randomFunction (rollSide){
    return Math.floor(Math.random()*rollSide)+1;
}

rollSide=prompt("Enter number of sides")
while (randNum != rollSide){
    randNum=randomFunction(rollSide);
    randNum_list.push(randNum);
}

document.write("<ul>");
for (let i =0;i<randNum_list.length;i++){
    document.write("<li>" + randNum_list[i]+ "</li>");
}
document.write("<ul>");
//Question8.JS2

let array1=[" Hi "]
let array2=[" My "]
let array3=[" Name "]
let array4=[" Is Negin ."]
let concat_arrays=[]
let sentence

function concat(array1,array2,array3,array4){
    concat_arrays=array1+array2+array3+array4
    return concat_arrays
}
sentence=concat(array1,array2,array3,array4);

document.write(sentence)
//Question9.Js2

const firstArray=[4,5,8,13,16,11,3,1,19,22,65];
let evenArray=[];


function even(firstArray){
    for (let i=0;i<firstArray.length;i++){
        if (firstArray[i] % 2 ==0 ){
            evenArray.push(firstArray[i]);

        }
    }
    return evenArray;
}


evenNumbers=even(firstArray);
console.log("FirstArray")
for (let i =0;i<firstArray.length;i++){
    console.log(firstArray[i]);
}
console.log("EvenArray")
for (let i =0;i<evenNumbers.length;i++){
    console.log(evenArray[i]);
}
//Question10.JS2


let numberCandidate
let numberVoters
let nameCandidate
let candidate_object
let name_vote_candid
let votes
let candid_list=[]
let empty=0
let final_list=[]

numberCandidate=prompt("enter number of The CANDIDATE")
for (let i=1;i<=numberCandidate;i++){
    nameCandidate=prompt("Enter name of condidates ",i)

    candidate_object={
        name:nameCandidate,
        votes:0,
    }
    candid_list.push(candidate_object)
}



numberVoters=prompt("Enter number of VOTERS")

for (let i=1;i<=numberVoters;i++) {
    name_vote_candid = prompt("Enter name of candid that you choose")
    for (let k=0;k<candid_list.length;k++)
        if (candid_list[k].name==name_vote_candid) {
            candid_list[k].votes++
        }
        if (name_vote_candid == '') {
                    empty++
                }
}



candid_list.sort(function (x,y){
    return x-y
})
console.log("The winner is "+candid_list[0].name +" with "+candid_list[0].votes+" votes.")
console.log("results:")
for (let i=0;i<candid_list.length;i++) {
    console.log(candid_list[i].name + ':' + candid_list[i].votes)
}




