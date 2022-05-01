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
    }

    compare
  };

  return strandCollection;
}

dna = pAequorFactory(1, mockUpStrand());
console.log(dna.dna)
dna.mutate()
console.log(dna.dna)
