/*------------------------------------------------------------------------------*/
/*  Home_Page Slider
/*------------------------------------------------------------------------------*/

var revapi1,
  tpj;
jQuery(function() {
  tpj = jQuery;
  if(tpj("#rev_slider_1_1").revolution == undefined){
    revslider_showDoubleJqueryError("#rev_slider_1_1");
  }else{
    revapi1 = tpj("#rev_slider_1_1").show().revolution({
      sliderLayout:"fullwidth",
      visibilityLevels:"1240,1240,778,480",
      gridwidth:"1270,1270,778,480",
      gridheight:"754,754,450,350",
      minHeight:"0",
      spinner:"spinner0",
      editorheight:"754,768,450,350",
      responsiveLevels:"1240,1240,778,480",

      disableProgressBar:"on",
      navigation: {
        mouseScrollNavigation:false,
        onHoverStop:false,
        touch: {
          touchenabled:true
        },
        arrows: {
          enable:true,
          style:"uranus",
          hide_onmobile:true,
          hide_under:768,
          hide_onleave:true,
          left: {

          },
          right: {

          }
        }
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid:true
      },
    });
  }
  
});



var revapi2,
    tpj;
  jQuery(function() {
    tpj = jQuery;
    if(tpj("#rev_slider_2_1").revolution == undefined){
      revslider_showDoubleJqueryError("#rev_slider_2_1");
    }else{
      revapi2 = tpj("#rev_slider_2_1").show().revolution({
        sliderLayout:"fullwidth",
        visibilityLevels:"1240,1240,778,480",
        gridwidth:"1270,1270,778,480",
        gridheight:"700,700,450,350",
        spinner:"spinner0",
        perspective:600,
        perspectiveType:"local",
        editorheight:"700,768,450,350",
        responsiveLevels:"1240,1240,778,480",
        disableProgressBar:"on",
        navigation: {
          mouseScrollNavigation:false,
          onHoverStop:false,
          touch: {
            touchenabled:true
          },
          arrows: {
            enable:true,
            style:"uranus",
            hide_onmobile:true,
            hide_under:768,
            hide_onleave:true,
            left: {

            },
            right: {

            }
          }
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid:true
        },
      });
    }
    
  });


          
var revapi3,
    tpj;
jQuery(function() {
    tpj = jQuery;
    if(tpj("#rev_slider_3_1").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_3_1");
    }else{
        revapi3 = tpj("#rev_slider_3_1").show().revolution({
            sliderLayout:"fullwidth",
            visibilityLevels:"1240,1240,778,480",
            gridwidth:"1270,1270,778,480",
            gridheight:"850,850,450,350",
            spinner:"spinner0",
            perspective:600,
            perspectiveType:"local",
            editorheight:"850,768,450,350",
            responsiveLevels:"1240,1240,778,480",
            disableProgressBar:"on",
            navigation: {
                mouseScrollNavigation:false,
                onHoverStop:false,
                touch: {
                    touchenabled:true
                },
                arrows: {
                    enable:true,
                    style:"custom",
                    hide_onmobile:true,
                    hide_under:768,
                    hide_onleave:true,
                    left: {

                    },
                    right: {

                    }
                }
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid:true
            },
        });
    }
    
});