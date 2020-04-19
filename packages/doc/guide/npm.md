---
sidebarDepth: 2
---

# npm包管理命令

## 命令

### 查看包tag版本

```bash
npm dist-tag ls
npm dist-tag ls somePackage
```
### 查看包的所有版本

```bash
npm view somePackage version
```
### 升级版本

```bash
npm version major|minor|patch|premajor|preminor|prepatch|prerelease
```
<table>
  <tr>
    <th width="100">npm version</th>
    <th>功能</th>
  </tr>
  <tr>
    <td>major</td>
    <td>
      <ul>
        <li>如果没有预发布号，则直接升级一位大号，其他位都置为0</li>
        <li>
          如果有预发布号：<br/>
            中号和小号都为0，则不升级大号，而将预发布号删掉。即2.0.0-1变成2.0.0，这就是预发布的作用<br/>
            如果中号和小号有任意一个不是0，那边会升级一位大号，其他位都置为0，清空预发布号。即 2.0.1-0变成3.0.0
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>minor</td>
    <td>
      <ul>
        <li>如果没有预发布号，则升级一位中号，大号不动，小号置为空</li>
        <li>
          如果有预发布号:<br/>
            如果小号为0，则不升级中号，将预发布号去掉<br/>
            如果小号不为0，同理没有预发布号
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>patch</td>
    <td>
      <ul>
        <li>如果没有预发布号：直接升级小号，去掉预发布号</li>
        <li>如果有预发布号：去掉预发布号，其他不动</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>premajor</td>
    <td>直接升级大号，中号和小号置为0，增加预发布号为0</td>
  </tr>
  <tr>
    <td>preminor</td>
    <td>直接升级中号，小号置为0，增加预发布号为0</td>
  </tr>
  <tr>
    <td>prepatch</td>
    <td>直接升级小号，增加预发布号为0</td>
  </tr>
  <tr>
    <td>prerelease</td>
    <td>
      <ul>
        <li>如果没有预发布号：增加小号，增加预发布号为0</li>
        <li>如果有预发布号，则升级预发布号</li>
      </ul>
    </td>
  </tr>
</table>

### 发布

```bash
# 发布latest版本，默认安装版本
npm publish 
# 发布beta包
npm publish --tag=beta
```

### 设置稳定版本

```bash
npm dist-tag add somePackage@xx.xx.xx latest
```
### 查看和添加用户
```bash
npm owner ls somePackage
npm owner add someUser somePackage
npm owner rm someUser somePackage
```


