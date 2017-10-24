$(document).ready(function(){
  if(!$('body.index').length){
    //get content.json
    $.getJSON('/content.json', function(result){
      
      var menuHTML = '';
      var modalHTML = '';
      var touchImageHTML1 = '';
      var touchImageHTML2 = '';
      
      //add do while result[i] < 27 for page 1
      //add do while result[i] > 26 for page 2
      for(var i = 0; i < result.length; i++){ //assuming result in the JSON array
      
        //setup menu HTML
        $('ul.menu li.menu-'+result[i]['id']+' a.menu-link').html(result[i]['name']);
              
        //setup content HTML
        modalHTML += '<div id="modal-'+result[i]['id']+'" class="modal"><div class="innerModal"><i class="close">X</i>';
        modalHTML += '<div class="left">';
        modalHTML += '<img src="assets/img/bioimages/'+result[i]['bioimage']+'" />';
        modalHTML += '</div><div class="center">';
        modalHTML += '<h2>'+result[i]['name']+'</h2>';
        modalHTML += '<p>'+result[i]['content']+'</p>';
        modalHTML += '</div></div></div>';
        
        //setup touchImages
        if(i < 26){ //setup page 1
          touchImageHTML1 += '<a href="modal-'+result[i]['id']+'" class="image-link image-'+result[i]['id']+'"><img src="assets/img/bioimages/'+result[i]['bioimage']+'"><p class="bio-title hide-desktop">'+result[i]['name']+'</p></a>';
        }else{ //setup page 2
          touchImageHTML2 += '<a href="modal-'+result[i]['id']+'" class="image-link image-'+result[i]['id']+'"><img src="assets/img/bioimages/'+result[i]['bioimage']+'"><p class="bio-title hide-desktop">'+result[i]['name']+'</p></a>';
        }
        
      }; //end for loop
      
      //write content to modals
      $('#modalContent').html(modalHTML);
      if($('.page1').length){
        $('#touchImages').html(touchImageHTML1).promise().done(function(){
          $('body.hide').fadeIn(1500).removeClass('hide');
        });      
      }else if($('.page2').length){
        $('#touchImages').html(touchImageHTML2).promise().done(function(){
          $('body.hide').fadeIn(1500).removeClass('hide');
        });
      }
    }).done(function(data){ //done writing content, now we can manipulate it!
      
      //hide all modal windows
      $('.modal').hide();
      $('#touchImages').css({'opacity':0});
      var $touchImages = $('#touchImages');
      $touchImages.imagesLoaded(function(){
        $touchImages.masonry({
          itemSelector: '.image-link',
          isAnimated: true,
          isFitWidth: true
        });
        $('#touchImages').animate({'opacity':1}, 500);
      });
    
      $('.close').click(function(e){
        $('.modal').hide();
        $('.menu-link').each(function(){
          $(this).removeClass('active');
        });
      });
  
      //show linked modal and set active link state
      $('.menu-link, .image-link').click(function(e){
        e.preventDefault();
        //set modal variables
        var modalHREF = $(this).attr('href');   
        var modalArray = modalHREF.split("-");
        var modalNumber = modalArray[1];
        
        //set active menu state
        $('.menu-link').each(function(){
          $(this).removeClass('active');
        });
        $('li.menu-'+modalNumber+' a.menu-link').addClass('active');
          
        //show correct modal
        $('#'+modalHREF).show();
        $('.modal').not('#'+modalHREF).hide();
        
        window.scrollTo(0,0);
      });//end menu-link.click()
  
    });//end getJSON
  }//end if not intro
  else{
    console.log('index page');
  }
});//end document.ready