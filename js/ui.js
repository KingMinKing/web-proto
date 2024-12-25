$(document).ready(function(){
	var speed = 300;
	//select box design	
	$('select').selectric();
	//GNB
	$("#gnb>ul>li>a").on("mouseover focusin",function(){
		$(this).parent("li")
		.find(".category")
		.stop(true, true)
		.slideDown(speed);
		$(this).parent().addClass('on');
	})
	$("#gnb>ul>li>a").on("mouseleave focusout",function(){
		$(this).parent("li")
		.find(".category")
		.stop(true, true)
		.delay(20).slideUp(speed);
		$(this).parent().removeClass('on');
	})
	$("#gnb .category a").on("mouseover focusin",function(){
		$(this)
		.closest('.category')
		.stop(true, true)
		.slideDown(speed);
		$(this).closest(".category").parent("li").addClass("on");
	})
	$("#gnb .category a").on("mouseleave focusout",function(){
		$(this)
		.closest('.category')
		.stop(true, true)
		.delay(20).slideUp(speed);
		$(this).closest(".category").parent("li").removeClass("on");
	})
	//LNB
	$(".has-cate>a").on("mouseover focusin",function(){
		$(this)
		.next('.category')
		.stop(true, true)
		.slideDown(speed);
		$(this).parent().addClass('on');
		
	})
	$(".has-cate>a").on("mouseleave focusout",function(){
		$(this)
		.next('.category')
		.stop(true, true)
		.delay(20).slideUp(speed);
		$(this).parent().removeClass('on');
		
	})
	$(".has-cate .category a").on("mouseover focusin",function(){
		$(this)
		.closest('.category')
		.stop(true, true)
		.show();
		$(this).closest(".has-cate").addClass('on');
	})
	$(".has-cate .category a").on("mouseleave focusout",function(){
		$(this)
		.closest('.category')
		.stop(true, true)
		.delay(20).slideUp(speed);
		$(this).closest(".has-cate").removeClass('on');
	})
	$('input[type="radio"]').on('click',function(){
		$('input[name='+$(this).attr('name')+']').parent().removeClass('checked');
		$(this).parent().addClass('checked');
	});
	//input file
	var fileTarget = $('.file-set #uploadFile');
	fileTarget.on('change', function(){
		if(window.FileReader){
		  var filename = $(this)[0].files[0].name;
		} 
		else {
		  var filename = $(this).val().split('/').pop().split('\\').pop();
		}
		
		$('#fileName').val(filename);
	});
	
	var chkCls;
	$(".down-box>ul>li>a").on("click",function(){
		chkCls = $(this).parent("li").hasClass("on");
		if(chkCls){
			$(this).parent("li").removeClass("on");
		}else{
			$(this).parent("li").addClass("on");
		}
	})
})//ready

/* 공통 탭 */
function showTab(obj, other){
    var target = $(obj).attr("href");
    $(target).show().siblings("." + other).hide();
    $(obj).parent().siblings("li").removeClass("on");
    $(obj).parent().addClass("on");
}
/* location */
function initialize(x,y,addr1,addr2,tit,num,mZoom) {
	var mapOptions = {
		center: new google.maps.LatLng(x,y),
		zoom: mZoom,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById("map_canvas"+num),mapOptions);
	//var image = './images/main/ico_digital.png';
	var contentString ='<div id="map_content'+num+'">'+
  '<div id="siteNotice'+num+'">'+
  '</div>'+
  //'<h1 id="firstHeading'+num+'" class="firstHeading"><img src="img/logo_map.png" width="89" alt="'+tit+'" /></h1>'+
  '<div id="bodyContent'+num+'">'+
  '<p><b>'+addr1+'</b></p>'+
  '<p>'+addr2+'</p>'+
  '</div>'+
  '</div>';
	var infowindow = new google.maps.InfoWindow({
		content: contentString,
		maxWidth:300
	});
	var myLatLng = new google.maps.LatLng(x, y);
	var beachMarker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title:tit
	});
	google.maps.event.addListener(beachMarker, 'click', function() {
	  infowindow.open(map,beachMarker);
	});

}

//팝업 가운데 띄우기
function open_window(url,name,width,height) { 
 var url = url; 
 var name = name;
 var width = width;
 var height = height; 
 var top = (screen.availHeight / 2) - (height / 2); 
 var left = (screen.availWidth / 2) - (width / 2); 
 if(getCookie("daewon") != "rangs"){
	wopen = window.open(url, name, "location=0, status=0, scrollbars=no, resizable=no, width="+ width +", height="+ height +", top=" + top + ", left=" + left);
 }
}


//팝업창
function getCookie(name){    
var wcname = name + '=';
var wcstart, wcend, end;
var i = 0;    

  while(i <= document.cookie.length) {            
    wcstart = i;  
    wcend   = (i + wcname.length);            
    if(document.cookie.substring(wcstart, wcend) == wcname) {                    
        if((end = document.cookie.indexOf(';', wcend)) == -1)                           
            end = document.cookie.length;                    
        return document.cookie.substring(wcend, end);            
    }            

    i = document.cookie.indexOf('', i) + 1;            
  
    if(i == 0)                    
        break;    
  }    
  return '';
} 

function setCookie(name, value, expiredays) {
    var today = new Date();
    today.setDate(today.getDate() + expiredays);

    document.cookie = name + '=' + escape(value) + '; path=/; expires=' + today.toGMTString() + ';'
}

function dayClosePop() {      
	setCookie('daewon', 'rangs', 1);
	
	self.close();
}
function weekClosePop() {      
	setCookie('daewon', 'rangs', 7);
	
	self.close();
}