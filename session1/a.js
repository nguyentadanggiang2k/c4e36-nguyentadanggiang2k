clear()
for(i=1; i<361; i++){
  fd(2)
  rt(1)}
clear()
for(let x = 0; x <167; x++){
  for(i=1; i<361; i++){
    fd(2)
    rt(1)}
  rt(2)
  rt(30)
}
clear()
for(i=1; i<2; i++){
  fd(100)
  rt(90)}
  clear()
  rt(90)
  fd(100)
  rt(240)
  fd(100)
  rt(240)
  fd(100)


  let r = prompt("Nhap r");
  let s = r*r*3.14
  console.log("area=",s);

  let c = prompt ("Nhap do c");
  let f = c*33.8;
  console.log(c,"(c)=",f,"(f)");


  //Làm thế nào để kiểm tra các loại biến: sử dụng typeof cho một số vấn đề liên quan đến
  //check type
 // - Các trường hợp biến sai: tên bắt đâù bởi chữ số, tên trùng với ký hiệu của JS, tên không
  chứa các kí tự đặc biệt.
 // - Ví dụ tên sai: 4giang, const, *gsdg.
