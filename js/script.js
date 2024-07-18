function updateResult(){
    let weightValue = document.getElementById('input-berat-badan').value;
    let heightValue = document.getElementById('input-tinggi-badan').value;
    let heightInMeters = heightValue / 100;
    let result = weightValue / (heightInMeters**2) ;
    console.log(result);
    if(weightValue != null && weightValue != '' && heightValue != null && heightValue != ''){
        document.getElementById('bmi-result').innerHTML = result.toFixed(2);
    } else {
        alert('Inputan Tidak Boleh Kosong');
    }

    if(result <= 18.5){
        document.getElementById('kategori1').innerHTML = "Kekurangan Berat Badan";
    } else if(result > 18.5 && result <= 24.9){
        document.getElementById('kategori1').innerHTML = "Normal (Ideal)";
    } else if(result >= 25 && result <= 29.9){
        document.getElementById('kategori1').innerHTML = "Kelebihan Berat Badan";
    } else {
        document.getElementById('kategori1').innerHTML = "Kegemukan (Obesitas)";
    }

    if(result <= 18.5){
        document.getElementById('kategori2').innerHTML = "Anda Memiliki Tubuh yang Kurus";
    } else if(result > 18.5 && result <= 24.9){
        document.getElementById('kategori2').innerHTML = "Anda Memiliki Berat Badan Normal";
    } else if(result >= 25 && result <= 29.9){
        document.getElementById('kategori2').innerHTML = "Anda Memiliki Tubuh yang Gemuk";
    } else {
        document.getElementById('kategori2').innerHTML = "Anda Mengalami Obesitas";
    }

    document.querySelector('.right-content').style.display = 'block';
}

function DownloadResult(){
    let weightValue = document.getElementById('input-berat-badan').value;
    let heightValue = document.getElementById('input-tinggi-badan').value;
    let heightInMeters = heightValue / 100;
    let result = weightValue / (heightInMeters**2) ;
    console.log(result);
    if(result <= 18.5){
        document.getElementById('kategori3').innerHTML = "Hasil BMI kurang Dari 18.5";
    } else if(result > 18.5 && result <= 24.9){
        document.getElementById('kategori3').innerHTML = "Hasil BMI diantara 18.5 dan 24.9";
    } else if(result >= 25 && result <= 29.9){
        document.getElementById('kategori3').innerHTML = "Hasil BMI diantara 25 dan 29.9";
    } else {
        document.getElementById('kategori3').innerHTML = "Hasil BMI lebih dari 30.0";
    }

    if(result <= 18.5){
        document.getElementById('kategori4').innerHTML = "Anda Memiliki Tubuh yang Kurus";
    } else if(result > 18.5 && result <= 24.9){
        document.getElementById('kategori4').innerHTML = "Anda Memiliki Berat Badan Normal";
    } else if(result >= 25 && result <= 29.9){
        document.getElementById('kategori4').innerHTML = "Anda Memiliki Tubuh yang Gemuk";
    } else {
        document.getElementById('kategori4').innerHTML = "Anda Mengalami Obesitas";
    }

    if(result <= 18.5){
        document.getElementById('kategori5').innerHTML = "Cara terbaik untuk menaikkan berat badan adalah meningkatkan asupan kalori dengan makanan yang kaya nutrisi seperti protein tinggi seperti daging tanpa lemak, telur, dan produk susu; karbohidrat kompleks seperti roti gandum, nasi, dan kentang; serta lemak sehat dari alpukat, kacang-kacangan, dan minyak zaitun. Menyusun jadwal makan yang teratur dengan makan lebih sering dapat membantu meningkatkan asupan kalori harian. ";
    } else if(result > 18.5 && result <= 24.9){
        document.getElementById('kategori5').innerHTML = "Cara tetap menjaga berat badan adalah mengadopsi pola makan seimbang. Rutin melakukan aktivitas fisik, dan Manajemen stres yang baik.";
    } else if(result >= 25 && result <= 29.9){
        document.getElementById('kategori5').innerHTML = "Cara terbaik menurunkan berat badan adalah melalui pendekatan holistik yang mencakup pola makan seimbang dan aktivitas fisik teratur. Mengurangi asupan kalori dengan memilih makanan bergizi seperti buah-buahan, sayuran, protein tanpa lemak, dan biji-bijian utuh, sambil menghindari makanan olahan tinggi gula dan lemak jenuh. Selain itu, rutinitas olahraga untuk membangun otot dan meningkatkan metabolisme.";
    } else {
        document.getElementById('kategori5').innerHTML = "Cara terbaik menurunkan berat badan adalah melalui pendekatan holistik yang mencakup pola makan seimbang dan aktivitas fisik teratur. Mengurangi asupan kalori dengan memilih makanan bergizi seperti buah-buahan, sayuran, protein tanpa lemak, dan biji-bijian utuh, sambil menghindari makanan olahan tinggi gula dan lemak jenuh. Selain itu, rutinitas olahraga untuk membangun otot dan meningkatkan metabolisme.";
    }
}

function reset(){
    document.getElementById('woman').checked = false;
    document.getElementById('man').checked = false;
    document.getElementById('input-berat-badan').value = '';
    document.getElementById('input-tinggi-badan').value = '';
    document.getElementById('input-usia').value = '';
}