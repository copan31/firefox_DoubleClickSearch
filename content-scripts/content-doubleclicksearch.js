(function () {
  var doubleClick = false;
  document.addEventListener("click", function(event){

    // trap only right double click
  	if( doubleClick ) {
      const RIGHT_CLICK = 2;
      if (event.button != RIGHT_CLICK) {
          return ;
      }

      event.preventDefault() ;
      doubleClick = false ;

      // Get selected text
      var selectedString="";
      selectedString = window.getSelection().toString();
      if (!selectedString) {
          var selectedTextArea = document.activeElement;
          if (selectedTextArea.value) {
              var selectedString = selectedTextArea.value.substring(selectedTextArea.selectionStart, selectedTextArea.selectionEnd);
              if (!selectedString) {
                  return;
              }
          }
          else {
              return ;
          }
      }

      // send selected text to search on background
      // console.log(selectedString);
      browser.runtime.sendMessage({text: selectedString});
  	// double click
  	} else {
      doubleClick = true ;

      setTimeout( function() {
        doubleClick = false ;
      }, 350 ) ;

  	}
  });
})();
