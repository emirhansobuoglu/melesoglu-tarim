const baslikc = document.getElementById("baslikid");
const aciklama1c = document.getElementById("aciklama1id");
const aciklama2c = document.getElementById("aciklama2id");
const aciklama3c = document.getElementById("aciklama3id");
const url = "../../../data.json";
fetch(url)
.then(rep=>rep.json())
.then(data =>{
    outData(data.vizyon);
})

function outData(val){
    console.log(val);
    let baslikh ='';
    let aciklama1h ='';
    let aciklama2h='';
    let aciklama3h ='';
    val.forEach((ele,ind) => {
            console.log(ele);
            baslikh+=`${ele.baslik}`;
            aciklama1h+=`${ele.detay1}`;
            aciklama2h+=`${ele.detay2}`;
            aciklama3h+=`${ele.detay3}`;
        
    });
    baslikc.value=baslikh;
    aciklama1c.value = aciklama1h;
    aciklama2c.value=aciklama2h;
    aciklama3c.value=aciklama3h;
}