�������ǩ���İ���
cordova build android

�����Ҫǩ���İ���
cordova build android --release

ǩ����
���԰棺
jarsigner -verbose -keystore vskitcms.keystore -signedjar completeTest.apk app-release-unsigned.apk vskitcms.keystore
��ʽ�棺
jarsigner -verbose -keystore vskitcms.keystore -signedjar completePublish.apk app-release-unsigned.apk vskitcms.keystore



��ע1��

keytool -genkey -v -keystore release-key.keystore -alias cordova-demo -keyalg RSA -keysize 2048 -validity 10000
 

#�����������˼�ǣ�����һ�� release-key.keystore ���ļ���������alias��Ϊ cordova-demo ��

#2�����뽨������Ϊһ���� ����Կ�� + ��Կ��

#����������� ����Ȥ�� �ٶ� keytool ��ѯ����


��ע2��
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore release-key.keystore android-release.apk cordova-demo
 

# release-key.keystore Ϊ��ʼ������ ��Կ���ļ� 

# android-release.apk �Ǹ��Ƶ�cordova��Ŀ¼���Ҹ������ֵ�apk ����Ϊ��һ��Ŀ¼�㼶���Բ���Ҫ·����

# cordova-demo �Ǵ�����Կ��ʱ�ı���