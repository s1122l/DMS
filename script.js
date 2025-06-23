const momoTypes = [
    "Steam Momo",
    "Fried Momo",
    "C-Momo",
    "Jhol Momo",
    "Cheese Momo",
    "Kothey Momo"
  ];
  
  function getRandomMomo() {
    const index = Math.floor(Math.random() * momoTypes.length);
    return momoTypes[index];
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("specialMomo").innerText = getRandomMomo();
  });
  