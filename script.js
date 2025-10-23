const products = [
  {
    name: "Free Ship - 1 Gói 80 Khăn Ướt Lau Ban Thờ Phúc An",
    price: "1.000 ₫",
    oldPrice: "18.000 ₫",
    sale: "98%",
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m535jiv8efugf5.webp", // Thay ảnh thật ở đây
    link: "https://s.shopee.vn/11zkWkZOR" // Thay link Shopee thật
  },
  {
    name: "Lọ Đựng Gia Vị Thủy Tinh",
    price: "1.000 ₫",
    oldPrice: "17.711₫ ₫",
    sale: "97%",
    image: "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-m0273z390ood3c.webp", // Thay ảnh thật ở đây
    link: "https://s.shopee.vn/1LXMwwNDow" // Thay link Shopee thật
  },
 {
    name: "KẸP càng cua 12cm MÈO Hello Kitty BÔNG",
    price: "1.000 ₫",
    oldPrice: "19.542 ₫",
    sale: "98%",
    image: "https://down-vn.img.susercontent.com/file/vn-11134211-820l4-mfo687aqnlsc67.webp", // Thay ảnh thật ở đây
    link: "https://s.shopee.vn/9AGEfRN3Ay" // Thay link Shopee thật
  },
{    name: "Sáp thơm phòng khử mùi phòng",
    price: "1.000 ₫",
    oldPrice: "16.000 ₫",
    sale: "98%",
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m45gexewekrk31_tn", // Thay ảnh thật ở đây
    link: "https://s.shopee.vn/4ArYiMdjqD" // Thay link Shopee thật
  },
{    name: "Ốp lưng iphone trong suốt chống sốc",
    price: "1.000 ₫",
    oldPrice: "20.000 ₫",
    sale: "98%",
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzgiwjex75n1b1.webp", // Thay ảnh thật ở đây
    link: "https://s.shopee.vn/5L3W6i7uSI" // Thay link Shopee thật
  },
{    name: "Bánh quẩy ăn vặt Cá Lắc ZOO",
    price: "1.000 ₫",
    oldPrice: "15.000 ₫",
    sale: "98%",
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lxckestdi9jv85.webp", // Thay ảnh thật ở đây
    link: "https://s.shopee.vn/7AVAIDwsl7" // Thay link Shopee thật
  },
{    name: "Tranh Tô Màu Nước MaGIC Cho Bé Đa Chủ Đề",
    price: "1.000 ₫",
    oldPrice: "29.000 ₫",
    sale: "98%",
    image: "https://down-vn.img.susercontent.com/file/sg-11134201-7rdwo-md9uy2ll3tq832.webp", // Thay ảnh thật ở đây
    link: "https://s.shopee.vn/5VMwJEWCel" // Thay link Shopee thật
  },
{    name: "Quà đơn từ 80k Combo 2 gói băng vệ sinh cao cấp MOHA",
    price: "1.000 ₫",
    oldPrice: "15.000 ₫",
    sale: "98%",
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0x9l378qrlba8.webp", // Thay ảnh thật ở đây
    link: "https://s.shopee.vn/30fbKpb9F3" // Thay link Shopee thật
  },

{    name: "Chổi Vệ Sinh Quạt, Cọ Rửa Xe Máy Xe Đạp Đa Năng",
    price: "1.125 ₫",
    oldPrice: "10.000 ₫",
    sale: "98%",
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lw32zze8mkt5b1@resize_w900_nl.webp", // Thay ảnh thật ở đây
    link: "https://s.shopee.vn/8zwoU068M5" // Thay link Shopee thật
  },
{    name: "Khăn lau đa năng Vải Microfiber",
    price: "1.000 ₫",
    oldPrice: "20.000 ₫",
    sale: "98%",
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzvmag0jx3flb2.webp", // Thay ảnh thật ở đây
    link: "https://s.shopee.vn/AA8lsJbngG" // Thay link Shopee thật
  },
{    name: "Combo 3 cuộn túi rác tự phân hủy",
    price: "1.000 ₫",
    oldPrice: "20.000 ₫",
    sale: "98%",
    image: "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lud97esn6zmsc9@resize_w900_nl.webp", // Thay ảnh thật ở đây
    link: "https://s.shopee.vn/30fbLBt0G9" // Thay link Shopee thật
  },

];

const container = document.getElementById("product-list");

function renderProducts(list) {
  container.innerHTML = list.map(p => `
    <div class="card">
      <div class="flash-sale">${p.sale} OFF</div>
      <img src="${p.image}" alt="${p.name}">
      <h4>${p.name}</h4>
      <div class="price">${p.price}</div>
      <div class="old-price">${p.oldPrice}</div>
      <a href="${p.link}" target="_blank" class="btn">Xem sản phẩm</a>
    </div>
  `).join("");
}

renderProducts(products);

// 🔍 Tìm kiếm
document.getElementById("search").addEventListener("input", e => {
  const val = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(val));
  renderProducts(filtered);
});

// ⏱️ Đếm ngược
const timer = document.getElementById("timer");
let countdown = 60 * 5; // 5 phút ví dụ
setInterval(() => {
  if (countdown <= 0) { timer.textContent = "ĐANG DIỄN RA"; return; }
  countdown--;
  const m = Math.floor(countdown / 60);
  const s = countdown % 60;
  timer.textContent = `${m}:${s.toString().padStart(2, '0')}`;
}, 1000);
