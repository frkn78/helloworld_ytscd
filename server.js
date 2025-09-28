const express = require('express');
const app = express();
const PORT = 8000;
const MY_NAME = "Furkan ALTINKAYNAK";


app.use(express.json());


app.post('/hello', (req, res) => {
    const gelenData = req.body;
    
    const requestAd = gelenData.adiniz || gelenData.name || "bilinmeyen";

    res.status(200).json({
        mesaj: `Merhaba! Postman'den gelen isteği aldım. Bu API'yi geliştiren kişi: ${MY_NAME}.`,
        request_detay: {
            endpoint: '/hello',
            http_metodu: 'POST',
            gelen_isim: requestAd
        }
    });
});

app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor...`);
});