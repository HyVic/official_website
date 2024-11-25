<template>
    <div style="width: 100%;">
      <!-- <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" mode="default" /> -->
      <!-- <Editor v-model="valueHtml" :defaultConfig="editorConfig" mode="default" @onCreated="handleCreated" @customPaste="customPaste" /> -->
       <product-page :product="productCaptureSequencing"></product-page>
    </div>
  </template>
  <script setup>
  import {productCaptureSequencing} from "../../utils/alldata"
  import ProductPage from "../common/ProductPage.vue"
  // 富文本编辑器文档链接: https://www.wangeditor.com/v5/getting-started.html
  // 引入富文本编辑器CSS
  import '@wangeditor/editor/dist/css/style.css';
  import { onMounted, onBeforeUnmount, ref, shallowRef } from 'vue';
  // 导入富文本编辑器的组件
  import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
  
  // 编辑器实例，必须用 shallowRef
  const editorRef = shallowRef();
  
  // 内容 HTML
  const valueHtml = ref('<p></p>');
  const toolbarConfig = {};
  const editorConfig = ref({ placeholder: '请输入内容...', MENU_CONF: {} });
  
  // 自定义图片上传
  editorConfig.value.MENU_CONF['uploadImage'] = {
    async customUpload(file, insertFn) {
      console.log('上传图片', file);
      // 将上传的file图片转换为base64
      const base64 = URL.createObjectURL(file);
  
      // 这里的file为上传的图片对象,insertFn传入
      insertFn(base64, 'img');
    },
  };
  
  // 自定义视频上传
  editorConfig.value.MENU_CONF['uploadVideo'] = {
    async customUpload(file, insertFn) {
      console.log('上传视频', file);
    },
  };
  
  // 富文本编辑器生成后触发
  const handleCreated = editor => {
    editorRef.value = editor; // 记录 editor 实例，重要！
    console.log(editorConfig.value.MENU_CONF, 'editorConfig.value');
  };
  
  // 监听富文本编辑器粘贴行为
  const customPaste = (editor, event, callback) => {
    // 获取粘贴的纯文本
    const text = event.clipboardData.getData('text/plain');
    if (text) {
      editor.insertText(text);
      event.preventDefault();
      callback(false);
    }
  };
  
  // 获取富文本html内容
/*   const getEditorHTML = () => {
    console.log(editorRef.value.getHtml());
  }; */
  onMounted(() => {
    console.log('mounted');
    // getEditorHTML()
  });
  // 组件销毁时，也及时销毁编辑器
  onBeforeUnmount(() => {
    const editor = editorRef.value;
    if (editor == null) return;
    editor.destroy();
  });
  </script>
  