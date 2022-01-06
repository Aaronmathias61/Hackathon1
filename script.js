let res=fetch('https://pokeapi.co/api/v2/pokemon?limit=5');
console.log(res);
res.then((result)=>{
return result.json();
}).then((data)=>{
    poke(data);
}).catch(error=>console.log(error));
function poke(data){
    var btn1=document.createElement("button");
    btn1.innerHTML='Bulbasaur';
    document.body.append(btn1);
    var btn1=document.createElement("button");
    btn1.innerHTML='Lvysaur';
    document.body.append(btn1);
    var btn1=document.createElement("button");
    btn1.innerHTML='Venusaur';
    document.body.append(btn1);
    var btn1=document.createElement("button");
    btn1.innerHTML='Charmander';
    document.body.append(btn1);
    var btn1=document.createElement("button");
    btn1.innerHTML='Charmeleon';
    document.body.append(btn1);
    
    console.log(data.results);
    let len=data.results.length;//length of pokemon api
    console.log(len);
    for(let i=0;i<=5;i++){
    var qwer=data.results[i].url;//url for further work
    console.log(qwer);
    pokemon(qwer);
    }
}
async function pokemon(qwer){
    let res1= await fetch(qwer);
    res1.then((data1)=>{
        return data1.json();
    }).then((data2)=>{
        pokemove(data2);
        console.log(data1);
        console.log(data2)
    }).catch(error=>console.log("error"));
}
function pokemove(data){
    console.log(data.move);
}


//    console.log(data.results[i].weight);