var Color = Color || {};

Color.RED = 'rgba(199, 62, 58, 1)';
Color.ORANGE = 'rgba(240, 94, 28, 1)';
Color.BLUE = 'rgba(0, 98, 132, 1)';
Color.GREEN = 'rgba(27, 192, 62, 1)';
Color.YELLOW = 'rgba(255, 196, 8, 1)';
Color.WHITE = 'rgba(252, 250, 242, 1)';
Color.BLACK = 'rgba(0, 0, 0, 1)';

var Cube = Cube || {};

Cube.toImage = function (canvas) { //canvas to image
    var image = new Image();
    image.src = canvas.toDataURL('image/png');
    return image;
};

Cube.toFace = function (color) { //get rubik face by color;
    var canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    var context = canvas.getContext("2d");
    if (context) {
        // support canvas
        context.fillStyle = Color.BLACK;
        context.fillRect(0, 0, 256, 256);
        context.rect(16, 16, 224, 224);
        context.lineJoin = "round";
        context.lineWidth = 16;
        context.fillStyle = color;
        context.strokeStyle = color;
        context.stroke();
        context.fill();
        return canvas;
    } else {
        return null;
    }
};

Cube.toOffsetFace = function () {
    var canvas = document.createElement("canvas");
    canvas.width = 256 * 7;
    canvas.height = 256;
    var context = canvas.getContext("2d");
    if(context){
        var addFace = function (color, offset) {
            context.fillStyle = Color.BLACK;
            context.fillRect(offset , 0, 256, 256);
            context.fillStyle = color;
            context.fillRect(16+offset, 16, 224, 224);
            context.strokeStyle = color;
            context.lineJoin = "round";
            context.lineWidth = 16;
            context.strokeRect(16+offset, 16, 224, 224);
        };
        addFace(Color.RED, 0);
        addFace(Color.ORANGE, 256);
        addFace(Color.BLUE, 256*2);
        addFace(Color.GREEN, 256*3);
        addFace(Color.YELLOW, 256*4);
        addFace(Color.WHITE, 256*5);
        addFace(Color.BLACK, 256*6);
        return canvas;
    } else {
        console.log("Canvas not support!");
        return null;
    }
};

Cube.cube = function (indices) { //位移贴图
    var minX = indices.offsetX - 25;
    var maxX = indices.offsetX + 25;
    var minY = indices.offsetY - 25;
    var maxY = indices.offsetY + 25;
    var minZ = indices.offsetZ - 25;
    var maxZ = indices.offsetZ + 25;
    var points = [
        vec3(minX, minY, maxZ),
        vec3(maxX, minY, maxZ),
        vec3(maxX, maxY, maxZ),
        vec3(minX, maxY, maxZ),
        vec3(minX, minY, minZ),
        vec3(maxX, minY, minZ),
        vec3(maxX, maxY, minZ),
        vec3(minX, maxY, minZ)
    ];
    return cube = {
        position: [
            points[0], points[1], points[2],
            points[0], points[2], points[3], //front
            points[1], points[5], points[6],
            points[1], points[6], points[2], //right
            points[5], points[4], points[7],
            points[5], points[7], points[6], //back
            points[4], points[0], points[3],
            points[4], points[3], points[7], //left
            points[4], points[5], points[1],
            points[4], points[1], points[0], //bottom
            points[3], points[2], points[6],
            points[3], points[6], points[7] //top
        ],
        texcoord: [
            vec2(indices.front, 0.0), vec2(indices.front+indices.offset, 0.0),
            vec2(indices.front+indices.offset, 1.0), vec2(indices.front, 0.0),
            vec2(indices.front+indices.offset, 1.0), vec2(indices.front, 1.0), //front
            vec2(indices.right, 0.0), vec2(indices.right+indices.offset, 0.0),
            vec2(indices.right+indices.offset, 1.0), vec2(indices.right, 0.0),
            vec2(indices.right+indices.offset, 1.0), vec2(indices.right, 1.0),//right
            vec2(indices.back, 0.0), vec2(indices.back+indices.offset, 0.0),
            vec2(indices.back+indices.offset, 1.0), vec2(indices.back, 0.0),
            vec2(indices.back+indices.offset, 1.0), vec2(indices.back, 1.0), //back
            vec2(indices.left, 0.0), vec2(indices.left+indices.offset, 0.0),
            vec2(indices.left+indices.offset, 1.0), vec2(indices.left, 0.0),
            vec2(indices.left+indices.offset, 1.0), vec2(indices.left, 1.0), //left
            vec2(indices.bottom, 0.0), vec2(indices.bottom+indices.offset, 0.0),
            vec2(indices.bottom+indices.offset, 1.0), vec2(indices.bottom, 0.0),
            vec2(indices.bottom+indices.offset, 1.0), vec2(indices.bottom, 1.0), //bottom
            vec2(indices.top, 0.0), vec2(indices.top+indices.offset, 0.0),
            vec2(indices.top+indices.offset, 1.0), vec2(indices.top, 0.0),
            vec2(indices.top+indices.offset, 1.0), vec2(indices.top, 1.0) //top
        ]
    };
};