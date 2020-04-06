/**
 * 1.基本语法
 */
var a = 100;
// console.log(a);

var a1;

var a2 = "a2";
var a2 = 1;
a2 = "JS"
// console.log(a2)

// console.log(a3); //undefined
var a3 = "提前使用变量";

//var animation = 1;
<!--var animation1 = 1;
-->var animation2 = 1;

{
    var a4 = 4;
}
// console.log(a4);


var a5 = 1;
if (a5 === 1) {
    // console.log("equal 1")
} else {
    // console.log("not equal 1")
}

var a6 = 1;
switch (a6) {
    case true:
        console.log("true")
        break;
    default:
        console.log("default") //被执行
}



/*
    变量名区分大小写;
    变量用var声明，可以多次声明，赋值可以改变其类型；
    若变量不初始化，其值是undefined；(无意义)

    由于变量提升，所有声明的变量都会房贷代码的头部。代码，等价于：
        var a3；
        console.log(a3);
        a3 = "提前使用变量";

    标识符,例如：$elem, _temp, arg0
        第一个字符：任意的Unicode字母，以及$和_
        第二个字符：除了第一个字符那些，还可以是数字0-9

    JavaScript 有一些保留字，不能用作标识符：arguments、break、
        case、catch、class、const、continue、debugger、default、
        delete、do、else、enum、eval、export、extends、false、
        finally、for、function、if、implements、import、in、
        instanceof、interface、let、new、null、package、private、
        protected、public、return、static、super、switch、this、
        throw、true、try、typeof、var、void、while、with、yield。

    单行注释：//和<--和-->（后面两种是为了兼容html代码）
        -->只有在行首才会被当做注释

    区块(block)：用花括号将语句组合在一起；
        但，对于var来说，在花括号外面仍可以使用变量；

    符号：=(赋值运算符), ==(相等运算符), ===(严格相等运算符);

    和java一样：
        支持if,switch语句，和，需要注意的是switch比较的是===
        支持三元运算符?:
        支持while循环，简单for循环
        支持break, continue。(对于多重循环，break, continue机制针对的是内层循环)
 */