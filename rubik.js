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
        // console.log(image.width + "\t" + canvas.width);
        // console.log(image.height + "\t" + canvas.height);
        // canvas.getContext("2d").drawImage(image, 0, 0);
        // return;

        var gl = canvas.getContext('webgl2');
        if (!gl) {
            console.log('You browser does not support webgl.');
            return;
        }
        console.log(gl.getParameter(gl.VERSION));
        // console.log(canvas.width + '\t' + canvas.height);
        // console.log(canvas.clientWidth + '\t' + canvas.clientHeight);

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
            return [ //x->z->y
                {
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
                {
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
                {
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
                {
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
                {
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
                {
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
                {
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
                {
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
                {
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
                }, //first floor
                {
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
                {
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
                {
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
                {
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
                {
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
                {
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
                {
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
                {
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
                {
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
                }, //second floor
                {
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
                {
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
                {
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
                {
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
                {
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
                {
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
                {
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
                {
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
                {
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
                } //third floor
            ];
        }();
        // console.log(indices);
        var per_rotates = [];
        var cubes = indices.map(function (item, index, array) {
            array[index] = index; //将index转成索引
            per_rotates.push(mat4());
            return Cube.cube(item);
        });
        // console.log(cubes);
        // console.log(indices);

        var buffers = cubes.map(function (item) {
            var buffer = {};
            for(var index in item){
                buffer[index] = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, buffer[index]);
                gl.bufferData(gl.ARRAY_BUFFER, flatten(item[index]), gl.STATIC_DRAW);
            }
            return buffer;
        });
        // console.log(buffers);

        var program = Common.createProgram(gl, 'vshader', 'fshader');

        var texture = Common.createTexture(gl, image);
        gl.uniform1i(gl.getUniformLocation(program, "u_textures"), texture);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);

        var controller = {
            scale: mat4(),
            rotate: mat4(),
            translate: translate(0.0, 0.0, -360.0),
            view: mat4()
        };
        var rotateStatus = {
            F: 0, //%9 == 1||2||3
            M: 1, //%9 == 4||5||6
            B: 2, //%9 == 7||8||9
            L: 3, //%3 == 0
            V: 4, //纵向 %3 == 1
            R: 5, //%3 == 2
            D: 6, //<9
            H: 7, //横向 9=><18
            U: 8 //>=18
        };
        var controlCube = function () {
            var max = 75;
        }();
        var global = {
            scale: scale(0.6, 0.6, 0.6),
            rotate: mat4(),
            rx: 0,
            ry: 0,
            tx: 0,
            ty: 0,
            pressed: false,
            isRotate: false
        };
        // console.log(global.tx);

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
            controller.view = mult(perspective(60, canvas.width/canvas.height, 0.1, depth),
                lookAt(vec3(0.0, 0.0, 0), vec3(0.0, 0.0, -1.0), vec3(0.0, 1.0, 0.0)));
            // controller.view = ortho(-halfw, halfw, -halfh, halfh, -depth, depth);
            gl.uniformMatrix4fv(gl.getUniformLocation(program, 'u_view'), false,
                flatten(controller.view));
            gl.uniformMatrix4fv(gl.getUniformLocation(program, "u_translate"), false,
                flatten(controller.translate));
            gl.uniformMatrix4fv(gl.getUniformLocation(program, "u_rotate"), false,
                flatten(controller.rotate));
            gl.uniformMatrix4fv(gl.getUniformLocation(program, "u_scale"), false,
                flatten(controller.scale));

            indices.forEach(function (item, index) {
                // var status = false;
                // switch (global.isRotate){
                //     case false: break;
                //     case rotateStatus.F:
                //         if(index % 9 === 0 || index % 9 === 1 || index % 9 === 2) status = true;
                //         break;
                //     case rotateStatus.M:
                //         if(index % 9 === 3 || index % 9 === 4 || index % 9 === 5) status = true;
                //         break;
                //     case rotateStatus.B:
                //         if(index % 9 === 6 || index % 9 === 7 || index % 9 === 8) status = true;
                //         break;
                //     case rotateStatus.L:
                //         if(index % 3 === 0) status = true;
                //         break;
                //     case rotateStatus.V:
                //         if(index % 3 === 1) status = true;
                //         break;
                //     case rotateStatus.R:
                //         if(index % 3 === 2) status = true;
                //         break;
                //     case rotateStatus.D:
                //         if(index < 9) status = true;
                //         break;
                //     case rotateStatus.H:
                //         if(index >= 9 && index < 18) status = true;
                //         break;
                //     case rotateStatus.U:
                //         if(index >= 18) status = true;
                //         break;
                // }
                //
                // if(status) gl.uniformMatrix4fv(gl.getUniformLocation(program, "per_rotate"),
                //     false, flatten(global.rotate));
                // else gl.uniformMatrix4fv(gl.getUniformLocation(program, "per_rotate"),
                //     false, flatten(mat4()));

                gl.uniformMatrix4fv(gl.getUniformLocation(program, "per_rotate"), false,
                    flatten(per_rotates[item]));

                var a_position = gl.getAttribLocation(program, 'a_position');
                var a_texcoord = gl.getAttribLocation(program, 'a_texcoord');

                gl.enableVertexAttribArray(a_position);
                gl.bindBuffer(gl.ARRAY_BUFFER, buffers[item].position);
                gl.vertexAttribPointer(a_position, 3, gl.FLOAT, false, 0, 0);

                gl.enableVertexAttribArray(a_texcoord);
                gl.bindBuffer(gl.ARRAY_BUFFER, buffers[item].texcoord);
                gl.vertexAttribPointer(a_texcoord, 2, gl.FLOAT, false, 0, 0);

                gl.drawArrays(gl.TRIANGLES, 0, cubes[item].position.length);
                // console.log(cube.position.length);

                gl.disableVertexAttribArray(a_position);
                gl.disableVertexAttribArray(a_texcoord);
            });
        };
        // draw();

        function isIntersect(x, y) {
            var ray = vec4(x, y, -720); //vec4(x, y, -depth) - eye_position

        }
        
        function onMouseDown(event) {
            // console.log(event);
            if (event.which === 1 || event.which === 0){
                isIntersect(event.x, event.y);
                global.rx = event.x;
                global.ry = event.y;
                global.pressed = true;
            } else if(event.which === 3){
                global.tx = event.x;
                global.ty = event.y;
                global.pressed = true;
            }
        }
        function onMouseMove(event) {
            if(global.pressed){
                // console.log(event);
                if(event.which === 1 || event.which === 0){
                    global.rx = event.x - global.rx;
                    global.ry = event.y - global.ry;
                    var angle = global.rx*global.rx + global.ry*global.ry;
                    if(angle >= 10){ //位移太小忽略
                        angle = Math.atan(Math.sqrt(angle / 2)) * 3; //radius = 0.5
                        // console.log(global.rx + "\t" + global.ry + "\t" + angle);
                        if(global.rx / global.ry >= 6) global.ry = 0; //角度太小忽略
                        else if(global.ry / global.rx >= 6) global.rx = 0;
                        controller.rotate = mult(rotate(angle, global.ry, global.rx, 0), controller.rotate);
                        global.rx = event.x; //改成现在位置
                        global.ry = event.y;
                    } else {
                        global.rx = event.x - global.rx; //恢复到原来的位置
                        global.ry = event.y - global.ry;
                    }
                } else if(event.which === 3){
                    global.tx = event.x - global.tx;
                    global.ty = event.y - global.ty;
                    controller.translate = mult(translate(global.tx, -global.ty, 0), controller.translate);
                    global.tx = event.x;
                    global.ty = event.y;
                }
            }
        }
        function onMouseUp() {
            global.pressed = false;
        }

        canvas.addEventListener("mousedown", onMouseDown, false);
        canvas.addEventListener("mousemove", onMouseMove, false);
        canvas.addEventListener("mouseup", onMouseUp, false);
        
        canvas.addEventListener("touchstart", function (event) {
            event.x = event.targetTouches[0].clientX;
            event.y = event.targetTouches[0].clientY;
            // console.log(event);
            onMouseDown(event);
        }, false);
        canvas.addEventListener("touchmove", function (event) {
            event.x = event.targetTouches[0].clientX;
            event.y = event.targetTouches[0].clientY;
            onMouseMove(event);
        }, false);
        canvas.addEventListener("touchend", onMouseUp, false);

        canvas.oncontextmenu = function (ev) { return false; }; //右键菜单

        canvas.addEventListener("wheel", function (event) {
            // console.log(event.wheelDelta > 0);
            if(global.scale[0][0] < 3 && event.wheelDelta > 0){
                global.scale = mult(scale(1.2, 1.2, 1.2), global.scale);
            } else if(global.scale[0][0] > 0.1 && event.wheelDelta < 0){
                global.scale = mult(scale(0.9, 0.9, 0.9), global.scale);
            }
            // console.log(global.scale);
        }, false);

        (function update() {
            if(canvas.height < canvas.width){
                controller.scale = mult(global.scale,
                    (function (s) { return scale(s, s, s); })(canvas.height/360.0));
            } else {
                controller.scale = mult(global.scale,
                    (function (s) { return scale(s, s, s); })(canvas.width/360.0));
                // console.log(canvas.width/150.0);
            }
            draw();
            window.requestAniFrame(update);
        })();
    };
};