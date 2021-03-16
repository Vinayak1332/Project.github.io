fetch("grocery.json")
.then(function(response){
    return response.json();
})
.then((data)=>{
    let param= new URL(document.location).searchParams;
    index=param.get("id")-1;
    appendData(data);
})
.catch(function (err){
    console.log(err);
});

function appendData(data){
    
    //var index=localStorage.getItem("prdId")-1;
    document.getElementById("image").src=data[index].image;
    document.getElementById("name").innerHTML=data[index].name;
    document.getElementById("price").innerHTML="MRP : "+data[index].price+ (" rs");
    document.getElementById("seller").innerHTML="Seller :   "+data[index].seller;
    document.getElementById("rating").innerHTML="Rating :   "+data[index].rating+`<i class="fa fa-star" style="color:gold"></i>`;
}

function myCart(){

    if (localStorage.getItem('carts') == null) {
        
        let cart=[];
        let size=cart.length;
        cart[size]=index;
        localStorage.setItem("carts",JSON.stringify(cart));
        console.log(cart);

    }
    else{
        let cart=localStorage.getItem("carts");
        //console.log(JSON.parse(cart));
        let m=JSON.parse(cart)
        let p=m.length
        m[p]=index;
        localStorage.setItem("carts",JSON.stringify(m));
        
    }
}