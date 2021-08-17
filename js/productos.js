// OBJETOS //

class Bebida {
  constructor(variedad0, marca0, precio0, stock0){
      this.variedad=variedad0;
      this.marca=marca0;
      this.precio=precio0;
      this.stock=stock0;
  }   

  estadoBebida(){

      if (this.stock == 0){

          return "No disponible";
      }
      else{
          
          return "Disponible"; } 
      
  }

  verInfoBasica(){

      console.log(`${this.marca} :  ${this.precio} `);

  }
  

  set setStock(modificarStock){
      this.stock = modificarStock;
  }
  get getStock(){
     return this.stock;
  }

}


//VODKA//

  
let smirnoff = new Bebida( "Vodka","Smirnoff Común", 500, 6);
let smirnoffFr = new Bebida ("Vodka","Smirnoff Frutos Rojos", 550, 7);
let smirnoffManzana= new Bebida("Vodka","Smirnoff manzana", 550, 0);
let smirnoffCitrico= new Bebida("Vodka","Smirnoff Citrico", 580, 7);
let absolut= new Bebida ("Vodka", "Absolut 100 vodka", 1783, 10);
let absolutApeach = new Bebida ("Vodka", "Absolut Apeach", 1750, 5);
let absolutApple = new Bebida ("Vodka", "Absolut Apple", 1750, 5);
let absolutBerri =new Bebida ("Vodka", "Absolut Berri Acai", 1500, 3);
let absolutDropOfLove = new Bebida ("Vodka", "Absolut Drop of Love", 1900, 0);
let absolutElyx = new Bebida ("Vodka", "Absolut Elyx", 4500, 8);

var vodka =[smirnoff, smirnoffFr,smirnoffManzana,smirnoffCitrico,absolut,absolutApeach,absolutApple,absolutBerri,absolutDropOfLove,absolutElyx];


//GIN//
let beefeater = new Bebida ("Gin","Beefeater London Dry Gin", 1870, 0);
let beefeater24 = new Bebida ("Gin", "Beefeater 24", 5000,2);
let beefeaterPink = new Bebida ("Gin","Beefeater Pink", 2000,5 );
let bulldog = new Bebida ("Gin", "Bulldog London Dry Gin", 2900, 6);
let tanquerayLondon = new Bebida ("Gin", " Tanqueray London Dry Gin", 2600, 8);
let tanquerayTen = new Bebida ("Gin", "Tanqueray Ten Gin", 5025, 0);
let tanqueraySevilla = new Bebida ("Gin","Tanqueray Sevilla", 3900, 3);

var gin = [beefeater,beefeater24, beefeaterPink, bulldog, tanquerayLondon, tanquerayTen,tanqueraySevilla];



//WHISKY//
let jwBlack = new Bebida ("Whisky", "Johnnie Walker Black", 3250, 6);
let jwRed = new Bebida ("Whisky","Johnnie Walker Red", 2000, 9);
let jwGold = new Bebida ("Whisky","Johnnie Walker Gold Reserve", 6100, 8);
let jw18años = new Bebida ("Whisky","Johnnie Walker 18 años", 10500,3);
let chivasRegalXV = new Bebida ("Whisky","ChivasRegal XV", 4400, 4);
let chivasRegal12 = new Bebida ("Whisky","Chivas Regal 12 años", 2800, 5);
let chivasRegal18 = new Bebida ("Whisky","Chivas Regal 18 años", 7700, 2);
let ballentinesFinest = new Bebida ("Whisky","Ballantine's Finest", 1400, 7);

var whisky= [jwBlack,jwRed,jw18años,chivasRegalXV,chivasRegal12,chivasRegal18,ballentinesFinest];

//LICOR//
let licor43 = new Bebida ("Licor","Licor 43", 1700, 3);
let bardinetCuracao = new Bebida("Licor","Bardinet Curacao Bleu", 1000,12);
let baileysCrema = new Bebida("Licor","Baileys Crema", 1600, 10);
let baileysChocolate = new Bebida("Licor","Baileys Chocolate", 1800, 5);
let amarula = new Bebida("Licor","Amarula Crema", 1400, 2);
let cointreau = new Bebida("Licor","Cointreau", 3200, 5);
let cointreauBlood = new Bebida("Licor","Cointreau Blood Orange", 3500, 0);
let sheridans = new Bebida("Licor","Sheridans Coffe", 2000, 7);
let bottegaRaspberry = new Bebida("Licor","Lampone Raspberry", 1700, 12);
let bottegaCioccolate = new Bebida("Licor","Cioccolate Nero", 1690, 2);

var licor = [ licor43,bardinetCuracao,baileysCrema,baileysChocolate, amarula, cointreau, cointreauBlood,sheridans, bottegaRaspberry, bottegaCioccolate];

//RON//
let malibu = new Bebida ("Ron","Malibú Ron", 1200, 13);
let bacardiGold  = new Bebida ("Ron","Bacardí Gold", 1400, 7);
let capitanMorgan = new Bebida ("Ron","Capitan Morgan Ron", 800, 6);
let zacapa = new Bebida ("Ron","Zacapa Ron Centenario 23", 6000, 1);

var ron = [malibu,bacardiGold,capitanMorgan, zacapa];

//APERITIVO//
let aperol = new Bebida ("Aperitivo","Aperol", 1200, 16);
let campari = new Bebida ("Aperitivo","Campari", 1600, 14);

var aperitivo= [aperol,campari];

//TODOS ARRAYS//

let variedadArray = [vodka, gin, licor, whisky, aperitivo, ron];


//vodka stock//

document.getElementById("vs0").innerHTML = `Stock: ${smirnoff.estadoBebida()}`;
document.getElementById("vs1").innerHTML = `Stock: ${absolutApple.estadoBebida()}`;
document.getElementById("vs2").innerHTML = `Stock: ${absolutBerri.estadoBebida()}`;
document.getElementById("vs3").innerHTML = `Stock: ${absolutDropOfLove.estadoBebida()}`;
document.getElementById("vs4").innerHTML = `Stock: ${absolutElyx.estadoBebida()}`;
document.getElementById("vs5").innerHTML = `Stock: ${absolut.estadoBebida()}`;
document.getElementById("vs6").innerHTML = `Stock: ${smirnoff.estadoBebida()}`;
document.getElementById("vs7").innerHTML = `Stock: ${smirnoffCitrico.estadoBebida()}`;
document.getElementById("vs8").innerHTML = `Stock: ${smirnoffFr.estadoBebida()}`;
document.getElementById("vs9").innerHTML = `Stock: ${smirnoffManzana.estadoBebida()}`;


//stock ginss//

document.getElementById("gs0").innerHTML = `Stock: ${beefeater.estadoBebida()}`;
document.getElementById("gs1").innerHTML = `Stock: ${beefeater24.estadoBebida()}`;
document.getElementById("gs2").innerHTML = `Stock: ${beefeaterPink.estadoBebida()}`;
document.getElementById("gs3").innerHTML = `Stock: ${bulldog.estadoBebida()}`;
document.getElementById("gs4").innerHTML = `Stock: ${tanquerayLondon.estadoBebida()}`;
document.getElementById("gs5").innerHTML = `Stock: ${tanqueraySevilla.estadoBebida()}`;
document.getElementById("gs6").innerHTML = `Stock: ${tanquerayTen.estadoBebida()}`;


//stock whisky//

document.getElementById("ws0").innerHTML = `Stock: ${ballentinesFinest.estadoBebida()}`;
document.getElementById("ws1").innerHTML = `Stock: ${chivasRegal12.estadoBebida()}`;
document.getElementById("ws2").innerHTML = `Stock: ${chivasRegalXV.estadoBebida()}`;
document.getElementById("ws3").innerHTML = `Stock: ${chivasRegal18.estadoBebida()}`;
document.getElementById("ws4").innerHTML = `Stock: ${jwBlack.estadoBebida()}`;
document.getElementById("ws5").innerHTML = `Stock: ${jwGold.estadoBebida()}`;
document.getElementById("ws6").innerHTML = `Stock: ${jwRed.estadoBebida()}`;
document.getElementById("ws7").innerHTML = `Stock: ${jw18años.estadoBebida()}`;

//stock licor//

document.getElementById("ls0").innerHTML = `Stock: ${amarula.estadoBebida()}`;
document.getElementById("ls1").innerHTML = `Stock: ${baileysChocolate.estadoBebida()}`;
document.getElementById("ls2").innerHTML = `Stock: ${baileysCrema.estadoBebida()}`;
document.getElementById("ls3").innerHTML = `Stock: ${bardinetCuracao.estadoBebida()}`;
document.getElementById("ls4").innerHTML = `Stock: ${bottegaCioccolate.estadoBebida()}`;
document.getElementById("ls5").innerHTML = `Stock: ${bottegaRaspberry.estadoBebida()}`;
document.getElementById("ls6").innerHTML = `Stock: ${cointreau.estadoBebida()}`;
document.getElementById("ls7").innerHTML = `Stock: ${cointreauBlood.estadoBebida()}`;
document.getElementById("ls8").innerHTML = `Stock: ${licor43.estadoBebida()}`;
document.getElementById("ls9").innerHTML = `Stock: ${sheridans.estadoBebida()}`;

//stock ron y aperitivos//

document.getElementById("as0").innerHTML = `Stock: ${aperol.estadoBebida()}`;
document.getElementById("as1").innerHTML = `Stock: ${campari.estadoBebida()}`;
document.getElementById("rs2").innerHTML = `Stock: ${bacardiGold.estadoBebida()}`;
document.getElementById("rs3").innerHTML = `Stock: ${capitanMorgan.estadoBebida()}`;
document.getElementById("rs4").innerHTML = `Stock: ${malibu.estadoBebida()}`;
document.getElementById("rs5").innerHTML = `Stock: ${zacapa.estadoBebida()}`;



    


