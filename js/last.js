$(function(){
	$('.flexslider').flexslider();
	$(".box").hover(function(){/*复合事件*/
		$(this).find('span').addClass('animated fadeInDown');/*添加向下淡入的动画效果*/
		$(this).find('p').addClass('animated fadeInUp');/*添加向上淡入的动画效果*/
	},
		function(){
			$(this).find('span').removeClass('animated fadeInDown');/*移除向下淡入的动画效果*/
			$(this).find('p').removeClass('animated fadeInUp');/*移除向上淡入的动画效果*/
		}
	)
})
