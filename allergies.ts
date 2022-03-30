// Now, given just that score of 34, your program should be able to say:

// Whether Tom is allergic to any one of those allergens listed above.
// All the allergens Tom is allergic to.
// Note: a given score may include allergens not listed above (i.e. allergens that score 
// 256, 512, 1024, etc.). Your program should ignore those components of the score. For 
// example, if the allergy score is 257, your program should only report the eggs (1) 
// allergy.
////////////////////////////
// eggs (1) 1 
// peanuts (2) 2
// shellfish (4) 3 
// strawberries (8) 4
// tomatoes (16) 5 
// chocolate (32) 6
// pollen (64) 7
// cats (128) 8
// 256 (256) 9
// 512 (512) 10

export class Allergies {
  allergensList = ['eggs',"peanuts","shellfish","strawberries",
  "tomatoes","chocolate","pollen", "cats","256","512"];
  allergiesList: string [] = [];
  len: number = this.allergensList.length;
  
  constructor(allergenIndex: number) {
    while (allergenIndex > 0){
      if (allergenIndex >= Math.pow(2, this.len)) {
        allergenIndex -= Math.pow(2, this.len);
        this.allergiesList.push(this.allergensList[this.len])
      }
      this.len--;
    }
  }

  public list(): string[] {
    return this.allergensList;
  }

  public allergicTo(allergen: string): boolean {
    return (allergen in this.allergensList);
  }
}
