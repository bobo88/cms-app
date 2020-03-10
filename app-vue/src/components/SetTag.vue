<template>
  <div class="set-tag">
   	<el-dialog
      center
      :title="$t('message.tagsManagement.setTags')"
      :visible.sync="dataTags.visible"  :before-close='closeOparete'
      width="80%">
      <div class="set-tags-content f24">
        <p class="video-id"><span class="fb">{{ $t("message.videoID") }}：</span> {{ dataTags.videoId }}</p>
        <p class="video-desc mb10"><span class="fb">{{ $t('message.contentManagement.description') }}：</span> {{ dataTags.title }}</p>

        <div class="mb20">
          <span class="fb">{{ $t("message.tagsManagement.categoryTitle") }}：</span>
          <el-select clearable size="mini" class="w300 f24" v-model="categoryIdSelect" :placeholder="$t('message.tagsManagement.selectCategory')">
            <el-option class="f24" v-for="item in categoryList" :key="item.categoryId" :label="item.title" :value="item.categoryId"></el-option>
          </el-select>
        </div>

				<div class="tags-box mb20">
					<h3>{{ $t("message.tagsManagement.firstClassify") }}：</h3>
					<div class="tags-list">
						<el-checkbox-group v-model="firstTagsSelect" :max="3">
							<el-checkbox v-for="item in firstTagsList" :label="item.id" :key="item.id" class="w200 mb10 f24">{{ item.title }}</el-checkbox>
						</el-checkbox-group>
					</div>
					<div class="selected-tags" v-if='firstTagsSelect.length>0'>Selected: {{firstTagsSelectTitle}}</div>
				</div>

				<div class="tags-box mb20">
					<h3>{{ $t("message.tagsManagement.secondClassify")  }}：</h3>
					<div class="tags-list">
						<el-checkbox-group v-model="secondTagsSelect" :max="3">
						<div  v-for="(item, index) in filterSecondTags" :key="index" class='secondTagCenter'>
							<el-checkbox :label="item.id" :key="item.id" class="mb10 eles">{{ item.title }}
							</el-checkbox>
							<!-- <i class="el-icon-caret-bottom icon-customize iconfont  f16 ml20" v-if='selectId === item.id'></i> -->
							<!-- <i class="el-icon-caret-right icon-customize iconfont  f16 ml20" v-else   @click='handlerExpansion(item.id)'></i> -->
						</div>             
						</el-checkbox-group>
					</div>
					<div class="selected-tags">Selected: {{secondTagsSelectTitle}}</div>
				</div>

				<div class="tags-box mb20">
					<h3>{{ $t("message.tagsManagement.tag")  }}</h3>
					<!-- :default-expanded-keys="dataTags.labelIds"
						:default-checked-keys="dataTags.labelIds"-->
					<div class="tags-list">
						<el-tree :data="tagsTreeList" ref='tree' class="f24" :show-checkbox='showCheckBox' :props="defaultProps" node-key="id"  
						@check-change='handleCheckChange'  check-strictly></el-tree>
					</div>
					<div class="selected-tags" v-if='selectAllTag.length>0'>Selected: {{selectAllTag}}</div>
				</div>

        <div class="mb20">
          <span class="fb">{{ $t("message.contentApproval.contentApply") }}: </span>
          <el-select v-model="dataTags.scopeArea" size="mini" class="w300" :placeholder="$t('message.contentApproval.contentApply')">
            <el-option v-for='item in contentTrialItem' :key="item.value" :label="item.name" :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="closeOparete">{{ $t("message.PromptInformation.NO") }}</el-button>
        <el-button size="small" @click="saveAndComment(0)" type="primary">{{ $t("message.save") }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
	name: 'set-tag',
	props: {
    dataTags: {
      type: Object,
      required: true
    }
	},
	created () {
    this.getFirstTagsList();
    this.getSecondTagsList();
    this.getLabelTree();
  },
  data () {
    return {
	  dialogVisible: false,
	  defaultProps:{
        children: 'childLabelInfos',
        label: 'title'
      },
      // 类目名称
      categoryList: [],
      categoryIdSelect: '',
      // 一级标签
      firstTagsList: [],
      firstTagsSelect: [],
      // 二级标签
      secondTagsList: [],
      secondTagsSelect: [],
      tagsTreeAllList: [],
      tagsTreeList: [],
      selectId:'',
      selectAllTag:[],
      selectAllTagCpoy:[],
      labelIds:[],
      showCheckBox:true
    }
  },
  computed: {
    filterSecondTags () {
      // x如果有选择一级标签，则筛选出 <当前一级标签> 下的 <二级标签> 列表
      if (Boolean(this.firstTagsSelect)) {
        return this.secondTagsList.filter(i => this.firstTagsSelect.includes(i.parentId));
      }
      return this.secondTagsList
    },
    firstTagsSelectTitle(){
      if (Boolean(this.firstTagsSelect)) {
        let data =  this.firstTagsList.filter(i => this.firstTagsSelect.includes(i.id));
            let dataOne =  data.map(i=>{
              return i.title
            });
        return  dataOne.join(',')
      }
      return ''
    },
    secondTagsSelectTitle(){
      if (Boolean(this.secondTagsSelect)) {
        let data =  this.secondTagsList.filter(i => this.secondTagsSelect.includes(i.id));
        let dataOne =  data.map(i=>{
          return i.title
        });
        return  dataOne.join(',')
      }
      return ''
    },
    contentTrialItem () {
      return [
        {
          name: this.$t('message.tagsManagement.not'),
          value: 'N/A'
        },
        {
          name: this.$t('message.contentApproval.common'),
          value: 'GENERAL'
        },
         {
          name: this.$t('message.contentApproval.northAfrica'),
          value: 'NORTH_AFRICA'
        },
        {
          name: this.$t('message.tagsManagement.english'),
          value: 'ENGLISH'
        },
        {
          name: this.$t('message.tagsManagement.french'),
          value: 'FRENCH'
        }
      ]
    }
  },
  mounted() {},
  methods: {
    // 共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点
    handleCheckChange(a, b, c){
      let dataStr =  this.$refs.tree.getCheckedNodes().map((i) =>{
        return i.title;
      });
      // console.log(dataStr, a, b, c)
      if (dataStr && dataStr.length > 6) {
        // setChecked: (key/data, checked, deep) 接收三个参数，1. 勾选节点的 key 或者 data 2. boolean 类型，节点是否选中 3. boolean 类型，是否设置子节点 ，默认为 false
        this.$refs.tree.setChecked(a.id, false, false);
        this.$message.error(this.$t('message.tagsManagement.maxChooseTips'));
        return false;
      }
      this.labelIds =  this.$refs.tree.getCheckedNodes().map((i) =>{
        return i.id;
      });
      this.selectAllTag = dataStr.join(',');
      this.selectAllTagCpoy = dataStr;
    },
    handlerExpansion(value){
			let tagsTempArr = [...value];
      this.tagsTreeList = this.tagsTreeAllList.filter(i => value.includes(i.categoryId));
      this.showCheckBox = this.secondTagsSelect.includes(...tagsTempArr);
      this.labelIds = '';
      this.selectAllTag = '';
      this.selectAllTagCpoy = '';
    },
    // 设置标签 - 获取一级标签列表
    getFirstTagsList () {
      this.$Api.getFirstTagsListData().then(response => {
        if (0 === response.code) {
          this.firstTagsList = response.data || [];

          // 分类对应一级标签就好啦
          this.categoryList = this.firstTagsList.map(item => item = {categoryId:item.id, title: item.title});
        } else {
          this.$message.error(response.msg);
        }
      });
    },
    // 设置标签 - 获取二级标签列表
    getSecondTagsList () {
      let options = {
        pageSize: 1000,
        pageIndex: 0,
        tagsType: 1,
        effectStatus: 1
      };
      this.$Api.getSecondTagsListData(options).then(data => {
        if (parseInt(data.code) === 0) {
          if (data.data.dataList.length > 0) {
            this.secondTagsList = data.data.dataList;
          } else {
            this.secondTagsList = [];
          }
        } else {
          this.$message.error(data.msg);
        }
      });
    },
    //得到标签树
    async getLabelTree(){
      let data = await this.$Api.getLabelTree();
       if (parseInt(data.code) === 0) {
          if (data.data.length > 0) {
            this.tagsTreeAllList = data.data;
          } else {
            this.tagsTreeAllList = [];
          }
        } else {
          this.$message.error(data.msg);
        }
    },
    // 验证
    validateBeforeSubmit () {
      // 选择类目
      if (!this.categoryIdSelect) {
        this.$message.error(this.$t('message.tagsManagement.selectCategory'));
        return false;
      }
      // 选择二级标签
      if (this.secondTagsSelect && this.secondTagsSelect.length === 0) {
        this.$message.error(this.$t('message.tagsManagement.selectParentTags'));
        return false;
      }
      return true;
    },
    /**
     * saveAndComment: 参数为 0 表示仅保存设置标签， 参数为 1 时表示设置标签同时下发评论
     */
    saveAndComment (type) {
      // 提交之前，先验证必填项
      if (!this.validateBeforeSubmit()) {
        return false;
      }
      let tempTags = this.secondTagsList.filter(i => this.secondTagsSelect.includes(i.id)).map(i => i.title).join(',');
      let tempTitle = this.categoryList.filter(i => i.categoryId === this.categoryIdSelect)[0].title;
      let options = {
        videoId: this.dataTags.videoId || '',
        createdTime: this.dataTags.createdTime || 0,
        categoryId: this.categoryIdSelect || '',
        scopeArea: this.dataTags.scopeArea || '',
        title: tempTitle || '',
        labelIds :this.labelIds,
        selectAllTag :this.selectAllTagCpoy,
        tags: tempTags || ''
      };
      // 返回给回调函数，需要带上 当前设置标签的视频 下标值
      let rtnOptions = Object.assign({}, options, {index: this.dataTags.index});
      // 如果不存在 dataTags.categoryId， 说明当前视频没有设置过标签，当前操作属于首次
      if (!this.dataTags.categoryId) {
        this.$Api.saveVideoTagsInfoData(options).then(data => {
          if (parseInt(data.code) === 0) {
            this.$emit('cb', rtnOptions);
            // 关闭当前弹窗
            this.closeOparete();
          } else {
            this.$message.error(data.msg);
          }
        });
      } else {
        this.$Api.updateVideoTagsInfoData(options).then(data => {
          if (parseInt(data.code) === 0) {
            this.$emit('cb', rtnOptions);
            // 关闭当前弹窗
            this.closeOparete();
          } else {
            this.$message.error(data.msg);
          }
        });
      }
    },
    // 取消操作
    closeOparete () {
      this.dataTags.visible = false;
      this.categoryIdSelect = '';
      this.firstTagsSelect = [];
      this.secondTagsSelect = [];
      this.tagsTreeList= [];
      this.selectId='';
      this.selectAllTag=[];
      this.labelIds=[]
    }
  },
  watch: {
    dataTags () {
      this.categoryIdSelect = this.dataTags.categoryId;
      // 如果没有设置“内容适用”字段，则默认设置为“N/A”
      !this.dataTags.scopeArea ? this.dataTags.scopeArea = 'N/A' : '';
    },
    filterSecondTags () {
      // 已选中的二级标签， 需要筛选去掉 < 未选中一级标签的二级标签 > 数据
        let rtn = this.secondTagsList.filter(i => this.firstTagsSelect.includes(i.parentId));
        let tempSecondTagsSelect = [].concat(this.secondTagsSelect);
        let currentSecondTagsIdSelect = rtn.map(i => i.id);
        this.secondTagsSelect = tempSecondTagsSelect.filter(i => currentSecondTagsIdSelect.includes(i));
    },
    secondTagsSelect(){
			//标签有一个默认展示功能
			// console.log(222, this.secondTagsSelect)
      this.handlerExpansion(this.secondTagsSelect);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.video-id, .video-desc {
		font-size: 24px;
	}
	h3 {
		font-size: 24px;
	}
  .selected-tags {
		color: #67C23A;
	}
</style>