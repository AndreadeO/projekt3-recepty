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

const recepty = document.querySelector('.recepty');


for (i = 0; i < recepty.length; i++) {
    let recept = document.createElement('div');
    recept.classList.add('recept'); 

    let receptFoto = document.createElement('div');
    receptFoto.classList.add('recept-obrazek');

    let obrazek = document.createElement('img');
    obrazek.src = recepty[i].img;
    
    let receptInfo = document.createElement('div');
    receptInfo.classList.add('recept-info');

    let nazevPolozky = document.createElement('h3');
    nazevPolozky.textContent = recepty[i].nadpis;

    recept.appendChild(receptFoto);
    recept.appendChild(receptInfo);
    receptFoto.appendChild(obrazek);
    receptInfo.appendChild(nazevPolozky);

    recepty.appendChild(recept);

}