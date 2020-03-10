import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

export const message = {
  //--region -- common
  /**
   * ============================== 通用 ==============================
   */
  common: {
    save: '保存',
    cancel: '取消',
    delete: '删除',
    add: '新增',
    edit: '编辑',
    refresh: '刷新'
  },
  //--endregion

  //--region -- menu
  /**
   * ============================== 菜单 ==============================
   */
  menu: {
    home: '首页',
    //--region 内容管理
    contentManagement: '内容管理',
    contentDraftLibrary: '内容草稿库',
    contentReview: '内容审核',
    contentImport: '内容导入',
    contentFormalLibrary: '内容正式库',
    contentDeletedLibrary: '内容删除库',
    commentLibrary:'评论库',
    commentDeletedLibrary:'评论删除库',
    //--endregion
    //--region 运营推荐
    recommendManagement: '运营推荐',
    recommendIndex: '首页推荐',
    recommendPre: '预推荐池',
    recommended: '推荐池',
    recommendBoutique: '精品池',
    meddlePosition: '位置干预',
    meddleVideo: '视频干预',
    hotTopic: '热门话题',
    meddleAgg: '聚合页干预',
    exploreManagement: '发现页管理',
    //--endregion
    //--region 用户管理
    userManagement: '用户管理',
    userList: '用户列表',
    userVip: 'VIP用户列表',
    userSuggest: '推荐用户列表',
    userWhite: '白名单列表',
    userOpposite: '外部爬取账号',
    userTalent: '达人用户列表',
    userVest: '马甲账号列表',
    //--endregion
    //--region 功能管理
    functionManagement: '功能管理',
    functionMessage: 'Message 管理',
    functionBanner: 'Banner 管理',
    functionIcon: '徽章管理',
    functionChartlet: '贴图管理',
    functionMusic: '音乐管理',
    functionMusicCategory: '音乐分类管理',
    functionDuet: '合拍管理',
    functionMv: 'MV 管理',
    functionTags: '标签管理',
    functionTagConfig: '标签配置',
    functionTagAreaConfig: '标签区域配置',
    functionScene: 'Scene 管理',
    functionPush: 'Push 管理',
    functionPull: 'Pull 管理',
    functionVersion: '版本管理',
    functionAutoFollow: '加关注列表',
    functionAutoComment: '评论池管理',
    functionAdvertPosition: '广告位配置',
    //--endregion
    //--region 用户反馈
    feedbackUser: '用户反馈',
    feedbackContent: 'Feedback',
    feedbackTipOff: '视频举报',
    feedbackUnlike: 'Report Unlike',
    feedbackErrorLog: '客户端错误日志',
    feedbackErrorLogCollect: '日志收集',
    feedbackErrorLogRecord: '日志记录'
    //--endregion
  },
  //--endregion

  //--region -- content
  /**
   * ============================== 内容管理 ==============================
   */
  // TODO 待完善
  content: {

  },
  //--endregion

  //--region -- recommend
  /**
   * ============================== 运营推荐 ==============================
   */
  // TODO 待完善
  recommend: {

  },
  //--endregion

  //--region -- user
  /**
   * ============================== 用户管理 ==============================
   */
  // TODO 待完善
  user: {

  },
  //--endregion

  //--region -- function
  /**
   * ============================== 功能管理 ==============================
   */
  // TODO 待完善
  function: {

  },

  //--endregion

  //--region -- feedback
  /**
   * ============================== 用户反馈 ==============================
   */
  // TODO 待完善
  feedback: {
    //--region Feedback

    //--endregion
    //--region 视频举报

    //--endregion
    //--region Report Unlike

    //--endregion
    //--region 客户端错误日志
    start: '开始',
    end: '结束'
    //--endregion
  },
  //--endregion


  language: '语言',
  welcome: '欢迎您',
  welcomeTo: '欢迎您',
  contactUs: '使用过程中如有疑问请联系袁波 (bo.yuan@transsnet.com)',
  auditFailure: '审核失败',
  videoIsDeleted: '资源错误！',
  loginOut: {
    outTit: '安全退出'
  },
  // 提示信息相关
  PromptInformation: {
    userNotWhite: '此用户不是白名单用户！',
    sure: '确定',
    cancel: '取消',
    OK: 'OK',
    YES: '确定',
    NO: '取消',
    prompt: '提示',
    successfulOperation: '操作成功',
    failedOperation: '操作失败',
    canceled: '已取消操作',
    areYouSure: '您确定要执行此操作吗？',
    selectVideoSource: '请先选择视频来源!',
    selectFile: '选择文件',
    selectVideoRequire: '请先选择execl文件!',
    uploadSuccess: '上传成功',
    uploadFail: '上传失败',
    importVideo: '上传视频',
    importVideoBatch: '批量上传视频',
    importBoutiqueZip: '批量上传精品视频',
    importBoutiqueExecl: '导入精品视频表格',
    importExecl: '导入表格'
  },
  startDate: '开始时间',
  endingDate: '结束时间',
  selectDate: '选择日期',
  priority: '优先级',
  creationTime: '创建时间',
  deleteTime: '删除时间',
  recommendTime: '推荐时间',
  dateTime: '时间',
  userID: '用户ID',
  userName: '用户名',
  userAvator: '用户头像',
  videoID: '视频ID',
  videoDesc: '视频描述',
  videoType: '类型',
  selectVideoType: '请选择视频类型',
  videoSource: '视频来源',
  selectVideoResource: '请选择视频来源',
  search: '查询',
  add: '新增',
  addRecommend: '新增推荐',
  addBoutique: '新增精品',
  effectImmediately: '立刻生效',
  save: '保存',
  saveAndComment: '保存并下发评论',
  edit: '编辑',
  boutique: '精品',
  intervene: '干预',
  release: '发布',
  update: '更新',
  batchRelease: '批量发布',
  inLatest: 'latest',
  batchRecommendation: '批量推荐',
  operation: '操作',
  approve: '审核',
  beforeApprove: '未审核',
  afterApprove: '已审核',
  delete: '删除',
  deleteName: '移除',
  batchDeletion: '批量删除',
  inTotal: '总计',
  page: '页',
  gotoPage: '前往',
  pleaseChoose: '请选择',
  close: '关闭',
  view: '查看',
  videoPlay: '播放',
  videoPass: '通过',
  bulkPass: '通过(选中)',
  videoNoPass: '否决',
  bulkNoPass: '否决(选中)',
  videoShield: '仅自己可见',
  bulkShield: '批量仅自己可见',
  videoEdit: '视频编辑',
  selectExeclFile: '选取Execl文件',
  uploadFile: '上传',
  effectDay: '内容时效',
  weightValue: '内容权限',
  number: '序号',
  verifySuccess: '校验成功',
  verifyFailed: '校验失败',
  all: '全部',
  sexTypeMan: '男',
  sexTypeFemale: '女',
  choiceCountry: '选择国家',
  publishingCountry: '发布国家',
  allCountry: '全部国家',
  partCountry: '部分国家',
  prevPage: '上一页',
  nextPage: '下一页',
  yesterday: '昨天',
  beforeYesterday: '前天',
  nearlySevenDays: '近七天',
  pleaseSelect: '请选择',
  confirm: '确认',
  Inventory: '媒体',
  preview: '预览',
  avatar: '头像',
  customForm: '自定义表格',
  status: '状态',
  allVersion: '全部版本',
  partVersion: '部分版本',
  terminalSystem: '终端系统',
  appVersion: '应用版本',
  publishVersion: '发布版本',
  fixedVersion: '指定版本',
  higherVersion: '高于版本',
  lowerVersion: '低于版本',
  empty: '空',
  noData: '数据加载中...',
  emptyData: '无数据',
  msgReqError: '请求出错，请刷新页面进行重试操作！',
  copySucc: '复制成功!',
  export: '导出',
  exportFailure: '导出失败',
  import: '导入',
  upload: '上传',
  downloadImportTemplate: '下载导入模板',
  recommendedCutOffTime: '推荐截止时间',
  betweenEffectiveTime: '生效时长在1到999之间',
  expirationTime: '到期时间',
  // 内容库管理
  contentApproval: {
    description: '视频描述',
    screenshots: '视频截屏图片',
    approveSelected: '审核(选中)',
    deleteSelected: '删除(选中)',
    common: '通用',
    northAfrica: '北非',
    secondarylabel: '二级标签',
    contentApply: '内容适用'
  },

  // 内容管理
  contentManagement: {
    description: '视频描述',
    play: '视频播放',
    commentNum: '评论数',
    realLikes: '真实like数',
    likesShowed: '显示like数',
    realViews: '真实观看数',
    viewsShowed: '显示观看数',
    selectListType: '请选择榜单类型',
    popularInterference: 'Popular干预',
    latestInterference: 'Latest干预'
  },

  // 话题新增
  topicSave: {
    topicId: '话题ID',
    title: '话题名',
    belongTopic: '所属话题',
    position: '位置',
    promptTitle: '话题名称不能为空',
    description: '话题描述',
    promptDescription: '描述不能为空',
    promptVideoFile: '请上传视频文件',
    promptVideoImg: '请上传视频封面',
    recommendPosition: '推荐位位置',
    promptPosition: '推荐位位置不能为空',
    effectiveTime: '定时生效时间',
    creatorID: '创建者ID',
    creator: '创建者',
    topicStatus: '话题状态',
    topicStatusSelect: '请选择话题状态',
    status: '状态',
    videoNum: '视频数',
    topicPutaway: '上架',
    topicSoldOut: '下架',
    topicCover: '话题封面',
    topicLogo: '话题图标',
    topicUserBg: '话题个人背景',
    iconConfig: 'icon配置',
    iconConfigSelect: '请选择icon配置',
    musicConfig: '背景音乐配置',
    musicConfigSelect: '预设背景音乐',
    noMusicConfig: '否',
    musicBg: '背景音乐',
    musicId: '音乐ID',
    contentInterference: '话题内容干预',
    addInterference: '新增干预',
    editInterference: '编辑干预',
    rankingInterference: '位置干预',
    classify: '分类'
  },
  // icon管理
  iconManagement: {
    badgeDetail: '徽章详情',
    badgeAdd: '新增徽章',
    badgeEdit: '编辑徽章',
    badgeId: '徽章ID',
    badgeTheme: '徽章主题',
    enterBadgeTheme: '请输入徽章主题',
    badgeDesc: '徽章描述',
    enterBadgeDesc: '请输入徽章描述',
    uploadIcon: '图标上传',
    iconId: '图标ID',
    smallIcons: '小图标',
    largeIcons: '大图标',
    description: '描述',
    badgeType: '徽章类型',
    badgeBg: '徽章背景',
    badgeLogo: '徽章logo',
    validTime: '有效期限'
  },
  // 贴图管理
  chartletManagement: {
    chartletAdd: '新增贴图',
    chartletEdit: '编辑贴图',
    chartletId: '贴图ID',
    chartletTheme: '贴图名称',
    enterChartletTheme: '请输入贴图名称',
    chartletLogo: '贴图logo',
    uploadChartlet: '贴图上传',
    chartletType: '贴图类型'
  },
  // message管理
  messageManagement: {
    messageAdd: '新增消息',
    messageConfig: '消息配置',
    messageDesc: '消息描述',
    messageContent: '消息详情',
    messageExpire: '过期时间',
    messageEdit: '编辑详细',
    messageId: '消息ID',
    messageTheme: '标题',
    messageAll: 'All',
    messageTopic: '话题',
    messageVideo: '视频',
    messageUser: '用户',
    messageOutH5: '外链H5',
    messageGoogle: '应用市场',
    messageInnerH5: '内链H5',
    messageTxt: '文本信息',
    messageImageTxt: '图文信息',
    jumpToShootingPage: '视频拍摄页',
    jumpToDownloadPage: '应用下载',
    jumpToDuetPage: '合拍聚合页',
    messageMusic: '音乐聚合',
    enterMessageTheme: '请输入消息标题',
    enterMessageContent: '请输入消息内容',
    messageType: '消息类型',
    msgEnterTitle: '请输入标题',
    msgEnterMessageDesc: '请输入消息描述',
    msgEnterSourceDetail: '请输入消息来源详情',
    msgSelectExpirationTime: '请选择过期时间'
  },
  // sceneConfig管理
  sceneConfigManagement: {
    sceneConfigAdd: '新增Scene配置',
    sceneConfig: 'Scene配置',
    sceneConfigEdit: '编辑Scene配置',
    sceneConfigId: '配置ID',
    sceneTheme: 'Scene',
    scenePercent: '百分比',
    sceneConfigAll: 'All',
    sceneDataNetEase: '网易',
    sceneTypeCurrent: '当前',
    sceneTypeHistory: '历史',
    sceneConfigType: 'Scene配置类型'
  },
  // banner管理
  bannerManagement: {
    bannerAdd: '新增Banner',
    bannerConfig: 'Banner配置',
    bannerData: '扩展数据',
    bannerSource: 'Banner数据',
    bannerEdit: '编辑Banner',
    bannerId: 'Banner Id',
    bannerStatus: '状态',
    bannerEffective: '有效',
    setEffective: '设置有效',
    setInvalid: '设置无效',
    bannerInvalid: '无效',
    bannerTheme: '标题',
    bannerImage: 'Banner图',
    bannerAll: 'All',
    bannerHide: '隐藏',
    bannerTopic: '话题',
    bannerVideo: '视频',
    bannerOutH5: '外链H5',
    bannerInnerH5: '内链H5',
    bannerMusic: '音乐跟拍',
    jumpToShootingPage: '视频拍摄页',
    jumpToDownloadPage: '应用下载',
    jumpToDuetPage: '合拍聚合页',
    enterBannerTheme: '请输入Banner标题',
    uploadBanner: 'Banner图片上传',
    bannerType: 'Banner类型'
  },
  // 标签管理
  tagsManagement: {
    tagsAdd: '新增标签',
    tag: '标签',
    tagsEdit: '编辑标签',
    tagsId: '标签ID',
    tagsTitle: '标签名称',
    tagsTitleEnglish: '标签名称(英语)',
    tagsTitleFrench: '标签名称(法语)',
    tagsTitleArabic: '标签名称(阿拉伯语)',
    tagsTitleSwahili: '标签名称(斯瓦西里语)',
    tagsTitleAmharic: '标签名称(阿姆哈拉语)',
    categoryTitle: '类目名称',
    firstTagsTitle: '一级标签名称',
    secondTagsTitle: '二级标签名称',
    enterTagsTitle: '请输入标签名称',
    firstTags: '一级标签',
    firstClassify: '一级分类',
    secondTags: '二级标签',
    threeTags: '三级标签',
    fourTags: '四级标签',
    commonTags: '共用标签',
    secondClassify: '二级分类',
    belongClassify: '所属分类',
    videoTags: '已有标签',
    parentTags: '所属标签',
    imageUrl: '标签图片',
    addImage: '添加图片',
    parentCategory: '所属类目',
    setTags: '设置标签',
    selectCategory: '请选择所属类目',
    selectParentTags: '请选择所属标签',
    addParentTags: '请至少添加一个一级标签',
    tagsType: '标签类型',
    english:'英语',
    french:'法语',
    not:'无',
    removeTag:'确定下架此标签吗?',
    putTag:'确定上架此标签吗?',
    maxChooseTips: '标签勾选不能超过6个！'
  },
  //标签区域配置
  tagAraeCfg:{
    tagGroupId :'标签分组ID',
    tagSort :'标签排序',
    tagApplyArea :'标签适用区域'
  },
  // 音乐管理
  musicManagement: {
    add: '新增',
    hide: '隐藏',
    show: '展示',
    addMusicTit: '新增音乐',
    belongMusic: '所属音乐',
    title: '音乐名称',
    description: '音乐描述',
    duration: '时长/ms',
    audition: '音乐试听',
    rankingInterference: '位置干预',
    batchUpload: '批量上传',
    musicBatchUpload: '音乐批量上传',
    uploadMusicFiles: '上传音乐文件',
    nextStep: '下一步',
    lastStep: '上一步',
    userUploadMusic:'用户上传音乐',
    cmsPlatformMusic:'cms 平台音乐',
    videoSoundtrackStripMusic:'视频原声剥离音乐',
    addMusic: {
      musicFileUpload: '音乐文件上传',
      musicBgUrl: '音乐封面',
      mustMP3Format: '必须MP3格式',
      enterMusicName: '请输入音乐名称',
      musicSinger: '歌手',
      musicSingerEnter: '请输入歌手',
      musicDurationEnter: '请输入音乐时长',
      noMoreThan40Characters: '不超过40个字符',
      browseUpload: '浏览上传',
      uploadCompleted: '上传完成',
      uploadError: '上传出错,请重新上传',
      uploadMustMP3: '上传的音乐文件只能是 MP3 格式!',
      uploadMax50MB: '上传的音乐文件大小不能超过 50MB!',
      uploading: '正在上传中...'
    }
  },
  // 视频管理
  videoManagement: {
    title: '视频名称',
    description: '视频描述',
    videoFile: '视频文件',
    chartletFile: '贴图文件',
    mvFile: 'MV文件',
    selectFile: '选取文件',
    addVideo: {
      videoFileUpload: '视频文件上传',
      videoBgUrl: '视频封面',
      mustMP4Format: '必须MP4格式',
      enterVideoName: '请输入视频名称',
      browseUpload: '浏览上传',
      uploadCompleted: '上传完成',
      uploadError: '上传出错,请重新上传',
      uploadMustMP4: '上传的视频文件只能是 MP4 格式!',
      uploadMax50MB: '上传的视频文件大小不能超过 50MB!',
      uploadCountMax50: '上传的视频文件最多50个!',
      uploading: '正在上传中...'
    },
    addWebp: {
      mustWebpFormat: '必须webp格式',
      uploadMustWebp: '上传的图片文件只能是 webp 格式!'
    },
    addFile: {
      uploadMax50MB: '上传的文件大小不能超过 50MB!',
      mustZipFormat: '必须zip格式',
      selectFileRequire: '请先上传文件!',
      paramNotEmpty: '参数不能为空!',
      uploadMustFile: '上传的文件只能是 zip 格式!',
      uploadPngImg: '上传的文件只能是 .png 格式!',
      uploadMustVideo: '上传的文件只能是 .mp4 格式!'
    }
  },
  // 位置干预管理
  positionManagement: {
    videoId: '视频ID',
    positionOper: '位置干预',
    default: '默认',
    one: '第 1 刷',
    two: '第 2 刷',
    three: '第 3 刷',
    four: '第 4 刷',
    five: '第 5 刷',
    six: '第 6 刷',
    seven: '第 7 刷',
    eight: '第 8 刷',
    nine: '第 9 刷'
  },
  // 数据查询
  dataQuery: {
    comingSoon: '模块开发中，敬请期待！'
  },
  // 视频类型
  videoSourceTypeArr: {
    trueUser: '用户上传',
    addRecommendVideo: '新增推荐视频',
    platformFlipagram: 'Flipagram'
  },
  // 视频类型
  videoTypeData: {
    all: '全部',
    music: '音乐',
    dance: '舞蹈',
    sports: '运动',
    life: '生活',
    food: '美食',
    creativity: '创意',
    football: '足球',
    pets: '萌宠',
    funny: '搞笑',
    fashion: '时尚',
    talent: '才艺',
    travel: '旅行',
    others: '其他'
  },
  // 用户管理
  userManagement: {
    funsNum: '粉丝数',
    sexVal: '性别',
    sexTypeMan: '男',
    sexTypeFemale: '女',
    faceBookAccount: 'FaceBook账号',
    facebookUserName: 'Facebook用户名',
    enterFacebookUserName: '请输入Facebook用户名',
    enterUserID: '请输入用户ID',
    userIDEmpty: '用户ID不能为空',
    vskitIDEmpty: 'Vskit ID不能为空',
    username: '用户名',
    newUsers: '新增用户',
    newVipUsers: '新增VIP用户',
    newOperateUsers: '新增运营用户',
    isVip: '是否VIP',
    isRecomend: '是否推荐',
    recommend: '推荐',
    noRecommend: '不推荐',
    isRecommendVideo: '是否推荐该视频?',
    cancelRecommend: '取消推荐',
    newRecommendUsers: '新增推荐用户',
    isDeleteVideo: '是否删除当前视频？',
    yes: '是',
    no: '否',
    isWhitelist: '是否白名单',
    setWhite: '设为白名单',
    setOperate: '设为运营号',
    batchSetWhite: '批量设为白名单',
    userCategory: '用户类别',
    avatar: '头像'
  },

  // feedBack
  feedBackManagement: {
    feedbackContent: '反馈内容',
    feedbackType: '反馈类型',
    export: '导出',
    ClientVersionCode: 'apk版本号',
    OsVersion: '系统版本号',
    Model: '手机型号',
    Platform: '手机系统'
  },
  // 反关注
  ExternalAccountCraw: {
    opposite: '反关注',
    notOpposite: '取消反关注',
    oppositeTitle: '新增外部爬取账号',
    choiceSourece: '请选择来源',
    sourece: '来源'
  },
  // 达人用户列表
  TalentUserList: {
    addTalentUserList: '新增达人用户',
    pleaseAddTalentUser: '请添加达人用户'
  },
  // 马甲账号列表
  vestUserList: {
    addVestUser: '新增马甲账号'
  },

   // push 管理
  PushManagement: {
    pushDesc: 'push描述',
    publishingGroup: '发布群体',
    publishingCountry: '发布国家',
    choiceSystem: '选择系统',
    system: '系统',
    choiceSex: '选择性别',
    allSex: '全部性别',
    choiceCountry: '选择国家',
    allSystem: '全部系统',
    choiceZone: '选择时区',
    zone: '时区',
    sendTimeType: '发送时间方式',
    pictureStyle: '图片样式',
    bigPicture: '大图',
    smallPicture: '小图',

    nowSend: '立即发送',
    SendByCountryTime: '按某个国家的时间点发送',
    SentByAllCountryTimePoints: '按所有国家的时间点发送',

    publishingTime: '发布时间',
    uploadPictures: '上传图片',
    messageDetailCannotEmpty: '消息详情不能为空',
    releaseTimeCannotBeEmpty: '发布时间不能为空',
    pleaseSelectTimeZone: '请选择时区',
    pleaseUploadBigPicture: '请上传大图',
    bigPictureLimit: '上传大图的尺寸必须是 w648px * h302px 或 w302px * h302px，并且小于50KB',
    pushConfig: 'push配置'
  },
  // pull 管理
  PullManagement: {
    configId: '配置 Id',
    msgId: '消息 Id',
    pullDesc: 'pull描述',
    pullConfig: 'pull配置',
    sendStat: '发送状态',
    suspend: '暂停',
    notStart: '未开始',
    running: '运行',
    stopped: '终止',
    recovery: '恢复',

    pictureStyle: '图片样式',
    bigPicture: '大图',
    smallPicture: '小图',
    pleaseUploadBigPicture: '请上传大图',
    bigPictureLimit: '上传大图的尺寸必须是 w648px * h302px 或 w302px * h302px，并且小于50KB',

    verify: '检验',
    uploadPictures: '上传图片',
    country: '所在国家',
    allCountry: '全部国家',
    partCountry: '部分国家',
    allVersion: '全部版本',
    partVersion: '部分版本',
    terminalSystem: '终端系统',
    appVersion: '应用版本',
    sex: '用户性别',
    newUser: '新增用户条件',
    silentUser: '沉默用户条件',
    sendType: '发送方式',
    sendNow: '立即发送',
    sendByTime: '定时发送',
    sendStartTime: '发送开始时间',
    sendEndTime: '发送结束时间',
    openStatus: '开启',
    filter: '筛选',
    exclude: '排除',

    newUserType1: '1天前新增用户',
    newUserType7: '7天前新增用户',
    newUserType15: '15天前新增用户',
    newUserType30: '30天前新增用户',
    silentUserType3: '3天没访问的用户',
    silentUserType7: '7天没访问的用户',
    silentUserType14: '14天没访问的用户',
    silentUserType30: '30天没访问的用户',

    messageTitleCannotEmpty: '消息标题不能为空',
    messageDetailCannotEmpty: '消息详情不能为空',
    messageTypeCannotEmpty: '请选择消息类型',
    enterVideoId: '请输入视频ID',
    sendStartTimeCannotBeEmpty: '发送开始时间不能为空',
    sendEndTimeCannotBeEmpty: '发送结束时间不能为空',
    selectFilterOrExclude: '请选择 筛选 或 排除',
    addUserConditions: '新增用户条件 信息不完整',
    silentUserConditions: '沉默用户条件 信息不完整'
  },

  // 举报
  Report: {
    reportType: '举报类型',
    reportdec: '举报描述',
    reportReply: '举报回复',
    reportUserId: '举报人ID',
    officialReply: '官方回复',
    viewVideo: '查看视频'
  },
  findPageManagement: {
    briefDescription: '简单描述',
    iconType: '图标类型',
    pleaseSelectLabel: '请选择标签',
    NotAllEmpty: '不能全部为空',
    empty: '无'
  },
  adSpaceConfig:{
    platform:'平台',
    'ADUnit':'广告单元',
    channel:'渠道',
    version:'版本',
    OpenCountry:'开放国家',
    AdvertisingSpaceType:'广告位类型',
    AdPosition:'广告位置',
    newUser:'新用户',
    'showTime':'展示时长',
    'openClose':'开启关闭',
    'noDisplayAd':'不展示广告',
    'displayAd':'展示广告',
    'adId':'广告Id',
    'start':'启动开屏',
    'indexFloat':'首页悬浮框',
    'startPopUp':'启动弹窗',
    'exitPopUp':'退出弹窗',
    'tastCenter':'首页任务中心',
    'infoStream':'信息流广告',
    'builtin':'预装',
    'showNumber':'显示次数',
    'editAdvertInfo':'编辑广告位信息',
    'addAdvertInfo':'新增广告位信息',
    'open/close':'开关状态'
  },
  addCommentLibrary:{
    addCommentLibrary:'评论库',
    comment:'评论'
  },
  deleteCommentLibrary:{
    deleteCommentLibrary:'评论删除库',
    deleteTime:'删除时间'
  },
  musicClassificationManagement:{
    classificationId:'分类ID',
    classificationPicture:'分类图片',
    classificationMusicNum:'分类下音乐数',
    sort:'排序',
    classificationName:'分类名称',
    addMusicClassification:'新增音乐分类',
    editMusicClassification:'编辑音乐分类',
    isPutaway:'是否上架'
  },
  setPublish:{
    'publishTerminal':'发布终端',
    'publishAndriodVersion':'发布安卓终端',
    'publishIosVersion':'发布IOS终端',
    'publishArea':'发布区域',
    'publishPlatform':'发布平台',
     anSpecifyVersion:'Android 指定版本',
     anLessVersion:'Android 小于等于版本',
     anGreaterVersion:'Android 大于等于版本',
     iosGreaterVersion:'iOS 大于等于版本',
     iosLessVersion:'iOS 小于等于版本',
     iosSpecifyVersion:'iOS 指定版本'
  },
  // 国家
  country: {
    'All': '全部国家',
    'CHN': '中国',
    'NGA': '尼日利亚',
    'KEN': '肯尼亚',
    'GHA': '加纳',
    'CIV': '科特迪瓦',
    'TZA': '坦桑尼亚',
    'SEN': '塞内加尔',
    'UGA': '乌干达',
    'CMR': '喀麦隆',
    'ZMB': '赞比亚',
    'ZAF': '南非',
    'ETH': '埃塞俄比亚',
    'RWA': '卢旺达',
    'EGY': '埃及',
    'MAR': '摩洛哥',
    'SAU': '沙特阿拉伯'
  },
   // 国家
   countryTwo: {
    'ALL': '全部国家',
    'CH': '中国',
    'NG': '尼日利亚',
    'KE': '肯尼亚',
    'GH': '加纳',
    'CI': '科特迪瓦',
    'TZ': '坦桑尼亚',
    'SE': '塞内加尔',
    'UG': '乌干达',
    'CM': '喀麦隆',
    'ZM': '赞比亚',
    'ZA': '南非',
    'ET': '埃塞俄比亚',
    'RW': '卢旺达',
    'EG': '埃及',
    'MA': '摩洛哥',
    'SA': '沙特阿拉伯',
    'SN':'塞内加尔',
    'HK':'香港',
    'CN':'中国'
  },
  ...zhLocale
};
