# 🏛️ Dönemlerin İzinde: Sanal Dünya Müzesi

Bu proje, dünyadaki önemli kültürel eserleri dönemlere (Antik Çağ, Orta Çağ, Rönesans, Modern Çağ) ayırarak tanıtan, içerik odaklı ve erişilebilir bir sanal müze web sitesidir. Web Tasarım ve Değerlendirme dersi kapsamında final projesi olarak geliştirilmiştir.

## 🎯 Projenin Amacı
İnternet tarihi yerine somut, görsel ve öğretici bir içerik sunarak kullanıcıların tarihsel bir yolculuğa çıkmasını sağlamak. Proje, basit bir arayüz, yüksek performans ve erişilebilirlik standartlarını (WCAG) temel almaktadır.

## 🛠️ Kullanılan Teknolojiler
* **HTML5 & CSS3:** Semantik ve responsive (mobil uyumlu) sayfa iskeletleri.
* **JavaScript (Fetch API) & JSON:** Eser verilerinin dinamik olarak sayfaya çekilmesi.
* **Performans Optimizasyonu:** Lighthouse (Hedef %85+), Lazy Loading ve SEO uyumlu meta etiketler.

## 👥 Ekip ve Görev Dağılımı (Paralel Çalışma Modeli)
Bu proje, üç kişilik bir ekip tarafından paralel çalışma prensibiyle geliştirilmiştir:

* **Sena (Görsel Mimari & Navigasyon - %30):** 
  Sitenin HTML iskeletinin kurulması, CSS ile renk/font yönetimi, mobil uyumluluk (Responsive) ve klavye erişilebilirliğinin (Focus stilleri, "İçeriğe Atla" bağlantısı) sağlanması.
* **Ebrar (Dinamik Veri & Sistem Altyapısı - %30):** 
  Veri yapısının (JSON) oluşturulması, içeriklerin sayfaya dinamik çekilmesi, Google Lighthouse optimizasyonu, SEO ve Lazy Loading işlemleri.
* **Beyza (Kullanıcı Deneyimi & Etkileşim - %40):** 
  Kullanılabilirlik akışının sağlanması, CSS mikro etkileşimleri (hover efektleri), yüksek kaliteli görsellerin yönetimi ve erişilebilirlik (alt text) metinlerinin yazılması.

## 📂 Proje Yapısı
* `index.html`: Dönem listesinin yer aldığı ana sayfa.
* `period.html`: Seçilen döneme ait eserlerin listelendiği sayfa.
* `detail.html`: Eser detaylarının (sol görsel, sağ metin) incelendiği sayfa.
* `about.html`: Proje bilgisi ve ekip detayları.
* `sources.html`: Akademik ve görsel kaynakça.
* `style.css`: Tüm projenin tasarım dosyası.
* `data.json`: Tüm eserlerin ve dönemlerin tutulduğu dinamik veri dosyası.

## 🚀 Kurulum ve Çalıştırma
Proje, verileri `data.json` dosyasından Fetch API ile çektiği için doğrudan HTML dosyasına çift tıklayarak açıldığında (CORS politikası nedeniyle) veriler görünmeyebilir. 
Projeyi yerel ortamda çalıştırmak için:
1. VS Code üzerinden projeyi açın.
2. Eklentiler menüsünden **Live Server** eklentisini kurun.
3. `index.html` dosyasına sağ tıklayıp **"Open with Live Server"** seçeneğine tıklayın.
