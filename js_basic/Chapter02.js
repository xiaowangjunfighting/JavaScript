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
console.log('b' in obj4); //true

//遍历属性(及值)
for (var key in obj4) {
    if (obj4.hasOwnProperty(key)) { //检查是否对象自身的属性
        console.log(key + ": " + obj4[key]); //a: 1   b: 2
    }
}

//获取对象本身的属性的数组
var strArray = Object.keys(obj4);
console.log(strArray) //[ 'a', 'b' ]

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




















