$(document).ready(function(){
var ss = 'http://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getSolCalInfo'; /*URL*/
var queryParams = '?' + encodeURIComponent('ServiceKey') + '='+'FBj3U74WoSJVQRx6Jxzi9POVE5lbTeRlgUOpv39uzs7qijqvcU%2BQakUabpDgy2Ds3%2BaCoz2UNmg%2BSAXETib%2Fig%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('lunYear') + '=' + encodeURIComponent('1997'); /*연(음력)*/
queryParams += '&' + encodeURIComponent('lunMonth') + '=' + encodeURIComponent('12'); /*월(음력)*/
queryParams += '&' + encodeURIComponent('lunDay') + '=' + encodeURIComponent('26'); /*일(음력)*/
      
            $.ajax({
				crossOrigin: true,
               type: "GET"
               ,dataType: "xml"

               ,url:ss+queryParams
               ,success: function(xml){
                    var xmlData = $(xml).find("lunDay").text();
					location.href = "res.html?a='"+xmlData+"'";
                }
             }); 
      
    });