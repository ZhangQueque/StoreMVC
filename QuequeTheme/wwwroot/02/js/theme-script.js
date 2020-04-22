

jQuery(document).ready(function($) {
	"use strict";
    
    
    /*------------------------------- brand carousel ---------------------------------------*/
    
    $(function(){
        $("#brand-carousel").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items : 5,
            slideSpeed : 300,
            paginationSpeed : 400,
            pagination: false,
            navigation: false,
        });
        
        $("#brand-carousel-2").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            singleItem:true,
            slideSpeed : 300,
            paginationSpeed : 400,
            pagination: false,
            navigation: false,
        });
    });
    
    /*------------------------------- Price range slider ---------------------------------------*/
    
    $(function(){
        $(function() {
            $( "#range-slider" ).slider({
                range: true,
                min: 0,
                max: 500,
                values: [ 0, 85, ],
                slide: function( event, ui ) {
                    $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
                }
            });
            $( "#amount" ).val( "$" + $( "#range-slider" ).slider( "values", 0 ) +
		  " - $" + $( "#range-slider" ).slider( "values", 1 ) );
        });
    });
    
    /*------------------------------- Home Slider ---------------------------------------*/
    $(function(){
		$("#home-slider").owlCarousel({
		 
            slideSpeed : 300,
            paginationSpeed : 300,
            singleItem:true,
            pagination:false,
            navigation : false,
            autoPlay: 5000, //Set AutoPlay to 3 seconds
            transitionStyle : "fadeUp"

            // "singleItem:true" is a shortcut for:
            // items : 1,
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
		 
		});
	});
    $(function(){
		$("#sect-1").owlCarousel({
		 
            slideSpeed : 400,
            paginationSpeed : 300,
            singleItem:true,
            pagination:false,
            navigation : false,
            autoPlay: 9000, //Set AutoPlay to 3 seconds
            transitionStyle : "fade"

            // "singleItem:true" is a shortcut for:
            // items : 1,
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
		 
		});
	});
    $(function(){
		$("#sect-2").owlCarousel({
		 
            slideSpeed : 400,
            paginationSpeed : 300,
            singleItem:true,
            pagination:false,
            navigation : false,
            autoPlay: 10000, //Set AutoPlay to 3 seconds
            transitionStyle : "fade"

            // "singleItem:true" is a shortcut for:
            // items : 1,
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
		 
		});
	});
    $(function(){
		$("#sect-3").owlCarousel({
		 
            slideSpeed : 500,
            paginationSpeed : 300,
            singleItem:true,
            pagination:false,
            navigation : false,
            autoPlay: 8000, //Set AutoPlay to 3 seconds
            transitionStyle : "fade"

            // "singleItem:true" is a shortcut for:
            // items : 1,
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
		 
		});
	});
    $(function(){
		$("#sect-4").owlCarousel({
		 
            slideSpeed : 600,
            paginationSpeed : 300,
            singleItem:true,
            pagination:false,
            navigation : false,
            autoPlay: 11000, //Set AutoPlay to 3 seconds

            // "singleItem:true" is a shortcut for:
            // items : 1,
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
		 
		});
	});
    
    $(function(){
		$("#3-sect-1").owlCarousel({
		 
            slideSpeed : 600,
            paginationSpeed : 300,
            singleItem:true,
            pagination:false,
            navigation : false,
            autoPlay: 6000, //Set AutoPlay to 3 seconds
            transitionStyle : "fade"

            // "singleItem:true" is a shortcut for:
            // items : 1,
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
		 
		});
	});
    
    $(function(){
		$("#3-sect-6").owlCarousel({
		 
            slideSpeed : 600,
            paginationSpeed : 300,
            singleItem:true,
            pagination:false,
            navigation : false,
            autoPlay: 8000, //Set AutoPlay to 3 seconds
            transitionStyle : "fade"

            // "singleItem:true" is a shortcut for:
            // items : 1,
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
		 
		});
	});
    
    $(function(){
		$("#3-sect-2").owlCarousel({
		 
            slideSpeed : 300,
            paginationSpeed : 300,
            singleItem:true,
            pagination:false,
            navigation : false,
            autoPlay: 9000, //Set AutoPlay to 3 seconds


            // "singleItem:true" is a shortcut for:
            // items : 1,
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
		 
		});
	});
    
    $(function(){
		$("#3-sect-3").owlCarousel({
		 
            slideSpeed : 300,
            paginationSpeed : 300,
            singleItem:true,
            pagination:false,
            navigation : false,
            autoPlay: 10000, //Set AutoPlay to 3 seconds


            // "singleItem:true" is a shortcut for:
            // items : 1,
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
		 
		});
	});
    
    $(function(){
		$("#3-sect-4").owlCarousel({
		 
            slideSpeed : 300,
            paginationSpeed : 300,
            singleItem:true,
            pagination:false,
            navigation : false,
            autoPlay: 4000, //Set AutoPlay to 3 seconds


            // "singleItem:true" is a shortcut for:
            // items : 1,
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
		 
		});
	});
    
    $(function(){
		$("#3-sect-5").owlCarousel({
		 
            slideSpeed : 300,
            paginationSpeed : 300,
            singleItem:true,
            pagination:false,
            navigation : false,
            autoPlay: 7000, //Set AutoPlay to 3 seconds

            // "singleItem:true" is a shortcut for:
            // items : 1,
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
		 
		});
	});
    
    /*------------------------------- Shop detail 1 image carousel  ---------------------------------------*/
    $(function(){
		$("#detail-shop-1").owlCarousel({
		 
            slideSpeed : 300,
            paginationSpeed : 300,
            singleItem:true,
            pagination:false,
            navigation : false,
            autoPlay: 5000, //Set AutoPlay to 3 seconds

            // "singleItem:true" is a shortcut for:
            // items : 1,
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
		 
		});
	});
    
    /*------------------------------- search form ---------------------------------------*/
    /*$(function() {
        $(".dropdown").hover(
        function() { $('.dropdown-menu', this).stop().fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).stop().fadeOut("fast");
    });
    });*/
    $(function() {
		$("#open-srch-form").on('click', function() {
		  $('.srch-form').toggle('fast', function() {
		  });
		});
	});
    
    /*------------------------------- category open ---------------------------------------*/
    $(function() {
		$("#to-open-cat").on('click', function() {
		  $('.this-cat').toggle('fast', function() {
		  });
		});
	});
    
    /*------------------------------- Product preview ---------------------------------------*/
    
    $(function(){
        var sync1 = $("#product-image");
        var sync2 = $("#product-control");
 
        sync1.owlCarousel({
            singleItem : true,
            slideSpeed : 1000,
            navigation: false,
            pagination:false,
            afterAction : syncPosition,
            responsiveRefreshRate : 200,
        });
 
        sync2.owlCarousel({
            items : 4,
            pagination:false,
            responsive:false,
            responsiveRefreshRate : 100,
            afterInit : function(el){
                el.find(".owl-item").eq(0).addClass("synced");
            }
        });
 
        function syncPosition(el){
            var current = this.currentItem;
            $("#product-control")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
            if($("#product-control").data("owlCarousel") !== undefined){
                center(current)
            }
        }
 
        $("#product-control").on("click", ".owl-item", function(e){
            e.preventDefault();
            var number = $(this).data("owlItem");
            sync1.trigger("owl.goTo",number);
        });
 
        function center(number){
            var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
            var num = number;
            var found = false;
            for(var i in sync2visible){
                if(num === sync2visible[i]){
                    var found = true;
                }
            }
 
            if(found===false){
                if(num>sync2visible[sync2visible.length-1]){
                    sync2.trigger("owl.goTo", num - sync2visible.length+2)
                }else{
                    if(num - 1 === -1){
                        num = 0;
                    }
                    sync2.trigger("owl.goTo", num);
                }
            } else if(num === sync2visible[sync2visible.length-1]){
                sync2.trigger("owl.goTo", sync2visible[1])
            } else if(num === sync2visible[0]){
                sync2.trigger("owl.goTo", num-1)
            }
    
        }

    });
    
    $(function(){
        var sync1 = $("#product-image2");
        var sync2 = $("#product-control2");
 
        sync1.owlCarousel({
            singleItem : true,
            slideSpeed : 1000,
            navigation: false,
            pagination:false,
            afterAction : syncPosition,
            responsiveRefreshRate : 200,
        });
 
        sync2.owlCarousel({
            items : 4,
            pagination:false,
            responsive:false,
            responsiveRefreshRate : 100,
            afterInit : function(el){
                el.find(".owl-item").eq(0).addClass("synced");
            }
        });
 
        function syncPosition(el){
            var current = this.currentItem;
            $("#product-control2")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
            if($("#product-control2").data("owlCarousel") !== undefined){
                center(current)
            }
        }
 
        $("#product-control2").on("click", ".owl-item", function(e){
            e.preventDefault();
            var number = $(this).data("owlItem");
            sync1.trigger("owl.goTo",number);
        });
 
        function center(number){
            var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
            var num = number;
            var found = false;
            for(var i in sync2visible){
                if(num === sync2visible[i]){
                    var found = true;
                }
            }
 
            if(found===false){
                if(num>sync2visible[sync2visible.length-1]){
                    sync2.trigger("owl.goTo", num - sync2visible.length+2)
                }else{
                    if(num - 1 === -1){
                        num = 0;
                    }
                    sync2.trigger("owl.goTo", num);
                }
            } else if(num === sync2visible[sync2visible.length-1]){
                sync2.trigger("owl.goTo", sync2visible[1])
            } else if(num === sync2visible[0]){
                sync2.trigger("owl.goTo", num-1)
            }
    
        }

    });
    
   
    
    $(function(){
        var sync1 = $("#product-image3");
        var sync2 = $("#product-control3");
 
        sync1.owlCarousel({
            singleItem : true,
            slideSpeed : 1000,
            navigation: false,
            pagination:false,
            afterAction : syncPosition,
            responsiveRefreshRate : 200,
        });
 
        sync2.owlCarousel({
            items : 4,
            responsive:false,
            pagination:false,
            responsiveRefreshRate : 100,
            afterInit : function(el){
                el.find(".owl-item").eq(0).addClass("synced");
            }
        });
 
        function syncPosition(el){
            var current = this.currentItem;
            $("#product-control3")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
            if($("#product-control3").data("owlCarousel") !== undefined){
                center(current)
            }
        }
 
        $("#product-control3").on("click", ".owl-item", function(e){
            e.preventDefault();
            var number = $(this).data("owlItem");
            sync1.trigger("owl.goTo",number);
        });
 
        function center(number){
            var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
            var num = number;
            var found = false;
            for(var i in sync2visible){
                if(num === sync2visible[i]){
                    var found = true;
                }
            }
 
            if(found===false){
                if(num>sync2visible[sync2visible.length-1]){
                    sync2.trigger("owl.goTo", num - sync2visible.length+2)
                }else{
                    if(num - 1 === -1){
                        num = 0;
                    }
                    sync2.trigger("owl.goTo", num);
                }
            } else if(num === sync2visible[sync2visible.length-1]){
                sync2.trigger("owl.goTo", sync2visible[1])
            } else if(num === sync2visible[0]){
                sync2.trigger("owl.goTo", num-1)
            }
    
        }

    });
    
    $(function(){
        $('.star-1').raty({ readOnly: true, score: 3 });
    }); 
    $(function(){
        $('.star-0').raty();
    });
    $(function(){
        var sync1 = $("#product-image4");
        var sync2 = $("#product-control4");
 
        sync1.owlCarousel({
            singleItem : true,
            slideSpeed : 1000,
            navigation: false,
            pagination:false,
            afterAction : syncPosition,
            responsiveRefreshRate : 200,
        });
 
        sync2.owlCarousel({
            items : 4,
            pagination:false,
            responsive:false,
            responsiveRefreshRate : 100,
            afterInit : function(el){
                el.find(".owl-item").eq(0).addClass("synced");
            }
        });
 
        function syncPosition(el){
            var current = this.currentItem;
            $("#product-control4")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
            if($("#product-control4").data("owlCarousel") !== undefined){
                center(current)
            }
        }
 
        $("#product-control4").on("click", ".owl-item", function(e){
            e.preventDefault();
            var number = $(this).data("owlItem");
            sync1.trigger("owl.goTo",number);
        });
 
        function center(number){
            var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
            var num = number;
            var found = false;
            for(var i in sync2visible){
                if(num === sync2visible[i]){
                    var found = true;
                }
            }
 
            if(found===false){
                if(num>sync2visible[sync2visible.length-1]){
                    sync2.trigger("owl.goTo", num - sync2visible.length+2)
                }else{
                    if(num - 1 === -1){
                        num = 0;
                    }
                    sync2.trigger("owl.goTo", num);
                }
            } else if(num === sync2visible[sync2visible.length-1]){
                sync2.trigger("owl.goTo", sync2visible[1])
            } else if(num === sync2visible[0]){
                sync2.trigger("owl.goTo", num-1)
            }
    
        }

    });
    
    $(function(){
        var sync1 = $("#product-image5");
        var sync2 = $("#product-control5");
 
        sync1.owlCarousel({
            singleItem : true,
            slideSpeed : 1000,
            navigation: false,
            pagination:false,
            afterAction : syncPosition,
            responsiveRefreshRate : 200,
        });
 
        sync2.owlCarousel({
            items : 4,
            pagination:false,
            responsive:false,
            responsiveRefreshRate : 100,
            afterInit : function(el){
                el.find(".owl-item").eq(0).addClass("synced");
            }
        });
 
        function syncPosition(el){
            var current = this.currentItem;
            $("#product-control5")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
            if($("#product-control5").data("owlCarousel") !== undefined){
                center(current)
            }
        }
 
        $("#product-control5").on("click", ".owl-item", function(e){
            e.preventDefault();
            var number = $(this).data("owlItem");
            sync1.trigger("owl.goTo",number);
        });
 
        function center(number){
            var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
            var num = number;
            var found = false;
            for(var i in sync2visible){
                if(num === sync2visible[i]){
                    var found = true;
                }
            }
 
            if(found===false){
                if(num>sync2visible[sync2visible.length-1]){
                    sync2.trigger("owl.goTo", num - sync2visible.length+2)
                }else{
                    if(num - 1 === -1){
                        num = 0;
                    }
                    sync2.trigger("owl.goTo", num);
                }
            } else if(num === sync2visible[sync2visible.length-1]){
                sync2.trigger("owl.goTo", sync2visible[1])
            } else if(num === sync2visible[0]){
                sync2.trigger("owl.goTo", num-1)
            }
    
        }

    });
    
    $(function(){
        var sync1 = $("#product-image6");
        var sync2 = $("#product-control6");
 
        sync1.owlCarousel({
            singleItem : true,
            slideSpeed : 1000,
            navigation: false,
            pagination:false,
            afterAction : syncPosition,
            responsiveRefreshRate : 200,
        });
 
        sync2.owlCarousel({
            items : 4,
            pagination:false,
            responsive:false,
            responsiveRefreshRate : 100,
            afterInit : function(el){
                el.find(".owl-item").eq(0).addClass("synced");
            }
        });
 
        function syncPosition(el){
            var current = this.currentItem;
            $("#product-control6")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
            if($("#product-control6").data("owlCarousel") !== undefined){
                center(current)
            }
        }
 
        $("#product-control6").on("click", ".owl-item", function(e){
            e.preventDefault();
            var number = $(this).data("owlItem");
            sync1.trigger("owl.goTo",number);
        });
 
        function center(number){
            var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
            var num = number;
            var found = false;
            for(var i in sync2visible){
                if(num === sync2visible[i]){
                    var found = true;
                }
            }
 
            if(found===false){
                if(num>sync2visible[sync2visible.length-1]){
                    sync2.trigger("owl.goTo", num - sync2visible.length+2)
                }else{
                    if(num - 1 === -1){
                        num = 0;
                    }
                    sync2.trigger("owl.goTo", num);
                }
            } else if(num === sync2visible[sync2visible.length-1]){
                sync2.trigger("owl.goTo", sync2visible[1])
            } else if(num === sync2visible[0]){
                sync2.trigger("owl.goTo", num-1)
            }
    
        }

    });
    
    $(function(){
        var sync1 = $("#product-image7");
        var sync2 = $("#product-control7");
 
        sync1.owlCarousel({
            singleItem : true,
            slideSpeed : 1000,
            navigation: false,
            pagination:false,
            afterAction : syncPosition,
            responsiveRefreshRate : 200,
        });
 
        sync2.owlCarousel({
            items : 4,
            pagination:false,
            responsive:false,
            responsiveRefreshRate : 100,
            afterInit : function(el){
                el.find(".owl-item").eq(0).addClass("synced");
            }
        });
 
        function syncPosition(el){
            var current = this.currentItem;
            $("#product-control7")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
            if($("#product-control7").data("owlCarousel") !== undefined){
                center(current)
            }
        }
 
        $("#product-control7").on("click", ".owl-item", function(e){
            e.preventDefault();
            var number = $(this).data("owlItem");
            sync1.trigger("owl.goTo",number);
        });
 
        function center(number){
            var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
            var num = number;
            var found = false;
            for(var i in sync2visible){
                if(num === sync2visible[i]){
                    var found = true;
                }
            }
 
            if(found===false){
                if(num>sync2visible[sync2visible.length-1]){
                    sync2.trigger("owl.goTo", num - sync2visible.length+2)
                }else{
                    if(num - 1 === -1){
                        num = 0;
                    }
                    sync2.trigger("owl.goTo", num);
                }
            } else if(num === sync2visible[sync2visible.length-1]){
                sync2.trigger("owl.goTo", sync2visible[1])
            } else if(num === sync2visible[0]){
                sync2.trigger("owl.goTo", num-1)
            }
    
        }

    });
    
    $(function(){
        var sync1 = $("#product-image8");
        var sync2 = $("#product-control8");
 
        sync1.owlCarousel({
            singleItem : true,
            slideSpeed : 1000,
            navigation: false,
            pagination:false,
            afterAction : syncPosition,
            responsiveRefreshRate : 200,
        });
 
        sync2.owlCarousel({
            items : 4,
            pagination:false,
            responsive:false,
            responsiveRefreshRate : 100,
            afterInit : function(el){
                el.find(".owl-item").eq(0).addClass("synced");
            }
        });
 
        function syncPosition(el){
            var current = this.currentItem;
            $("#product-control8")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
            if($("#product-control8").data("owlCarousel") !== undefined){
                center(current)
            }
        }
 
        $("#product-control8").on("click", ".owl-item", function(e){
            e.preventDefault();
            var number = $(this).data("owlItem");
            sync1.trigger("owl.goTo",number);
        });
 
        function center(number){
            var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
            var num = number;
            var found = false;
            for(var i in sync2visible){
                if(num === sync2visible[i]){
                    var found = true;
                }
            }
 
            if(found===false){
                if(num>sync2visible[sync2visible.length-1]){
                    sync2.trigger("owl.goTo", num - sync2visible.length+2)
                }else{
                    if(num - 1 === -1){
                        num = 0;
                    }
                    sync2.trigger("owl.goTo", num);
                }
            } else if(num === sync2visible[sync2visible.length-1]){
                sync2.trigger("owl.goTo", sync2visible[1])
            } else if(num === sync2visible[0]){
                sync2.trigger("owl.goTo", num-1)
            }
    
        }

    });
    
    $(function(){
        var sync1 = $("#product-image9");
        var sync2 = $("#product-control9");
 
        sync1.owlCarousel({
            singleItem : true,
            slideSpeed : 1000,
            navigation: false,
            pagination:false,
            afterAction : syncPosition,
            responsiveRefreshRate : 200,
        });
 
        sync2.owlCarousel({
            items : 4,
            pagination:false,
            responsive:false,
            responsiveRefreshRate : 100,
            afterInit : function(el){
                el.find(".owl-item").eq(0).addClass("synced");
            }
        });
 
        function syncPosition(el){
            var current = this.currentItem;
            $("#product-control9")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
            if($("#product-control9").data("owlCarousel") !== undefined){
                center(current)
            }
        }
 
        $("#product-control9").on("click", ".owl-item", function(e){
            e.preventDefault();
            var number = $(this).data("owlItem");
            sync1.trigger("owl.goTo",number);
        });
 
        function center(number){
            var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
            var num = number;
            var found = false;
            for(var i in sync2visible){
                if(num === sync2visible[i]){
                    var found = true;
                }
            }
 
            if(found===false){
                if(num>sync2visible[sync2visible.length-1]){
                    sync2.trigger("owl.goTo", num - sync2visible.length+2)
                }else{
                    if(num - 1 === -1){
                        num = 0;
                    }
                    sync2.trigger("owl.goTo", num);
                }
            } else if(num === sync2visible[sync2visible.length-1]){
                sync2.trigger("owl.goTo", sync2visible[1])
            } else if(num === sync2visible[0]){
                sync2.trigger("owl.goTo", num-1)
            }
    
        }

    });
    
    $(function(){
        var sync1 = $("#product-image10");
        var sync2 = $("#product-control10");
 
        sync1.owlCarousel({
            singleItem : true,
            slideSpeed : 1000,
            navigation: false,
            pagination:false,
            afterAction : syncPosition,
            responsiveRefreshRate : 200,
        });
 
        sync2.owlCarousel({
            items : 4,
            pagination:false,
            responsive:false,
            responsiveRefreshRate : 100,
            afterInit : function(el){
                el.find(".owl-item").eq(0).addClass("synced");
            }
        });
 
        function syncPosition(el){
            var current = this.currentItem;
            $("#product-control10")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
            if($("#product-control10").data("owlCarousel") !== undefined){
                center(current)
            }
        }
 
        $("#product-control10").on("click", ".owl-item", function(e){
            e.preventDefault();
            var number = $(this).data("owlItem");
            sync1.trigger("owl.goTo",number);
        });
 
        function center(number){
            var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
            var num = number;
            var found = false;
            for(var i in sync2visible){
                if(num === sync2visible[i]){
                    var found = true;
                }
            }
 
            if(found===false){
                if(num>sync2visible[sync2visible.length-1]){
                    sync2.trigger("owl.goTo", num - sync2visible.length+2)
                }else{
                    if(num - 1 === -1){
                        num = 0;
                    }
                    sync2.trigger("owl.goTo", num);
                }
            } else if(num === sync2visible[sync2visible.length-1]){
                sync2.trigger("owl.goTo", sync2visible[1])
            } else if(num === sync2visible[0]){
                sync2.trigger("owl.goTo", num-1)
            }
    
        }

    });
    
    $(function(){
        var sync1 = $("#product-image11");
        var sync2 = $("#product-control11");
 
        sync1.owlCarousel({
            singleItem : true,
            slideSpeed : 1000,
            navigation: false,
            pagination:false,
            afterAction : syncPosition,
            responsiveRefreshRate : 200,
        });
 
        sync2.owlCarousel({
            items : 4,
            pagination:false,
            responsive:false,
            responsiveRefreshRate : 100,
            afterInit : function(el){
                el.find(".owl-item").eq(0).addClass("synced");
            }
        });
 
        function syncPosition(el){
            var current = this.currentItem;
            $("#product-control11")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
            if($("#product-control11").data("owlCarousel") !== undefined){
                center(current)
            }
        }
 
        $("#product-control11").on("click", ".owl-item", function(e){
            e.preventDefault();
            var number = $(this).data("owlItem");
            sync1.trigger("owl.goTo",number);
        });
 
        function center(number){
            var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
            var num = number;
            var found = false;
            for(var i in sync2visible){
                if(num === sync2visible[i]){
                    var found = true;
                }
            }
 
            if(found===false){
                if(num>sync2visible[sync2visible.length-1]){
                    sync2.trigger("owl.goTo", num - sync2visible.length+2)
                }else{
                    if(num - 1 === -1){
                        num = 0;
                    }
                    sync2.trigger("owl.goTo", num);
                }
            } else if(num === sync2visible[sync2visible.length-1]){
                sync2.trigger("owl.goTo", sync2visible[1])
            } else if(num === sync2visible[0]){
                sync2.trigger("owl.goTo", num-1)
            }
    
        }

    });
    
    
    $(function(){
        var sync1 = $("#detail-3");
          var sync2 = $("#detail-control-3");

          sync1.owlCarousel({
            singleItem : true,
            slideSpeed : 1000,
            navigation: false,
            pagination:false,
            afterAction : syncPosition,
            responsiveRefreshRate : 200,
          });

          sync2.owlCarousel({
            items : 3,
            pagination:false,
            navigation:false,
            responsive:false,
            responsiveRefreshRate : 100,
            afterInit : function(el){
              el.find(".owl-item").eq(0).addClass("synced");
            }
          });

          function syncPosition(el){
            var current = this.currentItem;
            $("#detail-control-3")
              .find(".owl-item")
              .removeClass("synced")
              .eq(current)
              .addClass("synced")
            if($("#detail-control-3").data("owlCarousel") !== undefined){
              center(current)
            }
          }

          $("#detail-control-3").on("click", ".owl-item", function(e){
            e.preventDefault();
            var number = $(this).data("owlItem");
            sync1.trigger("owl.goTo",number);
          });

          function center(number){
            var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
            var num = number;
            var found = false;
            for(var i in sync2visible){
              if(num === sync2visible[i]){
                var found = true;
              }
            }

            if(found===false){
              if(num>sync2visible[sync2visible.length-1]){
                sync2.trigger("owl.goTo", num - sync2visible.length+2)
              }else{
                if(num - 1 === -1){
                  num = 0;
                }
                sync2.trigger("owl.goTo", num);
              }
            } else if(num === sync2visible[sync2visible.length-1]){
              sync2.trigger("owl.goTo", sync2visible[1])
            } else if(num === sync2visible[0]){
              sync2.trigger("owl.goTo", num-1)
            }

          }
    });
    
    $(function(){
		$("a[data-rel^='prettyPhoto']").prettyPhoto({
			autoplay:false,
			social_tools:false,
		});
	});
    
    $(function () {
        $("#select-size select").selectbox();
        
    });
    $(function () {
        $("#short select").selectbox();
        
    });
    
    $(function () {
        $("#select-color select").selectbox();
    });
    $(function () {
        $(".country select").selectbox();
    });

    


    
});