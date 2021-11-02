let btn=document.querySelector('.start');
console.log(5/0)
btn.addEventListener('click',init)
// all inrials
let currentWord=document.querySelector('#currentWord')
let wordInput=document.querySelector('#wordInput')
let message=document.querySelector('#message');
let timeDisplay=document.querySelector('#time');
let scoreDisplay=document.querySelector('#score');
let seconds=document.querySelector('#seconds');

// score and time
let score=0;
let time=5;
let isplaying;

const words=[
    'Tomatto',
    'Grand Voke',
    'Assembly',
    'Danger Zone',
    'under the bed',
    'warning on warning',
    'intelligent',
    'computer',
    'library',
    'teamwork',
    'candidate',
    'governments',
    'tictoe hikel',
    'upwork',
    'fiver gands',
    'direction mode',
    'accelerator',
    'free fire',
    'hirerchetical',
    'dexathatizine',
    'employee label',
    'zombie risks',
    'green mode',
    'jumpcode tiny',
    'javascript',
    'congratulations',
    'telecommunication',
    'python',
    'choice',
    'jamhuuriya',
    'just dreams',
    'Developer',
    'coding',
    'webbrowser',
    'Elequent',
    'Abdirahman'
]

// functions
function init(){
   showWord(words)
    // timing
    setInterval(countdown,1000)
    let btn2=document.querySelector('.start');
    btn2.classList.toggle('btnstate')
    // check status effecr
    setInterval(checkStatus,50)
    
    // matching
    wordInput.addEventListener('input',startMatch)
}
// matching
function startMatch(){
    if (matchWords()){
        isplaying=true;
        time=6;
        showWord(words);
        wordInput.value=''
        score++;

    }
    if (score==-1){
        scoreDisplay.innerHTML=0;
        
    }
    else{
        scoreDisplay.innerHTML=score
    }

   
}


// matchWords
function matchWords(){
    if (wordInput.value==currentWord.innerHTML){
        message.innerHTML='Correct!!'
        return true

    }else{
        message.innerHTML='';
        return false
    }
}


// show words
function showWord(words){
    let randomIndex=Math.floor(Math.random()*words.length)
    currentWord.innerHTML=words[randomIndex]
}


// time left
function countdown(){
    if (time>0){
        time--;
    }else if (time==0){
        isplaying=false;
    }
    timeDisplay.innerHTML=time;
}

// if game over
function checkStatus(){
    if (!isplaying && time==0){

        message.innerHTML='Game Over!!'
    
        score=-1;
        
    }
  
  
}


