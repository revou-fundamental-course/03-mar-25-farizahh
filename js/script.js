// variabel untuk indeks banner/slideshow
let bannerIndex = 0;
showBanner();

// fungsi untuk mengganti banner ke berikutnya
function nextBanner() {
    bannerIndex += 1;
    showBanner();
}

// fungsi untuk menampilkan banner
function showBanner() {
    // ambil semua elemen banner
    const banners = document.getElementsByClassName('mySlides');

    // jika indeks melebihi jumlah banner, kembali ke awal
    if (bannerIndex >= banners.length) {
        bannerIndex = 0;
    }

    // sembunyikan semua banner
    for (let i = 0; i < banners.length; i++) {
        banners[i].style.display = 'none';
    }

    // tampilkan banner yang sesuai dengan indeks saat ini
    banners[bannerIndex].style.display = 'block';
}

// atur interval untuk mengganti banner setiap 3 detik
setInterval(nextBanner, 3000);


// fungsi untuk meminta pengguna memasukkan nama
function askName() {
    let userName = prompt("Masukkan nama Anda:");
    if (userName) {
        document.getElementById("name").textContent = userName + "!";
    }
}

// fungsi untuk validasi form
function validateForm(event) {
    event.preventDefault(); // Mencegah halaman reload

    const form = document.forms["message-form"];
    const name = form["full-name"].value.trim();
    const birthDate = form["birth-date"].value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const messages = form["messages"].value.trim();

    // memastikan semua inputan sudah diisi
    if (!name || !birthDate || !gender || !messages) {
        alert("Form harus diisi semua!");
        return false;
    }

    // tampilkan data yang diinput ke dalam tampilan
    setSenderUI(name, birthDate, gender.value, messages);
}

// fungsi untuk menampilkan data pengguna setelah mengisi form
function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").textContent = name;
    document.getElementById("sender-birth-date").textContent = birthDate;
    document.getElementById("sender-gender").textContent = gender;
    document.getElementById("sender-messages").textContent = messages;
}
