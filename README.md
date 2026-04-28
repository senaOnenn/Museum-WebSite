# 🏛️ Dönemlerin İzinde: Sanal Dünya Müzesi

[cite_start] Bu proje, dünyadaki önemli kültürel eserleri dönemlere (Antik Çağ, Orta Çağ, Rönesans, Modern Çağ) ayırarak tanıtan, içerik odaklı ve erişilebilir bir sanal müze web sitesidir. [cite_start]Web Tasarım ve Değerlendirme dersi kapsamında final projesi olarak geliştirilmiştir.

## 🎯 Projenin Amacı
[cite_start] İnternet tarihi yerine somut, görsel ve öğretici bir içerik sunarak kullanıcıların tarihsel bir yolculuğa çıkmasını sağlamak. [cite_start]Proje, basit bir arayüz, yüksek performans ve erişilebilirlik standartlarını (WCAG) temel almaktadır.

## 🛠️ Kullanılan Teknolojiler
* **HTML5 & CSS3:** [cite_start] Semantik ve responsive (mobil uyumlu) sayfa iskeletleri.
* **JavaScript (Fetch API) & JSON:** [cite_start] Eser verilerinin dinamik olarak sayfaya çekilmesi.
* **Performans Optimizasyonu:** [cite_start] Lighthouse (Hedef %85+), Lazy Loading ve SEO uyumlu meta etiketler.

## 👥 Ekip ve Görev Dağılımı (Paralel Çalışma Modeli)
Bu proje, üç kişilik bir ekip tarafından paralel çalışma prensibiyle geliştirilmiştir:

* **Sena (Görsel Mimari & Navigasyon - %30):** 
  [cite_start]Sitenin HTML iskeletinin kurulması, CSS ile renk/font yönetimi, mobil uyumluluk (Responsive) ve klavye erişilebilirliğinin (Focus stilleri, "İçeriğe Atla" bağlantısı) sağlanması.
* **Ebrar (Dinamik Veri & Sistem Altyapısı - %30):** 
  [cite_start]Veri yapısının (JSON) oluşturulması, içeriklerin sayfaya dinamik çekilmesi, Google Lighthouse optimizasyonu, SEO ve Lazy Loading işlemleri.
* **Beyza (Kullanıcı Deneyimi & Etkileşim - %40):** 
  [cite_start]Kullanılabilirlik akışının sağlanması, CSS mikro etkileşimleri (hover efektleri), yüksek kaliteli görsellerin yönetimi ve erişilebilirlik (alt text) metinlerinin yazılması.

## 📂 Proje Yapısı
* `index.html`: [cite_start]Dönem listesinin yer aldığı ana sayfa.
* `period.html`: [cite_start]Seçilen döneme ait eserlerin listelendiği sayfa.
* `detail.html`: [cite_start]Eser detaylarının (sol görsel, sağ metin) incelendiği sayfa.
* `about.html`: [cite_start]Proje bilgisi ve ekip detayları.
* `sources.html`: [cite_start]Akademik ve görsel kaynakça.
* `style.css`: [cite_start]Tüm projenin tasarım dosyası.
* `data.json`: [cite_start]Tüm eserlerin ve dönemlerin tutulduğu dinamik veri dosyası.

## 🚀 Kurulum ve Çalıştırma
Proje, verileri `data.json` dosyasından Fetch API ile çektiği için doğrudan HTML dosyasına çift tıklayarak açıldığında (CORS politikası nedeniyle) veriler görünmeyebilir. 
Projeyi yerel ortamda çalıştırmak için:
1. VS Code üzerinden projeyi açın.
2. Eklentiler menüsünden **Live Server** eklentisini kurun.
3. `index.html` dosyasına sağ tıklayıp **"Open with Live Server"** seçeneğine tıklayın.
