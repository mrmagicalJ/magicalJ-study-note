# mac下git配置多个账号

## 生成不同的ssh-key

```bash
ssh-keygent -t rsa -f ~/.ssh/id_rsa_company -C "your email"
```

## 分别配置不同的ssh-keys

mac下默认目录为`~/.ssh`，使用命令`open ~/.ssh`打开，找到 config 文件，如果找不到就自己建一个

配置如下

```config
#github
Host github.com
Hostname github.com
IdentityFile ~/.ssh/id_rsa_github
User mrmagicalJ

#company
Host gitlab.company.com
Hostname gitlab.company.com
IdentityFile ~/.ssh/id_rsa_company
User mrmagicalJ

```

配置含义

- Host：主机名，你可以自定义名字
- Hostname：真实主机地址，如果域名不好使可以使用ip
- IdentityFile：对应私钥的位置
User：用户名，提交会取这个名字
