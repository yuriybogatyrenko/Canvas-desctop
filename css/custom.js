$(document).ready(function(){
        
    anchor_slides();
    function anchor_slides(){
        var href_page = $(location).attr("href");
        var oil_gas = /#oil_gas/i ;
        var mining = /#mining/i ;
        var road_construction = /#road_construction/i ;
        var railways = /#railways/i ;
        var agriculture = /#agriculture/i ;
        var urban_economy = /#urban_economy/i ;


        if(oil_gas.test(href_page)) {
            tab_selection("1");
        } else if(mining.test(href_page)) {
            tab_selection("2");
        } else if(road_construction.test(href_page)) {
            tab_selection("3");
        } else if(railways.test(href_page)) {
            tab_selection("4");
        } else if(agriculture.test(href_page)) {
            tab_selection("5");
        } else if(urban_economy.test(href_page)) {
            tab_selection("6");
        }
     }


    function tab_selection(value) {
        $(".tabs__item").removeClass("active");
        $(".tabs__item[data-tab="+value+"]").addClass("active");
        $(this).addClass("active");
        $("[data-tabs-item]").stop().fadeOut(300);
        $("[data-tabs-item="+this_data+"]").stop().fadeIn(300);
       
    }







    slider_bg();
    function slider_bg(){
      $(".b-main-slider__item-img img").each(function(){
        var url =  $(this).attr("src");
        $(this).closest(".b-main-slider__item-img").css('background','url('+url+')');
        $(this).remove();
      });
    }



    $(document).on('click', '.tabs__item', function(e){
        var this_data = $(this).data("tab");
        $(".tabs__item").removeClass("active");
        $(this).addClass("active");
        if ( this_data == "all") {
            $("[data-tabs-item]").stop().fadeIn(300);
        } else {
            $("[data-tabs-item]").stop().fadeOut(300);
            $("[data-tabs-item="+this_data+"]").stop().fadeIn(300);
        }
        
       
        e.preventDefault();
    });



    $(document).on('mouseenter', '.b-submain-nav__link', function(e){
        var this_data = $(this).data("nav-img");
        $(".b-submain-nav-image__img").removeClass("active");
        $(".b-submain-nav-image__img[data-nav-img="+this_data+"]").addClass("active");
    });
    

    $(document).on('mouseenter', '.b-main-nav__item.submenu-open', function(e){
        $(this).find(".b-submain-contant-wrap").stop().fadeIn(400);
    });

    $(document).on('mouseleave', '.b-main-nav__item.submenu-open', function(e){
        $(this).find(".b-submain-contant-wrap").stop().fadeOut(400);
    });


    $(document).on('click', '.b-advantages-list__item .dotted-line', function(e){
        $(".b-advantages-list__item").find(".more-descr").stop().slideUp(400);
        $(this).closest(".b-advantages-list__item").find(".more-descr").stop().slideDown(400);
    });


    function tabs_slider_init() {
    
    	$(".tabs-carousel-nav").each(function(){
    		var all_el_width = 0;
    		$(this).find(".tabs-carousel-nav__item").each(function(){
    			all_el_width = all_el_width + $(this).outerWidth();
    		});
    		$(this).css("width", all_el_width);
    	});


    	
    }
    tabs_slider_init();


    $(document).on('click', '.tabs-carousel-nav__item', function(e){
        var this_slider = $(this).closest(".tabs-slider-wpapper");
        var this_elem = $(this).index();

        this_slider.find(".tabs-slider__item").removeClass("active");
        this_slider.find(".tabs-slider__item:eq("+this_elem+")").addClass("active");

        this_slider.find(".tabs-carousel-nav__item").removeClass("active");
        $(this).addClass("active");

    });


   


    $(document).on('click', '.tabs-carousel-nav-btn', function(e){
    	var this_slider = $(this).closest(".tabs-slider-wpapper"),
    		this_nav = this_slider.find(".tabs-carousel-nav");
    		last_elem = this_nav.find(".tabs-carousel-nav__item").last();

        if ($(this).hasClass("prev")) {
        	var nav_pos = this_nav.position().left,
        		nav_widht = this_nav.outerWidth(),
        		width4elem = $(".tabs-carousel-nav__item").outerWidth() * 4,
        		finish_value = nav_pos + width4elem;

        	if (finish_value > 0 ) {
        		var need_value = ((nav_widht + nav_pos) - width4elem) * -1 ;
        		if (finish_value == width4elem ) {
        			this_nav.css("left", nav_pos + need_value);
        		} else {
					this_nav.css("left", 0);
        		}
        	} else {
        		this_nav.css("left", finish_value);
        	}

        } else {
        	var nav_pos = this_nav.position().left,
        		nav_widht = this_nav.outerWidth(),
        		width4elem = $(".tabs-carousel-nav__item").outerWidth() * 4,
        		finish_value = nav_pos - width4elem,
        		last_elem_pos = last_elem.position().left,
        		finish_left = (finish_value - width4elem) * -1;

        	if (finish_left > nav_widht ) {
        		var need_value = ((nav_widht + nav_pos) - width4elem) * -1 ;
        		if (need_value != 0) {
        			this_nav.css("left", nav_pos + need_value);
        		} else {
					this_nav.css("left", 0);
        		}
        	} else {
        		this_nav.css("left", finish_value);
        	}
        	
        }
    });


});
