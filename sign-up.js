function create_id(){
  var id=document.querySelector('#id');
  var pw=document.querySelector('#pw');
  var r_pw=document.querySelector('#r_pw');
  var email=document.querySelector('#email');
  var nick_name=document.querySelector('#nick_name');

  if(id.value==""||pw.value==""||r_pw.value==""||nick_name.value==""||email.value==""){
    alert("회원가입을 할 수 없습니다");
  }else{
    if(pw.value!==r_pw.value){
      alert("비밀번호를 확인해주세요");
    }else{
      location.href='login.html';
    }
  }
}