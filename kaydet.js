const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(cors()); // CORS'u global olarak etkinleştir

app.post("/kaydet", (req, res) => {
  const { tip, data,clean } = req.body

  fs.readFile("data.json", "utf8", (err, filedata) => {
    if (err) {
      console.error("Dosya Okuma Hatası:", err);
      return res.status(500).send("Dosya okunamadı.");
    }

    let jsonData = JSON.parse(filedata);
    if(clean=="1"){
      jsonData[tip]=[];
    }
    jsonData[tip].push(data);

    fs.writeFile("data.json", JSON.stringify(jsonData, null, 2), (writeErr) => {
      if (writeErr) {
        console.error("Dosya Yazma Hatası:", writeErr);
        return res.status(500).send("Dosya yazılamadı.");
      }

      res.status(200).send("Kayıt Başarılı!");
    });
  });
});
app.post("/sil", (req, res) => {
  const { tip, marka } = req.body;  // Silinecek öğeyi belirliyoruz (marka, tip vs.)
  console.log(req.body);
  fs.readFile("data.json", "utf8", (err, filedata) => {
    if (err) {
      console.error("Dosya Okuma Hatası:", err);
      return res.status(500).send("Dosya okunamadı.");
    }

    let jsonData = JSON.parse(filedata);
    
    // Silme işlemi, 'bayilik' tipi veriyi kontrol ediyoruz
    if (tip=="bayilik") {
      // Silme işlemi için doğru öğeyi filtreliyoruz
      jsonData[tip] = jsonData[tip].filter(item => item.marka !== marka);
    }else if(tip=="kampanya"){
      jsonData[tip] = jsonData[tip].filter(item => item.baslik !== marka);
    }else if(tip=="urunler"){
      jsonData[tip] = jsonData[tip].filter(item => item.isim !== marka);
    }

    // Yeni veriyi dosyaya kaydediyoruz
    fs.writeFile("data.json", JSON.stringify(jsonData, null, 2), (writeErr) => {
      if (writeErr) {
        console.error("Dosya Yazma Hatası:", writeErr);
        return res.status(500).send("Dosya yazılamadı.");
      }
    
      console.log("Yeni JSON Verisi: ", JSON.stringify(jsonData, null, 2));  // Veriyi kontrol etmek için
      res.status(200).send("Veri başarıyla silindi ve kaydedildi!");
    });
    
  });
});

