//Event Handler
function tombol() {

    //Manipulasi Element
    const title = document.getElementById('title');
    title.innerHTML = 'TERIMA KASIH'


    //Manipulasi Node
    const element = document.createElement('h2'); 
    const teks_element = document.createTextNode('Tugas selesai'); 
    element.appendChild(teks_element); 
    const cetak = document.getElementById('body'); 
    cetak.appendChild(element);
}