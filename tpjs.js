let count = 0;
function doIt()
{
    let sav = document.getElementById('savoir').value;
    let aut = document.getElementById('auteur').value;
    let date = document.getElementById('dateInp').value;
    let listEl = document.createElement("li");
    let leh = document.createElement('h2');
    let lep = document.createElement('p');
    let ledate = document.createElement('p');
    let supp = document.createElement('button');
    supp.innerText = 'Supp';
    supp.setAttribute('onclick', "delentre('entre" + count + "')");

    listEl.appendChild(leh);
    listEl.appendChild(lep);
    listEl.appendChild(ledate);
    listEl.appendChild(supp);
    

    if(sav != '' && aut != '' && date!='')
    {
        leh.innerText = sav;
        lep.innerText = aut;
        ledate.innerText = date;
        
        listEl.id = "entre"+count;
        console.log(listEl);
        document.getElementById("list").insertAdjacentElement('beforeend',listEl);
        count++;
    }
}
function delentre(id)
{
    console.log(id);
    document.getElementById(id).remove();
}
function supprimer( event )
{
    console.log(" Vous avez cliqué sur: ");
    console.log( event.currentTarget );

    console.log(" Le parent: ");
    console.log( event.currentTarget.parentNode );
    event.currentTarget.parentNode.parentNode.removeChild( event.currentTarget.parentNode )
}
class trucNul{

    constructor(sav, aut, date) {
        this.sav = sav;
        this.aut = aut;
        this.date = date;
    }
}