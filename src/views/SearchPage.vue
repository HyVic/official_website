<template>
  <div class="nav-choose">
    <ul>
      <li v-for="(item,index) in chooseList" :key="item" @click="handleChoose(index)" :class="{active: chooseIndex===index}">{{item}}</li>
    </ul>
  </div>
  <div class="content">
    <div class="search-box">
      <div class="search-input">
        <el-input v-model="searchList.marker" style="width: 250px" placeholder="Please enter marker" />
        <el-input v-model="searchList.celltype" style="width: 250px" placeholder="Please enter celltype" />
        <el-input v-model="searchList.diseaseTreatment" style="width: 250px" placeholder="Please enter disease/treatment" />
      </div>
      <button @click="submitSearch">Search</button>
    </div>
    <div class="result-table">
      <el-table :data="tableData" border stripe style="width: 100%">
        <el-table-column label="project">
          <template #default="scope">
            <span class="project" @click="centerDialogVisible = true">{{ scope.row.project }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="sample" label="sample" />
        <el-table-column prop="tissueCellline" label="tissue/cellline" />
        <el-table-column prop="specie" label="specie" />
        <el-table-column prop="age" label="age" />
        <el-table-column prop="sex" label="sex" />
        <el-table-column prop="diseaseTreatment" label="disease/treatment" />
        <el-table-column prop="sequence" label="sequence" />
        <el-table-column prop="source" label="source(GEO etc.)" />
        <el-table-column prop="celltypes" label="celltypes&marker" />
      </el-table>
    </div>
  </div>
  <project-data v-if="centerDialogVisible" @close="centerDialogVisible = false"></project-data>
</template>

<script setup lang="ts">
import ProjectData from '../components/common/ProjectData.vue'
import { ref, reactive } from 'vue'
const chooseList = ref(['single-cell RNAseq','bulk RNAseq','spatial transcriptome','genome','proteome','metabolome'])
const chooseIndex = ref(0)
const handleChoose = (index: number) => {
  chooseIndex.value = index
}
const searchList = reactive({
  marker:'',
  celltype:'',
  diseaseTreatment:''
})
const submitSearch = () => {
  console.log(searchList.marker, searchList.celltype, searchList.diseaseTreatment)
}
const tableData = [
  {
    project: 'LPS00001',
    sample: 'No. 189, Grove St, Los Angeles',
    tissueCellline: 'No.Angeles',
    specie: 'No.Angeles',
    age: 35,
    sex: '男',
    diseaseTreatment: 'sdg',
    sequence: 'sdg',
    source: 'sdg',
    celltypes: 'sdg',
  },
  {
    project: 'LPS00001',
    sample: 'No. 189, Grove St, Los Angeles',
    tissueCellline: 'No.Angeles',
    specie: 'No.Angeles',
    age: 35,
    sex: '男',
    diseaseTreatment: 'sdg',
    sequence: 'sdg',
    source: 'sdg',
    celltypes: 'sdg',
  },
  {
    project: 'LPS00001',
    sample: 'No. 189, Grove St, Los Angeles',
    tissueCellline: 'No.Angeles',
    specie: 'No.Angeles',
    age: 35,
    sex: '男',
    diseaseTreatment: 'sdg',
    sequence: 'sdg',
    source: 'sdg',
    celltypes: 'sdg',
  },
  {
    project: 'LPS00001',
    sample: 'No. 189, Grove St, Los Angeles',
    tissueCellline: 'No.Angeles',
    specie: 'No.Angeles',
    age: 35,
    sex: '男',
    diseaseTreatment: 'sdg',
    sequence: 'sdg',
    source: 'sdg',
    celltypes: 'sdg',
  },
  {
    project: 'LPS00001',
    sample: 'No. 189, Grove St, Los Angeles',
    tissueCellline: 'No.Angeles',
    specie: 'No.Angeles',
    age: 35,
    sex: '男',
    diseaseTreatment: 'sdg',
    sequence: 'sdg',
    source: 'sdg',
    celltypes: 'sdg',
  },
  {
    project: 'LPS00001',
    sample: 'No. 189, Grove St, Los Angeles',
    tissueCellline: 'No.Angeles',
    specie: 'No.Angeles',
    age: 35,
    sex: '男',
    diseaseTreatment: 'sdg',
    sequence: 'sdg',
    source: 'sdg',
    celltypes: 'sdg',
  },
  {
    project: 'LPS00001',
    sample: 'No. 189, Grove St, Los Angeles',
    tissueCellline: 'No.Angeles',
    specie: 'No.Angeles',
    age: 35,
    sex: '男',
    diseaseTreatment: 'sdg',
    sequence: 'sdg',
    source: 'sdg',
    celltypes: 'sdg',
  },
  {
    project: 'LPS00001',
    sample: 'No. 189, Grove St, Los Angeles',
    tissueCellline: 'No.Angeles',
    specie: 'No.Angeles',
    age: 35,
    sex: '男',
    diseaseTreatment: 'sdg',
    sequence: 'sdg',
    source: 'sdg',
    celltypes: 'sdg',
  },
  {
    project: 'LPS00001',
    sample: 'No. 189, Grove St, Los Angeles',
    tissueCellline: 'No.Angeles',
    specie: 'No.Angeles',
    age: 35,
    sex: '男',
    diseaseTreatment: 'sdg',
    sequence: 'sdg',
    source: 'sdg',
    celltypes: 'sdg',
  },
  {
    project: 'LPS00001',
    sample: 'No. 189, Grove St, Los Angeles',
    tissueCellline: 'No.Angeles',
    specie: 'No.Angeles',
    age: 35,
    sex: '男',
    diseaseTreatment: 'sdg',
    sequence: 'sdg',
    source: 'sdg',
    celltypes: 'sdg',
  },
  {
    project: 'LPS00001',
    sample: 'No. 189, Grove St, Los Angeles',
    tissueCellline: 'No.Angeles',
    specie: 'No.Angeles',
    age: 35,
    sex: '男',
    diseaseTreatment: 'sdg',
    sequence: 'sdg',
    source: 'sdg',
    celltypes: 'sdg',
  },
]
const centerDialogVisible = ref(false)
</script>
<style scoped lang="scss">
$color-red: #6d1d29;
$color-blue: #254682;
$color-baby-blue: #365baa;
@mixin layout($align,$justify){
  display: flex;
  align-items: $align;
  justify-content: $justify;
}
.nav-choose{
  width: 100%;
  height: 100px;
  padding: 0 20px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  margin: 20px 0;
  ul{
    li{
      background-color: #ededed;
      color: #4d4d4d;
      padding: 5px 15px;
      border-radius: 5px;
      cursor: pointer;
      margin-right: 10px;
      font-size: 19px;
      &:hover{
        background-color: $color-baby-blue;
        color: white;
      }
    }
    .active{
      background-color: $color-blue;
      color: white;
    }
    @include layout(center,flex-start)
  }
  @include layout(center,flex-start)
}
.content{
  width: 100%;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;
  .search-box{
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    .search-input{
      :deep .el-input{
        margin-right: 10px;
        height: 40px;
      }
    }
    @include layout(center,space-between);
    button{
      outline: none;
      color: white;
      background-color: $color-baby-blue;
      border: none;
      border-radius: 5px;
      font-size: 15px;
      padding: 5px 10px;
      &:hover{
        background-color: $color-blue;
      }
    }
  }
  .result-table{
/*    :deep .el-table .el-table__cell{
      padding: 0;
    }*/
    .dialog{
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background-color: rgba(56, 52, 52, 0.62);
      z-index: 3;
      @include layout(center,center);
      .dialog-inner{
        width: 80%;
        height: 80%;
        background-color: white;
        border-radius: 10px;
        .dialog-top{
          height: 50px;
          border-bottom: 1px solid #e6e6e6;
          padding: 0 30px;
          @include layout(center,space-between);
          .iconfont{
            cursor: pointer;
          }
        }
        .common-cont{
          width: 100%;
          padding: 30px;
          box-sizing: border-box;
          .title{
            text-align: left;
            padding-bottom: 10px;
          }
        }
        .dialog-basic-info{
          height: auto;
          .el-form {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            border: 1px dashed #b3b3b3;
            padding: 20px 20px 10px;
            box-sizing: border-box;
            border-radius: 10px;
            .el-form-item {
              width: 45%;
              margin-right: 10%;
              margin-bottom: 10px;
              :deep .el-form-item__label{
                width: 150px;
                justify-content: flex-start;
                font-weight: bold;
              }
              .el-form-item__content{
                width: calc(100% - 150px);
              }
              .label{
                border: 1px dashed #b3b3b3;
                padding: 0 20px;
                border-radius: 5px;
                width: calc(100% - 0px);
                text-align: left;
              }
              &:nth-child(2n) {
                margin-right: 0;
              }
              &:last-child{
                width: 100%;
                margin-right: 0;
                .label{
                  line-height: 1.5;
                  padding: 10px 20px
                }
              }
            }
          }
        }
        .dialog-content{
          .bottom-content{

          }
        }
      }
    }
    .data-detail{
      width: 90%;
      height: 90%;
    }
  }
}
</style>