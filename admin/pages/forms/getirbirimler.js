const basliks = document.getElementById("baslikids");
const aciklama1s = document.getElementById("aciklama1ids");
const aciklama2s = document.getElementById("aciklama2ids");
const aciklama3s = document.getElementById("aciklama3ids");
const basliku = document.getElementById("baslikidu");
const aciklama1u = document.getElementById("aciklama1idu");
const aciklama2u = document.getElementById("aciklama2idu");
const aciklama3u = document.getElementById("aciklama3idu");
const tablo = document.getElementById("bayilikler");
// const aciklamac = document.getElementById("aciklamaid");
const url = "../../../data.json";
fetch(url)
.then(rep=>rep.json())
.then(data =>{
    outDatas(data.satisbirim);
    outDatau(data.uretimbirim);
    outData(data.bayilik);
    dataa = data;
})

function outDatas(val){
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
    basliks.value=baslikh;
    aciklama1s.value = aciklama1h;
    aciklama2s.value=aciklama2h;
    aciklama3s.value=aciklama3h;
}
function outDatau(val){
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
    basliku.value=baslikh;
    aciklama1u.value = aciklama1h;
    aciklama2u.value=aciklama2h;
    aciklama3u.value=aciklama3h;
}
function outData(val){
    console.log(val);
    let tabloc ="";
    val.forEach((ele,ind) => {
            console.log(ele);
            tabloc+=`<tr><td id="sil">${ele.marka}</td><td>${ele.detay1}</td>
                            <td><button class="btn-danger" onclick="sil('${ele.marka}')">Sil</button></td></tr>`
        
    });
    tablo.innerHTML=tabloc;
}
async function sil(markaa) {
    const dataType = "bayilik";
    try {
        const response = await fetch("https://melesoglu-tarim.onrender.com/sil", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                tip:dataType,
                marka:markaa,
              }),
        });

        if (response.ok) {
            alert("Veri başarıyla silindi!");
            // Silme işleminden sonra veriyi tekrar yükleyebilirsiniz
            fetchAndUpdateData();
        } else {
            alert("Bir hata oluştu.");
        }
    } catch (error) {
        console.error("Hata:", error);
        alert("Sunucuya ulaşılamıyor.");
    }
}

async function fetchAndUpdateData() {
    const response = await fetch(url);
    const data = await response.json();
    outData(data.bayilik);  // Veriyi yeniden güncelliyoruz
}
function Echo() {
    // Fonksiyonun içeriği
    alert("Echo fonksiyonu çağrıldı!");
}
