
const chilometriDaPercorrere = document.getElementById("chilometri");
const anniPasseggero = document.getElementById("anni").value;
const bottoneInvia = document.getElementById("button");


bottoneInvia.addEventListener("click", function () {
    // Numero km da percorrere
    const chilometriDaPercorrere = chilometri.value
    console.log("Hai selezionato " + chilometriDaPercorrere + " Km");

    // Età del passeggero
    const anniPasseggero = anni.value
    console.log("Hai selezionato " + anniPasseggero);

    // Prezzo totale biglietto
      // (km * 0.21 euro)
      const prezzoIntero = chilometriDaPercorrere * 0.21
      console.log("Il prezzo intero del biglietto è " + prezzoIntero.toFixed(2) + " Euro");

    
    // Prezzo biglietto scontato minorenne
      // calcolo sconto (prezzo intero * 0.20) e calcolo prezzo scontato minorenne (prezzo intero - sconto minorenne)
      if (anniPasseggero === minorenne){
        const scontoMinorenne = prezzoIntero * 0.20
        const prezzoScontatoMinorenne = prezzoIntero - scontoMinorenne
        console.log("Il prezzo del biglietto scontato per minorenne è " + prezzoScontatoMinorenne.toFixed(2) + " Euro");
      }
    // Prezzo biglietto scontato over
      // calcolo sconto (prezzo intero * 0.20) e calcolo prezzo scontato over (prezzo intero - sconto over)
      else if (anniPasseggero === over65){
        const scontoOver = prezzoIntero * 0.40
        const prezzoScontatoOver =  prezzoIntero - scontoOver
        console.log("Il prezzo del biglietto scontato per over 65 è " + prezzoScontatoOver.toFixed(2) + " Euro");

      } else{
        console.log("Il prezzo del biglietto è " + prezzoIntero.toFixed(2) + " Euro");

      }
      
})
  

  

  