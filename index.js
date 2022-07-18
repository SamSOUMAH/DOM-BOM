
const Question=document.querySelector(".click-event")
const btn1=document.querySelector('#btn-1');
const btn2=document.querySelector('#btn-2');
const reponse=document.querySelector('p');
const mousemove=document.querySelector(".mousemove");

// les evenements de la souris (les plus populaire)
//1-click,2-mousemove,3-mousedown,4-
Question.addEventListener('click',()=>{
    Question.classList.toggle("question-click")
})

btn1.addEventListener('click',()=>{
 reponse.classList.toggle('show-reponse')
 reponse.style.backgroundColor='green';
})

// le click de la souris
btn2.addEventListener('click',()=>{
    reponse.classList.toggle('show-reponse')
    reponse.style.backgroundColor='red';
})

// LA PRIORITE DES ORDRES DEXCECUTION: ID > CLASS > baliseHTML , LE STYLE DIRECTEMENT DANS LA BALISE EST AUSSI PLUS QUE TOUS LES AUTRES OU ON PEUT AUSSI AJOUTER !important

// position de la souris
window.addEventListener('mousemove',(e)=>{
    mousemove.style.left=e.pageX+"px";    
    mousemove.style.top=e.pageY+"px";    

})

window.addEventListener('mousedown',()=>{
    mousemove.style.transform="scale(2) translate(-25%, -25%)"; 
})

// appui sur la souris
window.addEventListener('mouseup',()=>{
    mousemove.style.transform="scale(1) translate(-50%, -50%)";
    mousemove.style.border="2px solid teal"
})

// le survole de la souris
Question.addEventListener('mouseenter',()=>{
    Question.style.background="rgba(255, 74, 255, 0.6)";
})

// quand la souris quitte la zone
Question.addEventListener('mouseout',()=>{
    Question.style.background="purple"
})

// quand la souris entre dans zone(mouseover)
reponse.addEventListener('mouseover',()=>{
    reponse.style.transform="rotate(5deg)"
})



// -----------------------KEYPRESS(LES EVENEMENTS DU CLAVIER), key(TOUCHE)-----------------
// keypress event, NB: l'evenement sur la touche se fait sur document
const keypressContainer=document.querySelector('.keypress');
const key=document.getElementById("key");

document.addEventListener('keypress',(e)=>{
    key.textContent=e.key;
    if(e.key==='r'){keypressContainer.style.background="red";}
    else if(e.key==='a'){keypressContainer.style.background="pink"}
    else{keypressContainer.style.background="teal"}

    if(e.key==='n') {ring(e.key);}
})

// ------FAIRE DU SON, QUAND ON CLIQUE SUR UNE TOUCHE----------------
const ring=(key)=>{
    const audio=new Audio();
    audio.src= key + ".m4a";
    audio.play();
}

// --------------EVENEMENT SCROLL, NB: LA BARE SCROLL EST OBLIGATOIR-----------------
const nav=document.querySelector("nav");
window.addEventListener('scroll',()=>{
    // console.log(scrollY)
    if(window.scrollY > 80){
        nav.style.top=0;
    }
    else{
        nav.style.top='-50px';
    }
})

// ----------------------LE FORMULAIRE NB: EST TRES IMPORTANT----------------------------
const from=document.querySelector("form");
// const from=document.getElementById('from')
const select=document.querySelector('select')
const inputName=document.querySelector('input[type="text"]')
let pseudo="";
let language="";

inputName.addEventListener('input',(e)=>{
pseudo=e.target.value;
})

select.addEventListener('input',(e)=>{
    language=e.target.value;
})

// on a pas besoin de declarer une variable pour les checkbox et les bouttons, javascrip les reconnaisse avec leurs ID


from.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(cgv.checked===true){
        document.querySelector('form > div').innerHTML=
        `<h3> pseudo: ${pseudo}</h3>
        <h4> langage: ${language}</h4>
        `;
    }
    else{
        alert('SVP!!! COCHEZ LE CGV');
    }

})

// ------------------EVENEMENT LOAD ---------NB: IL SE DECLANCHE UNE FOIS TOUTE LA PAGE A ETE CHARGE
window.addEventListener('load',()=>{
    // alert('document chargé')
    // console.log('Document chargé')
})

// ---ForEach------NB: SELECTIONNER TOUS LES ELEMENTS QUI ONT MEME NOM ,OU QUI ONT MEME NOM DE CLASS
// const boxes=document.getElementsByClassName('box');
// NB: il ne faut jamais utiliser getelementsByClassName si on a pas plusieurs element a selectionnes et sil ne marche pas utiliser le queryselectorAll
const boxes=document.querySelectorAll('.box')

boxes.forEach((box)=>{
    box.addEventListener('click',(e)=>{
        box.style.transform='scale(0.7)';
        // ou
       e.target.style.transform='scale(0.7)';
    })
})


// -------------------------NOTES: addEventListener vs onClick--------------------------
// onclick
// document.body.onclick=function(){
//     console.log('Scroll !!');
// }

// document.body.onclick=function(){
//     console.log('click !!');
// }

// ON NE PAS METTRE DEUX EVENEMENTS  SINON C'EST LE DEUXIEME QUI VA ETRE EXECUTER


// addEventListener
// document.body.addEventListener('click',()=>{
//     console.log('CLICK 1');
// })

// document.body.addEventListener('click',()=>{
//     console.log('CLICK 2');
// })
// les deux evenements sont excecuter a la fois 

// addEventListener avec le 3e parametre "BUBLBING ET USECAPTURE"
// Bubbling =>fin (de base l'eventListener est parametré en Bublbing) ou en REMONTANT
document.body.addEventListener('click',()=>{
    console.log('CLICK 1');
},false)

//Usercapture    (EN DESCENDANT)
document.body.addEventListener('click',()=>{
    console.log('CLICK 2');
},true)

// le site qui donne des explications sur javascript a chaque fois est: 
// www.gomakethings.com/
// what-is-that-third-argument-on-the-vanilla-js-addeventlistener-methode-and-when-do-you-need-it



// -----------------LA METHODE POUR ARRETER LA PROPAGATION D'UN EVENEMENT-------------------------------
// Stop Propagation
// Question.addEventListener('click',(e)=>{
//     alert('Test !');
//     e.stopPropagation();

// })

// SI ON VEUT ELEVER DES ADDVENTLISTENER ON PEUT UTILISER
// removeEventListener

// ----LE BOM: BROWSER OBJECT MODEL-----
// console.log(window.innerHeight);
// console.log(window.scrollY)

// On peut utiliser cette formule pour les inscriptions ou des fenetre de blog
// window.open("http://google.com","cours js", "height=500, width=700");

// --------------------LES EVENEMENTS ADOSSES A WINDOW

// 1-ALERTS
// alert('hello');

//2-confrim
btn2.addEventListener('click',()=>{
    confirm("VOULEZ VOUS VRAIMENT QUITTER ?")
})

// 3-PROMPT
btn1.addEventListener('click',()=>{
    let rep=prompt("Entrez votre nom !!");
    Question.innerHTML="<h2>BRAVO " + rep +"</h2>"
})

//les deux dernier evenements sont très important

// 4-setTimeout: un compte rebours(execute quelque chose dans tel temps )
// un temps en milliseconde(2000 miliseconde=2 seconde) avant de declencher,toute une logique à exécuter
setTimeout(()=>{
Question.style.borderRadius="300px";
},2000)

//setInterval; Interval de temps(execute moi quelque chose dans cet interval)
// setInterval(()=>{
//     document.body.innerHTML+=
//      `
//     <div class='box'>
//     <h2>Nouvelle boite !!</h2>
//     </div>

//     `
// },100000) //cette facon elle va s'executer indefiniment

// Pour l'arreter, on le loge dans une variable
// let interval=setInterval(()=>{
//     document.body.innerHTML+=
//      `
//     <div class='box'>
//     <h2>Nouvelle boite !!</h2>
//     </div>

//     `
// },1000);

// document.body.addEventListener('click',(e)=>{
//     console.log(e.target);
// clearInterval(interval);
// })

// On eut aussi retirer quelque chose du dom
// document.body.addEventListener('click',(e)=>{
//    e.target.remove();

// })



// -------------------LES ELEMENTS QUI COMPOSENT LE BOM--------------
// 1-LE NAVIGATEUR
// 2-SCREEN
// 3-LOCATION=DIRIGER VERS DES LIENS,ANALYSER LE LIENS OU ON EST
// 4-FRAMES
// 4-HISTORY
// 5-XMLHttpRequest


// NAVIGATOR: LES IMPORTANCES
// 1-PAR EXEMPLE POUR VOIR TOUS VOS DONNES DE  NAVIGATEUR,AVOIR LES INFORMATIONS SUR VOTRE UTILISATEUR
// console.log(navigator.userAgent)

// 2-IL PEUT NOUS LOCALISER
// LA DOCUMENTATION SUR CA EST:
// https://developer.mozilla.org/fr/docs/web/API/Geolocation/getCurrentPosition

// var options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
//   };
  
//   function success(pos) {
//     var crd = pos.coords;
  
//     console.log('Votre position actuelle est :');
//     console.log(`Latitude : ${crd.latitude}`);
//     console.log(`Longitude : ${crd.longitude}`);
//     console.log(`La précision est de ${crd.accuracy} mètres.`);
//   }
  
//   function error(err) {
//     console.warn(`ERREUR (${err.code}): ${err.message}`);
//   }
  
//   navigator.geolocation.getCurrentPosition(success, error, options);

// ON PEU AUSSI LOCALISER NOTRE SITE DANS LIEU BIEN PRECIS, EN FAISANT:
// INSPECTER=>PARAMETTRE=>LOCATION/SITES


//---LOCATION=preciser le liens exacte où vous etes
// console.log(location.href)
// console.log(location.host)
// console.log(location.pathname)
// console.log(location.search)

// ----Pour rediriger vers un autre lien
// location.replace('http://lequipe.fr');

// -----OU, cest a dire par exemple au chargement dirige toi vers cette page
// window.onload=()=>{
//     location.href="http://twitter.fr";
// }


//----HISTORY-----------------------------------------
// 1-CONSULTATION DE VOTRE HISTORIQUE
// console.log(history)

// 2-RETOURNER EN ARRIERE
// Window.history.back();

// 3-SI ON VEUT RETOURNER PLUSIEURS PAGES EN ARRIERE
// History.go(-2)


// ----setPropirty
window.addEventListener('mousemove', (e)=>{
nav.style.setProperty("--x", e.layerX +"px");
nav.style.setProperty("--y", e.layerY +"px");
})