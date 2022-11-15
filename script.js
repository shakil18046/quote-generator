const URL = "https://type.fit/api/quotes";
const quote = document.getElementById("quote");
const copyBtn = document.getElementById("copy");
const speakBtn = document.getElementById("speak-btn");
const newQuote = document.getElementById("new-quote");
const loader = document.getElementById("loader");
var demo = false;
let quoteData;
try{
    // loading spinner
    window.addEventListener("load",()=>{
        loader.classList.add("hidden")
    })
    // this function create new quote
    newQuote.addEventListener("click",(e)=>{
        fetch(URL)
    .then(res=> res.json())
    .then(data=> {
        quoteData = data[Math.ceil(Math.random()*data.length)];
        console.log(quoteData.text);
        quote.innerText = quoteData.text;
    })
    })
    fetch(URL)
    .then(res=> res.json())
    .then(data=> {
        quoteData = data[Math.ceil(Math.random()*data.length)];
        console.log(quoteData.text);
        quote.innerText = quoteData.text;
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
            let speak = new SpeechSynthesisUtterance(`${quote.innerText}`)
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





