{
    // task 1 start ***************
    function formatString(input: string, booleanValue?:boolean){   
        if(booleanValue === false){
            return input.toLocaleLowerCase()
        }
        else if(booleanValue){
            return input.toUpperCase()
        }
        else{
            return input.toUpperCase()
        }
    }   

    console.log(formatString("Hello"));
    console.log(formatString("Jello", true));
    console.log(formatString("Mairallo", false));
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


    type Product = {
        title: string;
        rating: number;
    };

    function filterByRating(product: Product[]): Product[]{
        return product.reduce((acc: Product[], product: Product) =>{
            if(product.rating >= 4){
                acc.push(product)
            }
            return acc;
        }, [])
    }
      console.log("With Reduce", filterByRating(books));

    // OR.....
    
    // task 2 start with filter ***************
    function filterByRating2(product: Product[]):Product[]{
        const result = product.filter(item => item.rating >= 4)
        return result;
    }
    console.log("With filter", filterByRating2(books));
    // task 2 end ***************




    // task 3 start ***************
    function concatenateArrays<T>(...arrays: T[][]): T[]{
        let result: T[] = []
        for(const arr of arrays){
            result = result.concat(arr)
        }
       return result
    }

    console.log(concatenateArrays(["a", "b"], ["c"]));       // Output: ["a", "b", "c"]
    console.log(concatenateArrays([1, 2], [3, 4], [5]));     // Output: [1, 2, 3, 4, 5]
    // task 3 end ***************








}


/* if(typeof input === 'string'){
    if(booleanValue){
     return input.toUpperCase()
    }           
 } */