<!-- judul -->
<div class="panel">
    <div class="panel-middle" id="judul">
        <img src="asset/image/hasil.svg">
        <div id="judul-text">
            <h2 class="text-pink">HASIL</h2>
            Halamanan Utama Hasil Penilaian
        </div>
    </div>
</div>
<!-- judul -->
<div class="panel">
    <div class="panel-top">
        <div style="float:left;width: 300px;">
            <select class="form-custom" name="pilih"  id="pilihHasil">
                <option disabled selected value="">-- Pilih Alternatif --</option>;
                <?php
                $query="SELECT*FROM nama_alternatif";
                $execute=$konek->query($query);
                if ($execute->num_rows > 0){
                    while ($data=$execute->fetch_array(MYSQLI_ASSOC)){
                        echo "<option value=$data[id_alternatif]>$data[namaAlternatif]</option>";
                    }
                }else{
                    echo '<option disabled value="">Tidak ada data</option>';
                }
                ?>
            </select>
            </div>
            </div>
            </div>
<!-- PERHITUNGAN METODE SAW -->
<?php
// Input
//koneksi ke database 
$conn = mysqli_connect ('localhost','username','password','database');

//ambil data alternatif fari database
$queryAlternatif ="SELECT a.id_alternatif, a.nama_alternatif, n.processor, n.ram, n.harddisk, n.vga, n.harga, k.sifat, b.bobot_processor, b.bobot_ram, b.bobot_harddisk, b.bobot_vga, b.bobot_harga
                    FROM alternatif a
                    JOIN nilai n ON a.id_alternatif = n.id_alternatif
                    JOIN kriteria k ON n.kriteria = k.nama_kriteria
                    JOIN bobot b ON n.kriteria = b.kriteria";

//Menjalankan query ke database
// $resultAlternatif = mysqli($conn,$queryAlternatif);
// $alternatif = array ();
// while ($rowAlternatif = mysqli_fetch_assoc($resultAlternatif)){
//     $alternatif[] = $rowAlternatif;
// }

// 2. Normalisasi:
// Array untuk menyimpan data alternatif, nilai, bobot, dan sifat kriteria
$alternatif = array();
while ($row = mysqli_fetch_array($result)) {
    $alternatif[] = array(
        'id_alternatif' => $row['id_alternatif'],
        'nama_alternatif' => $row['nama_alternatif'],
        'processor' => $row['processor'],
        'ram' => $row['ram'],
        'harddisk' => $row['harddisk'],
        'vga' => $row['vga'],
        'harga' => $row['harga'],
        'sifat' => $row['sifat'],
        'bobot_processor' => $row['bobot_processor'],
        'bobot_ram' => $row['bobot_ram'],
        'bobot_harddisk' => $row['bobot_harddisk'],
        'bobot_vga' => $row['bobot_vga'],
        'bobot_harga' => $row['bobot_harga']
    );
}
// Mendapatkan nilai maksimum dan minimum untuk setiap kriteria
$nilaiMaxProcessor = max(array_column($alternatif, 'processor'));
$nilaiMinProcessor = min(array_column($alternatif, 'processor'));

$nilaiMaxRAM = max(array_column($alternatif, 'ram'));
$nilaiMinRAM = min(array_column($alternatif, 'ram'));

$nilaiMaxHarddisk = max(array_column($alternatif, 'harddisk'));
$nilaiMinHarddisk = min(array_column($alternatif, 'harddisk'));

$nilaiMaxVGA = max(array_column($alternatif, 'vga'));
$nilaiMinVGA = min(array_column($alternatif, 'vga'));

$nilaiMaxHarga = max(array_column($alternatif, 'harga'));
$nilaiMinHarga = min(array_column($alternatif, 'harga'));

// Array untuk menyimpan data hasil normalisasi
$dataNormalisasi = array();

// Normalisasi min-max untuk setiap kriteria
foreach ($alternatif as &$alt) {
    $processor = ($alt['processor'] - $nilaiMinProcessor) / ($nilaiMaxProcessor - $nilaiMinProcessor);
    $ram = ($alt['ram'] - $nilaiMinRAM) / ($nilaiMaxRAM - $nilaiMinRAM);
    $harddisk = ($alt['harddisk'] - $nilaiMinHarddisk) / ($nilaiMaxHarddisk - $nilaiMinHarddisk);
    $vga = ($alt['vga'] - $nilaiMinVGA) / ($nilaiMaxVGA - $nilaiMinVGA);
    $harga = ($alt['harga'] - $nilaiMinHarga) / ($nilaiMaxHarga - $nilaiMinHarga);

    $alt['processor'] = $processor;
    $alt['ram'] = $ram;
    $alt['harddisk'] = $harddisk;
    $alt['vga'] = $vga;
    $alt['harga'] = $harga;
}
   
// 3. Perhitungan nilai total SAW:
foreach ($alternatif as &$alt) {
    $nilaiSAW = 0;

    $nilaiSAW += ($alt['processor'] * $alt['bobot_processor']);
    $nilaiSAW += ($alt['ram'] * $alt['bobot_ram']);
    $nilaiSAW += ($alt['harddisk'] * $alt['bobot_harddisk']);
    $nilaiSAW += ($alt['vga'] * $alt['bobot_vga']);
    $nilaiSAW += ($alt['harga'] * $alt['bobot_harga']);

    $alt['nilai_saw'] = $nilaiSAW;
}

// 4. Perangkingan
// Mengurutkan alternatif berdasarkan nilai SAW tertinggi
usort($alternatif, function($a, $b) {
    return $b['nilai_saw'] <=> $a['nilai_saw'];
});
// Menampilkan alternatif dengan nilai SAW tertinggi
$alternatifTertinggi = $alternatif[0]['nama_alternatif'];
echo "<p>Alternatif dengan nilai SAW tertinggi adalah: ".$alternatifTertinggi."</p>";
// 5. End SAW
?>

<!-- PERHITUNGAN METODE PROFILE MATCHING -->
<?Php
//pembobotan nilai gap 
// Array nilai gap, bobot, dan keterangan
$nilaiGap = array(0, 1, -1, 2, -2, 3, -3, 4, -4, 5, -5);
$bobot = array(5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5, 0);
$keterangan = array(
    "Tidak ada selisih (Kompetensi sesuai dengan kebutuhan)",
    "Kompetensi individu kelebihan 1 tingkat",
    "Kompetensi individu kekurangan 1 tingkat",
    "Kompetensi individu kelebihan 2 tingkat",
    "Kompetensi individu kekurangan 2 tingkat",
    "Kompetensi individu kelebihan 3 tingkat",
    "Kompetensi individu kekurangan 3 tingkat",
    "Kompetensi individu kelebihan 4 tingkat",
    "Kompetensi individu kekurangan 4 tingkat",
    "Kompetensi individu kelebihan 5 tingkat",
    "Kompetensi individu kekurangan 5 tingkat"
);

// Membuat tabel pembobotan GAP
echo "<table border='1'>
        <tr>
            <th>Selisih</th>
            <th>Nilai Bobot</th>
            <th>Keterangan</th>
        </tr>";

for ($i = 0; $i < count($nilaiGap); $i++) {
    echo "<tr>
            <td>" . $nilaiGap[$i] . "</td>
            <td>" . $bobot[$i] . "</td>
            <td>" . $keterangan[$i] . "</td>
        </tr>";
}
echo "</table>";
?>

<?php
// Array nilai gap
$nilaiGap = array(-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5);

// Mendapatkan nilai target dari pengguna atau database
$nilaiTarget = array(4, 3, 2, 5, 4); // Contoh nilai target, sesuaikan dengan nilai target yang digunakan

// Mendapatkan nilai bobot PM dari pengguna melalui dropdown
$nilaiBobotPM = array();
for ($i = 0; $i < count($nilaiTarget); $i++) {
    $bobotPM = $_POST['bobot_pm'][$i];
    $nilaiBobotPM[$i] = $bobotPM;
}

// Array nilai bobot
$bobot = array(0.1, 0.2, 0.3, 0.4, 0.5); // Contoh bobot, sesuaikan dengan bobot yang digunakan

// Menghitung nilai PM untuk setiap kriteria
$nilaiPM = array();
for ($i = 0; $i < count($nilaiTarget); $i++) {
    $gap = $nilaiTarget[$i] - $nilaiGap[$i];
    $nilaiPM[$i] = $nilaiBobotPM[$i] * $bobot[$i];
}

// Menghitung total nilai PM
$totalPM = array_sum($nilaiPM);

// Membuat tabel nilai target dengan nilai PM
echo "<table border='1'>
        <tr>
            <th>Kriteria</th>
            <th>Nilai Target</th>
            <th>Gap</th>
            <th>Nilai Bobot PM</th>
        </tr>";

for ($i = 0; $i < count($nilaiTarget); $i++) {
    $gap = $nilaiTarget[$i] - $nilaiGap[$i];
    $nilaiBobotPM = $nilaiBobotPM[$i] * $bobot[$i];

    echo "<tr>
            <td>Kriteria " . ($i + 1) . "</td>
            <td>" . $nilaiTarget[$i] . "</td>
            <td>" . $gap . "</td>
            <td>" . $nilaiBobotPM . "</td>
        </tr>";
}

echo "</table>";

// Menampilkan total nilai PM
echo "Total Nilai Profile Matching: " . $totalPM;
?>

<!-- Form untuk input nilai bobot PM -->
<form method="POST" action="">
    <table>
        <tr>
            <th>Kriteria</th>
            <th>Nilai Target</th>
            <th>Nilai Bobot PM</th>
        </tr>
        <?php for ($i = 0; $i < count($nilaiTarget); $i++) { ?>
        <tr>
        <td>Kriteria <?php echo $i + 1; ?></td>
        <td><?php echo $nilaiTarget[$i]; ?></td>
            <td>

                    <select name="bobot_pm[]">
                        <option value="5">5</option>
                        <option value="4.5">4.5</option>
                        <option value="4">4</option>
                        <option value="3.5">3.5</option>
                        <option value="3">3</option>
                        <option value="2.5">2.5</option>
                        <option value="2">2</option>
                        <option value="1.5">1.5</option>
                        <option value="1">1</option>
                        <option value="0.5">0.5</option>
                        <option value="0">0</option>
                    </select>
                </td>
            </tr>
    </table>
    <input type="submit" value="Hitung">
</form>
