
function totalPaycheck(hours, wage){
    extraPay = 0;
    if (hours > 40){
        extraPay = (hours-40)*wage*1.5;
        hours = 40;
    }
    paycheck = (hours*wage)+extraPay;
    
    return paycheck;

    
}
console.log(totalPaycheck(80,5));

