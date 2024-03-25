webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/TableList2.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/TableList2.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      orders: []\n    };\n  },\n  mounted: function mounted() {\n    // API 엔드포인트 URL 생성\n    var apiUrl = \"http://localhost:8080/api/orders/customer/\".concat(this.$route.params.customerCode);\n\n    // API에서 주문 목록을 가져와서 orders 배열에 할당\n    axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(apiUrl).then(function (response) {\n      console.log('orders: ', response.data);\n    }).catch(function (error) {\n      console.error('Error fetching orders:', error);\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3BhZ2VzL1RhYmxlTGlzdDIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9wYWdlcy9UYWJsZUxpc3QyLnZ1ZT8yOTNjIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm9yZGVyLWxpc3RcIj5cbiAgICA8aDI+T3JkZXIgTGlzdDwvaDI+XG4gICAgPHVsPlxuICAgICAgPGxpIHYtZm9yPVwiKG9yZGVyLCBpbmRleCkgaW4gb3JkZXJzXCIgOmtleT1cImluZGV4XCI+XG4gICAgICAgIDxwPuyjvOusuCDrsojtmLg6IHt7IG9yZGVyWyfso7zrrLgg67KI7Zi4J10gfX08L3A+XG4gICAgICAgIDxwPuyjvOusuCDqsIDqsqk6IHt7IG9yZGVyWyfso7zrrLgg6rCA6rKpJ10gfX08L3A+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3JkZXJzOiBbXVxuICAgIH07XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgLy8gQVBJIOyXlOuTnO2PrOyduO2KuCBVUkwg7IOd7ISxXG4gICAgY29uc3QgYXBpVXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvb3JkZXJzL2N1c3RvbWVyLyR7dGhpcy4kcm91dGUucGFyYW1zLmN1c3RvbWVyQ29kZX1gO1xuICAgIFxuICAgIC8vIEFQSeyXkOyEnCDso7zrrLgg66qp66Gd7J2EIOqwgOyguOyZgOyEnCBvcmRlcnMg67Cw7Je07JeQIO2VoOuLuVxuICAgIGF4aW9zLmdldChhcGlVcmwpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvcmRlcnM6ICcsIHJlc3BvbnNlLmRhdGEpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgb3JkZXJzOicsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4vKiBBZGQgeW91ciBzdHlsZXMgaGVyZSAqL1xuPC9zdHlsZT4iXSwibWFwcGluZ3MiOiJBQWFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/TableList2.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/TableList2.vue?vue&type=style&index=0&id=4c1c2aca&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/TableList2.vue?vue&type=style&index=0&id=4c1c2aca&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n/* Add your styles here */\\n\", \"\", {\"version\":3,\"sources\":[\"/home/user1/final/4team_final_MainVue/vue-light-bootstrap-dashboard-master/src/pages/src/pages/TableList2.vue\"],\"names\":[],\"mappings\":\";AAsCA,0BAAA\",\"file\":\"TableList2.vue?vue&type=style&index=0&id=4c1c2aca&scoped=true&lang=css\",\"sourcesContent\":[\"<template>\\n  <div class=\\\"order-list\\\">\\n    <h2>Order List</h2>\\n    <ul>\\n      <li v-for=\\\"(order, index) in orders\\\" :key=\\\"index\\\">\\n        <p>주문 번호: {{ order['주문 번호'] }}</p>\\n        <p>주문 가격: {{ order['주문 가격'] }}</p>\\n      </li>\\n    </ul>\\n  </div>\\n</template>\\n\\n<script>\\nimport axios from 'axios';\\n\\nexport default {\\n  data() {\\n    return {\\n      orders: []\\n    };\\n  },\\n  mounted() {\\n    // API 엔드포인트 URL 생성\\n    const apiUrl = `http://localhost:8080/api/orders/customer/${this.$route.params.customerCode}`;\\n    \\n    // API에서 주문 목록을 가져와서 orders 배열에 할당\\n    axios.get(apiUrl)\\n      .then(response => {\\n        console.log('orders: ', response.data)\\n      })\\n      .catch(error => {\\n        console.error('Error fetching orders:', error);\\n      });\\n  }\\n};\\n</script>\\n\\n<style scoped>\\n/* Add your styles here */\\n</style>\"],\"sourceRoot\":\"\"}]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9wYWdlcy9UYWJsZUxpc3QyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRjMWMyYWNhJnNjb3BlZD10cnVlJmxhbmc9Y3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1RhYmxlTGlzdDIudnVlPzNlODUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi8qIEFkZCB5b3VyIHN0eWxlcyBoZXJlICovXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL3VzZXIxL2ZpbmFsLzR0ZWFtX2ZpbmFsX01haW5WdWUvdnVlLWxpZ2h0LWJvb3RzdHJhcC1kYXNoYm9hcmQtbWFzdGVyL3NyYy9wYWdlcy9zcmMvcGFnZXMvVGFibGVMaXN0Mi52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXNDQSwwQkFBQVwiLFwiZmlsZVwiOlwiVGFibGVMaXN0Mi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YzFjMmFjYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8ZGl2IGNsYXNzPVxcXCJvcmRlci1saXN0XFxcIj5cXG4gICAgPGgyPk9yZGVyIExpc3Q8L2gyPlxcbiAgICA8dWw+XFxuICAgICAgPGxpIHYtZm9yPVxcXCIob3JkZXIsIGluZGV4KSBpbiBvcmRlcnNcXFwiIDprZXk9XFxcImluZGV4XFxcIj5cXG4gICAgICAgIDxwPuyjvOusuCDrsojtmLg6IHt7IG9yZGVyWyfso7zrrLgg67KI7Zi4J10gfX08L3A+XFxuICAgICAgICA8cD7so7zrrLgg6rCA6rKpOiB7eyBvcmRlclsn7KO866y4IOqwgOqyqSddIH19PC9wPlxcbiAgICAgIDwvbGk+XFxuICAgIDwvdWw+XFxuICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBkYXRhKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIG9yZGVyczogW11cXG4gICAgfTtcXG4gIH0sXFxuICBtb3VudGVkKCkge1xcbiAgICAvLyBBUEkg7JeU65Oc7Y+s7J247Yq4IFVSTCDsg53shLFcXG4gICAgY29uc3QgYXBpVXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvb3JkZXJzL2N1c3RvbWVyLyR7dGhpcy4kcm91dGUucGFyYW1zLmN1c3RvbWVyQ29kZX1gO1xcbiAgICBcXG4gICAgLy8gQVBJ7JeQ7IScIOyjvOusuCDrqqnroZ3snYQg6rCA7KC47JmA7IScIG9yZGVycyDrsLDsl7Tsl5Ag7ZWg64u5XFxuICAgIGF4aW9zLmdldChhcGlVcmwpXFxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xcbiAgICAgICAgY29uc29sZS5sb2coJ29yZGVyczogJywgcmVzcG9uc2UuZGF0YSlcXG4gICAgICB9KVxcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XFxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBvcmRlcnM6JywgZXJyb3IpO1xcbiAgICAgIH0pO1xcbiAgfVxcbn07XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4vKiBBZGQgeW91ciBzdHlsZXMgaGVyZSAqL1xcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/TableList2.vue?vue&type=style&index=0&id=4c1c2aca&scoped=true&lang=css\n");

/***/ })

})