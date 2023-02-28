const siramatikInput = document.querySelector('#siramatik-input');
const numerikButonlar = document.querySelector('.numerik-butonlar');

let siramatikInputValue = '-';

siramatikInputGuncelle();

function siramatikInputGuncelle() {
    siramatikInput.value = siramatikInputValue;
}

numerikButonlar.addEventListener('click', function(e){
    const buton = e.target;
    if(!buton.matches('button')) return;

    if (buton.classList.contains('sil')) {
        siramatikTemizle();
        siramatikInputGuncelle();
        return;
    }

    if (buton.classList.contains('kayit')) {
        console.log('Operatör :' , buton.value);
        return;
    }

    girisYap(buton.value);
    siramatikInputGuncelle();
})

function siramatikTemizle() {
    siramatikInputValue = '-';
}

function girisYap(deger) {
    if(siramatikInput.value.length !== 11) {
        siramatikInputValue =  siramatikInputValue === '-' ? deger : siramatikInputValue + deger;
    }
}