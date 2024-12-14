let store="";
let show=document.querySelector("#show")
let cal=(value)=>{
    store=store+value  
    show.innerHTML=store
}
let result=()=>{
    show.innerHTML=eval(store)
    store=eval(store)
    store.toString();

}
let ac=()=>{
    store="";
    show.innerHTML=(store);

}
let del=()=>{
    store=store.slice(0,-1)
    show.innerHTML=(store);

}