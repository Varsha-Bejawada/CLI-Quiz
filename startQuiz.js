const readLineSync = require('readline-sync');
const questions = [ 
    {
        question : '1. In which state of India the Sun rises first? ',
        options : ["a.Gujarat", "b.Assam", "c.Arunachal pradesh", "d.Madya pradesh"],
        Answer: "c"
    },
    {
        question : '2. What is the longest river in the world?',
        options : ["a.Ganga", "b.Nile", "c.Congo","d.Amazon"],
        Answer : "b"
    },
    {
        question : '3.What is the largest desert in the world?',
        options : ["a.Thar","b.Gobi desert", "c.Arabian deesert", "d.Sahara desert"],
        Answer : "d"
    },
    {
        question : '4.What is the largest Ocean in the world?',
        options : ["a.Pacific Ocean", "b.Carribean Sea", "c. Bay of Bengal", "d. Indian Ocean"],
        Answer : "a"
    },
    {
        question : '5.What is the highest mountain in India?',
        options : ["a.Mount Everest", "b.kanchanjung", "c.Nanda Devi", "d.Kamet"],
        Answer : "b"
    },
    {
        question : '6. What is the coldest planet?',
        options : ["a.Neptune", "b. Mars", "c.Jupiter","d.Uranus"],
        Answer : "a"
    },
    {
        question : '7.What is the Biggest planet?',
        options : ["a.Neptune", "b. Mars", "c.Jupiter","d.Uranus"],
        Answer : "c"
    },
    {
        question : '8.What is the largest forest in the world?',
        options : ["a.Amazon", "b.Congo", "c.Tongass", "d.Kinabalu"],
        Answer : "a"
    },
    {
        question : '9.What is the least populated country in Asia?',
        options : ["a.Kuwait", "b.Bhutan", "c.Mongolia", "d.Maldives"],
        Answer : "d"
    },
    {
        question : '10.What is the largest polar desert in the world?',
        options : ["a.Antarctica", "b.Artic", "c.Greenland", "d.Iceland"],
        Answer : "a"
    }
]

let score = 0;

const printQuestion = (que) => {
        console.log(que ,"\n");
}

const printOption = (option) => {
for(let j of option) {
    console.log(j,"\n");
    }
}   

    const validInput = (key) => {
    let userInput = readLineSync.question("Enter your answer : ","\n");
    if(userInput.toLowerCase() === key){
        console.log("\n","Correct Answer!..","\n");
        score++;
    }
    else{
        console.log("\n","you are thinking you're Smart!! Correct Answer is :", key,"\n");
    }
}



for(let i of questions) {
    const {question,options,Answer} = i;
    printQuestion(question);
    printOption(options);
    validInput(Answer);
}
console.log("Quiz Completed! your score is :", score, "/", questions.length);