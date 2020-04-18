

# Markdown

## 标题

```
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

## 文字

```
*斜体文字*  **粗体文本**  ***粗斜体文本***
```
*斜体文字* **粗体文本** ***粗斜体文本***

## 删除线

```
~~删除线删除线~~
```
~~删除线删除线~~

## tooltip 暂不支持

设置tooltip备注 [^toolTip]  
  ^toolTip]: hello world

## 列表

```
* 第一项

+ 第一项

- 第一项

1. 0
    - 0-0
2. 1
    - 0-0
```
* 第一项

1. 0
    - 0-0
2. 1
    - 0-0

## 嵌套
```
> 最外层
> > 第一层嵌套
> > > 第二层嵌套
```

> 最外层
> > 第一层嵌套
> > > 第二层嵌套

## 代码高亮

`print()函数`

```javascript
$(document).ready(function () {
    alert('RUNOOB');
});
```
## 链接
```
这是一个链接 [菜鸟教程](https://www.runoob.com)
这个链接用 runoob 作为网址变量 [Runoob][runoob]  
  
  [runoob]: http://www.runoob.com/
```

这是一个链接 [菜鸟教程](https://www.runoob.com)

这个链接用 runoob 作为网址变量 [Runoob][runoob]  
  
  [runoob]: http://www.runoob.com/

## 图片

```
![RUNOOB 图标](https://cn.vuejs.org/images/logo.png)

<img src="https://cn.vuejs.org/images/logo.png" width="20%">
```
![RUNOOB 图标](https://cn.vuejs.org/images/logo.png)

<img src="https://cn.vuejs.org/images/logo.png" width="20%">

## 表格

|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |

------

| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |

## 注释
```html
不在 Markdown 涵盖范围之内的标签，都可以直接在文档里面用 HTML 撰写。
目前支持的 HTML 元素有：<kbd><b><i> <em><sup><sub><br>等 ，如：

使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑
```

使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑






