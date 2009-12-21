jQuery(function() { 
  var flag_images = [ 
    "http://farm3.static.flickr.com/2576/3884044821_80ece90145.jpg", 
    "http://farm4.static.flickr.com/3426/3884822482_5baf2b6836.jpg",
    "http://farm3.static.flickr.com/2589/3884863900_f70fd0624c_b.jpg",
    "http://farm4.static.flickr.com/3341/3590855471_5217c54e16.jpg",
    "http://farm4.static.flickr.com/3648/3591965676_6c7ba8578f.jpg",
    "http://farm4.static.flickr.com/3514/3467680474_b8806c030c.jpg",
    "http://farm3.static.flickr.com/2586/4201758313_fc89063c0c.jpg"
  ];
  
  $('img#flag').attr('src', flag_images[Math.floor(Math.random()*flag_images.length)]);
}); 
