var s1 = 0;
var m1 = 0;
var h1 = 0;
var clock = document.getElementById('clock');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();

  var h2=("0" + h).substr(-2);
  var m2=("0" + m).substr(-2);
  var s2=("0" + s).substr(-2);

 // clock.textContent = `${h2}:${m2}:${s2}`;
    console.log(`total =${h}${m}${s}`, h,m,s, `(${h},${m},${s})`);

    if (h>=8 & h<16){
        h1=`2${h2}`;
        m1=`2${m2}`;
        s1=`2${s2}`;
    } else if ((h>4 & h<8) || (h>=16 & h<20)){
    
        h1=`1${h2}`;
        m1=`1${m2}`;
        s1=`1${s2}`;
    } else {
        h1=`${h2}`;
        m1=`${m2}`;
        s1=`${s2}`;
    };
    document.body.style.backgroundColor =`rgb(${h1},${m1},${s1})`;
     
    
   // document.body.style.backgroundColor =`rgb(${("0" + h).substr(-2)},${("0" + m).substr(-2)},${("0" + s).substr(-2)})`;
}




setInterval(time, 1000);




