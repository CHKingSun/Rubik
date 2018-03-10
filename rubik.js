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

        //front: blue
        //back: green
        //right: red
        //left: orange
        //bottom: white
        //top: yellow
        var indices = function () {
            var length = 50;
            return {
                0: {
                    offsetX: -length,
                    offsetY: -length,
                    offsetZ: length,
                    offset: texOffset.offset,
                    front: texOffset.blue,
                    back: texOffset.black,
                    right: texOffset.black,
                    left: texOffset.orange,
                    bottom: texOffset.white,
                    top: texOffset.black
                },
                1: {
                    offsetX: 0,
                    offsetY: -length,
                    offsetZ: length,
                    offset: texOffset.offset,
                    front: texOffset.blue,
                    back: texOffset.black,
                    right: texOffset.black,
                    left: texOffset.black,
                    bottom: texOffset.white,
                    top: texOffset.black
                },
                2: {
                    offsetX: length,
                    offsetY: -length,
                    offsetZ: length,
                    offset: texOffset.offset,
                    front: texOffset.blue,
                    back: texOffset.black,
                    right: texOffset.red,
                    left: texOffset.black,
                    bottom: texOffset.white,
                    top: texOffset.black
                },
                3: {
                    offsetX: -length,
                    offsetY: -length,
                    offsetZ: 0,
                    offset: texOffset.offset,
                    front: texOffset.black,
                    back: texOffset.black,
                    right: texOffset.black,
                    left: texOffset.orange,
                    bottom: texOffset.white,
                    top: texOffset.black
                },
                4: {
                    offsetX: 0,
                    offsetY: -length,
                    offsetZ: 0,
                    offset: texOffset.offset,
                    front: texOffset.black,
                    back: texOffset.black,
                    right: texOffset.black,
                    left: texOffset.black,
                    bottom: texOffset.white,
                    top: texOffset.black
                },
                5: {
                    offsetX: length,
                    offsetY: -length,
                    offsetZ: 0,
                    offset: texOffset.offset,
                    front: texOffset.black,
                    back: texOffset.black,
                    right: texOffset.red,
                    left: texOffset.black,
                    bottom: texOffset.white,
                    top: texOffset.black
                },
                6: {
                    offsetX: -length,
                    offsetY: -length,
                    offsetZ: -length,
                    offset: texOffset.offset,
                    front: texOffset.black,
                    back: texOffset.green,
                    right: texOffset.black,
                    left: texOffset.orange,
                    bottom: texOffset.white,
                    top: texOffset.black
                },
                7: {
                    offsetX: 0,
                    offsetY: -length,
                    offsetZ: -length,
                    offset: texOffset.offset,
                    front: texOffset.black,
                    back: texOffset.green,
                    right: texOffset.black,
                    left: texOffset.black,
                    bottom: texOffset.white,
                    top: texOffset.black
                },
                8: {
                    offsetX: length,
                    offsetY: -length,
                    offsetZ: -length,
                    offset: texOffset.offset,
                    front: texOffset.black,
                    back: texOffset.green,
                    right: texOffset.red,
                    left: texOffset.black,
                    bottom: texOffset.white,
                    top: texOffset.black
                },
                9: {
                    offsetX: -length,
                    offsetY: 0,
                    offsetZ: length,
                    offset: texOffset.offset,
                    front: texOffset.blue,
                    back: texOffset.black,
                    right: texOffset.black,
                    left: texOffset.orange,
                    bottom: texOffset.black,
                    top: texOffset.black
                },
                10: {
                    offsetX: 0,
                    offsetY: 0,
                    offsetZ: length,
                    offset: texOffset.offset,
                    front: texOffset.blue,
                    back: texOffset.black,
                    right: texOffset.black,
                    left: texOffset.black,
                    bottom: texOffset.black,
                    top: texOffset.black
                },
                11: {
                    offsetX: length,
                    offsetY: 0,
                    offsetZ: length,
                    offset: texOffset.offset,
                    front: texOffset.blue,
                    back: texOffset.black,
                    right: texOffset.red,
                    left: texOffset.black,
                    bottom: texOffset.black,
                    top: texOffset.black
                },
                12: {
                    offsetX: -length,
                    offsetY: 0,
                    offsetZ: 0,
                    offset: texOffset.offset,
                    front: texOffset.black,
                    back: texOffset.black,
                    right: texOffset.black,
                    left: texOffset.orange,
                    bottom: texOffset.black,
                    top: texOffset.black
                },
                13: {
                    offsetX: 0,
                    offsetY: 0,
                    offsetZ: 0,
                    offset: texOffset.offset,
                    front: texOffset.black,
                    back: texOffset.black,
                    right: texOffset.black,
                    left: texOffset.black,
                    bottom: texOffset.black,
                    top: texOffset.black
                },
                14: {
                    offsetX: length,
                    offsetY: 0,
                    offsetZ: 0,
                    offset: texOffset.offset,
                    front: texOffset.black,
                    back: texOffset.black,
                    right: texOffset.red,
                    left: texOffset.black,
                    bottom: texOffset.black,
                    top: texOffset.black
                },
                15: {
                    offsetX: -length,
                    offsetY: 0,
                    offsetZ: -length,
                    offset: texOffset.offset,
                    front: texOffset.black,
                    back: texOffset.green,
                    right: texOffset.black,
                    left: texOffset.orange,
                    bottom: texOffset.black,
                    top: texOffset.black
                },
                16: {
                    offsetX: 0,
                    offsetY: 0,
                    offsetZ: -length,
                    offset: texOffset.offset,
                    front: texOffset.black,
                    back: texOffset.green,
                    right: texOffset.black,
                    left: texOffset.black,
                    bottom: texOffset.black,
                    top: texOffset.black
                },
                17: {
                    offsetX: length,
                    offsetY: 0,
                    offsetZ: -length,
                    offset: texOffset.offset,
                    front: texOffset.black,
                    back: texOffset.green,
                    right: texOffset.red,
                    left: texOffset.black,
                    bottom: texOffset.black,
                    top: texOffset.black
                },
                18: {
                    offsetX: -length,
                    offsetY: length,
                    offsetZ: length,
                    offset: texOffset.offset,
                    front: texOffset.blue,
                    back: texOffset.black,
                    right: texOffset.black,
                    left: texOffset.orange,
                    bottom: texOffset.black,
                    top: texOffset.yellow
                },
                19: {
                    offsetX: 0,
                    offsetY: length,
                    offsetZ: length,
                    offset: texOffset.offset,
                    front: texOffset.blue,
                    back: texOffset.black,
                    right: texOffset.black,
                    left: texOffset.black,
                    bottom: texOffset.black,
                    top: texOffset.yellow
                },
                20: {
                    offsetX: length,
                    offsetY: length,
                    offsetZ: length,
                    offset: texOffset.offset,
                    front: texOffset.blue,
                    back: texOffset.black,
                    right: texOffset.red,
                    left: texOffset.black,
                    bottom: texOffset.black,
                    top: texOffset.yellow
                },
                21: {
                    offsetX: -length,
                    offsetY: length,
                    offsetZ: 0,
                    offset: texOffset.offset,
                    front: texOffset.black,
                    back: texOffset.black,
                    right: texOffset.black,
                    left: texOffset.orange,
                    bottom: texOffset.black,
                    top: texOffset.yellow
                },
                22: {
                    offsetX: 0,
                    offsetY: length,
                    offsetZ: 0,
                    offset: texOffset.offset,
                    front: texOffset.black,
                    back: texOffset.black,
                    right: texOffset.black,
                    left: texOffset.black,
                    bottom: texOffset.black,
                    top: texOffset.yellow
                },
                23: {
                    offsetX: length,
                    offsetY: length,
                    offsetZ: 0,
                    offset: texOffset.offset,
                    front: texOffset.black,
                    back: texOffset.black,
                    right: texOffset.red,
                    left: texOffset.black,
                    bottom: texOffset.black,
                    top: texOffset.yellow
                },
                24: {
                    offsetX: -length,
                    offsetY: length,
                    offsetZ: -length,
                    offset: texOffset.offset,
                    front: texOffset.black,
                    back: texOffset.green,
                    right: texOffset.black,
                    left: texOffset.orange,
                    bottom: texOffset.black,
                    top: texOffset.yellow
                },
                25: {
                    offsetX: 0,
                    offsetY: length,
                    offsetZ: -length,
                    offset: texOffset.offset,
                    front: texOffset.black,
                    back: texOffset.green,
                    right: texOffset.black,
                    left: texOffset.black,
                    bottom: texOffset.black,
                    top: texOffset.yellow
                },
                26: {
                    offsetX: length,
                    offsetY: length,
                    offsetZ: -length,
                    offset: texOffset.offset,
                    front: texOffset.black,
                    back: texOffset.green,
                    right: texOffset.red,
                    left: texOffset.black,
                    bottom: texOffset.black,
                    top: texOffset.yellow
                }
            };
        }();
        var cubes = {
            position: [],
            texcoord: []
        };
        // console.log(indices);
        for (var index in indices){
            var cube = Cube.cube(indices[index]);
            // console.log(cube);
            cubes.position = cubes.position.concat(cube.position);
            cubes.texcoord = cubes.texcoord.concat(cube.texcoord);
        }

        var buffers = {};
        for(var item in cubes){
            buffers[item] = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffers[item]);
            gl.bufferData(gl.ARRAY_BUFFER, flatten(cubes[item]), gl.STATIC_DRAW);
        }
        // console.log(cubes);

        var program = Common.createProgram(gl, 'vshader', 'fshader');

        var texture = Common.createTexture(gl, image);
        gl.uniform1i(gl.getUniformLocation(program, "u_textures"), texture);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);

        var controller = {
            scale: mat4(),
            rotate: mat4(),
            translate: translate(0.0, 0.0, 96.0),
            view: mat4()
        };
        var tmp = {
            scale: scale(0.6, 0.6, 0.6),
            rx: 0,
            ry: 0,
            tx: 0,
            ty: 0,
            pressed: false
        };
        // console.log(tmp.tx);

        var draw = function () {
            Common.resize(canvas);
            gl.viewport(0.0, 0.0, canvas.width, canvas.height);
            gl.clearColor(0.17, 0.17, 0.17, 1.0);
            gl.enable(gl.DEPTH_TEST);
            gl.depthFunc(gl.LEQUAL);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            var halfw = canvas.width / 2.0;
            var halfh = canvas.height / 2.0;
            var depth = 720.0;
            controller.view = mult(perspective(60, canvas.clientWidth/canvas.clientHeight, 0.1, depth),
                lookAt(vec3(0.0, 0.0, depth), vec3(0.0, 0.0, 0.0), vec3(0.0, 1.0, 0.0)));
            // controller.view = ortho(-halfw, halfw, -halfh, halfh, -depth, depth);
            gl.uniformMatrix4fv(gl.getUniformLocation(program, 'u_view'), false,
                flatten(controller.view));
            gl.uniformMatrix4fv(gl.getUniformLocation(program, "u_translate"), false,
                flatten(controller.translate));
            gl.uniformMatrix4fv(gl.getUniformLocation(program, "u_rotate"), false,
                flatten(controller.rotate));
            gl.uniformMatrix4fv(gl.getUniformLocation(program, "u_scale"), false,
                flatten(controller.scale));

            var a_position = gl.getAttribLocation(program, 'a_position');
            var a_texcoord = gl.getAttribLocation(program, 'a_texcoord');

            gl.enableVertexAttribArray(a_position);
            gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
            gl.vertexAttribPointer(a_position, 3, gl.FLOAT, false, 0, 0);

            gl.enableVertexAttribArray(a_texcoord);
            gl.bindBuffer(gl.ARRAY_BUFFER, buffers.texcoord);
            gl.vertexAttribPointer(a_texcoord, 2, gl.FLOAT, false, 0, 0);

            gl.drawArrays(gl.TRIANGLES, 0, cubes.position.length);
            // console.log(cube.position.length);

            gl.disableVertexAttribArray(a_position);
            gl.disableVertexAttribArray(a_texcoord);
        };
        // draw();
        
        function onMouseDown(event) {
            // console.log(event);
            if (event.which === 1){
                tmp.rx = event.x;
                tmp.ry = event.y;
                tmp.pressed = true;
            } else if(event.which === 3){
                tmp.tx = event.x;
                tmp.ty = event.y;
                tmp.pressed = true;
            }
        }
        function onMouseMove(event) {
            if(tmp.pressed){
                // console.log(event);
                if(event.which === 1){
                    tmp.rx = event.x - tmp.rx;
                    tmp.ry = event.y - tmp.ry;
                    var angle = tmp.rx*tmp.rx + tmp.ry*tmp.ry;
                    if(angle >= 10){ //位移太小忽略
                        angle = Math.atan(Math.sqrt(angle)) * 6; //radius = 0.5
                        // console.log(tmp.rx + "\t" + tmp.ry + "\t" + angle);
                        if(tmp.rx / tmp.ry >= 10) tmp.ry = 0; //角度太小忽略
                        else if(tmp.ry / tmp.rx >= 10) tmp.rx = 0;
                        controller.rotate = mult(rotate(angle, tmp.ry, tmp.rx, 0), controller.rotate);
                        tmp.rx = event.x; //改成现在位置
                        tmp.ry = event.y;
                    } else {
                        tmp.rx = event.x - tmp.rx; //恢复到原来的位置
                        tmp.ry = event.y - tmp.ry;
                    }
                } else if(event.which === 3){
                    tmp.tx = event.x - tmp.tx;
                    tmp.ty = event.y - tmp.ty;
                    controller.translate = mult(translate(tmp.tx, -tmp.ty, 0), controller.translate);
                    tmp.tx = event.x;
                    tmp.ty = event.y;
                }
            }
        }
        function onMouseUp() {
            tmp.pressed = false;
        }

        canvas.addEventListener("mousedown", onMouseDown, false);
        canvas.addEventListener("mousemove", onMouseMove, false);
        canvas.addEventListener("mouseup", onMouseUp, false);
        
        canvas.addEventListener("touchstart", function (event) {
            event.which = 1;
            onMouseDown(event);
        }, false);
        canvas.addEventListener("touchmove", function (event) {
            event.which = 1;
            onMouseMove(event);
        }, false);
        canvas.addEventListener("touchend", onMouseUp, false);

        canvas.oncontextmenu = function (ev) { return false; }; //右键菜单

        canvas.addEventListener("wheel", function (event) {
            // console.log(event.wheelDelta > 0);
            if(tmp.scale[0][0] < 3 && event.wheelDelta > 0){
                tmp.scale = mult(scale(1.2, 1.2, 1.2), tmp.scale);
            } else if(tmp.scale[0][0] > 0.1 && event.wheelDelta < 0){
                tmp.scale = mult(scale(0.9, 0.9, 0.9), tmp.scale);
            }
            // console.log(tmp.scale);
        }, false);

        (function update() {
            if(canvas.clientHeight < canvas.clientWidth){
                controller.scale = mult(tmp.scale,
                    (function (s) { return scale(s, s, s); })(canvas.clientHeight/300.0));
            } else {
                controller.scale = mult(tmp.scale,
                    (function (s) { return scale(s, s, s); })(canvas.clientWidth/300.0));
                // console.log(canvas.clientWight/150.0);
            }
            draw();
            window.requestAniFrame(update);
        })();
    };
};