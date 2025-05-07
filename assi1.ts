{
    // task 1 start ***************
    const formatString = (input: string, booleanValue?:boolean) =>{   
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



    // task 2 start ***************






}


/* if(typeof input === 'string'){
    if(booleanValue){
     return input.toUpperCase()
    }           
 } */