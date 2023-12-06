
let button = document.querySelector(".btn");
let quote = document.querySelector(".quote");
let author = document.querySelector(".author-name");


button.addEventListener("click", ()=>{
    getQuote();
})
async function getQuote(){
    let response = await fetch(`https://api.quotable.io/quotes/random`);
    let data = await response.json();
    console.log(data)
    quote.innerHTML = `" ${data[0].content} "`;
    author.innerHTML = `~ ${data[0].author}`

}