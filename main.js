// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// this function will creat multiple objects making it a factory
const pAequorFactory = (dnaID= 0, dnaArray=[]) => {
  const strandCollection = { 
    //Properties
    spaciemenNum: dnaID,
    dna: dnaArray,

    //Behaviors
    mutate() {      
      const index = Math.floor(Math.random() * 15); //random select current base
      let newBase; //new base for the dna
      const tempDNA = this.dna; // create a copy of dna
      //console.log(`${newBase} vs ${tempDNA[index]}`);

      do {
        newBase = returnRandBase(); // get random new base for dna
        
        tempDNA[index] = newBase; // assign new base to current base
        
        //console.log(`${newBase} vs ${tempDNA[index]}`);

      } while (tempDNA[index] !== newBase); // when true it loops around
      this.dna = tempDNA; //reassign the copy to the origin
    },

    compareDNA(pAequor) {
      const myDna = this.dna;
      let different = [];
      /* Something wrong with this algorithm
      let pos = 0;
      myDna.every((x) => {
        x === pAequor.dna[pos] ? different.push(`In position ${pos}: ${x} `) : false;
        pos = pos++;
        console.log(different)
      });*/
      for (i = 0; i < 15; i++) {
        myDna[i] === pAequor.dna[i] ? different.push(`\nIn position ${i}: ${myDna[i]}`) : false;
      }
      const percent = different.length/15 * 100;
      return `specimen 1 and specimen 2 have ${percent}% in common. Where: ${different}`;
    },

     willLikelySurvive() {
      const myDna = this.dna;
      let survive = 0;

      for (i = 0; i < 15; i++) {
        myDna[i] === 'C' || myDna[i] === 'G' ? survive++ : false;
      } 
      survive = survive/15 * 100;

      if (survive >= 60) {
        return true;

      } else {
        return false;
      }
    }
  };
  return strandCollection;
}
/*
dna1 = pAequorFactory(100, mockUpStrand());
dna2 = pAequorFactory(101, mockUpStrand());
console.log(dna1.dna);
console.log(dna2.dna);
console.log(dna1.compareDNA(dna2));
console.log(dna1.willLikelySurvive());
*/

  //something went wrong with alogorithm
/*let pAequor = [];
let test = {};
for (i = 1; i <= 30; i++) {
  do {
    test = pAequorFactory(i, mockUpStrand());
  } while (test.willLikelySurvive())
  console.log(test);
  pAequor.push(test);
}*/

let batch = [];
let idCounter = 1;
while(batch.length < 30){
  let tempPAequor = pAequorFactory(idCounter, mockUpStrand());
  if(tempPAequor.willLikelySurvive())
    batch.push(tempPAequor);
  idCounter++;
  console.log(idCounter)
}
