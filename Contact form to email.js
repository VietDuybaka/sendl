function emailSend(){

	var thongbao = document.getElementById('thongbao').value;
	var chitiet = document.getElementById('chitiet').value;

	var messageBody = "THÔNG BÁO" + thongbao +
	"<br/> CHI TIẾT " + chitiet 
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "Duy007459@gmail.com",
    Password : "B6CA8E3FD583FD2085FE11A9ACD13A7960A8",
    To : 'sk14444sk@gmail.com','nguyenquang.soul@gmail.com',
    From : "Duy007459@gmail.com",
    Subject : "Đây là thông báo!",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Gui thong bao thanh cong!");
  	}
  	else{
  		swal("Hay thu lai!");
  	}
  }
);
}