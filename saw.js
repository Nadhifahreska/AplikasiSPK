function hitung() {
  // Ambil nilai matriks dari input
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

  // Ambil nilai bobot dari input
  let w1 = parseFloat(document.querySelector("#k1").value);
  let w2 = parseFloat(document.querySelector("#k2").value);
  let w3 = parseFloat(document.querySelector("#k3").value);
  let w4 = parseFloat(document.querySelector("#k4").value);
  let w5 = parseFloat(document.querySelector("#k5").value);

  // Hitung nilai normalisasi
  let s1 = Math.sqrt(
    Math.pow(a11, 2) +
      Math.pow(a12, 2) +
      Math.pow(a13, 2) +
      Math.pow(a14, 2) +
      Math.pow(a15, 2)
  );
  let s2 = Math.sqrt(
    Math.pow(a21, 2) +
      Math.pow(a22, 2) +
      Math.pow(a23, 2) +
      Math.pow(a24, 2) +
      Math.pow(a25, 2)
  );
  let s3 = Math.sqrt(
    Math.pow(a31, 2) +
      Math.pow(a32, 2) +
      Math.pow(a33, 2) +
      Math.pow(a34, 2) +
      Math.pow(a35, 2)
  );
  let s4 = Math.sqrt(
    Math.pow(a41, 2) +
      Math.pow(a42, 2) +
      Math.pow(a43, 2) +
      Math.pow(a44, 2) +
      Math.pow(a45, 2)
  );
  let s5 = Math.sqrt(
    Math.pow(a51, 2) +
      Math.pow(a52, 2) +
      Math.pow(a53, 2) +
      Math.pow(a54, 2) +
      Math.pow(a55, 2)
  );

  let n11 = a11 / s1;
  let n12 = a12 / s1;
  let n13 = a13 / s1;
  let n14 = a14 / s1;
  let n15 = a15 / s1;

  let n21 = a21 / s2;
  let n22 = a22 / s2;
  let n23 = a23 / s2;
  let n24 = a24 / s2;
  let n25 = a25 / s2;

  let n31 = a31 / s3;
  let n32 = a32 / s3;
  let n33 = a33 / s3;
  let n34 = a34 / s3;
  let n35 = a35 / s3;

  let n41 = a41 / s4;
  let n42 = a42 / s4;
  let n43 = a43 / s4;
  let n44 = a44 / s4;
  let n45 = a45 / s4;

  let n51 = a51 / s5;
  let n52 = a52 / s5;
  let n53 = a53 / s5;
  let n54 = a54 / s5;
  let n55 = a55 / s5;

  // Hitung nilai preferensi
  let v1 = w1 * n11 + w2 * n12 + w3 * n13 + w4 * n14 + w5 * n15;
  let v2 = w1 * n21 + w2 * n22 + w3 * n23 + w4 * n24 + w5 * n25;
  let v3 = w1 * n31 + w2 * n32 + w3 * n33 + w4 * n34 + w5 * n35;
  let v4 = w1 * n41 + w2 * n42 + w3 * n43 + w4 * n44 + w5 * n45;
  let v5 = w1 * n51 + w2 * n52 + w3 * n53 + w4 * n54 + w5 * n55;

  // Tampilkan hasil riil

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
