//
// $(document).ready(function(){
//
//   $(".image1").hide();
//   $("#btn").click(function(){
//       $(".image1").fadeIn(3000);
//
//         $.ajax({
//             async : "true",
//             type : "POST",
//             url: 'https://api.funtranslations.com/translate/yoda',             // указываем URL и
//             dataType : "json",                                                 // тип загружаемых данных
//             data: {
//                 text: $("#beYodish").text(),
//             },
//
//             success: function (text, textStatus) {
//                 alert(text);                            // вешаем свой обработчик на функцию success
//                 $("#content").html() = text;
//             }
//         });
//
//       });
//
//
// });
