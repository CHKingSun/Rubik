window.onload = function () {
    window.requestAniFrame = function () {
        return window.requestAnimationFrame ||
               window.mozRequestAnimationFrame ||
               window.webkitRequestAnimationFrame ||
               window.msRequestAnimationFrame;
    }();

    var image = Cube.toImage(Cube.toOffsetFace());
    image.onload = function () {
        var canvas = document.getElementById('webgl');

        // canvas.width = image.width;
        // canvas.height = image.height;
        // console.log(image.width + "\t" + canvas.clientWidth);
        // console.log(image.height + "\t" + canvas.clientHeight);
        // canvas.getContext("2d").drawImage(image, 0, 0);
        // return;

        var gl = canvas.getContext('webgl2');
        if (!gl) {
            console.log('You browser does not support webgl.');
            return;
        }
        console.log(gl.getParameter(gl.VERSION));

        var texOffset = function (offset) {
            return {
                offset: offset,
                red: 0,
                orange: offset,
                blue: offset * 2,
                green: offset * 3,
                yellow: offset * 4,
                white: offset * 5,
                black: offset * 6
            };
        }(1.0/7);

        var indices = {
            offset: texOffset.offset,
            front: texOffset.blue,
            back: texOffset.green,
            right: texOffset.red,
            left: texOffset.orange,
            bottom: texOffset.white,
            top: texOffset.yellow
        };
        var cube = Cube.cube(0, indices);

        var buffers = {};
        for(var index in cube){
            buffers[index] = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffers[index]);
            gl.bufferData(gl.ARRAY_BUFFER, flatten(cube[index]), gl.STATIC_DRAW);
        }
        // console.log(buffers);

        var program = Common.createProgram(gl, 'vshader', 'fshader');

        var texture = Common.createTexture(gl, image);
        gl.uniform1i(gl.getUniformLocation(program, "u_textures"), texture);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);

        var u_scale = scale(canvas.clientHeight/75.0, canvas.clientHeight/75.0, 1.0);

        var draw = function () {
            Common.resize(canvas);
            gl.viewport(0.0, 0.0, canvas.width, canvas.height);
            gl.clearColor(0.17, 0.17, 0.17, 1.0);
            gl.enable(gl.DEPTH_TEST);
            gl.depthFunc(gl.LEQUAL);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            var halfw = canvas.width / 2.0;
            var halfh = canvas.height / 2.0;
            var depth = 100.0;
            gl.uniformMatrix4fv(gl.getUniformLocation(program, 'u_view'), false,
                flatten(ortho(-halfw, halfw, -halfh, halfh, depth, -depth)));
            gl.uniformMatrix4fv(gl.getUniformLocation(program, "u_translate"), false,
                flatten(mat4()));
            gl.uniformMatrix4fv(gl.getUniformLocation(program, "u_rotate"), false,
                flatten(mat4()));
            gl.uniformMatrix4fv(gl.getUniformLocation(program, "u_scale"), false,
                flatten(u_scale));

            var a_position = gl.getAttribLocation(program, 'a_position');
            var a_texcoord = gl.getAttribLocation(program, 'a_texcoord');

            gl.enableVertexAttribArray(a_position);
            gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
            gl.vertexAttribPointer(a_position, 3, gl.FLOAT, false, 0, 0);

            gl.enableVertexAttribArray(a_texcoord);
            gl.bindBuffer(gl.ARRAY_BUFFER, buffers.texcoord);
            gl.vertexAttribPointer(a_texcoord, 2, gl.FLOAT, false, 0, 0);

            gl.drawArrays(gl.TRIANGLES, 0, cube.position.length);
            // console.log(cube.position.length);

            gl.disableVertexAttribArray(a_position);
            gl.disableVertexAttribArray(a_texcoord);
        };
        // draw();

        (function update() {
            if(canvas.clientHeight < canvas.clientWidth){
                u_scale = scale(canvas.clientHeight/75.0, canvas.clientHeight/75.0, 1.0);
            } else {
                u_scale = scale(canvas.clientWidth/75.0, canvas.clientWidth/75.0, 1.0);
            }
            draw();
            window.requestAniFrame(update);
        })();
    };
};