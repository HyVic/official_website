<template>
  <div class="nav-choose">
    <ul>
      <li v-for="(item,index) in chooseList" :key="item" @click="handleChoose(index)" :class="{active: chooseIndex===index}">{{item}}</li>
    </ul>
  </div>
  <div class="content">
    <div class="single-cell" v-for="item in tableData">
      <div class="title"><span>{{item.Title}}</span> <span @click="centerDialogVisible = true">Click to explore</span> <span @click="previewFile">Query for data</span></div>
      <div class="dialog-basic-info common-cont">
        <el-form :model="item">
          <el-form-item label="Species">
            <div class="label">{{item.Species}}</div>
<!--            <el-input v-model="item.Species" autocomplete="off" />-->
          </el-form-item>
          <el-form-item label="Tissue">
            <div class="label">{{item.Tissue}}</div>
<!--            <el-input v-model="item.Tissue" autocomplete="off" />-->
          </el-form-item>
          <el-form-item label="Datatype">
            <div class="label">{{item.Datatype}}</div>
<!--              <el-input v-model="item.Datatype" autocomplete="off" />-->
          </el-form-item>
          <el-form-item label="samples">
            <div class="label">{{item.samples}}</div>
<!--              <el-input v-model="item.samples" autocomplete="off" />-->
          </el-form-item>
          <el-form-item label="Description">
            <div class="label">{{item.Description}}</div>
<!--            <el-input v-model="item.Description" type="textarea" :autosize="{ minRows: 2, maxRows: 8 }"/>-->
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
  <project-data v-if="centerDialogVisible" @close="centerDialogVisible = false"></project-data>
</template>

<script setup lang="ts">
import ProjectData from '../components/common/ProjectData.vue'
import { ref, reactive } from 'vue'
const chooseList = ref(['Mitochondrial characters in different dell types during Lung aging',
  'Mitochondrial characters in different dell types of large airways epithelial',
  'Mitochondrial characters in different dell types of small airways epithelial'])

const tableData = reactive([
  {
    Title: 'MDA5+ ILD snRNA-seq',
    Species: 'No. 189, Grove St, Los Angeles',
    Tissue: 'No.Angeles',
    Datatype: 'No.Angeles',
    samples: 'No.Angeles',
    Description: `Airway (trachea and bronchus) brushing specimens were collected from 14 healthy,
    female non-smokers with ages ranging from 20 to 60 years. Bulk RNA sequencing was performed on all the specimens (n = 28).
    Airway cell types and their relative proportions were estimated using CIBERSORTx.
    The cell type proportions were compared between the younger (age 20–40) and elder group (age 40–60) in the trachea and bronchus
    respectively. The linear association between cell type proportion and age was assessed using the Pearson correlation coefficient.
    Differentially expressed genes (DEGs) between the two age groups were identified using DESeq2. Three kinds of enrichment analysis
    of the age-related DEGs were performed, including Gene ontology (GO) enrichment, Kyoto Encyclopedia of Genes and Genomes (KEGG)
    pathway enrichment, and disease enrichment analysis`,
  },
  {
    Title: 'MDA5+ ILD snRNA-seq',
    Species: 'No. 189, Grove St, Los Angeles',
    Tissue: 'No.Angeles',
    Datatype: 'No.Angeles',
    samples: 'No.Angeles',
    Description: `Airway (trachea and bronchus) brushing specimens were collected from 14 healthy,
    female non-smokers with ages ranging from 20 to 60 years. Bulk RNA sequencing was performed on all the specimens (n = 28).
    Airway cell types and their relative proportions were estimated using CIBERSORTx.
    The cell type proportions were compared between the younger (age 20–40) and elder group (age 40–60) in the trachea and bronchus
    respectively. The linear association between cell type proportion and age was assessed using the Pearson correlation coefficient.
    Differentially expressed genes (DEGs) between the two age groups were identified using DESeq2. Three kinds of enrichment analysis
    of the age-related DEGs were performed, including Gene ontology (GO) enrichment, Kyoto Encyclopedia of Genes and Genomes (KEGG)
    pathway enrichment, and disease enrichment analysis`,
  },
])
const centerDialogVisible = ref(false)
const previewFile = () => {
  console.log('preview file')
}
const chooseIndex = ref(0)
const handleChoose = (index: number) => {
  chooseIndex.value = index
}
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
      text-align: left;
      &:hover{
        background-color: $color-blue;
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
  //border: 1px solid #e6e6e6;
  border-radius: 5px;
  //padding: 20px;
  box-sizing: border-box;
  .single-cell{
    margin-bottom: 30px;
    .title {
      text-align: left;
      margin-bottom: 10px;
      padding: 0 20px;
      span:first-child{
        font-size: 24px;
        font-weight: bold;
      }
      span:nth-child(2){
        font-size: 16px;
        padding: 5px 20px;
        background-color: $color-blue;
        color: white;
        border-radius: 5px;
        cursor: pointer;
        margin-left: 10px;
      }
      span:last-child{
        font-size: 16px;
        padding: 5px 20px;
        background-color: $color-red;
        color: white;
        border-radius: 5px;
        cursor: pointer;
        margin-left: 10px;
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
  }
}
</style>