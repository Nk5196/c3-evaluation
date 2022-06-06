// alert("hello")

async function vouCher(){
    
        let url= await fetch('https://masai-vouchers-api.herokuapp.com/api/vouchers')
        let res= await url.json()
    
        mappingData(res[0].vouchers)
        // console.log(res[0].vouchers)
 
}
vouCher()

let mappingData=(res)=>{
    console.log("el", res)
 
    
    res.forEach(elem => {
        console.log("el", elem)

        let row= document.createElement("div")
        row.setAttribute("class","row")
        let image=document.createElement("img")
        image.setAttribute("class","image")
        image.src=elem.image
        let p1=document.createElement("p")
        p1.setAttribute("class","p1")
        p1.innerText=elem.name
        let p2=document.createElement("p")
        p2.setAttribute("class","p1")
        p2.innerText=elem.price
        let btn=document.createElement("button")
        btn.setAttribute("class","btn")
      
        btn.innerText="BUY";
        btn.addEventListener("click",function(){
         
            voucherBook(elem)
        })
        row.append(image,p1,p2,btn)
        document.querySelector('#voucher').append(row)
    })
}