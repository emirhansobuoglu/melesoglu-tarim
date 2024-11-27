const baslik = document.getElementById('baslik');
const paragraf = document.getElementById('paragraf');
const footer = document.getElementById('footer');
const faceh = document.getElementById('faceidd');
const instah = document.getElementById('instaidd');
const url = "data.json"

fetch(url)
.then(rep=>rep.json())
.then(data =>{
    // outData(data.uretimbirim);
    outDatafooter(data.hakkimda)
})

function outData(val){
    console.log(val);
    let basliks ='';
    let paragrafs ='';
    val.forEach((ele,ind) => {
        console.log(ele);
        paragrafs+=`${ele.detay1}<br> ${ele.detay2}<br> ${ele.detay3}`;
        basliks+=`${ele.baslik}`;
    });
    baslik.innerHTML=basliks;
    paragraf.innerHTML=paragrafs;
}
function outDatafooter(val){
    console.log(val);
    let footerc ='';
    let facec ='';
    let instac ='';
    val.forEach((ele,ind) => {
        console.log(ele);
        footerc+=`
        <li>${ele.adres}</li>
        <li>${ele.isim}</li>
        <li>${ele.email}</li>
        <li>${ele.telno}</li>`;
        facec+=`${ele.facebook}`;
        instac+=`${ele.instagram}`
    });
    footer.innerHTML=footerc;
    faceh.href=facec;
    instah.href=instac
}