const tablo = document.getElementById("tablokamp");
const url = "../../../data.json";
fetch(url)
.then(rep=>rep.json())
.then(data =>{
    outData(data.kampanya);
})

function outData(val){
    console.log(val);
    let tabloc ="";
    val.forEach((ele,ind) => {
            console.log(ele);
            tabloc+=`<tr><td>${ele.baslik}</td><td>${ele.detay1}</td><td>${ele.detay2}</td><td>${ele.foto}</td>
                            <td><button class="btn-danger" onclick="sil('${ele.baslik}')">Sil</button></td></tr>`
        
    });
    tablo.innerHTML=tabloc;
}

async function sil(markaa) {
    const dataType = "kampanya";
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
    outData(data.kampanya);  // Veriyi yeniden güncelliyoruz
}
function Echo() {
    // Fonksiyonun içeriği
    alert("Echo fonksiyonu çağrıldı!");
}