fetch('https://dummyjson.com/products') 
.then(res => res.json()) 
.then(data => getArr(data)).catch(err => console.log(err));
let cont = document.querySelector('.conteiner')
function getArr(arr){
    console.log(arr);
    for(let i = 0; i < arr.products.length;i++){
        // creat
        let box = document.createElement('div')
        let boxtop = document.createElement('div')
        let boxunder = document.createElement('div')
        let img = document.createElement('img')
        let h1 = document.createElement('h1')
        let p = document.createElement('p')
        let rating = document.createElement('b')
        let price = document.createElement('b')
        let item = document.createElement('div')
        let icon = document.createElement('i')
        let icontu = document.createElement('i')
        // class
        box.classList.add('box')
        boxtop.classList.add('box-top')
        boxunder.classList.add('box-under')
        icon.classList.add('bx', 'bx-dollar')
        icontu.classList.add('bx', 'bx-star')
        item.classList.add('item')
        // apen
        cont.append(box)
        box.append(boxtop)
        box.append(boxunder)
        boxtop.append(img)
        boxunder.append(h1)
        boxunder.append(p)
        boxunder.append(item)
        item.append(icon)
        item.append(price)
        item.append(icontu)
        item.append(rating)
        
        // inerhtml
        h1.innerHTML = arr.products[i].title
        p.innerHTML = arr.products[i].description
        rating.innerHTML = arr.products[i].rating
        price.innerHTML = arr.products[i].price
        img.src = arr.products[i].images        
    }   
    
}