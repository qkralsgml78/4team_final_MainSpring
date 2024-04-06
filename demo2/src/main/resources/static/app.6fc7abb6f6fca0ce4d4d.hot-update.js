webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CStoragePage.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CStoragePage.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"../../../node_modules/axios/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      cStorages: [],\n      // 서버에서 받아온 거래처와 창고 코드 목록\n      uniqueCustomers: [],\n      // 중복 제거된 거래처 코드 목록\n      selectedCustomerCode: '',\n      // 선택된 거래처 코드\n      newStorageCode: '' // 입력된 새 창고 코드\n    };\n  },\n  created: function created() {\n    this.fetchCStorages();\n    this.fetchContacts();\n  },\n  methods: {\n    fetchContacts: function fetchContacts() {\n      var _this = this;\n      axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('/api/cstorage/contacts').then(function (response) {\n        _this.uniqueCustomers = response.data;\n      }).catch(function (error) {\n        return console.error('Error fetching contacts:', error);\n      });\n    },\n    fetchCStorages: function fetchCStorages() {\n      var _this2 = this;\n      axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('/api/cstorage/list').then(function (response) {\n        _this2.cStorages = response.data;\n      }).catch(function (error) {\n        return console.error('Error fetching storages:', error);\n      });\n    },\n    addCStorage: function addCStorage() {\n      var _this3 = this;\n      var newCStorage = {\n        customerCode: this.selectedCustomerCode,\n        storageCode: this.newStorageCode\n      };\n      axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post('/api/cstorage/addOrUpdate', newCStorage).then(function () {\n        alert('창고 코드가 성공적으로 추가되었습니다.');\n        _this3.fetchCStorages();\n        _this3.newStorageCode = '';\n        _this3.selectedCustomerCode = '';\n      }).catch(function (error) {\n        console.error('Error adding storage code:', error);\n        alert('창고 코드 추가에 실패하였습니다.');\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvQ1N0b3JhZ2VQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9DU3RvcmFnZVBhZ2UudnVlPzhiNjYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG10LTRcIj5cbiAgICA8IS0tIOqxsOuemOyymCDqtIDrpqwg7KCc66qpIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgPGgyIGNsYXNzPVwibWItNFwiPuqxsOuemOyymCDqtIDrpqw8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIOqxsOuemOyymCDrqqnroZ3qs7wg7LC96rOgIOy9lOuTnCDstpTqsIAg7Y+8IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgbWItNFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy04XCI+XG4gICAgICAgIDwhLS0g6rGw656Y7LKYIOuqqeuhnSDthYzsnbTruJQgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGN1c3RvbS1jYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlXCI+6rGw656Y7LKYIOuqqeuhnTwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwidW5pcXVlQ3VzdG9tZXJzLmxlbmd0aCA+IDBcIiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3M9XCJ0aGVhZC1saWdodFwiPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPuqxsOuemOyymCDsnbTrpoQ8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+6rGw656Y7LKYIOy9lOuTnDwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCJjb250YWN0IGluIHVuaXF1ZUN1c3RvbWVyc1wiIDprZXk9XCJjb250YWN0LmNvbnRhY3RDb2RlXCI+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3sgY29udGFjdC5jb250YWN0TmFtZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3sgY29udGFjdC5jb250YWN0Q29kZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHYtZWxzZT5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+6rGw656Y7LKYIOygleuztOqwgCDsl4bsirXri4jri6QuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNFwiPlxuICAgICAgICA8IS0tIOywveqzoCDsvZTrk5wg7LaU6rCAIO2PvCAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY3VzdG9tLWNhcmQgbWItNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZVwiPuywveqzoCDsvZTrk5wg7LaU6rCAPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJhZGRDU3RvcmFnZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjdXN0b21lckNvZGVJbnB1dFwiPuqxsOuemOyymCDsvZTrk5wg7J6F66ClPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImN1c3RvbWVyQ29kZUlucHV0XCIgdi1tb2RlbD1cInNlbGVjdGVkQ3VzdG9tZXJDb2RlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIuqxsOuemOyymCDsvZTrk5xcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInN0b3JhZ2VDb2RlXCI+7LC96rOg7L2U65OcIOyeheugpTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzdG9yYWdlQ29kZVwiIHYtbW9kZWw9XCJuZXdTdG9yYWdlQ29kZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCLssL3qs6Ag7L2U65OcXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBmbG9hdC1yaWdodFwiPuy2lOqwgO2VmOq4sDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSDqsbDrnpjsspjrs4Qg7ZWg64u565CcIOywveqzoCDsvZTrk5wg66qp66GdIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY3VzdG9tLWNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGVcIj7qsbDrnpjsspjrs4Qg7ZWg64u565CcIOywveqzoCDsvZTrk5w8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgcC0wXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cbiAgICAgICAgICAgICAgPGxpIHYtZm9yPVwic3RvcmFnZSBpbiBjU3RvcmFnZXNcIiA6a2V5PVwic3RvcmFnZS5jdXN0b21lckNvZGVcIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj7qsbDrnpjsspgg7L2U65OcOiB7eyBzdG9yYWdlLmN1c3RvbWVyQ29kZSB9fSwg7LC96rOgIOy9lOuTnDoge3sgc3RvcmFnZS5zdG9yYWdlQ29kZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tc21cIiBAY2xpY2s9XCJkZWxldGVDU3RvcmFnZShzdG9yYWdlLmN1c3RvbWVyQ29kZSwgc3RvcmFnZS5zdG9yYWdlQ29kZSlcIj7sgq3soJw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY1N0b3JhZ2VzOiBbXSwgLy8g7ISc67KE7JeQ7IScIOuwm+yVhOyYqCDqsbDrnpjsspjsmYAg7LC96rOgIOy9lOuTnCDrqqnroZ1cbiAgICAgIHVuaXF1ZUN1c3RvbWVyczogW10sIC8vIOykkeuztSDsoJzqsbDrkJwg6rGw656Y7LKYIOy9lOuTnCDrqqnroZ1cbiAgICAgIHNlbGVjdGVkQ3VzdG9tZXJDb2RlOiAnJywgLy8g7ISg7YOd65CcIOqxsOuemOyymCDsvZTrk5xcbiAgICAgIG5ld1N0b3JhZ2VDb2RlOiAnJywgLy8g7J6F66Cl65CcIOyDiCDssL3qs6Ag7L2U65OcXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmZldGNoQ1N0b3JhZ2VzKCk7XG4gICAgdGhpcy5mZXRjaENvbnRhY3RzKCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBmZXRjaENvbnRhY3RzKCkge1xuICAgICAgYXhpb3MuZ2V0KCcvYXBpL2NzdG9yYWdlL2NvbnRhY3RzJylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHRoaXMudW5pcXVlQ3VzdG9tZXJzID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNvbnRhY3RzOicsIGVycm9yKSk7XG4gICAgfSxcbiAgICBmZXRjaENTdG9yYWdlcygpIHtcbiAgICAgIGF4aW9zLmdldCgnL2FwaS9jc3RvcmFnZS9saXN0JylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHRoaXMuY1N0b3JhZ2VzID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHN0b3JhZ2VzOicsIGVycm9yKSk7XG4gICAgfSxcbiAgICBhZGRDU3RvcmFnZSgpIHtcbiAgICAgIGNvbnN0IG5ld0NTdG9yYWdlID0ge1xuICAgICAgICBjdXN0b21lckNvZGU6IHRoaXMuc2VsZWN0ZWRDdXN0b21lckNvZGUsXG4gICAgICAgIHN0b3JhZ2VDb2RlOiB0aGlzLm5ld1N0b3JhZ2VDb2RlLFxuICAgICAgfTtcbiAgICAgIGF4aW9zLnBvc3QoJy9hcGkvY3N0b3JhZ2UvYWRkT3JVcGRhdGUnLCBuZXdDU3RvcmFnZSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGFsZXJ0KCfssL3qs6Ag7L2U65Oc6rCAIOyEseqzteyggeycvOuhnCDstpTqsIDrkJjsl4jsirXri4jri6QuJyk7XG4gICAgICAgICAgdGhpcy5mZXRjaENTdG9yYWdlcygpO1xuICAgICAgICAgIHRoaXMubmV3U3RvcmFnZUNvZGUgPSAnJztcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkQ3VzdG9tZXJDb2RlID0gJyc7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIHN0b3JhZ2UgY29kZTonLCBlcnJvcik7XG4gICAgICAgICAgYWxlcnQoJ+ywveqzoCDsvZTrk5wg7LaU6rCA7JeQIOyLpO2MqO2VmOyYgOyKteuLiOuLpC4nKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xufVxuXG4uY3VzdG9tLWNhcmQge1xuICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xufVxuXG4udGFibGUtaG92ZXIgdGJvZHkgdHI6aG92ZXIge1xuICBjb2xvcjogIzQ5NTA1NztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG59XG5cbi50YWJsZSB0aGVhZCB0aCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVlMmU2O1xufVxuXG4udGFibGUtaG92ZXIgdGJvZHkgdHI6aG92ZXIgdGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcbn1cbjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiJBQXdGQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CStoragePage.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CStoragePage.vue?vue&type=style&index=0&id=4fef97f7&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CStoragePage.vue?vue&type=style&index=0&id=4fef97f7&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.container[data-v-4fef97f7] {\\n  max-width: 1200px;\\n}\\n.custom-card[data-v-4fef97f7] {\\n  -webkit-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\\n          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\\n}\\n.card-header[data-v-4fef97f7] {\\n  background-color: #f8f9fa;\\n  border-bottom: 1px solid #e9ecef;\\n}\\n.table-hover tbody tr[data-v-4fef97f7]:hover {\\n  color: #495057;\\n  background-color: rgba(0, 0, 0, 0.075);\\n}\\n.table thead th[data-v-4fef97f7] {\\n  border-bottom: 2px solid #dee2e6;\\n}\\n.table-hover tbody tr:hover td[data-v-4fef97f7] {\\n  background-color: rgba(0, 0, 0, 0.075);\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/seull/final/4team_final_MainVue/vue-light-bootstrap-dashboard-master/src/components/src/components/CStoragePage.vue\"],\"names\":[],\"mappings\":\";AA4IA;EACA,kBAAA;CACA;AAEA;EACA,4DAAA;UAAA,oDAAA;CACA;AAEA;EACA,0BAAA;EACA,iCAAA;CACA;AAEA;EACA,eAAA;EACA,uCAAA;CACA;AAEA;EACA,iCAAA;CACA;AAEA;EACA,uCAAA;CACA\",\"file\":\"CStoragePage.vue?vue&type=style&index=0&id=4fef97f7&scoped=true&lang=css\",\"sourcesContent\":[\"<template>\\n  <div class=\\\"container mt-4\\\">\\n    <!-- 거래처 관리 제목 -->\\n    <div class=\\\"row\\\">\\n      <div class=\\\"col\\\">\\n        <h2 class=\\\"mb-4\\\">거래처 관리</h2>\\n      </div>\\n    </div>\\n\\n    <!-- 거래처 목록과 창고 코드 추가 폼 -->\\n    <div class=\\\"row mb-4\\\">\\n      <div class=\\\"col-lg-8\\\">\\n        <!-- 거래처 목록 테이블 -->\\n        <div class=\\\"card custom-card\\\">\\n          <div class=\\\"card-header\\\">\\n            <h3 class=\\\"card-title\\\">거래처 목록</h3>\\n          </div>\\n          <div class=\\\"card-body\\\">\\n            <div v-if=\\\"uniqueCustomers.length > 0\\\" class=\\\"table-responsive\\\">\\n              <table class=\\\"table table-hover\\\">\\n                <thead class=\\\"thead-light\\\">\\n                <tr>\\n                  <th scope=\\\"col\\\">거래처 이름</th>\\n                  <th scope=\\\"col\\\">거래처 코드</th>\\n                </tr>\\n                </thead>\\n                <tbody>\\n                <tr v-for=\\\"contact in uniqueCustomers\\\" :key=\\\"contact.contactCode\\\">\\n                  <td>{{ contact.contactName }}</td>\\n                  <td>{{ contact.contactCode }}</td>\\n                </tr>\\n                </tbody>\\n              </table>\\n            </div>\\n            <div v-else>\\n              <p class=\\\"text-muted\\\">거래처 정보가 없습니다.</p>\\n            </div>\\n          </div>\\n        </div>\\n      </div>\\n\\n      <div class=\\\"col-lg-4\\\">\\n        <!-- 창고 코드 추가 폼 -->\\n        <div class=\\\"card custom-card mb-5\\\">\\n          <div class=\\\"card-header\\\">\\n            <h3 class=\\\"card-title\\\">창고 코드 추가</h3>\\n          </div>\\n          <div class=\\\"card-body\\\">\\n            <form @submit.prevent=\\\"addCStorage\\\">\\n              <div class=\\\"form-group\\\">\\n                <label for=\\\"customerCodeInput\\\">거래처 코드 입력</label>\\n                <input type=\\\"text\\\" id=\\\"customerCodeInput\\\" v-model=\\\"selectedCustomerCode\\\" class=\\\"form-control\\\" placeholder=\\\"거래처 코드\\\" required>\\n              </div>\\n              <div class=\\\"form-group\\\">\\n                <label for=\\\"storageCode\\\">창고코드 입력</label>\\n                <input type=\\\"text\\\" id=\\\"storageCode\\\" v-model=\\\"newStorageCode\\\" class=\\\"form-control\\\" placeholder=\\\"창고 코드\\\" required>\\n              </div>\\n              <button type=\\\"submit\\\" class=\\\"btn btn-primary float-right\\\">추가하기</button>\\n            </form>\\n          </div>\\n        </div>\\n      </div>\\n    </div>\\n\\n    <!-- 거래처별 할당된 창고 코드 목록 -->\\n    <div class=\\\"row\\\">\\n      <div class=\\\"col\\\">\\n        <div class=\\\"card custom-card\\\">\\n          <div class=\\\"card-header\\\">\\n            <h3 class=\\\"card-title\\\">거래처별 할당된 창고 코드</h3>\\n          </div>\\n          <div class=\\\"card-body p-0\\\">\\n            <ul class=\\\"list-group list-group-flush\\\">\\n              <li v-for=\\\"storage in cStorages\\\" :key=\\\"storage.customerCode\\\" class=\\\"list-group-item\\\">\\n                <div class=\\\"d-flex justify-content-between align-items-center\\\">\\n                  <span>거래처 코드: {{ storage.customerCode }}, 창고 코드: {{ storage.storageCode }}</span>\\n                  <button class=\\\"btn btn-danger btn-sm\\\" @click=\\\"deleteCStorage(storage.customerCode, storage.storageCode)\\\">삭제</button>\\n                </div>\\n              </li>\\n            </ul>\\n          </div>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n</template>\\n\\n<script>\\nimport axios from 'axios';\\n\\nexport default {\\n  data() {\\n    return {\\n      cStorages: [], // 서버에서 받아온 거래처와 창고 코드 목록\\n      uniqueCustomers: [], // 중복 제거된 거래처 코드 목록\\n      selectedCustomerCode: '', // 선택된 거래처 코드\\n      newStorageCode: '', // 입력된 새 창고 코드\\n    };\\n  },\\n  created() {\\n    this.fetchCStorages();\\n    this.fetchContacts();\\n  },\\n  methods: {\\n    fetchContacts() {\\n      axios.get('/api/cstorage/contacts')\\n        .then(response => {\\n          this.uniqueCustomers = response.data;\\n        })\\n        .catch(error => console.error('Error fetching contacts:', error));\\n    },\\n    fetchCStorages() {\\n      axios.get('/api/cstorage/list')\\n        .then(response => {\\n          this.cStorages = response.data;\\n        })\\n        .catch(error => console.error('Error fetching storages:', error));\\n    },\\n    addCStorage() {\\n      const newCStorage = {\\n        customerCode: this.selectedCustomerCode,\\n        storageCode: this.newStorageCode,\\n      };\\n      axios.post('/api/cstorage/addOrUpdate', newCStorage)\\n        .then(() => {\\n          alert('창고 코드가 성공적으로 추가되었습니다.');\\n          this.fetchCStorages();\\n          this.newStorageCode = '';\\n          this.selectedCustomerCode = '';\\n        })\\n        .catch(error => {\\n          console.error('Error adding storage code:', error);\\n          alert('창고 코드 추가에 실패하였습니다.');\\n        });\\n    },\\n  },\\n}\\n</script>\\n\\n<style scoped>\\n.container {\\n  max-width: 1200px;\\n}\\n\\n.custom-card {\\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\\n}\\n\\n.card-header {\\n  background-color: #f8f9fa;\\n  border-bottom: 1px solid #e9ecef;\\n}\\n\\n.table-hover tbody tr:hover {\\n  color: #495057;\\n  background-color: rgba(0, 0, 0, 0.075);\\n}\\n\\n.table thead th {\\n  border-bottom: 2px solid #dee2e6;\\n}\\n\\n.table-hover tbody tr:hover td {\\n  background-color: rgba(0, 0, 0, 0.075);\\n}\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL0NTdG9yYWdlUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00ZmVmOTdmNyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NTdG9yYWdlUGFnZS52dWU/YjM1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNvbnRhaW5lcltkYXRhLXYtNGZlZjk3ZjddIHtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbn1cXG4uY3VzdG9tLWNhcmRbZGF0YS12LTRmZWY5N2Y3XSB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMC4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcbn1cXG4uY2FyZC1oZWFkZXJbZGF0YS12LTRmZWY5N2Y3XSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XFxufVxcbi50YWJsZS1ob3ZlciB0Ym9keSB0cltkYXRhLXYtNGZlZjk3ZjddOmhvdmVyIHtcXG4gIGNvbG9yOiAjNDk1MDU3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxufVxcbi50YWJsZSB0aGVhZCB0aFtkYXRhLXYtNGZlZjk3ZjddIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVlMmU2O1xcbn1cXG4udGFibGUtaG92ZXIgdGJvZHkgdHI6aG92ZXIgdGRbZGF0YS12LTRmZWY5N2Y3XSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL3NldWxsL2ZpbmFsLzR0ZWFtX2ZpbmFsX01haW5WdWUvdnVlLWxpZ2h0LWJvb3RzdHJhcC1kYXNoYm9hcmQtbWFzdGVyL3NyYy9jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL0NTdG9yYWdlUGFnZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTRJQTtFQUNBLGtCQUFBO0NBQ0E7QUFFQTtFQUNBLDREQUFBO1VBQUEsb0RBQUE7Q0FDQTtBQUVBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtDQUNBO0FBRUE7RUFDQSxlQUFBO0VBQ0EsdUNBQUE7Q0FDQTtBQUVBO0VBQ0EsaUNBQUE7Q0FDQTtBQUVBO0VBQ0EsdUNBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiQ1N0b3JhZ2VQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRmZWY5N2Y3JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBtdC00XFxcIj5cXG4gICAgPCEtLSDqsbDrnpjsspgg6rSA66asIOygnOuqqSAtLT5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJtYi00XFxcIj7qsbDrnpjsspgg6rSA66asPC9oMj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDwhLS0g6rGw656Y7LKYIOuqqeuhneqzvCDssL3qs6Ag7L2U65OcIOy2lOqwgCDtj7wgLS0+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvdyBtYi00XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctOFxcXCI+XFxuICAgICAgICA8IS0tIOqxsOuemOyymCDrqqnroZ0g7YWM7J2067iUIC0tPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCBjdXN0b20tY2FyZFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICA8aDMgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPuqxsOuemOyymCDrqqnroZ08L2gzPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XFxcInVuaXF1ZUN1c3RvbWVycy5sZW5ndGggPiAwXFxcIiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCI+XFxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWhvdmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzPVxcXCJ0aGVhZC1saWdodFxcXCI+XFxuICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XFxcImNvbFxcXCI+6rGw656Y7LKYIOydtOumhDwvdGg+XFxuICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVxcXCJjb2xcXFwiPuqxsOuemOyymCDsvZTrk5w8L3RoPlxcbiAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cXFwiY29udGFjdCBpbiB1bmlxdWVDdXN0b21lcnNcXFwiIDprZXk9XFxcImNvbnRhY3QuY29udGFjdENvZGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDx0ZD57eyBjb250YWN0LmNvbnRhY3ROYW1lIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICA8dGQ+e3sgY29udGFjdC5jb250YWN0Q29kZSB9fTwvdGQ+XFxuICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgdi1lbHNlPlxcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRleHQtbXV0ZWRcXFwiPuqxsOuemOyymCDsoJXrs7TqsIAg7JeG7Iq164uI64ukLjwvcD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctNFxcXCI+XFxuICAgICAgICA8IS0tIOywveqzoCDsvZTrk5wg7LaU6rCAIO2PvCAtLT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgY3VzdG9tLWNhcmQgbWItNVxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICA8aDMgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPuywveqzoCDsvZTrk5wg7LaU6rCAPC9oMz5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxuICAgICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVxcXCJhZGRDU3RvcmFnZVxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiY3VzdG9tZXJDb2RlSW5wdXRcXFwiPuqxsOuemOyymCDsvZTrk5wg7J6F66ClPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJjdXN0b21lckNvZGVJbnB1dFxcXCIgdi1tb2RlbD1cXFwic2VsZWN0ZWRDdXN0b21lckNvZGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCLqsbDrnpjsspgg7L2U65OcXFxcIiByZXF1aXJlZD5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInN0b3JhZ2VDb2RlXFxcIj7ssL3qs6DsvZTrk5wg7J6F66ClPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJzdG9yYWdlQ29kZVxcXCIgdi1tb2RlbD1cXFwibmV3U3RvcmFnZUNvZGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCLssL3qs6Ag7L2U65OcXFxcIiByZXF1aXJlZD5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHRcXFwiPuy2lOqwgO2VmOq4sDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZm9ybT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDwhLS0g6rGw656Y7LKY67OEIO2VoOuLueuQnCDssL3qs6Ag7L2U65OcIOuqqeuhnSAtLT5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCBjdXN0b20tY2FyZFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICA8aDMgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPuqxsOuemOyymOuzhCDtlaDri7nrkJwg7LC96rOgIOy9lOuTnDwvaDM+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHkgcC0wXFxcIj5cXG4gICAgICAgICAgICA8dWwgY2xhc3M9XFxcImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFxcXCI+XFxuICAgICAgICAgICAgICA8bGkgdi1mb3I9XFxcInN0b3JhZ2UgaW4gY1N0b3JhZ2VzXFxcIiA6a2V5PVxcXCJzdG9yYWdlLmN1c3RvbWVyQ29kZVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxzcGFuPuqxsOuemOyymCDsvZTrk5w6IHt7IHN0b3JhZ2UuY3VzdG9tZXJDb2RlIH19LCDssL3qs6Ag7L2U65OcOiB7eyBzdG9yYWdlLnN0b3JhZ2VDb2RlIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVxcXCIgQGNsaWNrPVxcXCJkZWxldGVDU3RvcmFnZShzdG9yYWdlLmN1c3RvbWVyQ29kZSwgc3RvcmFnZS5zdG9yYWdlQ29kZSlcXFwiPuyCreygnDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBkYXRhKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIGNTdG9yYWdlczogW10sIC8vIOyEnOuyhOyXkOyEnCDrsJvslYTsmKgg6rGw656Y7LKY7JmAIOywveqzoCDsvZTrk5wg66qp66GdXFxuICAgICAgdW5pcXVlQ3VzdG9tZXJzOiBbXSwgLy8g7KSR67O1IOygnOqxsOuQnCDqsbDrnpjsspgg7L2U65OcIOuqqeuhnVxcbiAgICAgIHNlbGVjdGVkQ3VzdG9tZXJDb2RlOiAnJywgLy8g7ISg7YOd65CcIOqxsOuemOyymCDsvZTrk5xcXG4gICAgICBuZXdTdG9yYWdlQ29kZTogJycsIC8vIOyeheugpeuQnCDsg4gg7LC96rOgIOy9lOuTnFxcbiAgICB9O1xcbiAgfSxcXG4gIGNyZWF0ZWQoKSB7XFxuICAgIHRoaXMuZmV0Y2hDU3RvcmFnZXMoKTtcXG4gICAgdGhpcy5mZXRjaENvbnRhY3RzKCk7XFxuICB9LFxcbiAgbWV0aG9kczoge1xcbiAgICBmZXRjaENvbnRhY3RzKCkge1xcbiAgICAgIGF4aW9zLmdldCgnL2FwaS9jc3RvcmFnZS9jb250YWN0cycpXFxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XFxuICAgICAgICAgIHRoaXMudW5pcXVlQ3VzdG9tZXJzID0gcmVzcG9uc2UuZGF0YTtcXG4gICAgICAgIH0pXFxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY29udGFjdHM6JywgZXJyb3IpKTtcXG4gICAgfSxcXG4gICAgZmV0Y2hDU3RvcmFnZXMoKSB7XFxuICAgICAgYXhpb3MuZ2V0KCcvYXBpL2NzdG9yYWdlL2xpc3QnKVxcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xcbiAgICAgICAgICB0aGlzLmNTdG9yYWdlcyA9IHJlc3BvbnNlLmRhdGE7XFxuICAgICAgICB9KVxcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHN0b3JhZ2VzOicsIGVycm9yKSk7XFxuICAgIH0sXFxuICAgIGFkZENTdG9yYWdlKCkge1xcbiAgICAgIGNvbnN0IG5ld0NTdG9yYWdlID0ge1xcbiAgICAgICAgY3VzdG9tZXJDb2RlOiB0aGlzLnNlbGVjdGVkQ3VzdG9tZXJDb2RlLFxcbiAgICAgICAgc3RvcmFnZUNvZGU6IHRoaXMubmV3U3RvcmFnZUNvZGUsXFxuICAgICAgfTtcXG4gICAgICBheGlvcy5wb3N0KCcvYXBpL2NzdG9yYWdlL2FkZE9yVXBkYXRlJywgbmV3Q1N0b3JhZ2UpXFxuICAgICAgICAudGhlbigoKSA9PiB7XFxuICAgICAgICAgIGFsZXJ0KCfssL3qs6Ag7L2U65Oc6rCAIOyEseqzteyggeycvOuhnCDstpTqsIDrkJjsl4jsirXri4jri6QuJyk7XFxuICAgICAgICAgIHRoaXMuZmV0Y2hDU3RvcmFnZXMoKTtcXG4gICAgICAgICAgdGhpcy5uZXdTdG9yYWdlQ29kZSA9ICcnO1xcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkQ3VzdG9tZXJDb2RlID0gJyc7XFxuICAgICAgICB9KVxcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIHN0b3JhZ2UgY29kZTonLCBlcnJvcik7XFxuICAgICAgICAgIGFsZXJ0KCfssL3qs6Ag7L2U65OcIOy2lOqwgOyXkCDsi6TtjKjtlZjsmIDsirXri4jri6QuJyk7XFxuICAgICAgICB9KTtcXG4gICAgfSxcXG4gIH0sXFxufVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG59XFxuXFxuLmN1c3RvbS1jYXJkIHtcXG4gIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMC4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXG59XFxuXFxuLmNhcmQtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcXG59XFxuXFxuLnRhYmxlLWhvdmVyIHRib2R5IHRyOmhvdmVyIHtcXG4gIGNvbG9yOiAjNDk1MDU3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxufVxcblxcbi50YWJsZSB0aGVhZCB0aCB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RlZTJlNjtcXG59XFxuXFxuLnRhYmxlLWhvdmVyIHRib2R5IHRyOmhvdmVyIHRkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CStoragePage.vue?vue&type=style&index=0&id=4fef97f7&scoped=true&lang=css\n");

/***/ })

})