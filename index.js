var tesseract = require('node-tesseract');

var options = {
  // Use the english and german languages
  l: 'eng+deu',
  // Use the segmentation mode #6 that assumes a single uniform block of text.
  psm: 6,
  // Increase the allowed amount of data in stdout to 16MB (A little exaggerated)
  env: {
      maxBuffer: 4096 * 4096
  }
};

tesseract.process('image.png', options, function(err, text){
    if(err){
        return console.log("An error occured: ", err);
    }

    console.log("Recognized text:");
    // the text variable contains the recognized text
    console.log(text);
});