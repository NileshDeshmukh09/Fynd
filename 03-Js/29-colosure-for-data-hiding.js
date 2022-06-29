
function person( name ){
    
    const paymentModes = [];

    const personObj = {

        

        addPaymentModes( type ,value ){
            paymentModes.type = type;
            paymentModes.value = value;
        },

        printPaymentModes(){
            console.log(paymentModes);
        }
    }

    return personObj;
}

const newPerson = person();
newPerson.addPaymentModes("UPI","name@upi.com");
console.log(newPerson.addPaymentModes("UPI","name@upi.com") )