export class Food {

  constructor (
    public id: number,
    public name: string,
    public calories: number,
    public fat?: number,
    public carbs?: number,
    public protein?: number,
    public servingUnit?: string,
    public servingSize?: number
    ) { }
}
