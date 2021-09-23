console.log("Number Facts 🚀");

let num = document.querySelector('#num');
let showFact = document.querySelector('#showFact');
let types = ['trivia','math'];

num.addEventListener('input',()=>{

    let type = types[Math.floor(Math.random()*2)];
    let number = Number(num.value); //Default is 0

    let url = `http://numbersapi.com/${number}/${type}`;
    
    console.log(url);
    fetch(url).then(res=>{
        
        return res.text();
    }).then(data=>{
        showFact.innerHTML = data
    })

});
