{
    // task 1 start ***************
    function formatString(input: string, toUpper?:boolean): string{   
        if(toUpper === false){
            return input.toLocaleLowerCase()
        }
        else{
            return input.toUpperCase()
        }
    }   

    // console.log(formatString("Hello"));
    // console.log(formatString("Jello", true));
    // console.log(formatString("Mairallo", false));
    // task 1 end ***************



    // task 2 start with reduce ***************    
    const books = [
        { title: "Book A", rating: 2.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 },
        { title: "Book D", rating: 3.0 },
        { title: "Book E", rating: 4.3 },
        { title: "Book F", rating: 5.3 },
      ];

    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
        return items.reduce((acc: { title: string; rating: number }[], item: { title: string; rating: number }) =>{
            if(item.rating >= 4){
                acc.push(item)
            }
            return acc;
        }, [])
    }
    //   console.log("With Reduce", filterByRating(books));

    // OR............   ---OPTIONAL---
    // task 2 start with filter ***************    
    type Book = {
        title: string;
        rating: number;
    };
    function filterByRating2(items: Book[]): Book[]{
        const result = items.filter(item => item.rating >= 4)
        return result;
    }
    // console.log("With filter", filterByRating2(books));
    // task 2 end ***************




    // task 3 start ***************
    function concatenateArrays<T>(...arrays: T[][]): T[]{
        let result: T[] = []
        for(const arr of arrays){
            result = result.concat(arr)
        }
       return result
    }

    // console.log(concatenateArrays(["a", "b"], ["c"]));       // Output: ["a", "b", "c"]
    // console.log(concatenateArrays([1, 2], [3, 4], [5]));     // Output: [1, 2, 3, 4, 5]
    // task 3 end ***************


    


    // task 4 start ***************
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
    // myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
    // myCar.getModel();  // Output: "Model: Corolla"
        // task 4 End ***************





    // task 5 start ***************

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

    // processValue("helloaaaa");
    // processValue(10);
    // console.log(processValue('Next Lavel Web Development'))    
    // task 5 End ***************





    // task 6 Start ***************
    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
      ];

    interface Product {
        name: string;
        price: number;
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
     const expensivProduct = getMostExpensiveProduct(products); // Output: { name: "Bag", price: 50 }
    //  console.log(expensivProduct);
    // task 6 End ***************






    // task 7 Start  ***************
    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
      }
      
      function getDayType(day: Day): string{
        if(day === Day.Saturday || day === Day.Sunday){
            return "Weekend"
        }
        else{
            return "Weekday"
        }
      }
    //   console.log(getDayType(Day.Saturday));   // Output: "Weekend"
    //   console.log(getDayType(Day.Monday));   // Output: "Weekday"
    //     console.log(getDayType(Day.Sunday));   // Output: "Weekend"
    // task 7 End ***************




    // task 8 Start ***************
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

    // squareAsync(4).then(console.log);        // Output after 1s: 16
    // squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed

    // task 8 End ***************

}
