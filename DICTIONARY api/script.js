// const url="https://api.dictionaryapi.dev/api/v2/entries/en/";

// const btn=document.querySelector(".btn");
// const result=document.querySelector(".result");

// btn.addEventListener("click",()=>{
//     let  search=document.querySelector(".search").value;
//     // console.log(search);
//     fetch(`${url}${search}`).then(
//         (response)=>response.json()
//     ).then(data=>{
//         console.log(data);
//         result.innerHTML=`
//         <div> 
//         <h3>${search}</h3>
//         <p>${data[0].meanings[0].partsOfSpeech}</p>
//         </div>
//              `;
//     })
// })
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const sound = document.querySelector("#sound");


btn.addEventListener("click", () => {
    let search = document.querySelector(".search").value.trim();

    fetch(`${url}${search}`)
        .then(response => {
             
            return response.json();
        })
        .then(data => {
            const word = data[0].word;
            const partOfSpeech = data[0].meanings[0].partOfSpeech; // Corrected property name

            result.innerHTML = `
            <button onclick="playsound()">
                <i class="fas fa-volume-up"></i>
            </button>
                <div> 
                    <h3>${word}</h3>
                    <p><b>Part of Speech:</b> ${partOfSpeech}</p>
                    <p>${data[0].meanings[0].definitions[0].definition}</p>
                </div>
            `;
            sound.setAttribute("src",`https:${data[0].phonetics[0].audio}`);
        })
        
});
function playsound(){
    sound.play();
}
