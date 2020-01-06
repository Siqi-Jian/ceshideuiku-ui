<template>
  <el-dialog
    :title="title"
    :visible="dialogVisible"
    @close="$emit('update:dialogVisible', false)"
    :width="width"
  >
    <slot name="modal-body"></slot>
    <div slot="footer" class="dialog-footer">
      <slot name="modal-footer">
        <el-button @click="$emit('update:dialogVisible', false)" size="small">取消</el-button>
        <el-button
          type="primary"
          @click="$emit('confirm')"
          size="small"
          :disabled="confirmDisable || befroeSendDisable"
        >
          {{ beforeSendDisable ? "处理中..." : "确定" }}
        </el-button>
      </slot>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "test-modal",
  props: {
    dialogVisable: Boolean,
    title: String,
    width: {
      type: String,
      default: "580px"
    },
    beforeSendDisable: {
      type: Boolean,
      default: false
    },
    confirmDisable: {
      type: Boolean,
      default: false
    }
  }
}
</script>