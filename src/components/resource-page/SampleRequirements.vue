<template>
  <div class="resource_container">
    <div class="commtitle">
      <div class="en">Animal <img src="../../assets/0.png" alt="" /></div>
    </div>
    <h4><strong>组织采样流程参考</strong></h4>
    <p v-for="item in flow">{{ item }}</p>
    <h4 style="color: red">注意事项</h4>
    <p v-for="item in tips">{{ item }}</p>
    <h4><strong>样本量要求</strong></h4>
    <p>组织样本需≥200 mg/指标。</p>
    <h4><strong>储存及运输</strong></h4>
    <p>样本应储存于液氮或-80℃冰箱中；</p>
    <p>运输过程中应全程保持低温，建议使用干冰冷冻运输。</p>
    <h4><strong>送样地址</strong></h4>
    <p>实验室地址：成都市温江区科锦路358号5楼（天成未来）</p>
    <p>收件人：样品中心</p>
    <p>电话：18010665842</p>
    <p>
      样本寄出前，请给项目管理员发送电子版填写完整的《样本信息单》，并打印一份纸质版密封于塑料袋内随样本一起寄出，《样本信息单》模版可在官网-客户解答-资料下载内获取。
    </p>
    <img
      style="width: auto; max-width: 100%"
      src="../../assets/resource/re1.jpg"
      alt=""
    />
    <div class="commtitle">
      <div class="en">Plant <img src="../../assets/0.png" alt="" /></div>
    </div>
    <h4><strong>组织叶片采样方式</strong></h4>
    <p>1.打孔</p>
    <p>叶片宽度大于打孔器的宽度时（约≥6mm），可直接使用打孔器取样；</p>
    <p>2.切段</p>
    <p>
      叶片宽度小于打孔器宽度时，可用剪刀（提前用酒精消毒）将组织样本剪成小段（长度6mm左右）；
    </p>
    <h4><strong>幼苗采样方式</strong></h4>
    <p>诱变或突变体幼苗样本，可用剪刀每株取1cm茎或嫩叶；</p>
    <h4><strong>样本量要求</strong></h4>
    <p v-for="item in requests">{{ item }}</p>
    <h4><strong>样品准备参考图</strong></h4>
    <div style="display: flex">
      <div
        style="
          width: 30%;
          margin-right: 2%;
          display: flex;
          flex-direction: column;
          align-items: center;
        "
      >
        <img style="width: 100%" src="../../assets/resource/re2.jpg" alt="" />
        <span style="font-size: 14px; padding-top: 20px">
          切小段送样参考图
        </span>
      </div>
      <div
        style="
          width: 30%;
          margin-right: 2%;
          display: flex;
          flex-direction: column;
          align-items: center;
        "
      >
        <img style="width: 100%" src="../../assets/resource/re3.jpg" alt="" />
        <span style="font-size: 14px; padding-top: 20px"> 叶片送样参考图</span>
      </div>
      <div
        style="
          width: 30%;
          display: flex;
          flex-direction: column;
          align-items: center;
        "
      >
        <img style="width: 100%" src="../../assets/resource/re3.jpg" alt="" />
        <span style="font-size: 14px; padding-top: 20px"> 种子送样参考图</span>
      </div>
    </div>
    <h4><strong>储存及运输</strong></h4>
    <p>
      新鲜样本可存储于4℃冰箱中，或将样品过液氮速冻后储存于液氮或-80℃冰箱中；核酸样本存储于-20℃冰箱中，RNA存储于-80℃冰箱中。
    </p>
    <p>
      运输过程中应全程保持低温，根据存储温度选择冰袋/蓝冰或干冰运输，冰袋/蓝冰空运、干冰陆运。干冰建议15KG以上，冬季运输，干冰量可适当减少，但不少于10KG。
    </p>
    <h4><strong>送样地址</strong></h4>
    <p>实验室地址：成都市温江区科锦路358号5楼（天成未来）</p>
    <p>收件人：样品中心</p>
    <p>电话：18010665842</p>
    <p>
      样本寄出前，请给项目管理员发送电子版填写完整的《样本信息单》，并打印一份纸质版密封于塑料袋内随样本一起寄出，《样本信息单》模版可在官网-客户解答-资料下载内获取。
    </p>
    <img
      style="width: auto; max-width: 100%"
      src="../../assets/resource/re5.jpg"
      alt=""
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const flow = ref([
  `1.  材料准备`,
  `实验服、手套、口罩等（防护设施）`,
  `手术器械（采样工具）`,
  `冻存管（建议使用无菌级）`,
  `记号笔（务必使用油性）`,
  `液氮、酒精、滤纸、纸巾等常用试剂耗材`,
  `2.  采样`,
  `切割下目标组织样本，用生理盐水清洗残留血液，滤纸吸干表面液体；`,
  `3.  分样`,
  `在冰上将组织样本切割成 20~50 mg 左右的小块，根据组织样本类型适当调整；`,
  `4.  速冻`,
  `用铝箔纸包裹组织块，置于液氮中速冻约10s，根据组织块的大小做适当调整，在组织切除和处理30 min内进行速冻；`,
  `5.  分装`,
  `将速冻后的组织块适量分装至冻存管中，用油性笔在管盖及管侧做好标记；`,
  `6.  储存`,
  `速冻后的组织转运后储存于液氮或-80℃冰箱中。`,
]);
const tips = ref([
  `1.  手术器械、容器等材料必须保持洁净，避免污染；`,
  `2.  动物样本若需要使用麻醉剂，建议使用异氟醚；`,
  `3.  要避免血液污染，可采用去离子水或等渗溶液漂洗干净；`,
  `4.  大块组织需要切成小块，方便储存和取样；`,
  `5.  避免反复冻融；`,
  `6.  样本编号一定要清楚、牢固，防止在冷冻过程中编号丢失。`,
]);
const requests = ref([
  `1.组织叶片样本建议50mg-100mg/管`,
  `打孔法：每管10片左右`,
  `切段法：每管10小段左右`,
  `其他方法：每管取2片大拇指指甲盖大小的样本`,
  `2.幼苗建议建议50mg-100mg/管`,
  ` 切段法：每株幼苗取1cm长度叶片或茎，每管5段左右`,
  `3.混池样本建议150-200mg/管，群体数量大可适当增量`,
  `亲本：诱变亲本或突变体每个单株取2-3片叶片，建议5-10个单株样本混池即可；分离群体亲本每个叶片取1片，建议10个单株样本混池即可；`,
  `混池：极端性状群体每个单株取1片，建议20-30个单株/池，如果群体比较大可以提供30-50个单株/池；`,
]);
</script>
<style scoped lang="scss">
.resource_container {
  width: 100%;
  text-align: left;
  .commtitle {
    padding-top: 50px;
    .en {
      font-size: 40px;
      color: #54a5d4;
      font-weight: bold;
      height: 50px;
      line-height: 30px;
      img {
        position: relative;
        top: -15px;
      }
    }
    .cn {
      font-size: 32px;
      color: #838383;
      padding-top: 18px;
      font-weight: bold;
    }
  }
  p {
    font-size: 15px;
    color: #838383;
  }
}
</style>
