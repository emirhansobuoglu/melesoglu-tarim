const email = document.getElementById('emailid');
const isim = document.getElementById("isimid");
const telno = document.getElementById('telnoid');
const adres = document.getElementById('adresid');
const insta = document.getElementById('instaid');
const face = document.getElementById('faceid');
const url = "../../../data.json";
fetch(url)
.then(rep=>rep.json())
.then(data =>{
    outData(data.hakkimda);
})

function outData(val){
    console.log(val);
    let emailh ='';
    let isimh ='';
    let telnoh='';
    let adresh ='';
    let instah ='';
    let faceh='';
    val.forEach((ele,ind) => {
            console.log(ele);
            emailh+=`${ele.email}`;
            isimh+=`${ele.isim}`;
            telnoh+=`${ele.telno}`;
            adresh+=`${ele.adres}`;
            instah+=`${ele.instagram}`;
            faceh+=`${ele.facebook}`
        
    });
    email.value=emailh;
    isim.value = isimh;
    telno.value=telnoh;
    adres.value=adresh;
    insta.value=instah;
    face.value=faceh;
}