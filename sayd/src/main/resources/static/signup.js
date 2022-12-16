function create_id(){
  var id=document.querySelector('#id');
  var pw=document.querySelector('#pw');
  var check_pw=document.querySelector('#check_pw');
  var email=document.querySelector('#email');
  var m_name=document.querySelector('#m_name');

  if(id.value==""||pw.value==""||check_pw.value==""||m_name.value==""||email.value==""){
    alert("enter the all information");
  }else{
    if(pw.value!==check_pw.value){
      alert("check the password");
    }else{
      alert("done");
      location.href="login.html";
    }
  }
}