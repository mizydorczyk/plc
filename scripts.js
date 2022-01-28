function compassTemplate(id) {
    const width = 600;
    var canvas = document.getElementById(id);
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = '#E84C3D'; //czerwony
        ctx.fillRect(0, 0, width / 2, width / 2);

        ctx.fillStyle = '#3598DB'; //niebieski
        ctx.fillRect(width / 2, 0, width / 2, width / 2);

        ctx.fillStyle = '#2DCC70'; //zielony
        ctx.fillRect(0, width / 2, width / 2, width / 2);

        ctx.fillStyle = '#8D44AD'; //fiolet
        ctx.fillRect(width / 2, width / 2, width / 2, width / 2);

        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(width / 2, width);
        ctx.lineTo(width / 2, 0);
        ctx.stroke();


        ctx.beginPath();
        ctx.moveTo(0, width / 2);
        ctx.lineTo(width, width / 2);
        ctx.stroke();
    }
}

function getData() {
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: "dane1.csv",
            dataType: "text",
            success: function (data) {
                processData(data);
            }
        });
    });

    function processData(allText) {
        var allTextLines = allText.split(/\r\n|\n/);
        var headers = allTextLines[0].split(';');
        var lines = [];

        for (var i = 1; i < allTextLines.length; i++) {
            var data = allTextLines[i].split(';');
            if (data.length == headers.length) {

                var tarr = [];
                for (var j = 0; j < headers.length; j++) {
                    tarr.push(headers[j] + ":" + data[j]);
                }
                lines.push(tarr);
            }
        }
        console.log(lines);
    }
}

function circle(id, x, y) {
    var canvas = document.getElementById(id);
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, 100 * Math.PI);
        ctx.strokeStyle = "black";
        ctx.fillStyle = "red";
        ctx.stroke();
        ctx.fill();
    }
}

window.onload = function () {
    compassTemplate('left-compass');
    compassTemplate('right-compass');
    circle('left-compass', 300, 300);
    getData();
};
