

const buttons=document.querySelectorAll('.btn');

const result=document.getElementById('result')

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        // pour concatener les saisie il faut utiliser l'operatue de contenation: +=

        result.textContent+=e.target.id;
    })
})

// Pour les bouttons et checked on a pas besoin de les declarer s'ils ont des ID, on peut les appeler avec windon
// Pour dire a javascript de faire un calcul on ecrit : eval()
Equal.addEventListener('click', ()=>{
result.textContent=eval(result.textContent);
})

clear.addEventListener('click',()=>{
    result.textContent="";
})