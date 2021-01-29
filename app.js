function handleProductChange(product, isIncrease){
    const productCount = getInputValue(product);
    //   const caseNewCount = caseCount - 1;
    let productNewCount = productCount;
    if(isIncrease == true) {
       productNewCount = productCount + 1;
    }
    if(isIncrease == false && productCount > 0){
       productNewCount = productCount - 1;

    }
    document.getElementById(product + '-count').value = productNewCount;

    //   const productTotal = productNewCount * 59;
    let productTotal = 0;
    if(product == 'phone'){
       productTotal = productNewCount * 1219;
    }
    if(product =='case'){
       productTotal = productNewCount * 59;
    }
      document.getElementById(product + '-total').innerText = '$' + productTotal;

      calculateTotal()
   }

   function calculateTotal(){
      
      const phoneCount = getInputValue('phone');

     const caseCount = getInputValue('case');

      const totalPrice = phoneCount * 1219 + caseCount * 59;
      document.getElementById("total-price").innerText = "$" + totalPrice;

      const tax = Math.round (totalPrice * 0.1);
      document.getElementById("tax-amount").innerText = tax;

      const total = totalPrice + tax;
      document.getElementById("grand-total").innerText = total;

   }
 
 function getInputValue(product){
    const productInput = document.getElementById(product + "-count");
    const productCount = parseInt(productInput.value);
    return productCount;
 }
 const firstRemoveItem = document.getElementById("firstRemoveItem");
 firstRemoveItem.addEventListener("click",function(){

    document.getElementById("currentPrice").innerText = 1219;
    document.getElementById("addPhoneSum").value = 1;
    document.getElementById("currentSubTotal").innerText= 1219;
 
 })



 const secondRemoveItem = document.getElementById("secondRemoveItem");
 secondRemoveItem.addEventListener("click",function(){
 document.getElementById("selectAmountCase").value = 1;
 document.getElementById("currentCasePrice").innerText = 59;
 })
