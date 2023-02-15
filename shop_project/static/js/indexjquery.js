// ###############login form ##################
let login_otp_f1_generater=Math.floor(Math.random()* 1000000)

let f1_privacy=document.getElementById("texthiden")
let f1_num=document.getElementById("login_number_f1")
let l_rq_tn=document.getElementById("login_form_btn")
let foem_l1=document.getElementById("form1_login")
let foem_s2=document.getElementById("form2_singup")
let lo_sn_mg=document.getElementById("imagl_s_l")

function otpsender_f1(){

    let np_f1_nm=$("#login_number_f1").val()
    console.log(login_otp_f1_generater)

    
    if(np_f1_nm==""){
        $("#f1_error_nm").text("PLease Enter number")
    }

    else if(np_f1_nm.length == 13){

        console.log(np_f1_nm,"jsp")
        $("#f1_error_nm").remove
        

        $.ajax({
            type: "get",
            url: "/",
            data: {
                number_login_f1:np_f1_nm,
                // csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val()

            }
        }) 

            
        let py_dict="{{user_notfound}}";
        console.log(py_dict,"dict py")

        if(py_dict==py_dict) {
            np_f1_nm="";
            console.log("00000000000000000000dict py")

            return form_opner22()
            
        }  
        else{
            console.log("1111111111111111111111111dict py")
            f1_num.style.display="none"
            l_rq_tn.style.display="none"
            f1_privacy.style.display="none"
            document.getElementById("login_otp_very").style.display="block"  

        }

    }
    else{
        $("#f1_error_nm").text("Invalide number")
    }
    
}
function login_otp_very_f1(){
    let np_f1_nm=$("#login_number_f1").val()
    let np_f1_otp=$("#login_otp_f1").val()

    if(login_otp_f1_generater != np_f1_otp){
        $("#f1_otp_error_nm").text("Invalide OTP")
    }
    else if(np_f1_otp==""){
        $("#f1_otp_error_nm").text("Enter OTP")

    }
    else{
        $("#f1_otp_error_nm")
        f1_otp_error_nm.remove()
        console.log(np_f1_nm)
        console.log(np_f1_otp)
        $.ajax({
            type: "get",
            url: "/",
            data: {
                otp_f1:np_f1_otp,
                number_login_f1:np_f1_nm,
                // csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val()

            }
        }) 


    }




    


}



function form_opner11(){
    foem_s2.style.display="none"
    foem_l1.style.display="block"
    
    $("#login_singup_changeing_text_p").text("Get access to your Orders, Wishlist and Recommendations")
    $("#login_singup_changeing_text_h1").text("Login")
    
}
function form_opner22(){
    foem_s2.style.display="block"
    foem_l1.style.display="none"
    lo_sn_mg.style.position.relative.top="-3rem"
 
}


// ################# sing up form $#################33####
let otp=Math.floor(Math.random() * 1000000)


// function otp_resend_f2(){
//     return
// }
function ch_nm(){
    return form_opner22()
}

function sendOtp(This){
    let phone_number = $('#phoneNumber').val()
    let request_otp_btn=$("#lbn")
    let otp_input11=document.getElementById("otpinput")
    let change_num_btn=document.getElementById("chance_number_btn")
    let resend_otp_btn=document.getElementById("otp_resend")
    let sing_up_btn=document.getElementById("singbuton")
    change_num_btn.addEventListener

    if (phone_number.length ==13) {

        otp_input11.style.display='block'
        sing_up_btn.style.display="block"
        request_otp_btn.remove()

        $("#texthiden1")
        texthiden1.remove()
        resend_otp_btn.style.display="flex"
        change_num_btn.style.display="block"
        console.log(otp)
        $.ajax({
            type: "get",
            url: "/",
            data:{
                sendig_otp:otp,
                number1:phone_number
            
            }
        })
        
        // $("#acne").click(()=>{
        //     $("#form1_login")
        //     $("#form2_singup")
        //     form2_singup.style.display="none"
        //     form1_login.style.display="block"
        // })
    }
    else {
        let erorhend = $("#errorshowofnumber")
        erorhend.text("Check your number")
    }
    
}


function verifyOtp(This){
    let phone_number = $('#phoneNumber').val()
    let otp_user = $("#otpinput").val()
    if(otp_user==""){
        $("#otperror").text("OTP is requarde")

    }
    else if(otp_user != otp){
        $("#otperror").text("Invalid otp")
    }
    else{
        $("#otperror").remove()

        console.log("phone_number >>> ", phone_number)
        console.log("otp_user >>> ", otp_user)
        
        $.ajax({
            type: "post",
            url: "/",
            data: {
                input_otp: otp_user,
                num: phone_number,
                csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val()
            }
        })
        return form_opner11()
        
    }
    

        

}






// ######################## login form js #####################







// $(document).click('#lbn',()=>{$(document).on("submit", '#singhupform', async (e) => {
//     e.preventDefault();
//     let phone_number = $('#phoneNumber').val()
//     let request_otp_btn=$("#lbn")
//     let otp_user = $("#otpinput").val()
//     console.log("wait for a otp")
    

//     if (phone_number.length ==13) {
//         otpinput.style.display = "block"
//         request_otp_btn.remove()
//         console.log(phone_number)
//         $.ajax({
//             type: "post",
//             url: "/",
//             data: {
//                 input_otp:await otp_user,
//                 num: phone_number,
//                 csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val()
//             },
         
//         })
//     }
//     else {
        
//         let erorhend = $("#errorshowofnumber")
//         erorhend.text("Check your number")
//     }


// })})










// $(document).click('#lbn',()=>{$(document).on("submit", '#singhupform', (e) => {
//     e.preventDefault();
//     let numberphone = $('#phoneNumber').val()
//     let msbtn=$("#lbn")
//     let otp_user=$("#otpinput").val()
//     if (numberphone.length ==13) {
//         otpinput.style.display = "block"
//         msbtn.remove()
//         $.ajax({
//             type: "post",
//             url: "/",
//             data: {
//                 input_otp:otp_user,
//                 num: numberphone,
//                 csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val()
//             },
//         })
//     }
//     else {
        
//         let erorhend = $("#errorshowofnumber")
//         erorhend.text("Check your number")
//     }


// })})



