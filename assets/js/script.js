

// Count up
// $('.count').each(function () {
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 2000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });



/*  jQuery Nice Select - v1.1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
 


    // Mobile Menu iteam select
$(document).ready(function () {
    $(".nav_item").click(function () {
        $(this).toggleClass("nav_item_open").siblings().slideToggle(300);
    })
});

//SCROLL MENU ONE
$(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    if (scrollTop >= 80) {
      $('#_1menu').addClass( "_menu_bg" );
    } else  {
      $('#_1menu').removeClass("_menu_bg");
    } 
  });
});

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

// Profile dropdown
$(document).ready(function () {
    $(".profile").click(function () {
        $(this).toggleClass("profile_dropdown").siblings().slideToggle(300);
    })
});

// Dower open
$(document).ready(function () {
    $("._1dower_click").click(function () {
        $('._1dower').addClass("_1dower_open");
        $('._1sidebar').addClass("_1sidebar_open");
        $('._content').addClass("_content_open");
    })
});

// Dower tabs 
function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Dower main open
$(document).ready(function () {
    $("._1dower_items").click(function () {
        $('._1dower').addClass("_1dower_main_open");
    })
});

$(document).ready(function () {
    $("._1dower_close").click(function () {
        $('._1dower').removeClass("_1dower_main_open");
    })
});


// Dower main open
$(document).ready(function () {
    $("#_0box_shadow").click(function () {
        $('._1card').removeClass("_1box_shadow").addClass("_0box_shadow");
        $('._1card').removeClass("_2box_shadow").addClass("_0box_shadow");
        $('._1card').removeClass("_3box_shadow").addClass("_0box_shadow");
        $('._1card').removeClass("_4box_shadow").addClass("_0box_shadow");
        $('._1card').removeClass("_5box_shadow").addClass("_0box_shadow");
    });
    $("#_1box_shadow").click(function () {
        $('._1card').removeClass("_0box_shadow").addClass("_1box_shadow");
        $('._1card').removeClass("_2box_shadow").addClass("_1box_shadow");
        $('._1card').removeClass("_3box_shadow").addClass("_1box_shadow");
        $('._1card').removeClass("_4box_shadow").addClass("_1box_shadow");
        $('._1card').removeClass("_5box_shadow").addClass("_1box_shadow");
    });
    $("#_2box_shadow").click(function () {
        $('._1card').removeClass("_0box_shadow").addClass("_2box_shadow");
        $('._1card').removeClass("_1box_shadow").addClass("_2box_shadow");
        $('._1card').removeClass("_3box_shadow").addClass("_2box_shadow");
        $('._1card').removeClass("_4box_shadow").addClass("_2box_shadow");
        $('._1card').removeClass("_5box_shadow").addClass("_2box_shadow");
    });
    $("#_3box_shadow").click(function () {
        $('._1card').removeClass("_0box_shadow").addClass("_3box_shadow");
        $('._1card').removeClass("_1box_shadow").addClass("_3box_shadow");
        $('._1card').removeClass("_2box_shadow").addClass("_3box_shadow");
        $('._1card').removeClass("_4box_shadow").addClass("_3box_shadow");
        $('._1card').removeClass("_5box_shadow").addClass("_3box_shadow");
    });
    $("#_4box_shadow").click(function () {
        $('._1card').removeClass("_0box_shadow").addClass("_4box_shadow");
        $('._1card').removeClass("_1box_shadow").addClass("_4box_shadow");
        $('._1card').removeClass("_3box_shadow").addClass("_4box_shadow");
        $('._1card').removeClass("_4box_shadow").addClass("_4box_shadow");
        $('._1card').removeClass("_5box_shadow").addClass("_4box_shadow");
    });
    $("#_5box_shadow").click(function () {
        $('._1card').removeClass("_0box_shadow").addClass("_5box_shadow");
        $('._1card').removeClass("_1box_shadow").addClass("_5box_shadow");
        $('._1card').removeClass("_2box_shadow").addClass("_5box_shadow");
        $('._1card').removeClass("_3box_shadow").addClass("_5box_shadow");
        $('._1card').removeClass("_4box_shadow").addClass("_5box_shadow");
    })
});

// Dower Boder
$(document).ready(function () {
    $("#_0border").click(function () {
        $('._1card').removeClass("_1border").addClass("_0border");
        $('._1card').removeClass("_2border").addClass("_0border");
        $('._1card').removeClass("_3border").addClass("_0border");
        $('._1card').removeClass("_4border").addClass("_0border");
        $('._1card').removeClass("_5border").addClass("_0border");
    });
    $("#_1border").click(function () {
        $('._1card').removeClass("_0border").addClass("_1border");
        $('._1card').removeClass("_2border").addClass("_1border");
        $('._1card').removeClass("_3border").addClass("_1border");
        $('._1card').removeClass("_4border").addClass("_1border");
        $('._1card').removeClass("_5border").addClass("_1border");
    });
    $("#_2border").click(function () {
        $('._1card').removeClass("_0border").addClass("_2border");
        $('._1card').removeClass("_1border").addClass("_2border");
        $('._1card').removeClass("_3border").addClass("_2border");
        $('._1card').removeClass("_4border").addClass("_2border");
        $('._1card').removeClass("_5border").addClass("_2border");
    });
    $("#_3border").click(function () {
        $('._1card').removeClass("_0border").addClass("_3border");
        $('._1card').removeClass("_1border").addClass("_3border");
        $('._1card').removeClass("_2border").addClass("_3border");
        $('._1card').removeClass("_4border").addClass("_3border");
        $('._1card').removeClass("_5border").addClass("_3border");
    });
    $("#_4border").click(function () {
        $('._1card').removeClass("_0border").addClass("_4border");
        $('._1card').removeClass("_1border").addClass("_4border");
        $('._1card').removeClass("_2border").addClass("_4border");
        $('._1card').removeClass("_3border").addClass("_4border");
        $('._1card').removeClass("_5border").addClass("_4border");
    });
    $("#_5border").click(function () {
        $('._1card').removeClass("_0border").addClass("_5border");
        $('._1card').removeClass("_1border").addClass("_5border");
        $('._1card').removeClass("_2border").addClass("_5border");
        $('._1card').removeClass("_3border").addClass("_5border");
        $('._1card').removeClass("_4border").addClass("_5border");
    })
});


// Chart line
function makeTrace(i) {
    return {
        y: Array.apply(null, Array(10)).map(() => Math.random()),
        line: { 
            shape: 'spline' ,
            color: 'red'
        },
        visible: i === 0,
        name: 'Data set ' + i,

    };
}

Plotly.plot('graph', [0, 1, 2, 3].map(makeTrace), {
    updatemenus: [{
        y: 0.8,
        yanchor: 'top',
        buttons: [{
            method: 'restyle',
            args: ['line.color', 'red'],
            label: 'red'
        }, {
            method: 'restyle',
            args: ['line.color', 'blue'],
            label: 'blue'
        }, {
            method: 'restyle',
            args: ['line.color', 'green'],
            label: 'green'
        }] 
    }, {
        y: 1,
        yanchor: 'top',
        buttons: [{
            method: 'restyle',
            args: ['visible', [true, false, false, false]],
            label: 'Data set 0'
        }, {
            method: 'restyle',
            args: ['visible', [false, true, false, false]],
            label: 'Data set 1'
        }, {
            method: 'restyle',
            args: ['visible', [false, false, true, false]],
            label: 'Data set 2'
        }, {
            method: 'restyle',
            args: ['visible', [false, false, false, true]],
            label: 'Data set 3'
        }]
    }],
});
