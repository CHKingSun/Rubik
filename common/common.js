var Common = Common || {};

Common.createShader = function (gl, type, source) {
    var shader = gl.createShader(type);

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if(gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
        return shader;
    }

    console.log(gl.getShaderInfoLog(shader));
    console.log(source);
    gl.deleteShader(shader);
};

Common.createProgram = function (gl, vId, fId) {
    var program = gl.createProgram();

    var vSource = document.getElementById(vId).text;
    var fSource = document.getElementById(fId).text;

    gl.attachShader(program, Common.createShader(gl, gl.VERTEX_SHADER, vSource));
    gl.attachShader(program, Common.createShader(gl, gl.FRAGMENT_SHADER, fSource));

    gl.linkProgram(program);

    if(gl.getProgramParameter(program, gl.LINK_STATUS)){
        gl.useProgram(program);
        return program;
    }

    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
};

Common.createTexture = function (gl, image) {
    // console.log(image);
    var texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);

    // 设置材质，这样我们可以对任意大小的图像进行像素操作
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

    return texture;
};

Common.resize = function (canvas) {
    // 获取浏览器中画布的显示尺寸
    var displayWidth  = canvas.clientWidth;
    var displayHeight = canvas.clientHeight;

    // 检尺寸是否相同
    if (canvas.width  !== displayWidth ||
        canvas.height !== displayHeight) {

        // 设置为相同的尺寸
        canvas.width  = displayWidth;
        canvas.height = displayHeight;
    }
};