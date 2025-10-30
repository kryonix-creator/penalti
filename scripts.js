function shoot(direction) {
    const keeper = document.getElementById("keeper");
    const result = document.getElementById("result");

    // Kiper memilih arah secara acak
    const choices = ["left", "center", "right"];
    const keeperMove = choices[Math.floor(Math.random() * 3)];

    // Posisi kiper berdasarkan arah
    if (keeperMove === "left") keeper.style.left = "30px";
    if (keeperMove === "center") keeper.style.left = "120px";
    if (keeperMove === "right") keeper.style.left = "210px";

    // Cek apakah tendangan berhasil
    if (direction === keeperMove) {
        result.textContent = "❌ Kiper Menepis! GAGAL!";
        result.style.color = "yellow";
    } else {
        result.textContent = "✅ GOOOOL!!!";
        result.style.color = "lime";
    }
}
