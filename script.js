function calculateArea() {
    var basis1 = parseFloat(document.getElementById('basis1').value);
    var basis2 = parseFloat(document.getElementById('basis2').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);
    var luas = ((basis1 + basis2) * tinggi) / 2;
    document.getElementById('result').innerText = "🎀 Luas Trapesium: " + luas.toFixed(2) + " cm²";
    return false; // Mencegah reload
}
