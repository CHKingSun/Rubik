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
        var cubes = indices.map(function (item, index, array) {
            array[index] = {
                index: index,
                position: vec4(item.offsetX, item.offsetY, item.offsetZ, 1.0),
                per_rotate: mat4()
            }; //将index转成索引
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
        var rotateLayer = {
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
            isRotate: false,
            lastTime: Date.now()
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

            indices.forEach(function (item) {

                gl.uniformMatrix4fv(gl.getUniformLocation(program, "per_rotate"), false,
                    flatten(item.per_rotate));

                var a_position = gl.getAttribLocation(program, 'a_position');
                var a_texcoord = gl.getAttribLocation(program, 'a_texcoord');

                gl.enableVertexAttribArray(a_position);
                gl.bindBuffer(gl.ARRAY_BUFFER, buffers[item.index].position);
                gl.vertexAttribPointer(a_position, 3, gl.FLOAT, false, 0, 0);

                gl.enableVertexAttribArray(a_texcoord);
                gl.bindBuffer(gl.ARRAY_BUFFER, buffers[item.index].texcoord);
                gl.vertexAttribPointer(a_texcoord, 2, gl.FLOAT, false, 0, 0);

                gl.drawArrays(gl.TRIANGLES, 0, cubes[item.index].position.length);
                // console.log(cube.position.length);

                gl.disableVertexAttribArray(a_position);
                gl.disableVertexAttribArray(a_texcoord);
            });
        };
        // draw();

        function isIntersect(x, y) {
            var ray = vec4(x, y, -720); //vec4(x, y, -depth) - eye_position

        }

        //set global.lastTime first
        function moveCube(layer, dir) {
            // console.log(global.isRotate);
            if(!global.isRotate){
                global.isRotate = true;
                var cubeIndex, axis;
                if(dir != -1) dir = 1;
                switch (layer){
                    case rotateLayer.F:
                        cubeIndex = indices.filter(function (value, index) {
                            return index % 9 === 0 || index % 9 === 1 || index % 9 === 2;
                        });
                        axis = multiply(dir, vec3(0, 0, -1));
                        break;
                    case rotateLayer.M:
                        cubeIndex = indices.filter(function (value, index) {
                            return index % 9 === 3 || index % 9 === 4 || index % 9 === 5;
                        });
                        axis = multiply(dir, vec3(0, 0, -1));
                        break;
                    case rotateLayer.B:
                        cubeIndex = indices.filter(function (value, index) {
                            return index % 9 === 6 || index % 9 === 7 || index % 9 === 8;
                        });
                        axis = multiply(dir, vec3(0, 0, 1));
                        break;
                    case rotateLayer.L:
                        cubeIndex = indices.filter(function (value, index) {
                            return index % 3 === 0;
                        });
                        axis = multiply(dir, vec3(-1, 0, 0));
                        break;
                    case rotateLayer.V:
                        cubeIndex = indices.filter(function (value, index) {
                            return index % 3 === 1;
                        });
                        axis = multiply(dir, vec3(-1, 0, 0));
                        break;
                    case rotateLayer.R:
                        cubeIndex = indices.filter(function (value, index) {
                            return index % 3 === 2;
                        });
                        axis = multiply(dir, vec3(1, 0, 0));
                        break;
                    case rotateLayer.D:
                        cubeIndex = indices.filter(function (value, index) {
                            return index < 9;
                        });
                        axis = multiply(dir, vec3(0, -1, 0));
                        break;
                    case rotateLayer.H:
                        cubeIndex = indices.filter(function (value, index) {
                            return index >= 9 && index < 18;
                        });
                        axis = multiply(dir, vec3(0, -1, 0));
                        break;
                    case rotateLayer.U:
                        cubeIndex = indices.filter(function (value, index) {
                            return index >= 18;
                        });
                        axis = multiply(dir, vec3(0, 1, 0));
                        break;
                }
                if(cubeIndex){
                    (function move(cubeIndex, axis, startTime, lastTime, currentTime) {
                        if(startTime === 0){
                            window.requestAniFrame(function (current) {
                                // console.log(current + '\t' + startTime);
                                move(cubeIndex, axis, current, current, current);
                            });
                            return;
                        }
                        else if(currentTime - startTime >= 600) {
                            var angle = 3.0 * (startTime + 600 - lastTime) / 20;
                            var tmp = []; //深复制对象
                            cubeIndex.forEach(function (item) {
                                item.per_rotate = mult(rotate(angle, axis), item.per_rotate);
                                tmp.push({
                                    index: item.index,
                                    position: item.position,
                                    per_rotate: item.per_rotate
                                });
                            });
                            tmp.forEach(function (item) {
                                item.position = mult(rotate(90, axis), item.position);
                                for (var i = 0; i < indices.length; ++i){
                                    if(length(subtract(item.position, indices[i].position)) <= 1){
                                        // console.log(item.position + '\t' + indices[i].position);
                                        // console.log(item.index + '\t' + indices[i].index);
                                        indices[i].index = item.index;
                                        indices[i].per_rotate = item.per_rotate;
                                        break;
                                    }
                                }
                            });
                            // console.log(indices);
                            global.isRotate = false;
                            return;
                        }
                        else {
                            var angle = 3.0 * (currentTime - lastTime) / 20;
                            cubeIndex.forEach(function (item) {
                                item.per_rotate = mult(rotate(angle, axis), item.per_rotate);
                            });
                        }
                        window.requestAniFrame(function (current) {
                            // console.log(current + '\t' + startTime);
                            move(cubeIndex, axis, startTime, currentTime, current);
                        });
                    })(cubeIndex, axis, 0);
                }
            }
        }
        
        function onMouseDown(event) {
            // console.log(event);
            // if(event.which === 1) moveCube(rotateLayer.F, -1);
            // if(event.which === 3) moveCube(rotateLayer.L, 1);
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
        window.addEventListener("keypress", function (event) {
            // console.log(event);
            switch (event.key){
                case 'F': moveCube(rotateLayer.F); break;
                case 'f': moveCube(rotateLayer.F, -1); break;
                case 'M': moveCube(rotateLayer.M); break;
                case 'm': moveCube(rotateLayer.M, -1); break;
                case 'B': moveCube(rotateLayer.B); break;
                case 'b': moveCube(rotateLayer.B, -1); break;
                case 'L': moveCube(rotateLayer.L); break;
                case 'l': moveCube(rotateLayer.L, -1); break;
                case 'V': moveCube(rotateLayer.V); break;
                case 'v': moveCube(rotateLayer.V, -1); break;
                case 'R': moveCube(rotateLayer.R); break;
                case 'r': moveCube(rotateLayer.R, -1); break;
                case 'D': moveCube(rotateLayer.D); break;
                case 'd': moveCube(rotateLayer.D, -1); break;
                case 'H': moveCube(rotateLayer.H); break;
                case 'h': moveCube(rotateLayer.H, -1); break;
                case 'U': moveCube(rotateLayer.U); break;
                case 'u': moveCube(rotateLayer.U, -1); break;
            }
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