document.addEventListener('DOMContentLoaded', function () {
    
    // 1. Tema Değiştirme İşlemi
    const temaButonu = document.getElementById('temaButonu');
    const htmlElementi = document.documentElement;

    temaButonu.addEventListener('click', function () {
        const mevcutTema = htmlElementi.getAttribute('data-bs-theme');
        
        if (mevcutTema === 'light') {
            htmlElementi.setAttribute('data-bs-theme', 'dark');
            temaButonu.textContent = 'Açık Temaya Geç';
            temaButonu.classList.replace('btn-outline-secondary', 'btn-outline-light');
        } else {
            htmlElementi.setAttribute('data-bs-theme', 'light');
            temaButonu.textContent = 'Koyu Temaya Geç';
            temaButonu.classList.replace('btn-outline-light', 'btn-outline-secondary');
        }
    });

    // 2. Form İşlemleri ve Özet Üretme
    const kayitFormu = document.getElementById('kayitFormu');
    const sonucAlani = document.getElementById('sonucAlani');

    kayitFormu.addEventListener('submit', function (event) {
        event.preventDefault(); // Sayfanın yenilenmesini engelle

        // Form alanlarındaki değerleri alma
        const adSoyad = document.getElementById('adSoyad').value.trim();
        const eposta = document.getElementById('eposta').value.trim();
        const sinif = document.getElementById('sinif').value;
        const katilimTuru = document.getElementById('katilimTuru').value;
        const mesaj = document.getElementById('mesaj').value.trim();
        const onay = document.getElementById('onay').checked;

        // Koşul kullanarak eksik alan kontrolü yapma
        if (!adSoyad || !eposta || !sinif || !katilimTuru || !mesaj || !onay) {
            alert("Lütfen tüm alanları doldurun ve onay kutusunu işaretleyin.");
            return;
        }

        // Başarılı durumda başvuru özetini innerHTML ile oluşturma
        sonucAlani.className = 'alert alert-success shadow-sm text-start';
        sonucAlani.innerHTML = `
            <h4 class="alert-heading fw-bold mb-3">Başvuru Özeti</h4>
            <div class="row">
                <div class="col-md-6"><p><strong>Ad Soyad:</strong> ${adSoyad}</p></div>
                <div class="col-md-6"><p><strong>E-posta:</strong> ${eposta}</p></div>
                <div class="col-md-6"><p><strong>Sınıf:</strong> ${sinif}</p></div>
                <div class="col-md-6"><p><strong>Katılım Türü:</strong> ${katilimTuru}</p></div>
            </div>
            <hr>
            <p class="mb-0"><strong>Kısa Mesaj:</strong> ${mesaj}</p>
        `;
    });

    // Form temizlendiğinde uyarı alanını sıfırlama
    kayitFormu.addEventListener('reset', function () {
        sonucAlani.className = 'alert alert-info text-center shadow-sm';
        sonucAlani.innerHTML = 'Henüz başvuru özeti oluşturulmadı. Formu doldurduktan sonra sonuç burada görünecek.';
    });
});