function hitung() {
  // Ambil nilai bobot
  let k1 = parseFloat(document.getElementById("k1").value);
  let k2 = parseFloat(document.getElementById("k2").value);
  let k3 = parseFloat(document.getElementById("k3").value);
  let k4 = parseFloat(document.getElementById("k4").value);
  let k5 = parseFloat(document.getElementById("k5").value);

  // Ambil nilai alternatif
  let a11 = parseFloat(document.querySelector("#a1k1").value);
  let a12 = parseFloat(document.querySelector("#a1k2").value);
  let a13 = parseFloat(document.querySelector("#a1k3").value);
  let a14 = parseFloat(document.querySelector("#a1k4").value);
  let a15 = parseFloat(document.querySelector("#a1k5").value);

  let a21 = parseFloat(document.querySelector("#a2k1").value);
  let a22 = parseFloat(document.querySelector("#a2k2").value);
  let a23 = parseFloat(document.querySelector("#a2k3").value);
  let a24 = parseFloat(document.querySelector("#a2k4").value);
  let a25 = parseFloat(document.querySelector("#a2k5").value);

  let a31 = parseFloat(document.querySelector("#a3k1").value);
  let a32 = parseFloat(document.querySelector("#a3k2").value);
  let a33 = parseFloat(document.querySelector("#a3k3").value);
  let a34 = parseFloat(document.querySelector("#a3k4").value);
  let a35 = parseFloat(document.querySelector("#a3k5").value);

  let a41 = parseFloat(document.querySelector("#a4k1").value);
  let a42 = parseFloat(document.querySelector("#a4k2").value);
  let a43 = parseFloat(document.querySelector("#a4k3").value);
  let a44 = parseFloat(document.querySelector("#a4k4").value);
  let a45 = parseFloat(document.querySelector("#a4k5").value);

  let a51 = parseFloat(document.querySelector("#a5k1").value);
  let a52 = parseFloat(document.querySelector("#a5k2").value);
  let a53 = parseFloat(document.querySelector("#a5k3").value);
  let a54 = parseFloat(document.querySelector("#a5k4").value);
  let a55 = parseFloat(document.querySelector("#a5k5").value);

  // Hitung nilai S
  let s1 = Math.pow(a11, k1) * Math.pow(a12, k2) * Math.pow(a13, k3) * Math.pow(a14, k4) * Math.pow(a15, -k5);
  let s2 = Math.pow(a21, k1) * Math.pow(a22, k2) * Math.pow(a23, k3) * Math.pow(a24, k4) * Math.pow(a25, -k5);
  let s3 = Math.pow(a31, k1) * Math.pow(a32, k2) * Math.pow(a33, k3) * Math.pow(a34, k4) * Math.pow(a35, -k5);
  let s4 = Math.pow(a41, k1) * Math.pow(a42, k2) * Math.pow(a43, k3) * Math.pow(a44, k4) * Math.pow(a45, -k5);
  let s5 = Math.pow(a51, k1) * Math.pow(a52, k2) * Math.pow(a53, k3) * Math.pow(a54, k4) * Math.pow(a55, -k5);

  // Hitung nilai V
  let v1 = s1 / (s1 + s2 + s3 + s4 + s5);
  let v2 = s2 / (s1 + s2 + s3 + s4 + s5);
  let v3 = s3 / (s1 + s2 + s3 + s4 + s5);
  let v4 = s4 / (s1 + s2 + s3 + s4 + s5);
  let v5 = s5 / (s1 + s2 + s3 + s4 + s5);

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
