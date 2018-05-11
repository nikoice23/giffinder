// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
     $('#searchButton').click(function() {
        var searchTerm;
        var giphyUrl;
        
        // STEP 1: Get the value of the #searchTerm input
        // reference: http://api.jquery.com/val/
        searchTerm = $("#searchTerm").val();
         
        // STEP 2: Build the URL to the Giphy API (adding your search term)
        // reference: https://docs.google.com/presentation/d/1wXLyXW-xN64zUnK1forP7MGewFEev5PmJ73ia8qmQQo/edit#slide=id.g31f7595976_0_129
           giphyUrl = "https://api.giphy.com/v1/stickers/search?q="+ searchTerm + "&api_key=dc6zaTOxFJmzC";
         
        $.ajax({
          url: giphyUrl,
          method: "GET",
          success: function(response) {
              var imageSrc;
              
              var imageHtml;
              
              // STEP 3: Get the image src of the gif
              // reference: https://docs.google.com/presentation/d/1wXLyXW-xN64zUnK1forP7MGewFEev5PmJ73ia8qmQQo/edit#slide=id.g3910f2de88_0_33
              imageSrc = response.data[1].images.fixed_width.url; 
              // STEP 4: Generate the HTML for the img tag (using the image src from step3)
              imageHtml = "<img src=" + imageSrc + ">";
              // STEP 5: Append the image to the page
              $(document.body).append(imageHtml);
          },
        }); 
    });
  
  
});