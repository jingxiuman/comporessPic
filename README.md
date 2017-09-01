# 关于移动端上传图片，需要压缩的demo

## 问题背景

在移动端经常会照片好几M，上传需要很久。
## 解决思路

使用canvas 进行简单的尺寸和质量的修改然后再上传
## 实现

使用new Image()读取图片内容，然后使用canvas drawImage() 绘制图片，然后使用todataurl 转化成base64的图片
