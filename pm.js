function hitung() {
  // Mengambil nilai bobot kriteria
  var k1 = parseFloat(document.getElementById("k1").value);
  var k2 = parseFloat(document.getElementById("k2").value);
  var k3 = parseFloat(document.getElementById("k3").value);
  var k4 = parseFloat(document.getElementById("k4").value);
  var k5 = parseFloat(document.getElementById("k5").value);

  // Mengambil nilai preferensi alternatif
  var a1k1 = parseFloat(document.getElementById("a1k1").value);
  var a1k2 = parseFloat(document.getElementById("a1k2").value);
  var a1k3 = parseFloat(document.getElementById("a1k3").value);
  var a1k4 = parseFloat(document.getElementById("a1k4").value);
  var a1k5 = parseFloat(document.getElementById("a1k5").value);

  var a2k1 = parseFloat(document.getElementById("a2k1").value);
  var a2k2 = parseFloat(document.getElementById("a2k2").value);
  var a2k3 = parseFloat(document.getElementById("a2k3").value);
  var a2k4 = parseFloat(document.getElementById("a2k4").value);
  var a2k5 = parseFloat(document.getElementById("a2k5").value);

  var a3k1 = parseFloat(document.getElementById("a3k1").value);
  var a3k2 = parseFloat(document.getElementById("a3k2").value);
  var a3k3 = parseFloat(document.getElementById("a3k3").value);
  var a3k4 = parseFloat(document.getElementById("a3k4").value);
  var a3k5 = parseFloat(document.getElementById("a3k5").value);

  var a4k1 = parseFloat(document.getElementById("a4k1").value);
  var a4k2 = parseFloat(document.getElementById("a4k2").value);
  var a4k3 = parseFloat(document.getElementById("a4k3").value);
  var a4k4 = parseFloat(document.getElementById("a4k4").value);
  var a4k5 = parseFloat(document.getElementById("a4k5").value);

  var a5k1 = parseFloat(document.getElementById("a5k1").value);
  var a5k2 = parseFloat(document.getElementById("a5k2").value);
  var a5k3 = parseFloat(document.getElementById("a5k3").value);
  var a5k4 = parseFloat(document.getElementById("a5k4").value);
  var a5k5 = parseFloat(document.getElementById("a5k5").value);

  // Menghitung nilai preferensi alternatif dengan bobot kriteria
  var v1 = a1k1 * k1 + a1k2 * k2 + a1k3 * k3 + a1k4 * k4 + a1k5 * k5;
  var v2 = a2k1 * k1 + a2k2 * k2 + a2k3 * k3 + a2k4 * k4 + a2k5 * k5;
  var v3 = a3k1 * k1 + a3k2 * k2 + a3k3 * k3 + a3k4 * k4 + a3k5 * k5;
  var v4 = a4k1 * k1 + a4k2 * k4 + a4k3 * k3 + a4k4 * k4 + a4k5 * k5;
  var v5 = a5k1 * k1 + a5k2 * k2 + a5k3 * k3 + a5k4 * k4 + a5k5 * k5;

  // Menampilkan hasil perhitungan
  // Tampilkan hasil
  let hasil1 = document.querySelector("#v1");
  let hasil2 = document.querySelector("#v2");
  let hasil3 = document.querySelector("#v3");
  let hasil4 = document.querySelector("#v4");
  let hasil5 = document.querySelector("#v5");

  hasil1.innerHTML = v1.toFixed(4);
  hasil2.innerHTML = v2.toFixed(4);
  hasil3.innerHTML = v3.toFixed(4);
  hasil4.innerHTML = v4.toFixed(4);
  hasil5.innerHTML = v5.toFixed(4);
}
