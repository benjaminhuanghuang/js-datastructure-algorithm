JavaScript 将数字存储为 64 位浮点数，但所有按位运算都以 32 位二进制数执行。
在执行位运算之前，JavaScript 将数字转换为 32 位有符号整数。
执行按位操作后，结果将转换回 64 位 JavaScript 数。

1 << 32 结果为 1
1 << 33 结果为 2

1.javascript中默认都是带符号的整数，注意是整数，总共32位（含符号位）
数值范围从 -2^31 - 2^31-1 即 -2147483648 到 2147483647。

2.javascript采用实际表示用64位标准双精度存储的，1 位符号位11 位指数位 52 位尾数位


console.log(Number.MAX_SAFE_INTEGER); //9007199254740991 2^53 -1
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991 2^53 -1


将-2147483648转成正数2147483648，超出了默认的带符号整数表示范围(默认最大2147483647)
虽然超出了默认的范围，js内部会自动转换成无符号整数


