
var titlearray =["Kiwi & Almond Cake","Blue Berry Cheese Cake","Truffle Balls","Mini Log"];
var descriptionarray =["₹990.00 / kg","₹970.00 / kg","₹55.00 / piece","₹55.00 / piece"];


var dynamic = document.querySelector('.containers');  
for (var i = 0; i < titlearray.length; i++) {
  var fetch = document.querySelector('.containers').innerHTML;  
  dynamic.innerHTML = `<div id="ca${i}" class="boxess">
      <div class="box-content">
        <h2>${titlearray[i]}</h2>
        <p>
          ${descriptionarray[i]}
        </p>
       
      </div>
    </div>` + fetch ; 
    var bgimg = document.getElementById(`ca${i}`);
    bgimg.style.backgroundImage = `url('${titlearray[i]}.jpg')`;
} 