// Memberi tahu mahasiswa bahwa script berhasil di-load 
alert('Selamat datang di Website Profil UMKM Anda!'); 

// Menampilkan informasi variabel di console 
const namaUMKM = 'Chigon Shop'; 
console.log('Nama UMKM:', namaUMKM); 

// Demonstrasi variabel dan operator 
let produk = 3; 
console.log('Jumlah produk saat ini:', produk); 
produk += 2; 
console.log('Setelah penambahan:', produk);


//kontak
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formKontak");
    const nama = document.getElementById("nama");
    const nomor = document.getElementById("nomor");
    const email = document.getElementById("email");
    const pesan = document.getElementById("pesan");
    const errorMsg = document.getElementById("errorMsg");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // mencegah reload halaman

        if (nama.value === "" || email.value === "" || pesan.value === "") {
            errorMsg.textContent = "Semua field harus diisi.";
            errorMsg.style.color = "red";
        } else {
            errorMsg.textContent = "Pesan berhasil dikirim!";
            errorMsg.style.color = "green";
            form.reset();
        }
    });
});


//webinar
const form = document.getElementById("formWebinar");

form.addEventListener("submit", function (event) {
    let valid = true;

    // Nama harus diisi
    const nama = document.getElementById("nama");
    const errorNama = document.getElementById("errorNama");
    if (nama.value.trim() === "") {
        errorNama.textContent = "Nama wajib diisi.";
        valid = false;
    } else {
        errorNama.textContent = "";
    }

    // Email harus valid dan domain harus @gmail.com
    const email = document.getElementById("email");
    const errorEmail = document.getElementById("errorEmail");
    const emailPettern = /^[^ ]+@gmail\.com$/i;
    if (!emailPettern.test(email.value)) {
        errorEmail.textContent = "Email harus @gmail.com dan format benar.";
        valid = false;
    } else {
        errorEmail.textContent = "";
    }

    //Pilihan harus dipilih
    const pilihan = document.getElementById("pilihan");
    const errorKPilihan = document.getElementById("errorPilihan");
    if (kategori.value === "") {
        errorKPilihan.textContent = "Pilih salah satu pilihan.";
        valid = false;
    } else {
        errorKPilihan.textContent = "";
    }
});

document.getElementById("nama").addEventListener("blur", function () {
    const errorNama = document.getElementById("errorNama");
    if (this.value.trim() === "") {
        errorNama.textContent = "Nama wajib diisi.";
    } else {
        errorNama.textContent = "";
    }
});

document.getElementById("konfirmasi").addEventListener("change", function () {
    if (this.checked) {
        alert("Terima kasih telah mengisi formulir!");
    }
 });





 //Produk
 function tampilUsia(event) {
    event.preventDefault(); 

    let usia = document.getElementById("usia").value;
    let hasil = "";

    if (usia < 13) hasil = "Anak-anak";
    else if (usia <= 17) hasil = "Remaja";
    else if (usia <= 60) hasil = "Dewasa";
    else hasil = "Lansia";

    document.getElementById("hasil").innerText = "Kategori: " + hasil;
}