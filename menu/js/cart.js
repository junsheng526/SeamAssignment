    // Function Add to  cart
    total = 0;
    function choose(n) {
        const itemList = document.getElementById('items');
        const bill = document.getElementById('total');
      
        alert("Successfully added to cart!😊");
          
        foodId = 'food' + n;
        food = document.getElementById(foodId).innerHTML;
        console.log(food);

        ty = 'type' + n;
        pr = document.getElementsByName(ty);
        price = pr[0].value;
        type = 'RM ' + price;

        itemList.innerHTML += food + type + '<button class="remove-item" style="border-radius:100%; padding:0% 2% 0% 2%; margin-left:5%;" onclick="removeItem()"><i class="fa-regular fa-xmark"></i></button>';
        total += Number(price);
        bill.innerHTML = 'Total: RM ' + total;
    }
    // Function remove item
    function removeItem(){
    const itemList = document.getElementById('items');
    const bill = document.getElementById('total');
      
        itemList.remove();
        total -= Number(price);
        bill.innerHTML = 'Total: RM ' + total;
    }
    // Function open shopping cart and close shopping cart
    function openCart(){
        document.getElementById("cart").style.width = "250px";
    }
    function closeCart(){
        document.getElementById("cart").style.width = "0";
    }