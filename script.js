 
   alert('1 ile 10 arasinda reqem secin');

   let daxilet = document.getElementById('daxilet');
   let yoxla = document.getElementById('yoxla');
   let sans = 3;

   let dustur = Math.floor(Math.random() * 11);

function emeliyyat(){
   sans -- ;

if(daxilet.value == dustur){
   alert('Tebrikler dogru cavabi tapdiniz')
}else if(sans == 0){
   alert('Uduzdunuz')
}else if(daxilet.value < dustur){
   alert('Daxil etdiyiniz eded boyukdur')
}else if(daxilet.value > dustur){
   alert('Daxil etdiyiniz eded kicikdir')
}
   
}

































// let x = Math.round(4.5);


// console.log(x);




// let x = Math.floor(4.9);


// console.log(x);

// let x = Math.ceil(4.2);


// console.log(x);

// let x = Math.sqrt(64);

// console.log(x);

// let dustur = Math.floor(Math.random() * 11 );
// console.log(dustur);


// Math.random() * 10;

// function yoxla(){

// }