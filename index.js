function receivesAFunction(value){
    value();
}

function returnsANamedFunction(){
    const namedFunction =() => console.log('HELLO')
    return namedFunction
}
     function returnsAnAnonymousFunction() {
        return (()=>console.log('HELLO'));
      
     }
        
    
