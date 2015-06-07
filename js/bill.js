require([
  './pro'
], function(){

	var darkBackground = true;                                    // 用来判断某一行列表的背景颜色是否变回
	var year = "year-"+$("#my-year").val().toString();            // 记录select中的年份
	var month = "month-"+$("#my-month").val().toString();         // 记录select中的年份


	// 根据select中的时间显示相应的水电费表单
	showAccordingToTime(year, month);


	// 点击 楼层 展开或者收起楼层列表
	$(".my-floor-bar").each(function(i) {
		this.addEventListener("touchstart",function(){
      $(this).next(".my-floor").toggleClass("my-floor-show");
    }, false);
	});


	// 隐藏和显示已缴费的宿舍
	$("#my-button-hide-and-show").each(function() {
		this.addEventListener("touchend",function(){

			// 改变按钮文字
      if ($(this).text() == "显示已缴费") {
      	$(this).text("隐藏已缴费");
      } else {
      	$(this).text("显示已缴费");
      }
      // 显示与隐藏
      $(".my-button").each(function(i) {
      	if ($(this).hasClass("my-paid")) {
      		$(".my-room li").eq(i).toggle();
      		$(".my-money li").eq(i).toggle();
      		$(this).parent().toggle();
      	}
      });
      // 重新改变列表奇偶行的背景颜色
      changeBackgroundColor();
    }, false);
	});


	// select内容改变时显示不同时间的水电费表单
	$(".my-select").each(function() {
		this.addEventListener("change", function() {
			year = "year-"+$("#my-year").val().toString();
			month = "month-"+$("#my-month").val().toString();
			showAccordingToTime(year, month);
		});
	});


	// 改变背景颜色
	function changeBackgroundColor() {
		$(".my-label li").each(function(i) {
			if ($(this).css("display") == "none") return true;
			if (darkBackground) {
				$(this).css("background", "#F0F0F0");
				darkBackground = false;
			} else {
				$(this).css("background", "#FFFFFF");
				darkBackground = true;
			}
		});
	}

	// 根据select时间显示表单
	function showAccordingToTime(year_, month_) {
		hideAll();
		$(".my-bill").each(function() {
			if ($(this).hasClass(year_) && $(this).hasClass(month_)) {
				$(this).addClass("my-show");
			}
		});
	}

	// 将所有时间的水电费先隐藏
	function hideAll() {
		$(".my-bill").each(function() {
			$(this).removeClass("my-show");
		});
	}

});