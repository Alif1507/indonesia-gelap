import bg from "/image 1.svg";
import logo from "/logo.svg";
import gbr1 from "/1.png";
import gbr2 from "/2.png";
import gbr3 from "/3.png";
import gbr4 from "/4.png";
import "./App.css";
import { motion } from "motion/react";

function App() {
  return (
    <>
      <motion.div
        animate={{ translateY: -1648 }}
        transition={{ duration: 5, ease: [0.39, 0.24, 0.3, 1] }}
        className="fixed bg-[#FF0101] w-screen h-screen z-50"
      >
        .
      </motion.div>
      <motion.div
        animate={{ translateY: -1648 }}
        transition={{ duration: 6, ease: [0.39, 0.24, 0.3, 1] }}
        className="fixed bg-white w-screen h-screen z-40"
      >
        .
      </motion.div>
      <div className="bg-black w-screen h-screen absolute -z-40">.</div>
      <div className="max-w-screen max-h-screen -z-50">
        {" "}
        <img
          src={bg}
          alt="Backround"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="fixed top-0 w-screen bg-slate-50 opacity-25 h-30 -z-50">
        .
      </div>
      <nav className="fixed top-0 left-0 flex w-screen justify-between mt-10 items-center z-30">
        <div className="flex items-center gap-10 ml-24">
          <img src={logo} className="w-[45px] h-auto" alt="" />
          <h1 className="text-white font-baskervile text-[26px]">InfoForYou</h1>
        </div>
        <div className="mr-24">
          <ul className="flex gap-10 text-white text-[14px] font-poppins font-medium">
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">INFORMATION</a>
            </li>
            <li>
              <a href="">PROBLEM</a>
            </li>
            <li>
              <a href="">DOCUMENTATION</a>
            </li>
            <li>
              <a href="">SOLUTION</a>
            </li>
            <li>
              <a href="">ARTICLE</a>
            </li>
          </ul>
        </div>
      </nav>

      <header className="relative z-10 flex flex-col justify-center h-screen text-white ml-32 gap-10">
        <div className="grid grid-cols-2 content-center absolute right-25 top-50">
          <img className="w-[260px] h-auto" src={gbr1} alt="demo 1" />
          <img className="w-[260px] h-auto" src={gbr2} alt="demo 2" />
        </div>

        <div className="grid grid-cols-2 content-center absolute right-45 top-98">
          <img className="w-[260px] h-auto" src={gbr3} alt="demo 3" />
          <img className="w-[260px] h-auto" src={gbr4} alt="demo 4" />
        </div>
        <h1 className="font-inter text-[50px] font-bold">
          #<span className="text-[#FF0101]">INDONESIA</span>GELAP
        </h1>
        <h1 className="font-inter text-[40px] font-bold">
          INDONESIA EMAS ATAU <br /> SEBALIKNYA?
        </h1>
        <p className="font-inter text-[15px] font-medium">
          #<span className="text-[#FF0101]">INDONESIA</span>GELAP adalah sebuah
          tagar yang dipermaksudkan atas <br /> ketidak kompetennya pemerintah
          dalam memimpin Indonesia, hal ini <br /> sedang ramai diperbincangkan
          di sosial media, agar kita tahu <br /> kasusnya dan drama dibalik ini
          ayo kita simak apa itu <br /> #
          <span className="text-[#FF0101]">INDONESIA</span>GELAP agar tidak
          hanya ikut ikutan saat melihat berita
        </p>
        <button className="py-4 rounded-2xl bg-[#FF0101] text-white w-[400px] text-4xl font-inter font-bold text-nowrap">
          <a href="">MULAI CARI TAHU</a>
        </button>
      </header>

      <section className="flex flex-col justify-center items-center">
        <h1 className="text-[#FF0101] font-bold font-inter text-5xl mt-12">
          INFORMASI SAAT INI
        </h1>
        <div className="flex justify-around bg-amber-600">
          <div className="bg-amber-600">
            <div>
              <h1 className="text-[#FF0101] relative font-bold font-inter text-3xl apa">
                APA ITU #indonesiagelap
              </h1>
              <p className="text-[14px] font-inter mt-9 mb-9">
                Awalnya tagar Indonesiagelap ini hadir di media sosial sebagai
                respons <br /> atas situasi negara indoensia yang kian memburuk
                .Tagar ini menjadi <br /> trending di X dan akhirnya menjadi
                slogan untuk aksi demo yang <br /> dilakukan mahasiswa .Aksi
                Indonesia gelap adalah aksi yang dilakukan <br /> oleh para
                mahasiswa atas rasa kekecewaan mereka terhadap kebijakan <br />{" "}
                pemerintahan Prabowo Subianto.
              </p>
            </div>
            <div>
              <h1 className="text-[#FF0101] relative font-bold font-inter text-3xl apa2">
                Faktor-Faktor terbentuknya <br /> #indonesiagelap
              </h1>
              <ul className="flex flex-col gap-5">
                <li>
                  <span className="font-bold">kasus gas 3kg </span>- salah satu
                  faktor yang sangat mempengaruhi karena <br /> pemerintah melarang
                  distribusi gas 3kg di eceran
                </li>
                <li>
                  <span className="font-bold">makan siang gratis</span> - makan
                  siang gratis menjadi salah satu faktor <br /> karena makan siang
                  gratis memotong dana anggaran pendidikan
                </li>
                <li>
                  <span className="font-bold">Korupsi dan Mismanajemen</span> 💰
                  – Penyalahgunaan anggaran atau <br /> kebijakan yang tidak
                  transparan, menghambat pembangunan dan <br /> kesejahteraan rakyat.
                </li>
                <li>
                  <span className="font-bold">
                    Ketimpangan Sosial dan Ekonomi
                  </span>{" "}
                  ⚖️ – Kemiskinan, pengangguran, dan <br /> akses terbatas terhadap
                  pendidikan serta layanan dasar.
                </li>
                <li>
                  <span className="font-bold">
                    Bencana Alam dan Krisis Lingkungan
                  </span>{" "}
                  🌿 – Banjir, kebakaran hutan, atau <br /> perubahan iklim yang
                  memperparah kondisi kehidupan masyarakat.
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-[#FF0101]">.</div>
          <div>
            <h1 className="text-[#FF0101] relative font-bold font-inter text-3xl mb-12">Dampak yang disebabkan #indonesiagelap </h1>
            <ul>
              <li>
                <p>
                  <span className="font-bold">kemacetan akibat demo yang dilakukan</span> - tentunya aksi demo
                  tidak dilakukan oleh <br /> sedikit orang pastinya banyak dilakukan
                  oleh para masyarakat yang membuat jalan <br /> menjadi macat
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">Tingkat kepercayaan masyarakat terhadap pemerintah mengecil</span> -
                  Dampak ini <br /> pasti terjadi karena dengan adanya demo ini dengan
                  kasus yang tak terselesaikan <br /> maka membuat masyarakat memiliki
                  tingkat kepercayaan yang rendah terhadap <br /> masyarakat{" "}
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">Masyarakat mulai kabur ke negara lain</span> - hal ini mungkin saja
                  terjadi karena para <br /> masyarakat sudah muak dengan negaranya
                  sendiri dan memutuskan untuk <br /> pindah ke negara tetangga atau
                  negara lain apa lagi dengan tagar yang sedang <br /> ramai yaitu
                  #kaburajadulu
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
