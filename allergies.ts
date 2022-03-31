export class Allergies {
  allergensList = ['eggs',"peanuts","shellfish","strawberries",
  "tomatoes","chocolate","pollen", "cats","256","512"];
  allergiesList: string [] = [];
  len: number = this.allergensList.length;
  constructor(allergenIndex: number) {
    debugger
    while (allergenIndex > 0){
      if (allergenIndex >= Math.pow(2, this.len)) {
        allergenIndex -= Math.pow(2, this.len);
        if(this.len<8){
          this.allergiesList.unshift(this.allergensList[this.len])
        }
      }
      this.len--;
    }
  }

  public list(): string[] {
    return this.allergiesList;
  }

  public allergicTo(allergen: string): boolean {
    return (this.allergiesList.includes(allergen, 0));
  }
}