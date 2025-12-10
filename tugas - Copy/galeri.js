// 1. Class ES6 untuk item galeri
class GaleriItem {
    constructor(img, text) {
        this.img = img;
        this.text = text;
    }

    tampilkan = () => {
        this.text.style.display = "block";
    }

    sembunyikan = () => {
        this.text.style.display = "none";
    }
}

// 2. Fungsi utama modul (arrow function + const)
const initGaleri = () => {
    const cards = document.querySelectorAll(".card");

    // 3. Loop modern ES6
    for (const card of cards) {

        // 4. Destructuring untuk mengambil elemen gambar & teks
       const images = card.querySelectorAll("img");
       const texts = card.querySelectorAll("p");

        images.forEach((img, i) => {
            const text = texts[i];
            if (!text) return;  // jika tidak ada pasangan, skip saja

            const item = new GaleriItem(img, text);
            item.sembunyikan();

            img.addEventListener("click", () => {
                text.style.display = text.style.display === "none" ? "block" : "none";
            });

            img.addEventListener("mouseenter", () => card.classList.add("hover-aktif"));
            img.addEventListener("mouseleave", () => card.classList.remove("hover-aktif"));
        });


                const item = new GaleriItem(img, text);
                item.sembunyikan();

        // 5. Event klik untuk menampilkan nama
        img.addEventListener("click", () => {
            item.text.style.display = item.text.style.display === "none" ? "block" : "none";

            // 6. Template literal untuk debug/log
            console.log(`Gambar diklik: ${img.alt}`);
        });

        // 7. Hover pakai classList
        img.addEventListener("mouseenter", () => {
            card.classList.add("hover-aktif");
        });

        img.addEventListener("mouseleave", () => {
            card.classList.remove("hover-aktif");
        });
    }

    // 8. Spread operator untuk mengambil daftar ALT semua gambar
    const daftarAlt = [...document.querySelectorAll("img")].map(i => i.alt);
    console.log(daftarAlt);
};

// Export modul ES6
export default initGaleri;









// class CardHandler {
//     constructor(selector = '.card') {
//         this.cards = [...document.querySelectorAll(selector)];
//     }

//     init = () => {
//         this.cards.forEach(card =>
//             card.addEventListener('click', () => this.activate(card))
//         );
//     };

//     activate = (clickedCard) => {
//         this.cards.forEach(card => {
//             card.classList.remove('active');
//             const title = card.querySelector('.judul');
//             if (title) title.computedStyleMap.display = 'none';
//         });

//         clickedCard.classList.add('active');
//         const title = clickedCard.queryselector('.judul');
//         if (title) title.style.display = 'block';

//         console.log(`card aktif: ${title?.textContent}`);
//     };
// }

// const handler = new CardHandler();
// handler.init();