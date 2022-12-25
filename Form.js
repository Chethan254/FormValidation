const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');


//  add event 
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    Validate();
})



// define the validate function 

    const isEmail=(emailVal)=>{

        var atSymbol= emailVal.indexOf("@");
        if (atSymbol<2) return false;

        var dot=emailVal.lastIndexOf(".");
        if(dot <= atSymbol+3) return false;
        if (dot === emailVal.length-2) return false;
        else{return true} 
    } 

    const sendData=(usernameVal,sRate,count)=>{
        if(sRate===count){
            alert('Registration Successful')
            swal("Welcome! "+usernameVal, "Registered Successfully", "success");
        }
    }

    // final Success validation 
    const SuccessMsg=(usernameVal)=>{
        let formCon=document.getElementsByClassName('form-control')
        var count = formCon.length-1;
        for (var i=0;i<formCon.length;i++)
        {
            if (formCon[i].className==="form-control success"){
                var sRate = 0+i;
                console.log(sRate);   
                sendData(usernameVal,sRate,count); 
            }
            else{
                return false;
            }
        }
        
    
    }


    const Validate =()=>{
        const usernameVal= username.value.trim();
        const emailVal=email.value.trim();
        const phoneVal=phone.value.trim() ;
        const passwordVal=password.value.trim();
        const cpasswordVal=cpassword.value.trim();

        // validate username 
        if (usernameVal===""){
            setErrorMsg(username,'username cannot be blank');
        }
        else if(usernameVal.length<=2){
            setErrorMsg(username,'username min 3 char');
        }
        else if (!isNaN(usernameVal)){
            setErrorMsg(username,'number cannot be a name')
        }
        else{
            setSuccessMsg(username);
        }

        // validate email 
        if (emailVal==="")
        {
            setErrorMsg(email,'email cannot be blank');
        }
        else if(!isEmail(emailVal))
        {
            setErrorMsg(email,'Invaild email');
        }
        else{
            setSuccessMsg(email);
        }
        
        // validate phone number 
        if (phoneVal===""){
            setErrorMsg(phone,'Phone number cannot be blank')
        }
        else if(phoneVal.length!=10)
        {
            setErrorMsg(phone,'Invalid Phone number')
    
        }
        else {
            setSuccessMsg(phone);
        }

        // validate password 

        if (passwordVal==="")
        {
            setErrorMsg(password,'Password cannot be blank');
        }
       else if (passwordVal.length<=6)
        {
            setErrorMsg(password,'Password min 7 char');
        }
        else {
            setSuccessMsg(password);
        }

        // validate confirm password 


        if (cpasswordVal==="")
        {
            setErrorMsg(cpassword,'Confirm Password cannot be blank');
        }
       else if ( passwordVal != cpasswordVal )
        {
            setErrorMsg(cpassword,'Password are not matching');
        }
         else {
                setSuccessMsg(cpassword);
         }


        SuccessMsg(usernameVal);


        function setErrorMsg(input,errorMsg)
        {
            const formcontrol= input.parentElement;
            const small=formcontrol.querySelector('small');
            formcontrol.className = "form-control error";
            small.innerText = errorMsg;

        }

        function setSuccessMsg(input){
            const formControl= input.parentElement
            formControl.className = "form-control success";
          
        }

    }





    