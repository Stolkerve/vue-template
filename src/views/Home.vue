<template>
  <hello-world />
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator"

import HelloWorld from "@/components/HelloWorld.vue"

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
}
</script>