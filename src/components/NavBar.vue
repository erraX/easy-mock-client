<template>
  <el-menu
    :default-active="activeNav"
    :router="true"
    mode="horizontal"
  >
    <template v-for="item in nav">
      <el-submenu v-if="hasChildren(item)" :index="item.url">
        <template slot="title">{{ item.name }}</template>
        <el-menu-item
          v-for="child in item.children"
          :index="child.url"
        >
          {{ child.name }}
        </el-menu-item>
      </el-submenu>
      <el-menu-item v-else :index="item.url">{{ item.name }}</el-menu-item>
    </template>
  </el-menu>
</template>

<script>
  import {
    Menu,
    MenuItem,
    Submenu
  } from 'element-ui';

  export default {
    components: {
      'el-menu': Menu,
      'el-menu-item': MenuItem,
      'el-submenu': Submenu
    },

    props: {
      nav: Array
    },

    computed: {
      activeNav() {
        return this.$route.path;
      }
    },

    methods: {
      hasChildren(item) {
        return item.children && item.children.length;
      }
    }
  }
</script>
