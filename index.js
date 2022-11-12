const questions = [
    {
        'que':'   Which of the following is a markup language?',
        'a':'HTML',
        'b':'CSS',
        'c':'JAVASCRIPT',
        'd':'PHP',
        'Correct':'a',
},
{
    
    'que':' What year was Javascript language?',
    'a':'1996',
    'b':'1995',
    'c':'1994',
    'd':'none of the above',
    'Correct':'b',
},
{
    
    'que':' What does css stands for?',
    'a':'Hypertext markup Language',
    'b':'Cascadibng Style Sheet',
    'c':'Jason Object Notation',
    'd':'none of the above',
    'Correct':'b',
},
{
   'que': ' Bahubali festival is related to',
   'a':'Islam',
   'b':'Hinduism',
   'c':' Buddhism',
   'd':'Jainism',
   'Correct':'d',

},

{
    'que':' Javascript is a _____ language.',
'a':'Programming',
'b':'Application',
'c':' Scripting',
'd':'None of the above',
'Correct':'a',
},
{
    
    'que':'  JavaScript code can be called by using.',
'a':'RMI',
'b':' Preprocessor',
'c':' Function / Method',
'd':'None of the above',
'Correct':'c',
},
{
    'que':'  JavaScript is a _____ Side Scripting Language..',
    'a':'Server',
    'b':' Browser',
    'c':' ISP',
    'd':'None of the above',
    'Correct':'b',
    },
    {
        'que':'   JavaScript code is written inside file having extension',
        'a':'jvs',
        'b':' jsc',
        'c':' js',
        'd':'javascript',
        'Correct':'c',
        },
        {
            'que':' The script tag must be placed in __________',
            'a':'the head tag',
            'b':' the head or body',
            'c':' the title or head',
            'd':'after the body tag',
            'Correct':'b',
            },
            {
                'que':' Among the following, which one is a ternary operator? __________',
                'a':'+',
                'b':' -',
                'c':' :',
                'd':'?:',
                'Correct':'d ',
                },
];
let index = 0;
let total = questions.length;
let right =0,
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInput = document.querySelectorAll('.options')
const loadQuestion = ()=>{
    if (index===total) {
        return endQuiz();
    }
    reset();
    const data = questions[index]
    // console.log(data);
    quesBox.innerText = `${index+1})${data.que}`
    optionInput[0].nextElementSibling.innerText=data.a;
    optionInput[1].nextElementSibling.innerText=data.b;
    optionInput[2].nextElementSibling.innerText=data.c;
    optionInput[3].nextElementSibling.innerText=data.d;
}

const submitQuiz = () =>{
    const data = questions[index]
    const ans = getAnswer()
    if(ans===data.Correct)
    right++;
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
};
const getAnswer = ()=>{
    let answer;
    optionInput.forEach(
        (input)=>{
            if(input.checked){
                // console.log('yes')
                answer = input.value;
            }
        }
    )
    return answer;
};

const reset = () => {
    optionInput.forEach(
        (input)=>{
            input.checked= false;
            
            }
        
    )
}
const endQuiz = () =>{
    document.getElementById('box').innerHTML=`
    <div style = "text-align:center">
    <h3> Thank you for playing the quiz </h3>
    <h2> ${right}/${total} are correct answer</h2>
    </div>
    `
} 
loadQuestion();