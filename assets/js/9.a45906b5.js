(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{280:function(r,e,t){"use strict";t.r(e);var a=t(13),s=Object(a.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"静态ip连接外网"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态ip连接外网"}},[r._v("#")]),r._v(" 静态ip连接外网")]),r._v(" "),t("h2",{attrs:{id:"_1-确定子网ip和子网掩码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-确定子网ip和子网掩码"}},[r._v("#")]),r._v(" 1：确定子网ip和子网掩码")]),r._v(" "),t("p",[t("img",{attrs:{src:"%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20220726102720923-165882491570944.png",alt:"image-20220726102720923"}})]),r._v(" "),t("p",[r._v("那么选的ip就要在  192.168.77.1到 192.168.77.254之间 子网掩码相同255.255.255.0")]),r._v(" "),t("h2",{attrs:{id:"_2-centos7-9使-ip-addr查看虚拟机ip地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-centos7-9使-ip-addr查看虚拟机ip地址"}},[r._v("#")]),r._v(" 2.centos7.9使 ip addr查看虚拟机ip地址")]),r._v(" "),t("p",[t("img",{attrs:{src:"%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20220726103034796-165882491274843.png",alt:"image-20220726103034796"}})]),r._v(" "),t("h2",{attrs:{id:"修改网络配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改网络配置"}},[r._v("#")]),r._v(" 修改网络配置")]),r._v(" "),t("p",[r._v("使用命令vi /etc/sysconfig/network-scripts/ifcfg-eth0 或者使用ssh工具查看网络配置文件，修改这些")]),r._v(" "),t("p",[t("img",{attrs:{src:"%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20220726103502611-165882489879840.png",alt:"image-20220726103502611"}})]),r._v(" "),t("p",[r._v("BOOTPROTO：设置为静态ip "),t("a",{attrs:{name:"aa"}},[r._v("在这")])]),r._v(" "),t("p",[r._v("ONBOOT：是否自启动")]),r._v(" "),t("p",[r._v("IPADDR：就从刚才查看的范围内选一个")]),r._v(" "),t("p",[r._v("PREFIX：子网掩码")]),r._v(" "),t("p",[r._v("GATEWAY：网关，一般写和ip一直网段最后一个")]),r._v(" "),t("p",[r._v("或者")]),r._v(" "),t("p",[r._v("其中：")]),r._v(" "),t("p",[t("strong",[r._v("IPADDR")]),r._v(" 就是你执行ifconfig的时候输出的IP")]),r._v(" "),t("p",[t("strong",[r._v("BROADCAST")]),r._v(" 是广播地址，从"),t("a",{attrs:{href:"#1%EF%BC%9A%E7%A1%AE%E5%AE%9A%E5%AD%90%E7%BD%91ip%E5%92%8C%E5%AD%90%E7%BD%91%E6%8E%A9%E7%A0%81"}},[r._v("第1步")]),r._v('的"DHCP设置"界面获取')]),r._v(" "),t("p",[t("strong",[r._v("NETMASK")]),r._v("是子网掩码，也从从"),t("a",{attrs:{href:"#1%EF%BC%9A%E7%A1%AE%E5%AE%9A%E5%AD%90%E7%BD%91ip%E5%92%8C%E5%AD%90%E7%BD%91%E6%8E%A9%E7%A0%81"}},[r._v("第1步")]),r._v('的"DHCP设置"界面获取')]),r._v(" "),t("p",[t("strong",[r._v("GATEWAY")]),r._v('是网关，从vmware的虚拟网络编辑器的"NAT设置”里面获取')]),r._v(" "),t("p",[t("img",{attrs:{src:"%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/650210-20170627093030696-607072001-165882490498841.png",alt:"img"}})]),r._v(" "),t("h2",{attrs:{id:"保存退出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#保存退出"}},[r._v("#")]),r._v(" 保存退出")]),r._v(" "),t("p",[r._v("重新运行网络")]),r._v(" "),t("p",[r._v("service network restart")]),r._v(" "),t("p",[t("a",{attrs:{href:"#aa"}},[r._v("第三种跳转  使用href标签+id名字  ")])]),r._v(" "),t("p",[r._v("ping www.baidu.com")]),r._v(" "),t("h1",{attrs:{id:"docker安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker安装"}},[r._v("#")]),r._v(" docker安装")]),r._v(" "),t("h2",{attrs:{id:"安装docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装docker"}},[r._v("#")]),r._v(" 安装Docker")]),r._v(" "),t("h3",{attrs:{id:"安装工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装工具"}},[r._v("#")]),r._v(" 安装工具")]),r._v(" "),t("p",[r._v("sudo yum install -y yum-utils device-mapper-persistent-data lvm2")]),r._v(" "),t("h3",{attrs:{id:"添加docker的yum库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加docker的yum库"}},[r._v("#")]),r._v(" .添加docker的yum库")]),r._v(" "),t("p",[r._v("yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\nsudo yum makecache fast")]),r._v(" "),t("h3",{attrs:{id:"安装docker-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装docker-2"}},[r._v("#")]),r._v(" 安装Docker")]),r._v(" "),t("p",[r._v("sudo yum install docker-ce docker-ce-cli containerd.io")]),r._v(" "),t("h3",{attrs:{id:"启动-开机启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动-开机启动"}},[r._v("#")]),r._v(" 启动&开机启动")]),r._v(" "),t("p",[r._v("sudo systemctl start docker\nsystemctl enable docker")]),r._v(" "),t("h3",{attrs:{id:"测试docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试docker"}},[r._v("#")]),r._v(" 测试Docker")]),r._v(" "),t("p",[r._v("docker run hello-world")]),r._v(" "),t("p",[r._v("docker version")]),r._v(" "),t("h2",{attrs:{id:"docker-服务操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-服务操作"}},[r._v("#")]),r._v(" docker 服务操作")]),r._v(" "),t("p",[r._v("启动docker：systemctl start docker\n停止docker：systemctl stop docker\n重启docker：systemctl restart docker\n查看docker状态：systemctl status docker\n开机启动：systemctl enable docker\n查看docker概要信息：docker info\n查看docker帮助文档：docker --help")]),r._v(" "),t("h2",{attrs:{id:"docker-镜像操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-镜像操作"}},[r._v("#")]),r._v(" docker 镜像操作")]),r._v(" "),t("p",[r._v("docker images :查看本地镜像\ndocker search 镜像名：搜索远程镜像\ndocker rmi 镜像名:版本/imageId :删除指定镜像")]),r._v(" "),t("p",[r._v("docker rmi 镜像号 --force 强制删除\ndocker rmi ‘docker images -q’ :删除所有镜像\ndocker pull 镜像名:版本 :拉取镜像\ndocker push 镜像：版本 ：推送镜像到远程")]),r._v(" "),t("h2",{attrs:{id:"docker-容器操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-容器操作"}},[r._v("#")]),r._v(" docker 容器操作")]),r._v(" "),t("p",[r._v("运行交互式容器：\ndocker run -it --name=容器名 -p=linux端口:容器端口 -v=/linux目录：/容器目录 镜像名:版本 /bin/bash\n运行守护式容器：\ndocker run -id --name=容器名 -p=linux端口:容器端口 -v=/linux目录：/容器目录 镜像名:版本\n查看容器：docker ps -a\n查看容器ID： docker ps -a -q\n删除容器：docker rm 容器名\n删除所有容器：docker rm docker ps -a -q\n停止一个容器：docker kill 容器名\n停止所有容器： docker kill docker ps -a -q\n启动容器：docker start 容器名\n重启容器：docker restart 容器名\n进入容器：docker exec -it 容器名 /bin/bash ，")]),r._v(" "),t("p",[r._v("退出容器 exit 或者ctrl + p + q (交互式容器建议使用)\n拷贝文件到容器：docker cp /linux文件 容器:/容器目录\n从容器拷贝文件到linux: docker cp 容器:/文件 /linux目录\n查看IP： docker inspect 容器名\n查看日志：docker logs 容器名.")])])}),[],!1,null,null,null);e.default=s.exports}}]);