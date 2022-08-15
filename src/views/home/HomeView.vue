<template>
  <div class="home">
  </div>
</template>
<script>
import { ref, reactive } from 'vue'
export default {
	setup() {
		const count = ref(0)
		const comby = reactive({
			counts: 0
		})
		return {
			count,
			comby,
		}
	}
}
</script>

<style lang="scss">
  @import '@/css/pages/Home.scss';
</style>
