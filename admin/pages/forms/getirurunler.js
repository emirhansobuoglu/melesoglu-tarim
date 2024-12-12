const tablo = document.getElementById("tablourun");
const url = "../../../data.json";
fetch(url)
.then(rep=>rep.json())
.then(data =>{
    outData(data.urunler);
})

function outData(val){
    console.log(val);
    let tabloc ="";
    val.forEach((ele,ind) => {
            console.log(ele);
            tabloc+=`<tr><td>${ele.isim}</td><td>${ele.detay1} ${ele.detay2} ${ele.detay3} ${ele.detay4}</td><td>${ele.kategori}</td><td>${ele.fiyat}</td><td>${ele.foto}</td>
                            <td><button class="btn-danger" onclick="sil('${ele.isim}')">Sil</button></td></tr>`
    });
    tablo.innerHTML=tabloc;
}

async function sil(markaa) {
    const dataType = "urunler";
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
    outData(data.urunler);  // Veriyi yeniden güncelliyoruz
}
function Echo() {
    // Fonksiyonun içeriği
    alert("Echo fonksiyonu çağrıldı!");
}