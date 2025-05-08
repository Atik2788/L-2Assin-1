{
    function formatString(input: string, toUpper?:boolean): string{   
        if(toUpper === false){
            return input.toLocaleLowerCase()
        }
        else{
            return input.toUpperCase()
        }
    }   





    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
        return items.reduce((acc: { title: string; rating: number }[], item: { title: string; rating: number }) =>{
            if(item.rating >= 4){
                acc.push(item)
            }
            return acc;
        }, [])
    }

    // OR............   ---OPTIONAL--- 
    type Book = {
        title: string;
        rating: number;
    };
    function filterByRating2(items: Book[]): Book[]{
        const result = items.filter(item => item.rating >= 4)
        return result;
    }







    function concatenateArrays<T>(...arrays: T[][]): T[]{
        let result: T[] = []
        for(const arr of arrays){
            result = result.concat(arr)
        }
       return result
    }







    class Vehicle {
        constructor(public make: string, public year: number){

        }
        getInfo(){
            console.log(`Make: ${this.make}, Year: ${this.year}`);
        }
    }

    class Car extends Vehicle{
        constructor(make: string, year: number, public model: string){
            super(make, year)
        }
        getModel(){
            console.log(`Model: ${this.model}`);
        }

    }
    const myCar = new Car("Toyota", 2020, "Corolla");






    function processValue(value: string | number): number {
        if (typeof value === "string") {
            const result = value.length;
            console.log(result);
            return result
        }
        else{
           const result =  value * 2
           console.log(result);
           return result
        }       
    }




    

      function getMostExpensiveProduct(products: Product[]): Product | null{
        if(!products || products.length === 0){
            return null;
        }

        return products.reduce((acc, product) =>{
            if ( acc.price < product.price){
                  return product
            }
            return acc
        }, products[0])

      }





      
      function getDayType(day: Day): string{
        if(day === Day.Saturday || day === Day.Sunday){
            return "Weekend"
        }
        else{
            return "Weekday"
        }
      }






    async function squareAsync(n: number): Promise<number>{
        if(n < 0){
            throw new Error("Negative number not allowed")
        }
        return new Promise((resolve) =>{
            setTimeout(() =>{
                resolve (n * n);
            }, 1000)
        })
    }

}