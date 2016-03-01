/**
 * Created by vanin_000 on 1/27/2016.
 

var imageCount2 = 1;
var total2 = 12;

function photo2(x)
{
    var image = document.getElementById('imageTwo');
    imageCount2 = imageCount2 + x;

    if (imageCount2 > total2)
    {
        imageCount2 = 1;
    }

    if (imageCount2 < 1)
    {
        imageCount2 = total2;
    }

    image.src = "img/OurApproachImages/img" + imageCount2 + ".jpg";
}

window.setInterval(function photoB()
    {
        var image = document.getElementById('imageTwo');
        imageCount2 = imageCount2 + 1;

        if(imageCount2 > total)
        {
            imageCount2 = 1;
        }

        if(imageCount2 < 1)
        {
            imageCount2 = total2;
        }

        image.src = "img/OurApproachImages/img" + imageCount2 + ".jpg";
    },4000
);
*/

