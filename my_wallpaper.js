//your parameter variables go here!
var eyeY = 100; // 100
var lineWidth = 2 // 1
var circleSize = 200 // 100
//var faceColour = color(230,0,0); - line 28
//var lineColour = color(1) - line 29

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(0,50,300); //light blue (0,200,300)
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

 let backgColour = false; // if false=normal if true=inverted 
  var faceColour = color(230,0,0); // 230,0,0
  var lineColour = color(1) // 1
 if(backgColour){
  var faceColour = color(100,0,0); // 1
  var lineColour = color(230,0,0) // 230,0,0
 }

  // head 
  strokeWeight(2); // how thick the outline is 
  stroke(lineColour); // colour of outline 
  fill(faceColour); // colour of shape
  circle(100, 100, circleSize);
 
  // web lines #2
  strokeWeight(lineWidth);
  stroke(lineColour);
  line(52, 113, 148, 113);
  line(70, 113, 86, 135);
  line(86, 135, 114, 135);
  line(114, 135, 126, 115);

  // eyes 
  strokeWeight(2);
  stroke(lineColour); 
  fill(250); 
  circle(78, eyeY, 40)
  circle(122, eyeY, 40)
  
  strokeWeight(0);
  stroke(lineColour); 
  fill(faceColour); 
  triangle(60, 70, 100, 115, 140, 70);
  
  strokeWeight(2);
  line(95, 110, 70, 82);
  line(105, 110, 130, 82);
 
  //web line
  strokeWeight(lineWidth);
  stroke(lineColour);
  line(100, 110, 100, 51);
  line(131, 62, 80, 145);
  line(69, 62, 120, 145);

  //web lines #3
  line(100, 77, 84, 86);
  line(100, 77, 116, 86);
  line(116, 86, 120, 92);
  line(84, 86, 80, 92);

  //web line (circle)
  strokeWeight(lineWidth);
  stroke(lineColour);
  circle(100, 113, 6);
  fill(faceColour)

}