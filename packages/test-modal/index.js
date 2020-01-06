import testModal from "./src/test-modal";

testModal.install = function(Vue) {
  Vue.component(testModal.name, testModal);
};

export default testModal;