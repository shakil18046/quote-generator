const URL = "https://type.fit/api/quotes";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const copyBtn = document.getElementById("copy");
const speakBtn = document.getElementById("speak-btn");
const newQuote = document.getElementById("new-quote");
const loader = document.getElementById("loader");
var demo = false;
let quoteData;
try{
    // this function create new quote
    newQuote.addEventListener("click",(e)=>{
        fetch(URL)
    .then(res=> res.json())
    .then(data=> {
        console.log(data);
        quoteData = data[Math.ceil(Math.random()*data.length)];
        quote.innerText = quoteData.text;
        author.innerText = quoteData.author;
    })
    })
    fetch(URL)
    .then(res=> res.json())
    .then(data=> {
        quoteData = data[Math.ceil(Math.random()*data.length)];
        console.log(quoteData.text);
        quote.innerText = quoteData.text;
        author.innerText = quoteData.author;
    })

    // this event create for speak quote.
    
    const speakBtn = document.getElementById("speak-btn");
    speakBtn.addEventListener("click", (e)=>{
        e.preventDefault;
        
        if (demo==true) {
           
            speakBtn.innerText = "speak";
            speechSynthesis.cancel();
            demo = false;
        }else if (demo==false) {
            speakBtn.innerText = "stop speak";
            let speak = new SpeechSynthesisUtterance(`${quote.innerText} author name ${author.innerText}`)
            speechSynthesis.speak(speak);
            
            
            demo = true;
            console.log(demo);
        }
        console.log(demo);
           
        
    });
    // this function create for copy quote in our clipboard.
    copyBtn.addEventListener("click",(e)=>{
        navigator.clipboard.writeText(quote.innerText);
        alert("copy to clipboard")
    });   
}catch(err){
    console.log(err.message);
}





