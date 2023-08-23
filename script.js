
    var image = null;
    var canvas;
    var canvas2;

    function upload() {
      var ipimage = document.getElementById("finput");
      image = new SimpleImage(ipimage);
      canvas = document.getElementById("canvas1");
      image.drawTo(canvas);
    }

    function doGray() {
      if (image == null || !image.complete()) {
        alert("Image Is Not Loaded, Try uploading again");
      }
      makeGray();
    }

    function makeGray() {
      for (var pixel of image.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
      }
      var imgcanvas2 = document.getElementById("canvas2");
      image.drawTo(imgcanvas2);
    }

    function clearCanvas() {
      var canvas1 = document.getElementById("canvas1");
      var canvas2 = document.getElementById("canvas2");
      var ctx1 = canvas1.getContext("2d");
      var ctx2 = canvas2.getContext("2d");
      ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
      ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    }

    function filter2() {
      if (image == null || !image.complete()) {
        alert("Image Is Not Loaded, Try uploading again");
      }
      for (var pixel of image.values()) {
        pixel.setRed(10);
      }
      var imgcanvas2 = document.getElementById("canvas2");
      image.drawTo(imgcanvas2);
    }

    function filter3() {
      if (image == null || !image.complete()) {
        alert("Image Is Not Loaded, Try uploading again");
      }
      for (var pixel of image.values()) {
        pixel.setBlue(10);
      }
      var imgcanvas2 = document.getElementById("canvas2");
      image.drawTo(imgcanvas2);
    }

    function filter4() {
      if (image == null || !image.complete()) {
        alert("Image Is Not Loaded, Try uploading again");
      }
      for (var pixel of image.values()) {
        if (pixel.getX() <= image.getWidth()/4) {
          pixel.setRed(10);
        }
        if (
          pixel.getX() > image.getWidth() / 4 &&
          pixel.getX() < (7 / 8) * image.getWidth()
        ) {
          pixel.setBlue(10);
        }
        if (
          pixel.getX() > (7 / 8) * image.getWidth() &&
          pixel.getX() < (3 / 8) * image.getWidth()
        ) {
          pixel.setRed(100);
        }
        if (
          pixel.getX() > (3 / 8) * image.getWidth() &&
          pixel.getX() < image.getWidth()
        ) {
          pixel.setGreen(50);
        }
      }
      var imgcanvas2 = document.getElementById("canvas2");
      image.drawTo(imgcanvas2);
    }

    function filter5() {
      if (image == null || !image.complete()) {
        alert("Image Is Not Loaded, Try uploading again");
      }
      for (var pixel of image.values()) {
        pixel.setRed(200);
        pixel.setBlue(100);
      }
      var imgcanvas2 = document.getElementById("canvas2");
      image.drawTo(imgcanvas2);
    }

    function filter6() {
      if (image == null || !image.complete()) {
        alert("Image Is Not Loaded, Try uploading again");
      }
    }
  