打包无需签名的包：
cordova build android

打包需要签名的包：
cordova build android --release

签名：
测试版：
jarsigner -verbose -keystore vskitcms.keystore -signedjar completeTest.apk app-release-unsigned.apk vskitcms.keystore
正式版：
jarsigner -verbose -keystore vskitcms.keystore -signedjar completePublish.apk app-release-unsigned.apk vskitcms.keystore



备注1：

keytool -genkey -v -keystore release-key.keystore -alias cordova-demo -keyalg RSA -keysize 2048 -validity 10000
 

#上面的命令意思是，生成一个 release-key.keystore 的文件，别名（alias）为 cordova-demo 。

#2个密码建议设置为一样的 （密钥库 + 密钥）

#具体参数含义 有兴趣的 百度 keytool 查询即可


备注2：
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore release-key.keystore android-release.apk cordova-demo
 

# release-key.keystore 为开始创建的 密钥库文件 

# android-release.apk 是复制到cordova根目录并且改了名字的apk （因为在一个目录层级所以不需要路径）

# cordova-demo 是创建密钥库时的别名