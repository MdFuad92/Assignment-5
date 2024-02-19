const bustickets = document.querySelectorAll('.tickets');

for(let i = 0; i < bustickets.length; i++){
 const busticket = bustickets[i]
  ticketNumber = 0;
  ticketArray =[];
  busticket.addEventListener('click', function(event){
    const ticketcheck = busticket.innerText;
    ticketArray.push(ticketcheck)
    ticketNumber++
    if(ticketNumber===4){
      document.getElementById('coupon').disabled=false;
    }
    if(ticketNumber <=4 ){
     document.getElementById('Next').disabled=false;
     event.target.style.backgroundColor = 'limegreen';
     event.target.style.color = 'white';
      
           const seatleft = document.getElementById('seatleft')
    
          const remainSeat = seatleft.innerText;
          const sitRemain = parseInt(remainSeat);
          const seatBooked = sitRemain - 1;
          seatleft.innerText = seatBooked
    
              const seat = document.getElementById('totalseat');
        const totalseat = seat.innerText;
        const finalSeat = parseInt(totalseat)
        
         const  seatsum = finalSeat + 1;
          seat.innerText = seatsum
    
          const totalPrice = document.getElementById('totalprice')
          const totalSum = totalPrice.innerText;
          const totalpriceOfseat = parseInt(totalSum)
          const newprice = totalpriceOfseat + 550;
          totalPrice.innerText = newprice
         
          const grandTotal = document.getElementById('grandtotal');
          const grandPrice = grandTotal.innerText;
          const grandNum = parseInt(grandPrice)
          let  grandFinal = grandNum +550;
          grandTotal.innerText = grandFinal;
    
          const sit = document.getElementById('sit')
          const economy= document.getElementById('Economy')
          const cost = document.getElementById('cost');
         const ticketcheck = busticket.innerText
    
         const ticketPrice = document.createElement('p')
         ticketPrice.innerHTML = ticketcheck;
         sit.appendChild(ticketPrice)
         const economyClass = document.createElement('p')
         economyClass.innerText = 'Economy'
          economy.appendChild(economyClass);
          const costNum = document.createElement('p')
           costNum.innerText = '550tk';
           cost.appendChild(costNum)
    }

    else{
      return alert('4 tickets only')
    }
  })



}

document.getElementById('coupon').addEventListener('click',function(){
   const couponNum = document.getElementById('couponinput')

   const couponValue = couponNum.value

   const couponInput = couponValue.toLowerCase()
   const couponResult = couponInput.split('').join('').toLowerCase();
   if(couponInput === 'new15'){
         const newTotalsum = document.getElementById('totalprice')
         const newtotal = newTotalsum.innerText;
         const latestTotal = parseFloat(newtotal)
         const discount = latestTotal * 0.15
         console.log(discount)

         const grandPricediscount = latestTotal - discount.toFixed(2)
        const grandPricevalue = document.getElementById('grandtotal')
        grandPricevalue.innerText = grandPricediscount
        const couponName = document.getElementById('couponsection')
        couponName.classList.add('hidden')

   }
   else if(couponResult === 'couple 20') {

    const newTotalsum = document.getElementById('totalprice')
    const newtotal = newTotalsum.innerText;
         const latestTotal = parseFloat(newtotal)
         const discount = latestTotal * 0.20

         const grandPricediscount = latestTotal - discount.toFixed(2)
         const grandPricevalue = document.getElementById('grandtotal')
         grandPricevalue.innerText = grandPricediscount
         const couponName = document.getElementById('couponsection')
         couponName.classList.add('hidden')


   }


})



