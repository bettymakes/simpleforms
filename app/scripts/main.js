'use strict';

(function($) {
  $(document).ready(function() {
    // Add your jQuery code here
    $("input.form-control").on("focus", function(){
      $(this).siblings(".focus-label").addClass("is-visible");
      console.log("hello");
    });

     $("input.form-control").on("focusout", function(){
      $(this).siblings(".focus-label").removeClass("is-visible");
      console.log("hello");
    });
  });
})(jQuery);
