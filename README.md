# Turkuast ERP Suite

<div align="center">
  <img src="public/assets/images/turkuast-logo.png" alt="Turkuast Logo" width="120" height="auto" />
  <h1>Turkuast ERP Suite</h1>
  <p>
    <strong>Modern, Esnek ve Güçlü Kurumsal Kaynak Planlama Çözümü</strong>
  </p>
  <p>
    <a href="#ozellikler">Özellikler</a> •
    <a href="#teknolojiler">Teknolojiler</a> •
    <a href="#kurulum">Kurulum</a> •
    <a href="#katki">Katkı</a>
  </p>
</div>

---

**Turkuast ERP Suite**, modern işletmelerin tüm süreçlerini tek bir platformdan yönetmelerini sağlayan, bulut tabanlı ve kullanıcı dostu bir ERP (Kurumsal Kaynak Planlama) sistemidir. Finanstan üretime, satıştan insan kaynaklarına kadar tüm modüller entegre bir şekilde çalışır.

## ✨ Temel Özellikler

### 📊 Finans & Muhasebe
*   **Gelir/Gider Takibi:** Şirket içi tüm nakit akışının detaylı takibi.
*   **Fatura Yönetimi:** Profesyonel fatura oluşturma, PDF çıktısı ve takibi.
*   **Otomatik Kur Takibi:** Dövizli işlemler için merkez bankası entegrasyonu.
*   **Finansal Raporlar:** Kar/Zarar tabloları, bilanço ve nakit akış raporları.

### 🏭 Üretim Yönetimi (MRP)
*   **İş Emirleri:** Üretim süreçlerinin planlanması ve takibi.
*   **Stok & Depo:** Hammadde ve mamul stoklarının gerçek zamanlı kontrolü.
*   **Kalite Kontrol:** Üretim aşamalarında kalite standartlarının denetimi.
*   **Verimlilik Analizi:** Üretim hattı ve personel verimlilik raporları.

### 🤝 Satış & Pazarlama (CRM)
*   **Müşteri Yönetimi:** Müşteri cari kartları, iletişim geçmişi ve notlar.
*   **Teklif Yönetimi:** Hızlı teklif oluşturma, revizyon takibi ve PDF ihracı.
*   **Sipariş Takibi:** Tekliften faturaya sipariş yaşam döngüsü.

### 👥 İnsan Kaynakları (İK)
*   **Personel Yönetimi:** Çalışan dosyaları, izin takibi ve bordro.
*   **Performans Değerlendirme:** KPI takibi ve performans raporları.
*   **Görev Yönetimi:** Departman bazlı görev dağılımı ve iş takibi.

### 🛡️ Yönetim & Güvenlik
*   **Rol Bazlı Yetkilendirme (RBAC):** Admin, Yönetici, Kullanıcı seviyelerinde detaylı yetki yönetimi.
*   **Denetim Günlükleri (Audit Logs):** Sistemdeki tüm kritik işlemlerin kaydı.
*   **Bildirim Sistemi:** Sistem içi anlık bildirimler.

## 🛠️ Teknoloji Yığını

Bu proje, en modern web teknolojileri kullanılarak yüksek performans ve ölçeklenebilirlik için tasarlanmıştır.

*   **Frontend Framework:** React 18 + TypeScript
*   **Build Tool:** Vite (Ultra hızlı geliştirme ortamı)
*   **UI Library:** Shadcn/UI & Radix UI (Erişilebilir ve özelleştirilebilir bileşenler)
*   **Styling:** Tailwind CSS (Utility-first CSS framework)
*   **State Management:** React Query (TanStack Query) & Context API
*   **Backend & Database:** Firebase (Authentication, Firestore, Storage)
*   **Form Management:** React Hook Form + Zod (Schema validation)
*   **PDF Generation:** jsPDF & AutoTable (Dinamik rapor oluşturma)
*   **Charts:** Recharts (Veri görselleştirme)

## 🚀 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin.

### Ön Gereksinimler
*   Node.js (v18 veya üzeri)
*   npm veya yarn

### Adım 1: Projeyi Klonlayın

```bash
git clone https://github.com/aysenur-23/turkuast-erp-suite.git
cd turkuast-erp-suite
```

### Adım 2: Bağımlılıkları Yükleyin

```bash
npm install
```

### Adım 3: Çevresel Değişkenleri Ayarlayın

Proje kök dizininde `.env` dosyası oluşturun ve Firebase yapılandırma bilgilerinizi girin:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

> **Not:** Firebase Console üzerinden yeni bir proje oluşturup "Web App" ekleyerek bu değerlere ulaşabilirsiniz. **Authentication** ve **Firestore** servislerini aktifleştirmeyi unutmayın.

### Adım 4: Uygulamayı Başlatın

```bash
npm run dev
```

Uygulama genellikle `http://localhost:5173` adresinde çalışacaktır.

## 📄 Lisans

Bu proje **MIT Lisansı** ile lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakınız.

---

<div align="center">
  <p>Geliştirici: <strong>Turkuast Ekibi</strong></p>
  <p>
    <a href="https://www.turkuast.com">www.turkuast.com</a>
  </p>
</div>