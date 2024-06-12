// Daftar produk dengan nama merek "Scincare" yang berbeda di setiap produk
const products = [
    { name: "Crim Scincare", description: "Crim adalah produk perawatan kulit yang mengandung formula pelembab tinggi untuk membantu menghidrasi kulit Anda sepanjang hari", price: "Rp 100.000", image: "produk1.jpg" },
    { name: "Pelembab Scincare", description: "Pelembab Scincare merupakan produk yang diformulasikan khusus untuk melembabkan kulit kering dan menjaga kelembapan alami kulit2", price: "Rp 150.000", image: "produk2.jpg" },
    { name: "Serum Scincare", description: "Serum Scincare mengandung campuran bahan-bahan alami yang membantu menyamarkan garis halus dan meratakan warna kulit", price: "Rp 200.000", image: "produk3.jpg" },
    { name: "Masker Scincare", description: "Masker Scincare membantu membersihkan pori-pori dan mengangkat kotoran serta minyak berlebih dari kulit", price: "Rp 25.000", image: "produk4.jpg" },
    { name: "Toner Scincare", description: "Toner Scincare mengandung bahan-bahan yang membantu menyeimbangkan pH kulit dan menyegarkan wajah setelah dibersihkan", price: "Rp 300.000", image: "produk5.jpg" },
    { name: "Sabun Muka Scincare", description: "Sabun Muka Scincare membersihkan kulit secara lembut tanpa membuatnya kering, cocok untuk semua jenis kulit", price: "Rp 350.000", image: "produk6.jpg" },
    { name: "Peeling Scincare", description: "Peeling Scincare membantu mengangkat sel-sel kulit mati dan meningkatkan regenerasi kulit untuk tampilan yang lebih cerah", price: "Rp 400.000", image: "produk7.jpg" },
    { name: "Sunscreen Scincare", description: "Sunscreen Scincare melindungi kulit dari sinar UV yang berbahaya dan membantu mencegah penuaan dini", price: "Rp 145.000", image: "produk8.jpg" },
    { name: "Lip Balm Scincare", description: "Lip Balm Scincare melembabkan bibir kering dan pecah-pecah, memberikan perlindungan dari cuaca dan lingkungan", price: "Rp 150.000", image: "produk9.jpg" },
    { name: "Scrub Scincare", description: "Scrub Scincare membantu membersihkan dan mengangkat sel-sel kulit mati untuk kulit yang lebih halus dan bercahaya", price: "Rp 155.000", image: "produk10.jpg" },
    { name: "Essence Scincare", description: "Essence Scincare adalah produk perawatan kulit yang ringan dan mudah menyerap, membantu menghidrasi dan memberi nutrisi pada kulit", price: "Rp 160.000", image: "produk11.jpg" },
    { name: "Masker Mata Scincare", description: " Masker Mata Scincare memberikan kelembapan pada area sekitar mata dan membantu mengurangi kantung mata serta kerutan halus", price: "Rp 165.000", image: "produk12.jpg" },
    { name: "Peptide Scincare", description: "Peptide Scincare mengandung peptide aktif yang membantu meningkatkan elastisitas kulit dan mengurangi tanda-tanda penuaan", price: "Rp 170.000", image: "produk13.jpg" },
    { name: "Ampoule Scincare", description: "Ampoule Scincare merupakan formula konsentrasi tinggi untuk memberikan nutrisi ekstra pada kulit yang membutuhkannya", price: "Rp 175.000", image: "produk14.jpg" },
    { name: "Mist Scincare", description: "ist Scincare memberikan kesegaran instan dan hidrasi pada kulit, cocok untuk digunakan di atas atau di bawah makeup", price: "Rp 120.000", image: "produk15.jpg" },
    { name: "Scincare Gel", description: "Scincare Gel adalah produk ringan yang memberikan hidrasi tanpa rasa lengket, ideal untuk kulit berminyak atau kombinasi", price: "Rp 85.000", image: "produk16.jpg" },
    { name: "Scincare Cream", description: "cincare Cream adalah produk pelembab kaya yang membantu memperbaiki dan melindungi kulit dari kekeringan", price: "Rp 90.000", image: "produk17.jpg" },
    { name: "Scincare Oil", description: "cincare Oil mengandung campuran minyak alami yang memberikan nutrisi pada kulit dan menjaga kelembapan alami", price: "Rp 95.000", image: "produk18.jpg" },
    { name: "Scincare Essence", description: "Scincare Essence adalah formula ringan yang membantu menyamarkan noda dan meningkatkan kecerahan kulit", price: "Rp 100.000", image: "produk19.jpg" },
    { name: "Scincare Serum", description: "Scincare Serum mengandung bahan-bahan aktif yang membantu mengurangi kerutan, mengencangkan kulit, dan meningkatkan tekstur", price: "Rp 105.000", image: "produk20.jpg" }
    // Tambahkan produk lainnya di sini
];

// Fungsi untuk menampilkan produk
function renderProducts() {
    const productContainer = document.querySelector('.product-list');
    productContainer.innerHTML = ''; // Kosongkan kontainer produk

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <button onclick="orderProduct('${product.name}', '${product.price}')">Pesan Sekarang</button>
        `;
        productContainer.appendChild(productElement);
    });
}

// Fungsi untuk menangani pesanan produk
function orderProduct(name, price) {
    const message = `Saya ingin memesan ${name} seharga ${price}`;
    const whatsappLink = `https://wa.me/6285212637719?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
}

// Panggil fungsi renderProducts untuk menampilkan produk saat halaman dimuat
renderProducts();
