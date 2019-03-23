## 界面搭框架及经验

水平方向禁止滚动条，垂直方向出现滚动条
- 水平和垂直两个方向都滚动，页面摇晃，容易产生误操作
- 垂直方向一直滚动是开发的主要方式

- margin: 0 auto; max-width: 960px 通用
- flex 布局
  flex-grow flex-basis flex-shrink flex-wrap
  当网页由PC到mobile时，缩小阵仗

经验 就是由简单的适配PC到mobile 照顾所有的用户
PC大手大脚一点，max-width magin: auto padding margin mobile flex-shrink 让关键部分坚挺一点
