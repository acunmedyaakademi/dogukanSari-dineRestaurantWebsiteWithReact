import './App.css'

function App() {

  return (
    <>
      <div classNameName="container">
        <BgImg />
        <Hero />
        <Categori />
        <Menu />
        <Reservation />
        <Footer />
      </div>
    </>
  )
}

function BgImg() {
  return(
    <div className="bg-img">
      <img src="/images/hero-bg.png" alt="" />
    </div>
  )
}

function Hero() {
  return(
    <div className="hero">
      <img src="/images/dine-2.svg" alt="dine-logo" />
      <h1>Enfes yemek 1989'dan beri</h1>
      <p>Güzel kır ortamında mevsimlik menümüzü deneyimleyin. Çiftlik evimizin konforunda en taze ürünleri yiyin.</p>
      <a href="#">MASA REZERVASYONU</a>
    </div>
  )
}

function Categori() {
  return(
      <div className="categori">
        <div className="categorie-box">
          <div className="categori-img">
            <img className="mobil" src="/images/enjoy-place.png"/>
            <img className="tablet" src="/images/enjoy-place-tablet.png" alt=""/>
            <img className="desktop" src="/images/enjoy-place-desktop.png" alt=""/>
          </div>
          <div className="categori-text">
            <img className="path" src="/images/path.png" alt="path"/>
            <h2>Keyifli bir yer tüm aile için</h2>
            <p>Rahat ortamımız, bizimle yemek yemeyi herkes için harika bir deneyim haline getiriyor. Hatta yemekten önce
              çiftlik turu bile ayarlayabiliriz.</p>
          </div>
        </div>
        <div className="categorie-box row-reverse">
          <div className="categori-img">
            <img className="mobil" src="/images/localy-food.png"/>
            <img className="tablet" src="/images/localy-food-tablet.jpg"/>
            <img className="desktop" src="/images/local-food-desktop.png" alt=""/>
            <img className="ggorsel-show" src="/images/ggorsel-show.png" alt=""/>
          </div>
          <div className="categori-text">
            <img src="/images/path.png" alt="path"/>
            <h2>En yerel kaynaklı yiyecek</h2>
            <p>Tüm malzemelerimiz doğrudan çiftliğimizden veya yerel balıkçılığımızdan geliyor. Böylece yediğinizden emin
              olabilirsiniz.
              en taze, en sürdürülebilir gıda.</p>
          </div>
        </div>
      </div>
  )
}

function Menu() {
  return(
      <div className="menu">
        <div className="menu-content">

        <div className="menu-text-container">
          <img className="path" src="/images/path.png" alt=""/>

          <div className="menu-text">
            <h2>Menümüzden birkaç önemli nokta</h2>
            <p>Tüm beslenme gereksinimlerini karşılıyoruz, ancak burada restoranımızın favorilerinden bazılarına bir göz
              atalım. Menümüz her sezon yenilenmektedir.</p>
          </div>
        </div>
        <div className="menu-box-container">
          <div className="menu-box">

            <div className="menu-box-img">
              <img src="/images/Seared-Salmon-Fillet.jpg"/>
              <img className="menu-path-img" src="/images/menu-path.png" alt=""/>
            </div>

            <div className="menu-box-text">
              <h3>Kavrulmuş Somon Fileto</h3>
              <p>Yerel kaynaklı somonumuz servis edilir canlandırıcı karabuğdaylı yaz salatasıyla.</p>
            </div>

          </div>

          <div className="menu-box">

            <div className="menu-box-img">
              <img src="/images/Rosemary-Filet-Mignon.jpg"/>
              <img className="menu-path-img" src="/images/menu-path.png" alt=""/>
            </div>

            <div className="menu-box-text">
              <h3>Biberiye Fileto Mignon</h3>
              <p>Damak zevkinize göre sunulan birinci sınıf etlerimiz mevsimine göre leziz çeşitleriyle taraflar.</p>
            </div>

          </div>

          <div className="menu-box">

            <div className="menu-box-img">
              <img src="/images/Summer-Fruit-Chocolate-Mousse.jpg"/>
              <img className="menu-path-img" src="/images/menu-path.png" alt=""/>
            </div>

            <div className="menu-box-text">
              <h3>Yaz Meyveli Çikolatalı Mus</h3>
              <p>Kremalı köpük ile birleştirildi yaz meyveleri ve bitter çikolata rendesi.</p>
            </div>

          </div>
        </div>
      </div>
      </div>

  )
}

function Reservation() {
  return(
    <div className="reservation">
      <h2>Rezervasyon yapmaya hazır mısınız?</h2>
      <a href="#">Masa Rezervasyon</a>
    </div>
  )
}

function Footer() {
  return(
    <div className="footer">

      <div className="footer-box">
        <div className="footer-logo">
          <img src="/images/dine-2.svg" alt="dine-logo"/>
        </div>

        <div className="footer-location">
          <p>Marthwaite, Sedbergh <br/>
            Cumbria <br/>
            +00 44 123 4567</p>
        </div>

        <div className="footer-open-times">

          <p>OPEN TIMES <br/>
            MON - FRI: 09:00 AM - 10:00 PM <br/>
            SAT - SUN: 09:00 AM - 11:30 PM
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
