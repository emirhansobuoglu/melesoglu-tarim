const markas = document.getElementById('markalar');
const footer = document.getElementById('footer');
const faceh = document.getElementById('faceidd');
const instah = document.getElementById('instaidd');
const url = "data.json"

fetch(url)
.then(rep=>rep.json())
.then(data =>{
    outData(data.bayilik);
    outDatafooter(data.hakkimda)
})

function outData(val){
    console.log(val);
    let paragrafs ='';
    val.forEach((ele,ind) => {
        console.log(ele);
        paragrafs+=`<li><h3>${ele.marka}</h3><p>${ele.detay1}</p></li><br> `;
    });
    markas.innerHTML=paragrafs;
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