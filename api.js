let url = "https://kontests.net/api/v1/all";
let res = fetch(url);
res.then((r) => {
    return r.json();
  }).then((contest) => {
    console.log(contest);
    let str="";
    for (const item in contest) {
          
         
         str+=` <div class="card" style="width: 18rem; margin:auto;">
         <img src="https://media.istockphoto.com/id/1047259374/photo/programming-source-code-abstract-background.jpg?s=612x612&w=0&k=20&c=07DAFiujCb58Zgu5ZArLprHiSKew5pCGqbTnop9GclA=" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">${contest[item].name}</h5>
           <p class="card-text">Start Time:${contest[item].start_time}"</p>
           <p class="card-text">End Time:${contest[item].end_time}"</p>

           <a href=${contest[item].url} class="btn btn-primary">Go to Contest</a>
         </div>
       </div>`

        }
        let div=document.getElementById("card")
        div.innerHTML=str;
    }
  );
