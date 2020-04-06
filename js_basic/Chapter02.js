/**
 * 数据类型
 * */


/**
 * null, undefined，布尔值
 */
// console.log(typeof 123); //number
// console.log(typeof "123"); //string
// console.log(typeof false); //boolean

function f() {}
if (typeof f === "function") {
    // console.log("type of f is function") //执行
}

if (typeof a === "undefined") { //a没有声明
    // console.log("type of a is undefined") //执行
}

// console.log(typeof []); //object
// console.log(typeof {}); //object
// console.log(typeof null); //object

if (undefined == null) {
    // console.log(true) // 执行
} else {
    console.log(false)
}

if (undefined === null) {
    console.log(true)
} else {
    // console.log(false) //执行
}

// console.log(Number(undefined)); //NaN
// console.log(Number(null)); //0

var i;
// console.log(i); //undefined

function f1() {}
// console.log(f1()); //undefined

function f2(x) {}
// console.log(f2()); //undefined

// console.log(new Object().p); //undefined

/*
    JS数据类型：
        数值(number)：整数和小数
        字符串(string)
        布尔值(boolean)
        对象(object)：狭义的对象object，数组array，函数function(方便函数式编程)
        undefined
        null
            注意：undefined，null两者使用起来几乎没有语法区别；

    JS判断数据类型3种方式：typeof运算符，instanceof运算符，Object.prototype.toString方法;

    在if语句中：undefined, null都会转化为false。但转化为数字时，undefined为NaN，而null为0

    undefined使用场景：
        定义变量没有赋值；
        函数没有返回值；
        函数定义了参数，调用时没有传入参数；
        对象属性没有赋值；

    布尔值：JS推断变量或值应该是布尔值时，会将该值自动转化为布尔值。
    以下6种情况会转为false(空数组[]，空对象{}会转化为true)：
       undefined
       null
       0
       ""和''
       NaN
       false
 */

/**
 * 数值
 */

// console.log(0.1 + 0.1); //0.2
// console.log(0.2 / 0.1); //2

// console.log(0.1 + 0.2); //0.30000000000000004
// console.log(0.3 / 0.1); //2.9999999999999996
/*
    JS数值的底层都是小数，所有数值都用64位浮点数来存储；
        某些运算需要整数，底层会把64浮点数转化为32位的整数；
        由于浮点数不是精确的值，对于这类运算要特别小心；

    一个64位的浮点数组成：
        第1位是符号位，0为正，1为负；
        第2~12为：指数部分；(2^n)
        第13~64位：小数部分(有效数字)；
            分析：指数部分大小范围0~2^11(2047)，共2048个数字，最大可以表示2047次方；
                 若指数部分在(0, 2047)之间(不含两个端点)，系统默认有效数字第一位是1，且不保存在64位浮点数中；
                    也就是说，1.2345只有2345存储在浮点数中；
                    因此，有效数字为52+1=53位二进制，(2^53-1)对应16位十进制数值。所以，浮点数可以确保精度完全覆盖15位十进制数；
                    对于精度溢出的部分，由于无法保存都是0。(指数可以增加，但是精度无法保存)

        数值范围：指数由11位二进制表示，最大值为2047(2^11-1)，正负各分一版。JS浮点数表示范围：2^2024~2^-2023
            eg：10进制中，123 = 1.23 * (10^2), 0.0123 = 1.23 * (10^-2)

    数值表示法：
        123e3(123000)
        123e-3(0.123)
        -3.1E+12
        .1e-23
    JS会将两种情况下的数值，转化为科学计数法：
        1，小数点前数字多于21位，例如：1234567890123456789012 = 1.2345678901234568e+21（精度缺失）
        2，小数点后零多于5个，例如：0.0000003 = 3e7

    16进制：0xFF, oxFF
    8进制：071, 0o71
    二进制：0b10, 0B10
    注意：0前导表示8进制，对于超过7的会作为10进制。(ES5, ES6已经废除这种模式)
 */

/**
 * 与数值相关的全局方法
 */
// console.log(parseInt('123') === 123); //true
// console.log(parseInt('   123  ') === 123); //true
// console.log(parseInt(1.23)); //1
// console.log(parseInt("8a")); //8
// console.log(parseInt("15e2")); //15
// console.log(parseInt("0x10")); //16

// console.log(parseInt("10")); //10
// console.log(parseInt("10", 2)); //2
// console.log(parseInt("10", 8)); //8
// console.log(parseInt("10", 10)); //10
// console.log(parseInt("10", 16)); //16
// console.log(parseInt("10", 32)); //32

// console.log(parseFloat("1.23")); //1.23
// console.log(isNaN(NaN)) //true

// console.log(isFinite(undefined)); //false
// console.log(isFinite(Infinity)); //false
// console.log(isFinite(-Infinity)); //false
// console.log(isFinite(NaN)); //false
// console.log(isFinite(null)); //true
// console.log(isFinite(1)); //true
/*
    declare function parseInt(s: string, radix?: number): number;
    parseInt方法规则：
        1，将字符串转化为整数，字符串有空格也会自动去除；
        2，对于非字符串的参数：先转化为字符串，然后转化可以转化为整数的部分，最后返回值；
        3，若第一个字符不能转化为数字，则返回NaN(not a number)
        4，第2个参数指定进制，默认为10进制

    parseFloat
    isNaN：一个值是否为NaN
    isFinite：某个值是否为正常数值
 */

/**
 * 字符串
 */

// console.log("\u00A9"); //©

//以下代码运行失败，改为在浏览器中运行；
// console.log(btoa('abc')); //YWJj
// console.log(atob('YWJj')); //abc

//由于这两个方法不适合非ASCII码，需要先转码
// console.log(btoa(encodeURIComponent('你好'))); //JUU0JUJEJUEwJUU1JUE1JUJE
// console.log(atob(decodeURIComponent('JUU0JUJEJUEwJUU1JUE1JUJE'))); //你好

/*
    单引号内部可以是双引号，双引号可以是单引号；
    单引号内部使用单引号，或双引号内部使用双引号，需要转移字符\' \"

    字符串可以看做字符数组：可以查询某个位置字符，但不能修改字符
        格式: str[0]
        角标超出，则返回undefined

    JS内部使用unicode表示字符，同时程序中可以使用码点表示字符；
    每个字符都是以16位的UTF-16存储；

    Base64编码使用场景：
        1，编码后，方便传输特殊字符；
        2，以文本格式传递二进制数，例如：图片编码后是一堆字符串的文本；
 */

/**
 * 对象
 */

var obj = {
    a: "1",
    b: 2
};
// console.log(obj.a); //1
// console.log(obj.b); //2

var obj1 = {
    a: 1,
    b: function () {
        console.log("值是方法")
    },
    c: {
        c1: 3,
    },
};
// obj1.b(); //值是方法
// console.log(obj1.c.c1); //3


//属性的3种表示方式：
var foo = 'bar';
var obj3 = {
    'bar': 1,
};
// console.log(obj3.bar); //1
// console.log(obj3[foo]); //1
// console.log(obj3['bar']); //1

var obj4 = {
    a: 0
};

//属性的赋值
obj4.a = 1;
obj4.b = 2;
obj4.c = 3;

//删除属性
delete obj4.c;

//是否包含属性
// console.log('b' in obj4); //true

//遍历属性(及值)
for (var key in obj4) {
    if (obj4.hasOwnProperty(key)) { //检查是否是对象自身的属性
        // console.log(key + ": " + obj4[key]); //a: 1   b: 2
    }
}

//获取对象本身的属性的数组
var strArray = Object.keys(obj4);
// console.log(strArray) //[ 'a', 'b' ]

/*
    对象：一组键值对的集合;
        键名(也叫属性)都是字符串，非字符串可转化为字符串(命名符合标识符的定义)；
        键值：任意数据类型，包括：函数，对象

    对象引用：指向的是内存地址；

    花括号在行首会被识别为代码块，因此对象可以用({a: 1})

    delete只能删除对象本身的属性，不能删除继承的属性；

    for...in特点：
        1，遍历所有可以遍历的属性，并跳过不可遍历的属性；
        2，不仅遍历对象自身的属性，还会遍历继承的属性；
 */

/**
 * 函数
 */

//函数声明有3种方式:
function print(s) {
    console.log(s)
}

/*
    匿名函数：是一个表达式，最后需要加上分号
    若指定函数名，则只在函数内部可用。例如：递归调用
 */
var p = function (s) {
    console.log(s);
};

/*
    Function的构造函数（不推荐使用）：
        构造函数参数是String数组；
        最后一个参数函数体，其他都是函数参数；
        可以省略new；

 */
var p1 = new Function('x', 'y', 'return x + y');

// print(1);
// p(2);
// console.log(p1(1, 2));


function f3(x, y) {
    return x +y
}
//函数赋值给变量
var operator = f3;
//函数作为参数和返回值
function f4(func) {
    return func;
}

// console.log(operator(1, 2)); //3
// console.log(f4(operator)(2, 3)); //5

/*
    由于函数提升的原因，后面声明的函数会覆盖前面的函数。(前面的函数会完全失效)

    JS将函数作为一个值，可以向字符串，数值和布尔值那样使用；
 */

function f5(x, y) {
    console.log(x + y)
}

//返回函数的源码(包括函数的声明)
// console.log(f5.toString());
//返回函数名
// console.log(f5.name); //f5
//返回函数定义的参数
// console.log(f5.length); //2

//原生函数的函数体返回：[native code]
// console.log(Math.sqrt.toString());
//function sqrt() { [native code] }


function foo(x) {
    if (x > 100) {
        var temp = x - 100;
    }
}
// 等价于
function foo1(x) {
    var temp;
    if (x > 100) {
        temp = x - 100;
    }
}

//测试函数作为顶层函数
var a = 100;
var x = function () {
    // console.log(a)
};

function foo2() {
    var a = 2;
    x()
}

foo2(); //100

//测试函数作为函数内的值
var a1 = 100;

function foo3() {
    var a1 = 200;
    function inner() {
        console.log(a1)
    }
    return inner();
}

// foo3(); //200

/*
    作用域：变量存在的范围。

    ES5规范中，JS中两种作用域：
        1，全局作用域：变量在整个程序中存在，所有地方都可以读取；
        2，函数作用域：变量只在函数中存在；
        3，块级作用域(ES6新加入)

    函数中的局部变量，会在函数中覆盖同名的全局变量；

    函数作用域内的局部变量，也有变量提升，变量声明会在函数体的头部；

    函数本身是个值，也有作用域：
        作为顶层函数，则是全局的作用域；
        作为函数内部的函数，则是局部作用域；

    调用函数的时候，可以省略参数，省略参数的值则是undefined;
        只能省略后面的参数，一定要省略前面的参数可以传入undefined；
 */

var p = 1;
function f6(value) {
    value = 2;
}

f6(p); //1
// console.log(p);


var array = [1, 2, 3];
function f7(value) {
    value[3] = 4
}

function f8(value) {
    value = [1]
}

f7(array);
// console.log(array); //[ 1, 2, 3, 4 ]

//value重新指向一个地址，array则是指向另一个地址
f8(array);
// console.log(array); //[ 1, 2, 3, 4 ]


function f9(a, a) {
    console.log(a); //2
}
// f9(1, 2);


function f10(a, a) {
    console.log(arguments[0]); //1
    console.log(arguments[1]); //2
}
// f10(1, 2);


function f11(a, b) {
    arguments[0] = 2;
    arguments[1] = 3;
    console.log(a + b)
}
// f11(1, 1); //5

function f12(a, b) {
    'use strict';
    arguments[0] = 2;
    arguments[1] = 3;
    console.log(a + b)
}
// f12(1, 1); //2

function f13(a, b, c) {
    console.log(arguments.length); //1
    console.log(f13.length); //3
}
// f13(1);

//argument转化为数组
function f14(a, b) {
    Array.prototype.slice.call(arguments)

    //或
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i])
    }
}

var ff = function () {
    console.log(ff === arguments.callee);
};
// ff(); //true

/*
    函数分为值传递和引用传递。
        值传递：传入函数的是值的拷贝，无论怎么修改都不会影响原始的值。例如：数值，字符串，布尔值
        引用传递：传入的是原始值的地址，函数内部修改将会影响原始的值。例如：数组，对象，其他函数。

    函数中的同名参数，函数内部取最后一个；
        解决办法：使用arguments[0]，arguments[1]

    arguments：不是数组，是一个对象。可以修改函数参数的值。
        若加上开启严格模式，则无法影响到函数实际参数;
        arguments.length可以获取调用函数时有几个参数；
 */

//在函数外部访问，函数内部的变量
function f15() {
    var n = 999;
    function f16() {
        console.log(n)
    }

    return f16;
}

//简写后代码：
function fff() {
    var n = 1000;
    return function () {
        console.log(n);
    }
}

//返回f16函数的值
var result = f15();
//调用f16函数
// result(); //999

//fff()返回一个函数
// fff()(); //1000


//让函数的变量始终保存在内存中的示例：
function createIncrementor(start) {
    return function () {
        console.log(start++)
    }
}
var result1 = createIncrementor(1);
//调用闭包
// result1(); //1
// result1(); //2
// result1(); //3


function Person(name) {
    var _age;
    function setAge(n) {
        _age = n
    }

    function getAge() {
        return _age;
    }

    //结合了对象的语法
    return {
        'name': name,
        'getAge': getAge,
        'setAge': setAge
    }
}
//返回的是一个对象
var person = Person("Tom");
person.setAge(21);
console.log(person.name); //Tom
console.log(person.getAge()); //21

//立即调用的函数表达式
// function f16() {}()  //编译报错
(function f16() {}());  //编译正常
(function f16() {})(); //编译正常
var g = function f16() {}(); //编译正常


/*
    JS语言有"链式作用域"结构：父对象的所有变量对子对象可见，反之则不成立；

    闭包：定义在一个函数内部的函数。例如f16函数；
        本质：连接函数内部和外部的桥梁；
        用处：
            读取函数内部的变量；
            让这些变量始终保持在内存中，即闭包可以使它的诞生环境(f15函数)一直存在；

    如何理解函数：
        1，函数声明：可以作为一个值使用，拿到函数的引用可以调用函数本身。
            赋值一个变量：匿名函数;
            函数名就是它的引用：function声明了函数名的情况；
        2，函数的返回值，可以是函数引用。例如：闭包
        注意：函数声明的结果：函数引用；
             调用函数的结果：函数体里return语句返回的值；

     闭包的另一个用处：封装对象的私有属性和私有方法；

     闭包的缺点：外层函数每次运行，都会生成一个新的闭包。由于闭包保存着外层函数的变量，因此内存消耗比较大。
        避免滥用闭包，否则会造成一定的性能的问题；

    直接调用函数的表达式作用：
        1，不必为函数命名，避免污染全局变量；
        2，封装一些外部无法读取的私有变量；

    function关键字出现行首，一律解释成语句。对于函数的定义来说，最后不能是();
        解决办法：用()包起来，让引擎将其理解为一个表达式。于是。声明方法的同时直接调用方法；
 */

//打印：log
eval('console.log("log")');
/*
    eval函数：接受一个字符串作为参数，并将其作为语句执行；
 */














