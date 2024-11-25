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

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});
