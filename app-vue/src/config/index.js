/**
 * 配置文件：用于配置相关参数，如网络请求地址、静态资源的访问路径等
 */
export default {
    /**
     * 网页的请求域名
     */
    DOMAIN_HTML: process.env.DOMAIN_HTML,

    /**
     * 网页的文件上传请求域名
     */
    UPLOAD_BASE_URL: process.env.UPLOAD_BASE_URL,

    /**
     * 项目的主题
     */
    TITLE: process.env.TITLE,

    /**
     * 静态资源的请求域名
     */
    DOMAIN_RESOURCE: process.env.DOMAIN_RESOURCE,

    /**
     * API的请求地址（不包括API名称），必须/结尾
     * 示例：http://dev.api.com/v1/
     * @type {string}
     */
    API_BASE_URL: process.env.VUE_APP_API_BASE_URL,

    /**
     * API请求的超时时间（普通），单位：毫秒（ms）
     * @type {number}
     */
    API_NORMAL_TIMEOUT: process.env.VUE_APP_API_NORMAL_TIMEOUT * 1000,

    /**
     * API请求的超时时间（上传），单位：秒（s）
     * @type {number}
     */
    API_UPLOAD_TIMEOUT: process.env.VUE_APP_API_UPLOAD_TIMEOUT,

    /**
     * 系统的DEBUG状态：
     * 开启则会出现一些DEBUG的提示信息或工具按钮等，以便于更好的开发调试
     * @type {boolean}
     */
    DEBUG: process.env.DEBUG,

    /**
     * 引入 iframe 的URL
     * @type {string}
     */
    IFRAME_URL: process.env.IFRAME_URL,

    /**
     * 用户登录身份id
     * @type {string|number}
     */
    USER_ID: process.env.USER_ID,

    /**
     * 用户登录身份token
     * @type {string|string}
     */
    USER_TOKEN: process.env.USER_TOKEN
}

