// const button = document.getElementById(' submit');

// button.onclick = () => {
//     const value = document.getElementById('textbox').value;
//     const value1 = document.getElementById('textbox').value[0];
//     const value2 = document.getElementById('textbox').value[1];
//     const value3 = document.getElementById('textbox').value[2];
//     const value4 = document.getElementById('textbox').value[3];
//     const value5 = document.getElementById('textbox').value[4];
//     const value6 = document.getElementById('textbox').value[5];

//     const a = [];

// a[0]="zero";
// a[9]="one";
// a[8]="two";
// a[7]="three";
// a[6]="four";
// a[5]="five";
// a[4]="six";
// a[3]="seven";
// a[2]="eight";
// a[1]="nine";

// // for First digit
// function first(){
//     for(i=10; i>=0 ;i--)
//     {
//         if(value1 == a.length-i){
//             console.log(a[i]);
//         }
//         // else{ console.log("0") }   
//      } 
// }

// // for Second digit
// function second(){
//     for(i=10; i>=0 ;i--)
//     {
//         if(value2 == a.length-i){
//             console.log(a[i]);
//         }
//         // else{ console.log("0") }    
// }
// }
// // for Third digit
// function third(){
//     for(i=10; i>=0 ;i--)
//     {
//         if(value3 == a.length-i){
//             console.log(a[i]);
//         }
//     //   else{ console.log("0") } 
//     } 
// }

// // for Fourth digit
// function fourth(){
//     for(i=10; i>=0 ;i--)
//     {
//         if(value4 == a.length-i){
//             console.log(a[i]);
//         }
//     //   else{ console.log("0") } 
//     } 
// }

// // for Fifth digit
// function fifth(){
//     for(i=10; i>=0 ;i--)
//     {
//         if(value5 == a.length-i){
//             console.log(a[i]);
//         }
//     //   else{ console.log("0") } 
//     } 
// }

// // for Sisth digit
// function sixth(){
//     for(i=10; i>=0 ;i--)
//     {
//         if(value6 == a.length-i){
//             console.log(a[i]);
//         }
//     //   else{ console.log("0") } 
//     } 
// }

//     console.log(first(), second(), third(), fourth(), fifth(), sixth());

// }


// button1.onclick = ()=>{

//     const value = document.getElementById('textbox').value;
//     const value1 = document.getElementById('textbox').value[0];
//     const value2 = document.getElementById('textbox').value[1];
//     const value3 = document.getElementById('textbox').value[2];

//  const a = [];

// a[0]="zero";
// a[1]="one";
// a[2]="two";
// a[3]="three";
// a[4]="four";
// a[5]="five";
// a[6]="six";
// a[7]="seven";
// a[8]="eight";
// a[9]="nine";
// a[10]="ten";
// a[11]="eleven";
// a[12]="twelve";
// a[13]="thirteen";
// a[14]="fourteen";
// a[15]="fifteen";
// a[16]="sixteen";
// a[17]="seventeen";
// a[18]="eighteen";
// a[19]="nineteen";

// const b = [];

// b[0]="twenty";
// b[1]="thirty";
// b[2]="fourty";
// b[3]="fifty";
// b[4]="sixty";
// b[5]="seventy";
// b[6]="eighty";
// b[7]="ninety";

// const c = [];

// c[0]="hundred";
// c[1]="two hundred";
// c[2]="three hundred";
// c[3]="four hundred";
// c[4]="five hundred";
// c[5]="six hundred";
// c[6]="seven hundred";
// c[7]="eight hundred";
// c[8]="nine hundred";

// // for numbers less than 20
// function firstpart(){
//     console.log(a[value])
// }

// // For numbers between 20 and 99
// function firstPlace(){
//     if(value1 == 2){console.log(b[0])}
//     if(value1 == 3){console.log(b[1])}
//     if(value1 == 4){console.log(b[2])}
//     if(value1 == 5){console.log(b[3])}
//     if(value1 == 6){console.log(b[4])}
//     if(value1 == 7){console.log(b[5])}
//     if(value1 == 8){console.log(b[6])}
//     if(value1 == 9){console.log(b[7])}
// }

// function secondPlace(){
//     if(value2 == 1){console.log(a[1])}
//     if(value2 == 2){console.log(a[2])}
//     if(value2 == 3){console.log(a[3])}
//     if(value2 == 4){console.log(a[4])}
//     if(value2 == 5){console.log(a[5])}
//     if(value2 == 6){console.log(a[6])}
//     if(value2 == 7){console.log(a[7])}
//     if(value2 == 8){console.log(a[8])}
//     if(value2 == 9){console.log(a[9])}
// }

// function thirdPlace(){
//     if(value1 == 1){console.log(c[0])}
//     if(value1 == 2){console.log(c[1])}
//     if(value1 == 3){console.log(c[2])}
//     if(value1 == 4){console.log(c[3])}
//     if(value1 == 5){console.log(c[4])}
//     if(value1 == 6){console.log(c[5])}
//     if(value1 == 7){console.log(c[6])}
//     if(value1 == 8){console.log(c[7])}
//     if(value1 == 9){console.log(c[8])}
// }

// function fourthPlace(){
//     if(value2 == 2){console.log(b[0])}
//     if(value2 == 3){console.log(b[1])}
//     if(value2 == 4){console.log(b[2])}
//     if(value2 == 5){console.log(b[3])}
//     if(value2 == 6){console.log(b[4])}
//     if(value2 == 7){console.log(b[5])}
//     if(value2 == 8){console.log(b[6])}
//     if(value2 == 9){console.log(b[7])}
// }

// function fifthPlace(){
//     if(value3 == 1){console.log(a[1])}
//     if(value3 == 2){console.log(a[2])}
//     if(value3 == 3){console.log(a[3])}
//     if(value3 == 4){console.log(a[4])}
//     if(value3 == 5){console.log(a[5])}
//     if(value3 == 6){console.log(a[6])}
//     if(value3 == 7){console.log(a[7])}
//     if(value3 == 8){console.log(a[8])}
//     if(value3 == 9){console.log(a[9])}
// }


// if(value<20){
//     console.log(firstpart());
// }

// if(value.length = 2 && value>=20 && value<=99){
//     console.log(firstPlace(), secondPlace());

// }

// if(value.length = 3 && value>=100 && value<=999){
// //    const app = thirdPlace.toString()
// //    const app1 = fourthPlace.toString()
// //    const app2 = fifthPlace.toString()

//     // console.log(app, "and", app1, app2);
//     console.log(`${thirdPlace()} ${fourthPlace()} ${fifthPlace()}`);
// }



// }

const button = document.getElementById('submit');

button.onclick = ()=> {

    const value = document.getElementById('textbox').value;
        once=["","one","two",'three',"four","five","six","seven",'eight',"nine","ten", "eleven", 'twelve', 'thirteen', 'fourteen', 'fiveteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        tense=["","","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"]
        hundreds=["","one hundred","two hundred",'three hundred',"four hundred","five hundred","six hundred","seven hundred",'eight hundred',"nine hundred"]
        thousands=["","thousand","thousand",'thousand',"thousand","thousand","thousand","thousand",'thousand',"thousand"]
        lakhs=["","lakh","lakh",'lakh',"lakh","lakh","lakh","lakh",'lakh',"lakh"]
        crores=["","crore","crore",'crore',"crore","crore","crore","crore",'crore',"crore"]
        
        if(value<20){
        console.log(once[value])
    }
    
    else if(value<100){
    const split = value.split("");
    const first =split[0];
    const second = split[1];
    console.log(tense[first]+" "+once[second])
    }

    else if(value<1000){
        const split = value.split("");
        const first =split[0];
        const second = split[1];
        const third = split[2];
        console.log(hundreds[first]+" "+tense[second]+" "+once[third])
}

    else if(value<10000){
        const split = value.split("");
        const first =split[0];
        const second = split[1];
        const third = split[2];
        const fourth = split[3];
        console.log(once[first]+" "+thousands[first]+" "+hundreds[second]+" "+tense[third]+" "+once[fourth])
    }

    else if(value<100000){
        const split = value.split("");
        const first =split[0];
        const second = split[1];
        const third = split[2];
        const fourth = split[3];
        const fifth = split[4];
        console.log(tense[first]+" "+once[second]+" "+thousands[first]+" "+hundreds[third]+" "+tense[fourth]+" "+once[fifth])
    }

    else if(value<1000000){
        const split = value.split("");
        const first =split[0];
        const second = split[1];
        const third = split[2];
        const fourth = split[3];
        const fifth = split[4];
        const sixth = split[5];
        console.log(once[first]+" "+lakhs[first]+" "+tense[second]+" "+once[third]+" "+thousands[second]+" "+hundreds[fourth]+" "+tense[fifth]+" "+once[sixth])
    }

    else if(value<10000000){
        const split = value.split("");
        const first =split[0];
        const second = split[1];
        const third = split[2];
        const fourth = split[3];
        const fifth = split[4];
        const sixth = split[5];
        const seventh = split[6];
        console.log(tense[first]+" "+once[second]+" "+lakhs[first]+" "+tense[third]+" "+once[fourth]+" "+thousands[third]+" "+hundreds[fifth]+" "+tense[sixth]+" "+once[seventh])
    }

    else if(value<100000000){
        const split = value.split("");
        const first =split[0];
        const second = split[1];
        const third = split[2];
        const fourth = split[3];
        const fifth = split[4];
        const sixth = split[5];
        const seventh = split[6];
        const eight = split[7];
        console.log(once[first]+" "+crores[first]+" "+tense[second]+" "+once[third]+" "+lakhs[third]+" "+tense[fourth]+" "+once[fifth]+" "+thousands[fourth]+" "+hundreds[sixth]+" "+tense[seventh]+" "+once[eight])
    }
  
    else if(value<1000000000){
        const split = value.split("");
        const first =split[0];
        const second = split[1];
        const third = split[2];
        const fourth = split[3];
        const fifth = split[4];
        const sixth = split[5];
        const seventh = split[6];
        const eight = split[7];
        const nineth = split[8];
        console.log(tense[first]+" "+once[second]+" "+crores[first]+" "+tense[third]+" "+once[fourth]+" "+lakhs[third]+" "+tense[fifth]+" "+once[sixth]+" "+thousands[fifth]+" "+hundreds[seventh]+" "+tense[eight]+" "+once[nineth])
    }
  

}