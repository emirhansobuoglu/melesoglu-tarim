const iletisim = document.getElementById('iletisim');
const adres = document.getElementById('adresa');
const footer = document.getElementById('footer');
const faceh = document.getElementById('faceidd');
const instah = document.getElementById('instaidd');
const url = "data.json"

fetch(url)
.then(rep=>rep.json())
.then(data =>{
    outDatafooter(data.hakkimda)
})

function outDatafooter(val){
    console.log(val);
    let footerc ='';
    let facec ='';
    let instac ='';
    let adresc ='';
    let iletisimc ='';
    val.forEach((ele,ind) => {
        console.log(ele);
        footerc+=`
        <li>${ele.adres}</li>
        <li>${ele.isim}</li>
        <li>${ele.email}</li>
        <li>${ele.telno}</li>`;
        facec+=`${ele.facebook}`;
        instac+=`${ele.instagram}`;
        adresc+=`${ele.adres}`;
        iletisimc+=`Telefon: ${ele.telno} <br> Email: ${ele.email}`
    });
    footer.innerHTML=footerc;
    faceh.href=facec;
    instah.href=instac;
    adres.innerHTML=adresc;
    iletisim.innerHTML=iletisimc;
}