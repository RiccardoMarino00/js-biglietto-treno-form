
const chilometriDaPercorrere = document.getElementById("chilometri");
const anniPasseggero = document.getElementById("anni");



const bottoneInvia = document.getElementById("button")
bottoneInvia.addEventListener("click", function () {
    // Numero km da percorrere
    const chilometriDaPercorrere = chilometri.value
    console.log("Hai selezionato " + chilometriDaPercorrere + " Km")
    // Età del passeggero
    const anniPasseggero = anni.value
    console.log("Hai selezionato " + anniPasseggero + " anni")
    // Prezzo totale biglietto
      // (km * 0.21 euro)
      const prezzoIntero = chilometriDaPercorrere * 0.21
      console.log("Il prezzo intero del biglietto è " + prezzoIntero.toFixed(2) + " Euro")
})
  
// Prezzo biglietto scontato minorenne
  // calcolo sconto (prezzo intero * 0.20)
  // calcolo prezzo scontato (prezzo intero - sconto)
// Prezzo biglietto scontato over
  // calcolo sconto (prezzo intero * 0.20)
  // calcolo prezzo scontato (prezzo intero - sconto)