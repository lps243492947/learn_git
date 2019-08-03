<img src="https://img-blog.csdn.net/20171109165533893?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvbXVzZWlvbnM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center">
find()方法主要用来返回数组中符合条件的第一个元素（没有的话，返回undefined）

filter()方法主要用来筛选数组中符合条件的所有元素，并且放在一个新数组中，如果没有，返回一个空数组

map()方法主要用来对数组中的元素调用函数进行处理，并且把处理结果放在一个新数组中返回（如果没有返回值，新数组中的每一个元素都为undefined）

forEach()方法也是用于对数组中的每一个元素执行一次回调函数，但它没有返回值（或者说它的返回值为undefined，即便我们在回调函数中写了return语句，返回值依然为undefined）

# push()
push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
<script type="text/javascript">

var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

document.write(arr + "<br />")
document.write(arr.push("James") + "<br />")
document.write(arr)

</script>
输出：

George,John,Thomas
4
George,John,Thomas,James

# charAt()
charAt() 方法可返回指定位置的字符。
请注意，JavaScript 并没有一种有别于字符串类型的字符数据类型，所以返回的字符是长度为 1 的字符串。
<script type="text/javascript">

var str="Hello world!"
document.write(str.charAt(1))

</script>
输出：

e
# indexOf()
indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
<script type="text/javascript">

var str="Hello world!"
document.write(str.indexOf("Hello") + "<br />")
document.write(str.indexOf("World") + "<br />")
document.write(str.indexOf("world"))

</script>
输出：

0
-1
6
# substr() 
substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。
<script type="text/javascript">

var str="Hello world!"
document.write(str.substr(3,7))

</script>
输出：

lo worl

# parseInt() 函数

parseInt() 函数可解析一个字符串，并返回一个整数。
parseInt("10");			//返回 10
parseInt("19",10);		//返回 19 (10+9)
parseInt("11",2);		//返回 3 (2+1)
parseInt("17",8);		//返回 15 (8+7)
parseInt("1f",16);		//返回 31 (16+15)
parseInt("010");		//未定：返回 10 或 8

# join() 方法
join() 方法用于把数组中的所有元素放入一个字符串。

元素是通过指定的分隔符进行分隔的。
<script type="text/javascript">

var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

document.write(arr.join())

</script>
输出：

George,John,Thomas
