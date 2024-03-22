webpackHotUpdate("app",{

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/WarehouseList.vue?vue&type=style&index=0&id=e0e13cfe&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WarehouseList.vue?vue&type=style&index=0&id=e0e13cfe&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.search-bar[data-v-e0e13cfe] {\\n  margin-bottom: 20px;\\n}\\n.table-hover.table-striped[data-v-e0e13cfe] {\\n}\\n\\n\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/home/seull/final/4team_final_MainVue/vue-light-bootstrap-dashboard-master/src/components/src/components/WarehouseList.vue\"],\"names\":[],\"mappings\":\";AAgGA;EACA,oBAAA;CACA;AACA;CACA\",\"file\":\"WarehouseList.vue?vue&type=style&index=0&id=e0e13cfe&scoped=true&lang=css\",\"sourcesContent\":[\"<template>\\n  <div class=\\\"content\\\">\\n    <div class=\\\"container-fluid\\\">\\n      <div class=\\\"row\\\">\\n        <div class=\\\"col-md-12\\\">\\n          <!-- 검색 바 -->\\n          <div class=\\\"input-group no-border\\\">\\n            <input\\n              type=\\\"text\\\"\\n              v-model=\\\"searchQuery\\\"\\n              @input=\\\"filterWarehouses\\\"\\n              class=\\\"form-control\\\"\\n              placeholder=\\\"창고 검색...\\\"\\n            >\\n            <div class=\\\"input-group-append\\\">\\n              <div class=\\\"input-group-text\\\">\\n                <i class=\\\"nc-icon nc-zoom-split\\\"></i>\\n              </div>\\n            </div>\\n          </div>\\n\\n          <!-- 카드를 사용하여 창고 목록 표시 -->\\n          <div class=\\\"card\\\">\\n            <div class=\\\"card-header\\\">\\n              <h4 class=\\\"card-title\\\">창고 목록</h4>\\n              <p class=\\\"card-category\\\">창고클릭시 창고의 재고페이로 이동합니다</p>\\n            </div>\\n            <div class=\\\"card-body\\\">\\n              <ul class=\\\"list-group\\\">\\n                <li\\n                  v-for=\\\"warehouse in warehouses.filteredData\\\"\\n                  :key=\\\"warehouse['창고 코드']\\\"\\n                  class=\\\"list-group-item\\\"\\n                  @click=\\\"navigateToInventory(warehouse['창고 코드'])\\\"\\n                >\\n                  <span class=\\\"text-primary\\\">{{ warehouse['창고 코드'] }}</span> -\\n                  {{ warehouse['창고 이름'] }},\\n                  {{ warehouse['창고 주소'] }}\\n                </li>\\n              </ul>\\n            </div>\\n          </div>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n</template>\\n\\n<script>\\n// 가정: LTable과 Card 컴포넌트는 더 이상 사용되지 않으므로 제거됨\\nimport axios from 'axios';\\n\\nexport default {\\n  data() {\\n    return {\\n      searchQuery: '',\\n      warehouses: {\\n        data: [],\\n        filteredData: [],\\n      },\\n    };\\n  },\\n  mounted() {\\n    this.fetchWarehouses();\\n  },\\n  methods: {\\n    fetchWarehouses() {\\n      axios\\n        .get('http://localhost:8080/api/warehouses')\\n        .then(response => {\\n          this.warehouses.data = response.data.map(warehouse => ({\\n            '창고 코드': warehouse.contactCode,\\n            '창고 이름': warehouse.contactName,\\n            '창고 주소': warehouse.contactAddress,\\n          }));\\n          this.warehouses.filteredData = this.warehouses.data;\\n        })\\n        .catch(error => console.error(\\\"창고 목록을 가져오는 데 실패했습니다.\\\", error));\\n    },\\n    filterWarehouses() {\\n      this.warehouses.filteredData = this.searchQuery ?\\n        this.warehouses.data.filter(warehouse =>\\n          warehouse['창고 코드'].toLowerCase().includes(this.searchQuery.toLowerCase()) ||\\n          warehouse['창고 이름'].toLowerCase().includes(this.searchQuery.toLowerCase()) ||\\n          warehouse['창고 주소'].toLowerCase().includes(this.searchQuery.toLowerCase())\\n        ) :\\n        this.warehouses.data;\\n    },\\n    navigateToInventory(storageCode) {\\n      this.$router.push({ path: `/admin/inventory`, query: { storageCode } });\\n    },\\n  },\\n};\\n</script>\\n\\n<style scoped>\\n.search-bar {\\n  margin-bottom: 20px;\\n}\\n.table-hover.table-striped {\\n}\\n\\n\\n\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL1dhcmVob3VzZUxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTBlMTNjZmUmc2NvcGVkPXRydWUmbGFuZz1jc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XYXJlaG91c2VMaXN0LnZ1ZT8xYjcxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uc2VhcmNoLWJhcltkYXRhLXYtZTBlMTNjZmVdIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi50YWJsZS1ob3Zlci50YWJsZS1zdHJpcGVkW2RhdGEtdi1lMGUxM2NmZV0ge1xcbn1cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvc2V1bGwvZmluYWwvNHRlYW1fZmluYWxfTWFpblZ1ZS92dWUtbGlnaHQtYm9vdHN0cmFwLWRhc2hib2FyZC1tYXN0ZXIvc3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvV2FyZWhvdXNlTGlzdC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWdHQTtFQUNBLG9CQUFBO0NBQ0E7QUFDQTtDQUNBXCIsXCJmaWxlXCI6XCJXYXJlaG91c2VMaXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWUwZTEzY2ZlJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPlxcbiAgICAgICAgICA8IS0tIOqygOyDiSDrsJQgLS0+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIG5vLWJvcmRlclxcXCI+XFxuICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgdi1tb2RlbD1cXFwic2VhcmNoUXVlcnlcXFwiXFxuICAgICAgICAgICAgICBAaW5wdXQ9XFxcImZpbHRlcldhcmVob3VzZXNcXFwiXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIuywveqzoCDqsoDsg4kuLi5cXFwiXFxuICAgICAgICAgICAgPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwLWFwcGVuZFxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cC10ZXh0XFxcIj5cXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm5jLWljb24gbmMtem9vbS1zcGxpdFxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICA8IS0tIOy5tOuTnOulvCDsgqzsmqntlZjsl6wg7LC96rOgIOuqqeuhnSDtkZzsi5wgLS0+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+7LC96rOgIOuqqeuhnTwvaDQ+XFxuICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC1jYXRlZ29yeVxcXCI+7LC96rOg7YG066at7IucIOywveqzoOydmCDsnqzqs6DtjpjsnbTroZwg7J2064+Z7ZWp64uI64ukPC9wPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICA8bGlcXG4gICAgICAgICAgICAgICAgICB2LWZvcj1cXFwid2FyZWhvdXNlIGluIHdhcmVob3VzZXMuZmlsdGVyZWREYXRhXFxcIlxcbiAgICAgICAgICAgICAgICAgIDprZXk9XFxcIndhcmVob3VzZVsn7LC96rOgIOy9lOuTnCddXFxcIlxcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiXFxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJuYXZpZ2F0ZVRvSW52ZW50b3J5KHdhcmVob3VzZVsn7LC96rOgIOy9lOuTnCddKVxcXCJcXG4gICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0ZXh0LXByaW1hcnlcXFwiPnt7IHdhcmVob3VzZVsn7LC96rOgIOy9lOuTnCddIH19PC9zcGFuPiAtXFxuICAgICAgICAgICAgICAgICAge3sgd2FyZWhvdXNlWyfssL3qs6Ag7J2066aEJ10gfX0sXFxuICAgICAgICAgICAgICAgICAge3sgd2FyZWhvdXNlWyfssL3qs6Ag7KO87IaMJ10gfX1cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0Plxcbi8vIOqwgOyglTogTFRhYmxl6rO8IENhcmQg7Lu07Y+s64SM7Yq464qUIOuNlCDsnbTsg4Eg7IKs7Jqp65CY7KeAIOyViuycvOuvgOuhnCDsoJzqsbDrkKhcXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIGRhdGEoKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgc2VhcmNoUXVlcnk6ICcnLFxcbiAgICAgIHdhcmVob3VzZXM6IHtcXG4gICAgICAgIGRhdGE6IFtdLFxcbiAgICAgICAgZmlsdGVyZWREYXRhOiBbXSxcXG4gICAgICB9LFxcbiAgICB9O1xcbiAgfSxcXG4gIG1vdW50ZWQoKSB7XFxuICAgIHRoaXMuZmV0Y2hXYXJlaG91c2VzKCk7XFxuICB9LFxcbiAgbWV0aG9kczoge1xcbiAgICBmZXRjaFdhcmVob3VzZXMoKSB7XFxuICAgICAgYXhpb3NcXG4gICAgICAgIC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvd2FyZWhvdXNlcycpXFxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XFxuICAgICAgICAgIHRoaXMud2FyZWhvdXNlcy5kYXRhID0gcmVzcG9uc2UuZGF0YS5tYXAod2FyZWhvdXNlID0+ICh7XFxuICAgICAgICAgICAgJ+ywveqzoCDsvZTrk5wnOiB3YXJlaG91c2UuY29udGFjdENvZGUsXFxuICAgICAgICAgICAgJ+ywveqzoCDsnbTrpoQnOiB3YXJlaG91c2UuY29udGFjdE5hbWUsXFxuICAgICAgICAgICAgJ+ywveqzoCDso7zshownOiB3YXJlaG91c2UuY29udGFjdEFkZHJlc3MsXFxuICAgICAgICAgIH0pKTtcXG4gICAgICAgICAgdGhpcy53YXJlaG91c2VzLmZpbHRlcmVkRGF0YSA9IHRoaXMud2FyZWhvdXNlcy5kYXRhO1xcbiAgICAgICAgfSlcXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKFxcXCLssL3qs6Ag66qp66Gd7J2EIOqwgOyguOyYpOuKlCDrjbAg7Iuk7Yyo7ZaI7Iq164uI64ukLlxcXCIsIGVycm9yKSk7XFxuICAgIH0sXFxuICAgIGZpbHRlcldhcmVob3VzZXMoKSB7XFxuICAgICAgdGhpcy53YXJlaG91c2VzLmZpbHRlcmVkRGF0YSA9IHRoaXMuc2VhcmNoUXVlcnkgP1xcbiAgICAgICAgdGhpcy53YXJlaG91c2VzLmRhdGEuZmlsdGVyKHdhcmVob3VzZSA9PlxcbiAgICAgICAgICB3YXJlaG91c2VbJ+ywveqzoCDsvZTrk5wnXS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSkgfHxcXG4gICAgICAgICAgd2FyZWhvdXNlWyfssL3qs6Ag7J2066aEJ10udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpIHx8XFxuICAgICAgICAgIHdhcmVob3VzZVsn7LC96rOgIOyjvOyGjCddLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKVxcbiAgICAgICAgKSA6XFxuICAgICAgICB0aGlzLndhcmVob3VzZXMuZGF0YTtcXG4gICAgfSxcXG4gICAgbmF2aWdhdGVUb0ludmVudG9yeShzdG9yYWdlQ29kZSkge1xcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgcGF0aDogYC9hZG1pbi9pbnZlbnRvcnlgLCBxdWVyeTogeyBzdG9yYWdlQ29kZSB9IH0pO1xcbiAgICB9LFxcbiAgfSxcXG59O1xcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuLnNlYXJjaC1iYXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnRhYmxlLWhvdmVyLnRhYmxlLXN0cmlwZWQge1xcbn1cXG5cXG5cXG5cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/WarehouseList.vue?vue&type=style&index=0&id=e0e13cfe&scoped=true&lang=css\n");

/***/ })

})