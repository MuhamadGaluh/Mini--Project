var tinggi, berat, keterangan, bmi;

function hitung() {
  tinggi = parseFloat(document.getElementById("tinggibadan").value);
  tinggi /= 100;
  berat = parseFloat(document.getElementById("beratbadan").value);
  bmi = berat / (tinggi * tinggi);

  if (bmi < 18.5) {
    keterangan =
      "Anda kekurangan berat badan, sebaiknya perbanyak olahraga dan asupan gizi yang seimbang.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    keterangan = "Berat badan anda normal, pertahankan";
  } else if (bmi >= 25 && bmi <= 29.9) {
    keterangan = "Anda kelebihan berat badan, perbanyak olahraga";
  } else if (bmi >= 30) {
    keterangan =
      "Anda sangat kelebihan berat badan, segera perbaiki pola makan dan olahraga";
  }
  document.getElementById("bmi").innerHTML = "BMI Anda : " + bmi.toFixed(1);
  document.getElementById("keterangan").innerHTML =   "Keterangan : " + keterangan;
}
