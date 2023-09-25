function distributeGifts(packOfGifts, reindeers) {
    const numRegalos = packOfGifts.map(gift => gift.length);
    const pesoRegalos = numRegalos.reduce((a, b) => a + b);
    const numRenos = reindeers.map(reno => reno.length * 2);
    const pesoRenos = numRenos.reduce((a, b) => a + b);
    console.log(packOfGifts);
    console.log(numRegalos);
    console.log(pesoRegalos);
    console.log(reindeers);
    console.log(numRenos);
    console.log(pesoRenos);
    return Math.floor(pesoRenos / pesoRegalos); 
  }

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2