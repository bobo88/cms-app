import enLocale from 'element-ui/lib/locale/lang/en'

export const message = {
  //--region -- common
  /**
   * ============================== 通用 ==============================
   */
  common: {
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    add: 'New',
    edit: 'Edit',
    refresh: 'Refresh'
  },
  //--endregion

  //--region -- menu
  /**
   * ============================== 菜单 ==============================
   */
  menu: {
    home: 'Home',
    //--region 内容管理
    contentManagement: 'Content Management',
    contentDraftLibrary: 'Content Draft Library',
    contentReview: 'Content Review',
    contentImport: 'Content Import',
    contentFormalLibrary: 'Content Formal Library',
    contentDeletedLibrary: 'Content Deleted Library',
    commentLibrary: 'Comment Library',
    deletedCommentLibrary: 'Comment Deleted Library',
    //--endregion
    //--region 运营推荐
    recommendManagement: 'Operational Recommendation',
    recommendIndex: 'Home Page Recommend',
    recommendPre: 'Pre-Recommended Pool',
    recommended: 'Recommended Pool',
    recommendBoutique: 'Boutique Pool',
    meddlePosition: 'Position Meddle',
    meddleVideo: 'Video Meddle',
    hotTopic: 'Hot Topic',
    meddleAgg: 'Aggregate Page Meddle',
    exploreManagement: 'Explore Management',
    //--endregion
    //--region 用户管理
    userManagement: 'User Management',
    userList: 'User List',
    userVip: 'VIP User List',
    userSuggest: 'Recommend User List',
    userWhite: 'White User List',
    userOpposite: 'External Account',
    userTalent: 'Talent User List',
    userVest: 'Vest User List',
    //--endregion
    //--region 功能管理
    functionManagement: 'Function Management',
    functionMessage: 'Message Management',
    functionBanner: 'Banner Management',
    functionIcon: 'Icon Management',
    functionChartlet: 'Chartlet Management',
    functionMusic: ' Management',
    functionMusicCategory: 'Music Category Management',
    functionDuet: 'Duet Management',
    functionMv: 'MV Management',
    functionTags: 'Tags Management',
    functionTagConfig: 'Tag Configuration',
    functionTagAreaConfig: 'Tag Area Configuration',
    functionScene: 'Scene Management',
    functionPush: 'Push Management',
    functionPull: 'Pull Management',
    functionVersion: ' Management',
    functionAutoFollow: 'Auto Follow List',
    functionAutoComment: 'Comment Pool Management',
    functionAdvertPosition: 'Advert Position Configuration',
    //--endregion
    //--region 用户反馈
    feedbackUser: 'User Feedback',
    feedbackContent: 'Feedback',
    feedbackTipOff: 'Video Tip-off',
    feedbackUnlike: 'Report Unlike',
    feedbackErrorLog: 'Client Error Log',
    feedbackErrorLogCollect: 'Log Collect',
    feedbackErrorLogRecord: 'Log Record'
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

    //--endregion
  },
  //--endregion

  language: 'language',
  welcome: 'Welcome',
  welcomeTo: 'Welcome to',
  contactUs: 'If you have any questions while using the system, please contact Bob Yuan (bo.yuan@transsnet.com)',
  auditFailure: 'Audit Failure',
  videoIsDeleted: 'Resource error!',
  loginOut: {
    outTit: 'Logout'
  },
  // 提示信息相关
  PromptInformation: {
    userNotWhite: 'User of the video is not in white list!',
    sure: 'Sure',
    cancel: 'Cancel',
    OK: 'OK',
    YES: 'YES',
    NO: 'NO',
    prompt: 'Tips',
    successfulOperation: 'Successful Operation',
    failedOperation: 'Operation failed',
    canceled: 'Canceled',
    areYouSure: 'Are you sure you want to do this?',
    selectVideoSource: 'Please select video source first!',
    selectFile: 'Select file',
    selectVideoRequire: 'Please select execl file first!',
    uploadSuccess: 'Upload success',
    uploadFail: 'Upload Fail',
    importVideo: 'Upload video',
    importVideoBatch: 'Batch upload video',
    importBoutiqueZip: 'Batch upload quality video',
    importBoutiqueExecl: 'Import the boutique video execl',
    importExecl: 'Import execl'
  },
  startDate: 'Start date',
  endingDate: 'Ending date',
  selectDate: 'Select date',
  priority:  'priority',
  creationTime: 'Creation time',
  deleteTime: 'Delete time',
  recommendTime: 'Recommend time',
  dateTime: 'Date time',
  userID: 'User ID',
  userName: 'User name',
  userAvator: 'Avatar',
  videoID: 'Video ID',
  videoDesc: 'Description',
  videoType: 'Classification',
  selectVideoType: 'Select video type',
  videoSource: 'Video source',
  selectVideoResource: 'Select video resource',
  search: 'Search',
  add: 'Add',
  addRecommend: 'Add recommend',
  addBoutique: 'Add Boutique',
  effectImmediately: 'Effect immediately',
  save: 'Save',
  saveAndComment: 'Save and comment',
  edit: 'Edit',
  boutique: 'Boutique',
  intervene: 'Intervene',
  release: 'Release',
  update: 'Update',
  batchRelease: 'Batch release',
  inLatest: 'Enter latest',
  batchRecommendation: 'Batch recommendation',
  operation: 'Operation',
  approve: 'Approve',
  beforeApprove: 'Before approve',
  afterApprove: 'After approve',
  delete: 'Delete',
  deleteName: 'Remove',
  batchDeletion: 'Batch deletion',
  inTotal: 'in total',
  page: 'page',
  gotoPage: 'go to page',
  pleaseChoose: 'Please choose',
  close: 'Close',
  view: 'View',
  videoPlay: 'Play',
  videoPass: 'Pass',
  bulkPass: 'Pass(Selected)',
  videoNoPass: 'Veto',
  bulkNoPass: 'Veto(Selected)',
  videoShield: 'Shield',
  bulkShield: 'Bulk shield',
  videoEdit: 'Edit',
  selectExeclFile: 'Select execl file',
  uploadFile: 'Upload',
  effectDay: 'Content limitation',
  weightValue: 'Content permissions',
  number: 'No.',
  verifySuccess: 'Verification Successfully',
  verifyFailed: 'Verification Failed',
  all: 'All',
  sexTypeMan: 'Male',
  sexTypeFemale: 'Female',
  choiceCountry: 'Choice country',
  publishingCountry: 'Pub-Country',
  allCountry: 'All countries',
  partCountry: 'Part of the country',
  prevPage: 'Previous',
  nextPage: 'Next',
  yesterday: 'Yesterday',
  beforeYesterday: 'Day before yesterday',
  nearlySevenDays: 'Last 7 days',
  pleaseSelect: 'Please select',
  confirm: 'Confirm',
  Inventory: 'Inventory',
  preview: 'Preview',
  avatar: 'Avatar',
  customForm: 'Custom form',
  status: 'Status',
  allVersion: 'All of the versions',
  partVersion: 'Part of the version',
  terminalSystem: 'Terminal System',
  appVersion: 'Application Version',
  publishVersion: 'Publishing Version',
  fixedVersion: 'Fixed Version',
  higherVersion: 'Higher Version',
  lowerVersion: 'Lower Version',
  empty: 'Empty',
  noData: 'Data loading...',
  emptyData: 'No Data',
  msgReqError: 'Request error, please refresh the page to retry the operation!',
  copySucc: 'Copy Success!',
  export: 'export',
  exportFailure: 'export failure!',
  import: 'import',
  upload: 'upload',
  downloadImportTemplate: 'download import template',
  recommendedCutOffTime: 'Recommended cut-off time',
  betweenEffectiveTime: 'The duration is between 1 and 999',
  expirationTime: 'expiration Time',

  // 内容库管理
  contentApproval: {
    description: 'Description',
    screenshots: 'Screenshots',
    approveSelected: 'Approve(Selected)',
    deleteSelected: 'Delete(Selected)',
    common: 'general',
    northAfrica: 'north africa',
    secondarylabel: 'The secondary label',
    contentApply: 'Content Apply'
  },

  // 内容管理
  contentManagement: {
    description: 'Description',
    play: 'Play',
    commentNum: 'Comments',
    realLikes: 'Real likes',
    likesShowed: 'Likes Showed',
    realViews: 'Real Views',
    viewsShowed: 'Views Showed',
    selectListType: 'Select List Type',
    popularInterference: 'Popular Interference',
    latestInterference: 'Latest Interference'
  },

  // 话题新增
  topicSave: {
    topicId: 'Topic ID',
    title: 'Topic title',
    belongTopic: 'Belong topic',
    position: 'NO',
    promptTitle: 'Topic title cannot be empty',
    description: 'Description',
    promptDescription: 'Description cannot be empty',
    recommendPosition: 'Recommend position',
    promptVideoFile: 'Please upload a video file',
    promptVideoImg: 'Please upload a video cover',
    promptPosition: 'Recommend position cannot be empty',
    effectiveTime: 'Timing',
    creatorID: 'Creator ID',
    creator: 'Creator',
    topicStatus: 'Topic state',
    topicStatusSelect: 'Please select',
    status: 'Status',
    videoNum: 'Video data',
    topicPutaway: 'On-line',
    topicSoldOut: 'Off-line',
    topicCover: 'Cover',
    topicLogo: 'Logo',
    topicUserBg: 'Topic user cover',
    iconConfig: 'Icon config',
    iconConfigSelect: 'Please select',
    musicConfig: 'Background music config',
    musicConfigSelect: 'Set background music',
    noMusicConfig: 'NO',
    musicBg: 'Background music',
    musicId: 'Music ID',
    contentInterference: 'Topic recommendation',
    addInterference: 'Add',
    editInterference: 'Edit interference',
    rankingInterference: 'Ranking Interference',
    classify: 'classify'
  },
  // icon管理
  iconManagement: {
    badgeDetail: 'Badge detail',
    badgeAdd: 'Add badge',
    badgeEdit: 'Edit badge',
    badgeId: 'Badge ID',
    badgeTheme: 'Badge theme',
    enterBadgeTheme: 'Please enter the theme of badge',
    badgeDesc: 'Badge description',
    enterBadgeDesc: 'Please enter the description of badge',
    uploadIcon: 'Upload icon',
    iconId: 'Icon ID',
    smallIcons: 'Small icons',
    largeIcons: 'Large icons',
    description: 'Description',
    badgeType: 'Badge type',
    badgeBg: 'Background picture',
    badgeLogo: 'Badge logo',
    validTime: 'Active time'
  },
  // 贴图管理
  chartletManagement: {
    chartletAdd: 'Add chartlet',
    chartletEdit: 'Edit chartlet',
    chartletId: 'Chartlet ID',
    chartletTheme: 'Chartlet title',
    enterChartletTheme: 'Please enter the title of chartlet',
    chartletLogo: 'Chartlet logo',
    uploadChartlet: 'Upload chartlet',
    chartletType: 'Chartlet type'
  },
  // message管理
  messageManagement: {
    messageAdd: 'Add message',
    messageConfig: 'Message config',
    messageDesc: 'Message Description',
    messageContent: 'Message content',
    messageExpire: 'Expire time',
    messageEdit: 'Edit message',
    messageId: 'Message ID',
    messageTheme: 'Title',
    messageAll: 'All',
    messageTopic: 'Topic',
    messageVideo: 'Video',
    messageUser: 'User',
    messageOutH5: 'Outside H5',
    messageGoogle: 'Google Play',
    messageInnerH5: 'Inside H5',
    messageTxt: 'Message',
    messageImageTxt: 'Image-text Message',
    jumpToShootingPage: 'Jump to shooting page',
    jumpToDownloadPage: 'Jump to app download',
    jumpToDuetPage: 'Jump to duet page',
    messageMusic: 'Music Page',
    enterMessageTheme: 'Please enter the title of message',
    enterMessageContent: 'Please enter the content of message',
    messageType: 'Message type',
    msgEnterTitle: 'Please enter a title',
    msgEnterMessageDesc: 'Please enter a message description',
    msgEnterSourceDetail: 'Please enter the source details',
    msgSelectExpirationTime: 'Please select the expiration time'
  },
  // sceneConfig管理
  sceneConfigManagement: {
    sceneConfigAdd: 'Add scene config',
    sceneConfig: 'Scene config',
    sceneConfigEdit: 'Edit scene config',
    sceneConfigId: 'Config ID',
    sceneTheme: 'Title',
    scenePercent: 'Percent',
    sceneConfigAll: 'All',
    sceneDataNetEase: 'Net Ease',
    sceneTypeCurrent: 'Current',
    sceneTypeHistory: 'History',
    sceneConfigType: 'Scene config type'
  },
  // banner管理
  bannerManagement: {
    bannerAdd: 'Add banner',
    bannerConfig: 'Banner config',
    bannerData: 'Extend data',
    bannerSource: 'Banner data',
    bannerEdit: 'Edit banner',
    bannerId: 'Banner ID',
    bannerStatus: 'Status',
    bannerEffective: 'Effective',
    setEffective: 'Set effective',
    setInvalid: 'Set invalid',
    bannerInvalid: 'Invalid',
    bannerTheme: 'Banner title',
    bannerImage: 'Banner image',
    bannerAll: 'All',
    bannerHide: 'Hide',
    bannerTopic: 'Topic',
    bannerVideo: 'Video',
    bannerOutH5: 'Outside H5',
    bannerInnerH5: 'Inside H5',
    bannerMusic: 'Music',
    jumpToShootingPage: 'Jump to shooting page',
    jumpToDownloadPage: 'Jump to app download',
    jumpToDuetPage: 'Jump to duet page',
    enterBannerTheme: 'Please enter the title of banner',
    uploadBanner: 'Upload banner image',
    bannerType: 'Banner type'
  },
  // 标签管理
  tagsManagement: {
    tagsAdd: 'Add tags',
    tag: 'tag',
    tagsEdit: 'Edit tags',
    tagsId: 'Tags ID',
    tagsTitle: 'Tags title',
    tagsTitleEnglish: 'Tags title(English)',
    tagsTitleFrench: 'Tags title(French)',
    tagsTitleArabic: 'Tags title(Arabic)',
    tagsTitleSwahili: 'Tags title(Swahili)',
    tagsTitleAmharic: 'Tags title(Amharic)',
    categoryTitle: 'Category title',
    firstTagsTitle: 'First tags title',
    secondTagsTitle: 'Second tags title',
    enterTagsTitle: 'Please enter the title of tags',
    firstTags: 'First tags',
    firstClassify: 'first Classify',
    secondTags: 'Second tags',
    threeTags: 'three Tags',
    fourTags: 'four Tags',
    commonTags: 'communal Tags',
    secondClassify: 'second Classify',
    belongClassify: 'belong Classify',
    videoTags: 'With tags',
    parentCategory: 'Belongs to category',
    parentTags: 'Belongs to tags',
    imageUrl: 'Tag Picture',
    addImage: 'Add Picture',
    setTags: 'Set tags',
    selectCategory: 'Select belongs to category',
    selectParentTags: 'Select belongs to tags',
    addParentTags: 'Please add at least one first tags',
    tagsType: 'Tags type',
    english: 'english',
    french: 'french',
    not: 'N/A',
    removeTag: 'Are you sure to remove this tag?',
    putTag: ' Are you sure to putaway this label?',
    maxChooseTips: 'No more than 6 tags can be checked!'
  },
  //标签区域配置
  tagAraeCfg: {
    tagGroupId: 'tag Group Id',
    tagSort: 'tag Sort',
    tagApplyArea: 'tag Apply Area'
  },
  // 音乐管理
  musicManagement: {
    add: 'Add',
    hide: 'Hide',
    show: 'Show',
    addMusicTit: 'Add Music',
    belongMusic: 'Belong Music',
    title: 'Title',
    description: 'Description',
    duration: 'Duration/ms',
    audition: 'Audition',
    rankingInterference: 'Ranking Interference',
    batchUpload: 'batch Upload',
    musicBatchUpload: 'music batch upload',
    uploadMusicFiles: 'upload Music Files',
    nextStep: 'next Step',
    lastStep: 'last Step',
    userUploadMusic:'user Upload Music',
    cmsPlatformMusic:'cms platform Music',
    videoSoundtrackStripMusic:'video Soundtrack Strip Music',
    addMusic: {
      musicFileUpload: 'Music file upload',
      musicBgUrl: 'Music cover',
      mustMP3Format: 'Must MP3 format',
      enterMusicName: 'Please enter the name of the music',
      musicSinger: 'Singer',
      musicSingerEnter: 'Please enter the music singer',
      musicDurationEnter: 'Please enter the music duration',
      noMoreThan40Characters: 'No more than 40 characters',
      browseUpload: 'Browse upload',
      uploadCompleted: 'Upload completed',
      uploadError: 'Upload error, please upload again',
      uploadMustMP3: 'Upload music files can only be MP3 format!',
      uploadMax50MB: 'Uploaded music file size can not exceed 50MB!',
      uploading: 'Uploading ...'
    }
  },
  // 视频管理
  videoManagement: {
    title: 'Title',
    description: 'Description',
    videoFile: 'Video file',
    chartletFile: 'Chartlet file',
    mvFile: 'MV file',
    selectFile: 'Select file',
    addVideo: {
      videoFileUpload: 'Video file upload',
      videoBgUrl: 'Video cover',
      mustMP4Format: 'Must MP4 format',
      enterVideoName: 'Please enter the name of the video',
      browseUpload: 'Browse upload',
      uploadCompleted: 'Upload completed',
      uploadError: 'Upload error, please upload again',
      uploadMustMP4: 'Upload video files can only be MP4 format!',
      uploadMax50MB: 'Uploaded video file size can not exceed 50MB!',
      uploadCountMax50: 'Uploaded video file over 50!',
      uploading: 'Uploading...'
    },
    addWebp: {
      mustWebpFormat: 'Must webp format',
      uploadMustWebp: 'Upload image files can only be webp format!'
    },
    addFile: {
      uploadMax50MB: 'Uploaded file size can not exceed 50MB!',
      mustZipFormat: 'Must zip format',
      selectFileRequire: 'Please select file first!',
      paramNotEmpty: 'Param cannot be empty!',
      uploadMustFile: 'Upload file can only be zip format!',
      uploadMustVideo: 'Upload file can only be .mp4 format!'
    }
  },
  // 位置干预管理
  positionManagement: {
    videoId: 'Video ID',
    positionOper: 'Position operation',
    default: 'Acquiescence',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
  },
  // 数据查询
  dataQuery: {
    comingSoon: 'Coming Soon!'
  },
  // 视频类型
  videoSourceTypeArr: {
    trueUser: 'User Upload',
    addRecommendVideo: 'Add recommend video',
    platformFlipagram: 'Flipagram'
  },
  // 视频类型
  videoTypeData: {
    all: 'All',
    music: 'Music',
    dance: 'Dance',
    sports: 'Sports',
    life: 'Life',
    food: 'Food',
    creativity: 'Creativity',
    football: 'Football',
    pets: 'Pets',
    funny: 'Funny',
    fashion: 'Fashion',
    talent: 'Talent',
    travel: 'Travel',
    others: 'Others'
  },
  // 用户管理
  userManagement: {
    funsNum: 'Funs count',
    sexVal: 'sex',
    sexTypeMan: 'Man',
    sexTypeFemale: 'Female',
    faceBookAccount: 'FaceBook Account',
    facebookUserName: 'Facebook User Name',
    enterFacebookUserName: 'Please enter the Facebook user name',
    enterUserID: 'Please enter the user ID',
    userIDEmpty: 'User ID cannot be empty',
    vskitIDEmpty: 'Vskit ID cannot be empty',
    username: 'Username',
    newUsers: 'New Users',
    newVipUsers: 'New VIP Users',
    newOperateUsers: 'New Operate Users',
    isVip: 'Is Vip',
    isRecomend: 'Is Recommend',
    recommend: 'Recommend',
    noRecommend: 'Not Recommend',
    isRecommendVideo: 'Do you recommend video?',
    cancelRecommend: 'Cancel Recommend',
    newRecommendUsers: 'New Recommend',
    isDeleteVideo: 'Delete current video?',
    yes: 'Yes',
    no: 'No',
    isWhitelist: 'Is it a whitelist',
    setWhite: 'Set white',
    setOperate: 'Set operate',
    batchSetWhite: 'Batch set white',
    userCategory: 'User Category',
    avatar: 'Avatar'
  },

  // feedBack
  feedBackManagement: {
    feedbackContent: 'Feedback content',
    feedbackType: 'Feedback type',
    export: 'export',
    ClientVersionCode: 'Apk version',
    OsVersion: 'System version',
    Model: 'Iphone model',
    Platform: 'Iphone system'
  },
  // 反关注
  ExternalAccountCraw: {
    opposite: 'The focus on',
    notOpposite: 'Not focus on',
    oppositeTitle: 'Add external crawl account',
    choiceSourece: 'Please select the source',
    sourece: 'sourece'
  },
  // 达人用户列表
  TalentUserList: {
    addTalentUserList: 'Add talent user',
    pleaseAddTalentUser: 'please add talent user'
  },
  // 马甲账号列表
  vestUserList: {
    addVestUser: 'Add vest account'
  },

  // push 管理
  PushManagement: {
    pushDesc: 'Push describe',
    publishingGroup: 'Pub-Group',
    publishingCountry: 'Pub-Country',
    choiceSystem: 'Choice system',
    system: 'system',
    choiceSex: 'Choice sex',
    allSex: 'All sex',
    choiceCountry: 'Choice country',
    allSystem: 'All system',
    choiceZone: 'Select the time zone',
    zone: 'time zone',
    sendTimeType: 'Sending time mode',
    pictureStyle: 'Picture style',
    bigPicture: 'Big picture',
    smallPicture: 'Small picture',

    nowSend: 'Immediate transmission',
    SendByCountryTime: 'Send by country time',
    SentByAllCountryTimePoints: 'Sent by all country time points',

    publishingTime: 'Release time',
    uploadPictures: 'Upload pictures',
    messageDetailCannotEmpty: 'Message Detail Cannot Empty',
    releaseTimeCannotBeEmpty: 'Release time cannot be empty',
    pleaseSelectTimeZone: 'Please select time zone',
    pleaseUploadBigPicture: 'Please upload the big picture',
    bigPictureLimit: 'The size of uploaded picture must be w648px * h302px or w302px * h302px, and less then 50KB',
    pushConfig: 'Push the configuration'
  },
  // pull 管理
  PullManagement: {
    configId: 'Configuration Id',
    msgId: 'Message Id',
    pullDesc: 'Pull describe',
    pullConfig: 'Pull the configuration',
    sendStat: 'Send state',
    suspend: 'Suspend Status',
    notStart: 'otStart Status',
    running: 'Running  Status',
    stopped: 'Stopped  Status',
    recovery: 'Recovery',

    pictureStyle: 'Picture style',
    bigPicture: 'Big picture',
    smallPicture: 'Small picture',
    pleaseUploadBigPicture: 'Please upload the big picture',
    bigPictureLimit: 'The size of uploaded picture must be w648px * h302px or w302px * h302px, and less then 50KB',

    verify: 'Verify',
    uploadPictures: 'Upload pictures',
    country: 'Country',
    allCountry: 'All of the countries',
    partCountry: 'Part of the country',
    allVersion: 'All of the versions',
    partVersion: 'Part of the version',
    terminalSystem: 'Terminal System',
    appVersion: 'Application Version',
    sex: 'Gender',
    newUser: 'Add user conditions',
    silentUser: 'Silent user condition',
    sendType: 'Send Type',
    sendNow: 'Send immediately',
    sendByTime: 'Send by time',
    sendStartTime: 'Send start date',
    sendEndTime: 'Send ending date',
    openStatus: 'Open',
    filter: 'Filter',
    exclude: 'Exclude',

    newUserType1: 'Add users 1 day ago',
    newUserType7: 'Add users 7 days ago',
    newUserType15: 'Add users 15 days ago',
    newUserType30: 'Add users 30 days ago',
    silentUserType3: 'Users who have not visited for 3 days',
    silentUserType7: 'Users who have not visited for 7 days',
    silentUserType14: 'Users who have not visited for 14 days',
    silentUserType30: 'Users who have not visited for 30 days',

    messageTitleCannotEmpty: 'Message title cannot be empty',
    messageDetailCannotEmpty: 'Message detail cannot be empty',
    messageTypeCannotEmpty: 'Please select message type',
    enterVideoId: 'Please enter the ID of the video',
    sendStartTimeCannotBeEmpty: 'Send start date cannot be empty',
    sendEndTimeCannotBeEmpty: 'Send ending date cannot be empty',
    selectFilterOrExclude: 'please select Filter or Exclude',
    addUserConditions: 'New user condition information is incomplete',
    silentUserConditions: 'Silent user condition information is incomplete'
  },

  // 举报
  Report: {
    reportType: 'report type',
    reportdec: 'report description',
    reportReply: 'report reply',
    reportUserId: 'report ID',
    officialReply: 'official reply',
    viewVideo: 'view video'
  },
  findPageManagement: {
    briefDescription: 'brief description',
    iconType: 'icon type',
    pleaseSelectLabel: 'please select label',
    NotAllEmpty: 'not all empty',
    empty: 'empty'
  },
  adSpaceConfig: {
    platform: 'platform',
    'ADUnit': 'AD Unit',
    channel: 'channel',
    version: 'version',
    OpenCountry: 'Open Country',
    AdvertisingSpaceType: 'Advertising Space Type',
    AdPosition: 'Ad Position',
    newUser: 'new User',
    'showTime': 'show Time',
    'openClose': 'open Close',
    'noDisplayAd': 'no Display Ad',
    'displayAd': 'display Ad',
    'adId': 'ad Id',
    'start': 'start',
    'indexFloat': 'index Float',
    'startPopUp': 'start PopUp',
    'exitPopUp': 'exit PopUp',
    'tastCenter': 'tast Center',
    'infoStream': 'info Stream',
    'builtin': 'builtin',
    'showNumber': 'show Number',
    'editAdvertInfo': 'edit Advert Info',
    'addAdvertInfo': 'add Advert Info',
    'open/close': 'on-off status'
  },
  addCommentLibrary: {
    addCommentLibrary: 'Comment Library',
    comment: 'comment'
  },
  deleteCommentLibrary: {
    deleteCommentLibrary: 'Comment  Delete Library',
    deleteTime: 'delete Time'
  },
  musicClassificationManagement: {
    classificationId: 'classification Id',
    classificationPicture: 'classification Picture',
    classificationMusicNum: 'classification Music Num',
    sort: 'sort',
    classificationName: 'classification Name',
    addMusicClassification: 'add Music Classification',
    editMusicClassification: 'edit Music Classification',
    isPutaway: 'Whether the shelf'
  },
  setPublish: {
    'publishTerminal': 'publish Terminal',
    'publishAndriodVersion': 'publish Andriod Version',
    'publishIosVersion': 'publish Ios Version',
    'publishArea': 'publish Area',
    'publishPlatform ': 'publish Platform',
    anSpecifyVersion: 'Android Specify the version',
    anLessVersion: 'Android Less than or equal to version',
    anGreaterVersion: 'Android Greater than or equal to version',
    iosGreaterVersion: 'iOS Greater than or equal to version',
    iosLessVersion: 'iOS Less than or equal to version',
    iosSpecifyVersion: 'iOS Specify the version'
  },
  // 国家
  country: {
    'All': 'All',
    'CHN': 'China',
    'NGA': 'Nigeria',
    'KEN': 'Kenya',
    'GHA': 'Ghana',
    'CIV': 'Cote d\'Ivoire',
    'TZA': 'Tanzania',
    'SEN': 'Senegal',
    'UGA': 'Uganda',
    'CMR': 'Cameroon',
    'ZMB': 'Zambia',
    'ZAF': 'South Africa',
    'ETH': 'Ethiopia',
    'RWA': 'Rwanda',
    'EGY': 'Egypt',
    'MAR': 'Morocco'
  },
  // 国家
  countryTwo: {
    'ALL': 'All',
    'CH': 'China',
    'NG': 'Nigeria',
    'KE': 'Kenya',
    'GH': 'Ghana',
    'CI': 'Cote d\'Ivoire',
    'TZ': 'Tanzania',
    'SE': 'Senegal',
    'UG': 'Uganda',
    'CM': 'Cameroon',
    'ZM': 'Zambia',
    'ZA': 'South Africa',
    'ET': 'Ethiopia',
    'RW': 'Rwanda',
    'EG': 'Egypt',
    'MA': 'Morocco',
    'SA': 'Saudi Arabia',
    'SN': 'Senegal',
    'HK': 'Hong Kong',
    'CN': 'China'
  },
  ...enLocale
};