$(function(){
	function banner(){
		var imgInfo = [
			{
				bac:"url(images/banner201_1.jpg)",
				img:"images/banner201_1s.jpg"
			},
			{
				bac:"url(images/banner201_2.jpg)",
				img:"images/banner201_2s.jpg"				
			},
			{
				bac:"url(images/banner201_3.jpg)",
				img:"images/banner201_3s.jpg"				
			},	
			{
				bac:"url(images/banner201_4.jpg)",
				img:"images/banner201_4s.jpg"				
			},
			{
				bac:"url(images/banner201_5.jpg)",
				img:"images/banner201_5s.jpg"				
			},
			{
				bac:"url(images/banner201_6.jpg)",
				img:"images/banner201_6s.jpg"				
			},
			{
				bac:"url(images/banner201_7.jpg)",
				img:"images/banner201_7s.jpg"				
			},
			{
				bac:"url(images/banner201_8.jpg)",
				img:"images/banner201_8s.jpg"				
			},	
			{
				bac:"url(images/banner201_9.jpg)",
				img:"images/banner201_9s.jpg"				
			}			
		];
		
		var isMobile = false;
		var width = $(window).width();//浏览器窗口大小
		if(width<768){
			isMobile = true;
		}else{
			isMobile = false;
		};
		var data = {
			isMobile:isMobile,
			json:imgInfo
		}
		var html = template('slider',data);
		$('#inner').html(html);
		var isMove = false;
		var startX = 0;
		var moveX = 0;
		var distanceX = 0;
		
		$('#inner').on('touchstart',function(e){
			startX = e.originalEvent.touches[0].clientX;
		}).on('touchmove',function(){
			isMove = true;
			moveX = e.originalEvent.touches[0].clientX;
		}).on('touchend',function(){
			distanceX = moveX - startX;
			if(Math.abs(distanceX)>50&&isMove){
				if(distanceX<0){
					$('#carousel-example-generic').carousel('next');
				}else if(distanceX>0){
					$('#carousel-example-generic').carousel('prev');
				}
			}
		});	
	}
	    $(window).on('resize',banner).trigger('resize');
})
