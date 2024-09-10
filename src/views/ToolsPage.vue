<template>
  <div class="nav-choose">
    <ul>
      <li v-for="(item,index) in chooseList" :key="item" @click="handleChoose(index)" :class="{active: chooseIndex===index}">{{item}}</li>
    </ul>
  </div>
  <div style="text-align: left;padding: 20px 0 10px;">UPLOAD DATA</div>
  <div class="content">
    <div class="bottom-content">
      <el-tabs v-model="editableTabsValue" class="demo-tabs">
        <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
          <el-steps class="steps" :active="active" finish-status="success" simple>
            <el-step title="Fill project information"></el-step>
            <el-step title="Fill samples information"></el-step>
            <el-step title="Choose file for upload"></el-step>
          </el-steps>
<!--          <el-button style="margin-top: 12px" @click="next">Next step</el-button>-->

          <div class="upload-content" v-if="active===0">
            <div class="dialog-basic-info common-cont">
              <el-form :model="formInfo">
                <el-form-item label="Title">
                  <el-input v-model="formInfo.Title" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Species">
                  <el-select v-model="formInfo.Species" placeholder="Please select a Species">
                    <el-option v-for="item in SpeciesList" :key="item.value" :label="item.label" :value="item.value"/>
                  </el-select>
                </el-form-item>
                <el-form-item label="Tissue">
                  <el-input v-model="formInfo.Tissue" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Datatype">
                  <el-select v-model="formInfo.Datatype" placeholder="Please select a Datatype">
                    <el-option v-for="item in DatatypeList" :key="item.value" :label="item.label" :value="item.value"/>
                  </el-select>
                </el-form-item>
                <el-form-item label="Description">
                  <el-input v-model="formInfo.Description" type="textarea" />
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div class="content-item" v-else-if="active===1">
            <div class="result-table">
              <el-table :data="uploadData" border stripe>
                <el-table-column prop="projectID" label="projectID" />
                <el-table-column prop="year" label="year" />
                <el-table-column prop="journal" label="journal" >
                  <template #default="scope">
                    <el-input v-model="scope.row.journal" @change="handleEdit(scope.$index, scope.row)"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="title" label="title" />
                <el-table-column prop="link" label="link" >
                  <template #default="scope">
                    <el-input v-model="scope.row.link" @change="handleEdit(scope.$index, scope.row)"></el-input>
                  </template>
                </el-table-column>

                <el-table-column prop="Description" label="Description" />

                <el-table-column prop="samples" label="samples" >
                  <template #default="scope">
                    <el-input v-model="scope.row.samples" @change="handleEdit(scope.$index, scope.row)"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="source" label="source（GEO num）" >
                  <template #default="scope">
                    <el-input v-model="scope.row.source" @change="handleEdit(scope.$index, scope.row)"></el-input>
                  </template>
                </el-table-column>

                <el-table-column prop="Species" label="Species" />

                <el-table-column prop="raceSubspecies" label="race/subspecies" >
                  <template #default="scope">
                    <el-input v-model="scope.row.raceSubspecies" @change="handleEdit(scope.$index, scope.row)"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="Group" label="Group" >
                  <template #default="scope">
                    <el-input v-model="scope.row.Group" @change="handleEdit(scope.$index, scope.row)"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="diagnosisDisease" label="Diagnosis/disease" >
                  <template #default="scope">
                    <el-input v-model="scope.row.journal" @change="handleEdit(scope.$index, scope.row)"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="Sequence" label="Sequence" >
                  <template #default="scope">
                    <el-input v-model="scope.row.Sequence" @change="handleEdit(scope.$index, scope.row)"></el-input>
                  </template>
                </el-table-column>

                <el-table-column prop="Tissues" label="Tissues" />

                <el-table-column prop="age" label="age" >
                  <template #default="scope">
                    <el-input v-model="scope.row.age" @change="handleEdit(scope.$index, scope.row)"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="sex" label="sex" >
                  <template #default="scope">
                    <el-input v-model="scope.row.sex" @change="handleEdit(scope.$index, scope.row)"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="Smoking" label="Smoking Status(or hisory)" >
                  <template #default="scope">
                    <el-input v-model="scope.row.Smoking" @change="handleEdit(scope.$index, scope.row)"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="Death" label="Cause of Death" >
                  <template #default="scope">
                    <el-input v-model="scope.row.Death" @change="handleEdit(scope.$index, scope.row)"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="optional" label="optional" >
                  <template #default="scope">
                    <el-input v-model="scope.row.optional" @change="handleEdit(scope.$index, scope.row)"></el-input>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="upload-content" v-if="active===2">
            <el-upload
                class="icon"
                drag
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                multiple
                :accept="acceptTypes"
            >
              <i class="iconfont icon-shangchuanyunduan"></i>
              <div class="el-upload__text">
                Drop file here or <em style="color: #365baa;font-weight: bold">click to upload</em>
              </div>
              <template #tip>
                <div class="el-upload__tip">
<!--                  jpg/png files with a size less than 500kb-->
                </div>
              </template>
            </el-upload>
<!--            <div class="icon">
              <i class="iconfont icon-shangchuanyunduan"></i>
              <div>click to upload</div>
            </div>-->
          </div>
          <div class="dialog-footer">
            <button @click="Previous" :disabled="active===0">Previous Step</button>
            <button :disabled="active>2" @click="Next">{{active===2?'Finish':'Next Step'}}</button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
<!--  <upload-data v-if="showUploadLoad" ref="uploadRef" @cancel="getUploadData"></upload-data>-->
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
// import UploadData from '../components/tools/UploadData.vue'
const chooseList = ref(['Data Deposit','MT-related genes pipeline of scRNAseq','MT-related pathway annotation','Best mt-ration detect of scRNAseq','Phagocytic analysis tool for'])
const chooseIndex = ref(0)
const handleChoose = (index: number) => {
  chooseIndex.value = index
}
const editableTabsValue = ref('1')
const editableTabs = ref([
  {
    title: 'Project Data',
    name: '1',
    content: 'Tab 1 content',
  },
  {
    title: 'Temporary Data',
    name: '2',
    content: 'Tab 2 content',
  },
])
const uploadData = ref<any>([])
const handleEdit = (index: number, row: any) => {
  console.log(111111,index, row)
}
const active = ref(0)
const formInfo = ref({
  Title: '',
  Species: '',
  Tissue: '',
  Datatype: '',
  Description: '',
})
const SpeciesList = ref([
  {
    label: 'Human',
    value:'Human'
  },
  {
    label: 'Mouse',
    value: 'Mouse'
  },
  {
    label: 'Monkey',
    value: 'Monkey'
  }
])
const DatatypeList = ref([
  {
    label: 'scRNAseq',
    value:'scRNAseq'
  },
  {
    label: 'RNAseq',
    value: 'RNAseq'
  }
])
const Previous = () => {
  active.value--
}
const mockProjectId = ref<number>(1)
const Next = () => {
  uploadData.value.push({
    projectID: mockProjectId.value++,
    year: new Date().getFullYear(),
    journal: 3,
    title: formInfo.value.Title,
    link: 4,
    Description: formInfo.value.Description,
    samples: 254,
    source: 23,
    Species: formInfo.value.Species,
    raceSubspecies: 23,
    Group: 213,
    diagnosisDisease: 45,
    Sequence: 24,
    Tissues: formInfo.value.Tissue,
    age: 24,
    sex: 35,
    Smoking: 53,
    Death: 3,
    optional: 3,
  })
  active.value++
}
const acceptTypes = '.jpg,.png'
onMounted(() => {
  console.log(2222222,formInfo.value)
})
</script>
<style scoped lang="scss">
$color-red: #6d1d29;
$color-baby-red: #870025;
$color-blue: #254682;
$color-baby-blue: #365baa;
@mixin layout($align,$justify){
  display: flex;
  align-items: $align;
  justify-content: $justify;
}
@mixin size($width,$height){
  width: $width;
  height: $height;
}
.nav-choose{
  @include size(100%,100px);
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
  @include size(100%,auto);
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;
  .bottom-content{
    :deep .el-tabs__active-bar{
      background-color: $color-blue;
    }
    :deep .el-tabs__item.is-active, .el-tabs__item:hover{
      color: $color-blue;
    }
    :deep .el-steps--simple{
      margin: 20px 0;
    }
    :deep .el-step__title.is-success, :deep .el-step__head.is-success{
      color: $color-red;
      border-color: $color-red;
    }
    .upload-content{
      //margin: 20px 0;
      @include layout(center,center);
      .icon{
        width: 100%;
        font-size: 25px;
        color: #9f9f9f;
        i{
          font-size: 70px;
          color: #9f9f9f;
        }
      }
      .dialog-basic-info{
        @include size(100%,auto);
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
            :deep .el-form-item__label{
              width: 100px;
              justify-content: flex-start;
              font-weight: bold;
            }
            .el-form-item__content{
              width: calc(100% - 100px);
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
    }
    .dialog-footer{
      margin-top: 30px;
      text-align: right;
      button{
        outline: none;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 15px;
        padding: 5px 10px;
      }
      button:first-child{
        background-color: $color-baby-red;
        margin-right: 15px;
        &:hover{
          background-color: $color-red;
        }
      }
      button:last-child{
        background-color: $color-baby-blue;
        &:hover{
          background-color: $color-blue;
        }
      }
    }
    .result-table{
/*      :deep .el-table__row .el-table__cell{
        padding: 0;
        .cell, .el-input, .el-input__wrapper{
          padding: 0;
        }
      }*/
    }
  }
}
</style>