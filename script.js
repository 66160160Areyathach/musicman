// โหลด Navbar อัตโนมัติ
document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {document.getElementById("navbar").innerHTML = data;
        })
        .catch(error => console.error("Error loading navbar:", error));
        fetch('footer.html')
        .then(response => response.text())
        .then(data => {document.getElementById('footer').innerHTML = data;
    });
});

// ปุ่ม SHOP NOW
document.querySelector(".shop-btn").addEventListener("click", function() {
    alert("คุณกำลังเข้าสู่หน้าสินค้า");
    window.location.href = "#products";
});

