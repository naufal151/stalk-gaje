const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  var foto;
  var foto2;
  var foto3;
  var setFoto = [];
  var setFoto2 = [];
  var setFoto3 = [];
  for (var i = 1; i < 500; i++){
    if(i < 10){
      foto = 'https://media.unpad.ac.id/photo/mahasiswa/210110/2020/21011020000' + i + '.JPG';
      foto2 = 'https://media.unpad.ac.id/photo/mahasiswa/210110/2019/21011019000' + i + '.JPG';
      foto3 = 'https://media.unpad.ac.id/photo/mahasiswa/210110/2018/21011018000' + i + '.JPG';
      setFoto.push(foto);
      setFoto2.push(foto2);
      setFoto3.push(foto3);
    }
    else if(i >= 10 && i < 100){
      foto = 'https://media.unpad.ac.id/photo/mahasiswa/210110/2020/2101102000' + i + '.JPG';
      foto2 = 'https://media.unpad.ac.id/photo/mahasiswa/210110/2019/2101101900' + i + '.JPG';
      foto3 = 'https://media.unpad.ac.id/photo/mahasiswa/210110/2018/2101101800' + i + '.JPG';
      setFoto.push(foto);
      setFoto2.push(foto2);
      setFoto3.push(foto3);
    }
    else{
      foto = 'https://media.unpad.ac.id/photo/mahasiswa/210110/2020/210110200' + i + '.JPG';
      foto2 = 'https://media.unpad.ac.id/photo/mahasiswa/210110/2019/210110190' + i + '.JPG';
      foto3 = 'https://media.unpad.ac.id/photo/mahasiswa/210110/2018/210110180' + i + '.JPG';
      setFoto.push(foto);
      setFoto2.push(foto2);
      setFoto3.push(foto3);
    }
  }
  res.render('stalk', {foto: setFoto, foto2: setFoto2, foto3: setFoto3});
});

app.listen(3000, function(){
  console.log("ready");
});
