// Data biodata bisa kamu ubah di sini
const biodata = {
  nama: "Eric",
  status: "Mahasiswa | Sistem Informasi",
  NPM: "2531069",
  kampus: "Universitas Internasional Batam",
  domisili: "Batam",
  email: "25.01.eric@uib.edu"
};

// Masukkan data ke HTML
document.getElementById("nama").innerText = biodata.nama;
document.getElementById("status").innerText = biodata.status;
document.getElementById("NPM").innerText = biodata.NPM;
document.getElementById("kampus").innerText = biodata.kampus;
document.getElementById("domisili").innerText = biodata.domisili;
document.getElementById("email").innerText = biodata.email;

function toggleDarkMode() {
  const body = document.body;
  // Kita cari tombol berdasarkan class-nya
  const btn = document.querySelector('.toggle-btn');
  
  body.classList.toggle('dark');
  
  // Cek apakah sekarang posisinya lagi Dark Mode atau tidak
  if (body.classList.contains('dark')) {
    btn.innerText = "Mode Terang";
  } else {
    btn.innerText = "Mode Gelap";
  }
}

// Animasi progress bar skill
window.addEventListener("load", () => {
  const fills = document.querySelectorAll(".fill");
  fills.forEach(fill => {
    const value = fill.getAttribute("data-skill");
    setTimeout(() => {
      fill.style.width = value + "%";
    }, 300);
  });
});

// Form kontak
function kirimPesan(event) {
  event.preventDefault();

  let nama = document.getElementById("namaPengirim").value;
  let email = document.getElementById("emailPengirim").value;
  let pesan = document.getElementById("pesan").value;

  alert(
    "Pesan berhasil dikirim!\n\nNama: " + nama +
    "\nEmail: " + email +
    "\nPesan: " + pesan
  );

  document.getElementById("namaPengirim").value = "";
  document.getElementById("emailPengirim").value = "";
  document.getElementById("pesan").value = "";
}

// Smooth scroll nav
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
