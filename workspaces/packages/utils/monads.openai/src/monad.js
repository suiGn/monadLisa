// Monadology by Gottfried Wilhelm Leibniz 
class Monad {
    // Proposition 1: The Monad, of which we shall here speak, is nothing but a simple substance,
    // which enters into compounds. By 'simple' is meant 'without parts'.
    constructor(identity) {
        this.identity = identity;
        this.compounds = []; // Other Monads this one is combined with, not directly accessible

    }

// Proposition 2: And there must be simple substances, since there are compounds;
// for a compound is nothing but a collection or aggregatum of simple substances.
    // Method to enter into compounds with other monads
    compound(monad) {    //an instance of the Monad class passed as a parameter to the compound method
    this.compound.push(monad); // is added to the compound array of the current instance 
    monad.compound.push(this); // Is added to the other monad - This makes the relationship bidirectional
    console.log(`${this.identity} has formed a compound with ${monad.identity}.`);
}
}
