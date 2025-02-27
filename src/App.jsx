import bg from "/image 1.svg";
import logo from "/logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-black w-screen h-screen absolute -z-40">.</div>
      <div className="max-w-screen max-h-screen -z-50">
        {" "}
        <img
          src={bg}
          alt="Backround"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <nav className="fixed top-0 left-0 flex w-screen justify-between mt-10 items-center">
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

      <header className="relative z-10 flex flex-col justify-center h-screen text-white ml-32">
        <h1 className="font-inter text-[50px] font-bold">#<span className="text-[#FF0101]">INDONESIA</span>GELAP</h1>
        <h1 className="font-inter text-[40px] font-bold">
          INDONESIA  EMAS ATAU <br /> SEBALIKNYA?
        </h1>
        <p className="font-inter text-[15px] font-medium">
          #<span className="text-[#FF0101]">INDONESIA</span>GELAP adalah sebuah tagar yang dipermaksudkan atas ketidak <br />
          kompetennya pemerintah dalam memimpin Indonesia, hal ini sedang ramai <br />
          diperbincangkan di sosial media, agar kita tahu kasusnya dan drama <br />
          dibalik ini ayo kita simak apa itu #<span className="text-[#FF0101]">INDONESIA</span>GELAP agar tidak hanya <br />
          ikut ikutan saat melihat berita
        </p>
      </header>
    </>
  );
}

export default App;
