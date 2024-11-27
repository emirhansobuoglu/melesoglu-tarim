const footer = document.getElementById('footerul');
const faceh = document.getElementById('faceid');
const instah = document.getElementById('instaid');
const url = "data.json"

fetch(url)
.then(rep=>rep.json())
.then(data =>{
    outData(data.hakkimda);
})

function outData(val){
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