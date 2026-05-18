// // wap to calculate the lowercase and uppercase vowel and consonants in a string 


// let str = prompt("Enter your string please : ")

// let lowerVowel = 0
// let lowerConsonants = 0
// let upperVowel = 0
// let upperConsonants = 0

// for (let i = 0; i<str.length; i++){
//     let ch = str[i]


//     // lowercase vowel

//     if ("aeiou".includes(ch)){
//         lowerVowel++
//     }

//     //uppercase vowel

//     else if ("AEIOU".includes(ch)){
//         upperVowel++
//     }

//     // lower case consonants

//     else if (ch>= "a" && ch<="z"){
//         lowerConsonants++
//     }

//     // uppercase consonants  

//     else if (ch>= "A" && ch<="Z"){
//         upperConsonants++
//     }
// }

// console.log("Lowercase Vowel ", lowerVowel);
// console.log("Uppercase Vowel ", upperVowel);
// console.log("Lowercase Consonants", lowerConsonants);
// console.log("Uppercase Consonants", upperConsonants);


// count number of words in a string 

// let str = prompt("Enter string here : ")

// let count = 0

// for (let i = 0; i<str.length ; i++){
//     // check for space followed by gap

//     if (str[i] == " " && str[i+1] != " "){
//         count++
//     }
// }

// if (str.trim() !== ""){
//     count++
// }

// console.log("Number of words ", count)


// let str  = prompt("Enter the string please : ")

// let count = 0 

// for (let i = 0; i<str.length; i++){
//   if (str[i] == " " && str[i+1] != " "){
//     count++
//   }
// }

// if (str.trim() !== ""){
//   count++
// }
// console.log("number of words ", count);


// count occurance of every character  

let str =  prompt("Enter a string ")

let visited = "*"
let arr = str.split()

for (let i=0; i<arr.length; i++){
    let count = 1
    
    //skip already counted characters

    if (arr[1] == visited){
        continue;
    }

    for (let j=i+1; j<arr.length; j++){
        if (arr[i] == arr[j]){
            count++;
            arr[j] = visited
        }
    }

    //ignoring spaces

    if (arr[i] != " "  && arr[i] != visited) {
        console.log(arr[i] +  " : "  + count);
    }
}
