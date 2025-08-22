// ================= HERO IMAGE =================
import HeroImage from "/assets/hero-img.png";

const DataImage = {
  HeroImage,
};

export default DataImage;


// ================= TOOLS =================
import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/tailwind.png";
import Tools4 from "/assets/tools/bootstrap.png";
import Tools5 from "/assets/tools/nodejs.png";
import Tools6 from "/assets/tools/canva.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Tailwind CSS",
    ket: "Framework",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Bootstrap",
    ket: "Framework",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Node JS",
    ket: "Javascript Runtime",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Canva",
    ket: "Design App",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";
import Proyek5 from "/assets/proyek/proyek5.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Travel",
    desk: "Website untuk membantu UMKM, ini project UAS",
    tools: ["HTML", "CSS", "Javascript", "AOS"],
    link:"https://wayan-travel.vercel.app/"
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Donasi Web",
    desk: "Website untuk membantu orang yang membutuhkan",
    tools: ["PHP", "Tailwind"],
    link:"https://github.com/liliana2110/donasi.git"
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Portofolio",
    desk: "Portofolio ini dibuat untuk menampilkan proyek saya waktu semester 1",
    tools: ["Bootstrap"],
    link:"https://liliana2110.github.io/"
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Design App Music",
    desk: "App music ini terinspirasi dari 2 aplikasi yaitu aplikasi spotify dan joox",
    tools: ["Figma, Canva"],
    link:"https://www.figma.com/proto/z50YDqeJVCWc1kaqHkM7xp/HCI?page-id=0%3A1&node-id=1-781&p=f&viewport=2384%2C66%2C0.83&t=ue3qUvjO9yGY3AjZ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A1169"
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Web Penjualan",
    desk: "Web penjualan ini merupakan web tugas UAS semester 3",
    tools: ["Laravel"],
    link:"https://github.com/liliana2110/penjualan_.git"
  },
 
];
