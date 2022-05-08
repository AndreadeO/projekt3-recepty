/*
Co je za úkol v tomto projektu:

1) Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html.

2) Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova.

3) Doplň filtrovanání receptů podle kategorie.

4) Doplň řazení receptů podle hodnocení.

5) Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis.

6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.
*/

// zobrazime seznam receptu, fce co veyme pole s objekty, proiterje pole a vytvori seznam receptu (for each loop)
// nadpis a image do leveho rohu, to proiterujem a 16x se ukaze v seznamu
// dalsi fce, po klik na recept ulozit objekt/value ci index do local storage
//kdyz refreshnu str zustane tam ten oterveny recept(ta fce koukni fo local storage a pokud tam neco qqqqqqqqje, tak zobraz a pokud ne, tak nic)
//hledani - prochazeni celeho pole, fce filter a inclue


const kontejner = document.querySelector('.kontejner');
const receptyElement = document.querySelector('.recepty');

updateReceptu();
vytvorSeznamRecept();


function vytvorRecept(objektRecept) {
    //vytvori jeden recept
    let recept = document.createElement('div');
    recept.classList.add('recept'); 

    let receptFoto = document.createElement('div');
    receptFoto.classList.add('recept-obrazek');

    let obrazek = document.createElement('img');
    obrazek.src = objektRecept.img;
    
    let receptInfo = document.createElement('div');
    receptInfo.classList.add('recept-info');

    let nazevPolozky = document.createElement('h3');
    nazevPolozky.textContent = objektRecept.nadpis;

    receptFoto.appendChild(obrazek);
    receptInfo.appendChild(nazevPolozky);
    recept.appendChild(receptFoto);
    recept.appendChild(receptInfo);

    
    recept.addEventListener('click', () => {
        vytvorReceptDetail(objektRecept);
    });



    return recept;

}

function vytvorSeznamRecept() {
    for (let i = 0; i < recepty.length; i++) {
        // console.log(recepty[i]);
        receptyElement.appendChild(vytvorRecept(recepty[i]));
    }
}

function updateReceptu() {
    let posledniRecept = localStorage.posledniRecept;

    if (posledniRecept !== null && posledniRecept !== undefined) {
		let indexReceptu = parseInt(posledniRecept);

		if (indexReceptu >= 0 && indexReceptu < recepty.length) {
			vytvorReceptDetail(indexReceptu);
		}
    }    
}

function vytvorReceptDetail(objektRecept) {
    //uloz detail do localstorage
    //detail receptu
    for (let i = 0; i < recepty.length; i++) {

        let fotoReceptu = document.querySelector('#recept-foto');
        fotoReceptu.setAttribute("src", recepty[i].img);

        let kategorieReceptu = document.querySelector('#recept-kategorie');
        kategorieReceptu.innerHTML = recepty[i].kategorie;

        let hodnoceniReceptu = document.querySelector('#recept-hodnoceni');
        hodnoceniReceptu.innerHTML = recepty[i].hodnoceni;

        let nazevReceptu = document.querySelector('#recept-nazev');
        nazevReceptu.innerHTML = recepty[i].nazev;

        let popisReceptu = document.querySelector('#recept-popis');
        popisReceptu.innerHTML = recepty[i].popis;
    }
    

}

function hledat() {
    let hledaniReceptu = document.querySelector('#hledat').value;
    recepty = recepty.filter(recept => recept.nadpis.toLowerCase().includes(hledaniReceptu));
    

    
}

