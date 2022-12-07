<template>
  <div >
    <RaButton>12321312</RaButton>
    <img src="https://image.baidu.com/search/detail?tn=baiduimagedetail&word=%E5%AE%A0%E7%89%A9%E5%9B%BE%E7%89%87&album_tab=%E5%8A%A8%E7%89%A9&album_id=688&ie=utf-8&fr=albumsdetail&cs=1951548898,3927145&pi=227260&pn=1&ic=0&objurl=https%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D1951548898%2C3927145%26fm%3D193%26f%3DGIF" />
    <el-input
      v-model="input3"
      placeholder="Please input"
      class="input-with-select"
    >
      <template #default>
        
      </template>
    </el-input>
  </div>
  
</template>
<script setup lang="ts">
import {RaButton} from 'rafter-pc';
import 'rafter-pc/rafter-core.esm.css';
  
</script>
<style>
.card{
  height: 200px;
  width: 100px;
  background-color: rosybrown;
}
</style>