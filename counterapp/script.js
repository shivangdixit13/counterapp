const countValue=document.querySelector('#counter');


const increment = () =>{
       //get value from ui
    let value=parseInt(countValue.innerText);
    //convert the value from string to int
    value=value+1;
    countValue.innerText=value;
    //save the value

};

const decrement = () =>{
    //get value from ui
 let value=parseInt(countValue.innerText);
 //convert the value from string to int
 value=value-1;
 countValue.innerText=value;
 //save the value

};


