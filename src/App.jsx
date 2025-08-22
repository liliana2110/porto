import DataImage, { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      {/* Hero Section */}
      <section id="home">
        <div className="hero grid items-center pt-10 xl:gap-0 gap-6 grid-cols-1 md:grid-cols-2">
          {/* Kolom kiri = teks */}
          <div>
            <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
              <img
                src={DataImage.HeroImage}
                alt="Hero Image"
                className="w-10 rounded-md"
              />
              <q>
                Don't be afraid to take small steps, because every small step
                brings you closer to your big dream 🌸
              </q>
            </div>

            <h1 className="text-5xl font-bold mb-6">
              Hi, Saya Ni Made Liana Dewi
            </h1>

            <p className="text-base/loose mb-6 opacity-50">
              Mahasiswa Informatika dengan minat di Frontend Development dan
              UI/UX Design. Saya suka merancang tampilan web yang sederhana,
              menarik, dan nyaman digunakan. Saat ini saya terus belajar untuk
              mengembangkan keterampilan dan membuat karya digital yang
              bermanfaat.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#proyek"
                className="bg-blue-700 p-4 rounded-2xl hover:bg-blue-600 transition"
              >
                Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
              </a>
            </div>
          </div>

          {/* Kolom kanan = foto */}
          <div className="flex justify-center">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-[400px] rounded-lg md:ml-auto"
            />
          </div>
        </div>
      </section>

      {/* Tentang */}
      <section id="tentang" className="mt-32 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Tentang Saya</h1>
        <div className="w-2/3 mx-auto p-7 bg-zinc-800 rounded">
          <p className="text-base/loose mb-6">
            Saya Ni Made Liana Dewi, mahasiswa Informatika dengan minat utama di
            Frontend Development dan UI/UX Design. Saya terbiasa menggunakan
            HTML, CSS, dan JavaScript untuk membangun tampilan web yang
            sederhana, rapi, dan responsif.
          </p>
          <p>
            Melalui tugas kuliah dan beberapa proyek kecil, saya mengembangkan
            kemampuan dalam merancang antarmuka yang mudah dipahami dan nyaman
            digunakan. Saya juga terus berusaha meningkatkan keterampilan agar
            bisa menciptakan karya digital yang bermanfaat.
          </p>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="mt-32 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Tools yang Saya Gunakan
        </h1>
        <p className="w-2/5 mx-auto text-center text-base/loose opacity-50 mb-10">
          Berikut ini beberapa tools yang saya gunakan untuk pembuatan project
          saya
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {listTools.map((tool) => (
            <div
              key={tool.id}
              className="flex items-center gap-3 p-4 border border-zinc-600 rounded-md bg-zinc-800 hover:bg-zinc-900 transition"
            >
              <img
                src={tool.gambar}
                alt={tool.nama}
                className="w-14 h-14 bg-zinc-900 p-2 rounded-md"
              />
              <div>
                <h4 className="font-semibold">{tool.nama}</h4>
                <p className="text-sm opacity-50">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Proyek */}
      <section id="proyek" className="mt-32 py-10 max-w-6xl mx-auto">
        <h1 className="text-center text-4xl font-bold mb-2">Proyek</h1>
        <p className="text-center text-base/loose opacity-50 mb-10">
          Berikut adalah beberapa proyek yang telah saya buat
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <img
                src={proyek.gambar}
                alt={proyek.nama}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{proyek.nama}</h3>
                <p className="text-sm opacity-50 mb-4">{proyek.desk}</p>

                {/* 🔹 Tools section */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proyek.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="bg-blue-600/20 text-blue-400 text-xs px-2 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <a
                  href={proyek.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-500 font-medium hover:underline"
                >
                  🔗 Lihat Proyek
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="mt-32 py-10">
        <h1 className="text-center text-3xl font-bold mb-6">Kontak</h1>
        <p className="text-center text-base/loose opacity-50 mb-10">
          Kamu bisa menghubungi saya melalui WhatsApp, Instagram, atau Email ✨
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-3xl mx-auto">

          {/* Instagram */}
          <a
            href="https://instagram.com/lianadewiii_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-5 rounded-2xl bg-pink-600 hover:bg-pink-500 text-white font-medium transition shadow-md"
          >
            <i className="ri-instagram-line text-2xl"></i>
            Instagram
          </a>

          {/* Email */}
          <a
            href="mailto:madelianadewi2110@gmail.com"
            className="flex items-center gap-3 p-5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition shadow-md"
          >
            <i className="ri-mail-line text-2xl"></i>
            Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-center py-6 mt-20 border-t border-zinc-700">
        <p className="text-sm opacity-50">
          © {new Date().getFullYear()} Ni Made Liana Dewi. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
