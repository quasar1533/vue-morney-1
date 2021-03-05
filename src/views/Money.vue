<template>
  <Layout class-prefix="money">
    <Keypad/>
    <Types :prop-a="111"/>
    <Notes/>
    <Tags :data-source.sync="tags" />
  </Layout>
</template>

<script lang="ts">
import Keypad from "@/components/money/Keypad.vue";
import Types from "@/components/money/Types.vue";
import Notes from "@/components/money/Notes.vue";
import Tags from "@/components/money/Tags.vue";

export default {
  name: "Money",
  components: {Tags, Notes, Types, Keypad},
  data() {
    return {
      tags: ["衣", "食", "住", "行"]
    };
  }
};
</script>

<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';

</style>