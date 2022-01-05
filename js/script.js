const API_URL= 'https://programming-quotes-api.herokuapp.com/Quotes/random';

(function(){

    const header = document.createElement('header');
    header.setAttribute('class', 'header');

    const headerContainer = document.createElement('div');
    headerContainer.setAttribute('class', 'header-container');

    const inputContainer= document.createElement('div');
    inputContainer.setAttribute('class','input-container');

    const displayInfo = document.createElement('h3');
    displayInfo.innerText='Quotes change automatically every 30 seconds';

    inputContainer.append(displayInfo);

    header.append(headerContainer);

    const section = document.createElement('section');
    section.setAttribute('class', 'container');

    const displayContainer = document.createElement('div');
    displayContainer.setAttribute('class', 'display-container');

    const displayText = document.createElement('div');
    displayText.setAttribute('class', 'text');

    const displaySubText=document.createElement('p');
    displaySubText.setAttribute('class','sub-text');

    displayContainer.append(displayText,displaySubText);
    section.append(displayContainer);

    document.body.append(header, section,inputContainer);

})();

function displayQuote(quote,author){

    const displayText = document.querySelector('.text');
    displayText.innerText=quote;

    const displaySubText = document.querySelector('.sub-text');
    displaySubText.innerText=`- ${author}`;

}

async function getQuote() {

    try {
        const data = await fetch(`${API_URL}`);
        const response = await data.json();
        displayQuote(response.en,response.author);
    } catch (msg) {
        console.log(msg);
    }

}

getQuote();

setInterval(()=>{
    getQuote();
},30000);