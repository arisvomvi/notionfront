<template>
	<div class="progress"
	     role="progressbar"
	     :aria-valuenow="value"
	     aria-valuemin="0"
	     aria-valuemax="100"
	     >
		<div >sfsdfdf</div>
		<span class="progress__bar" aria-hidden="true" :style="`--progress: ${value}%;`"></span>
	</div>
</template>
<!-- :class="[templateClasses('progress')]" -->
<script>
import {defineComponent} from 'vue';
// import mixinTemplate from '~/mixins/template'

export default defineComponent({
	name: 'Progress',
	// mixins: [mixinTemplate],
	props: {
		value: {
			type: [Number, String],
			default: 20,
		},
	},
	methods: {

	},
})
</script>

<style lang="scss">
	@import './progress.scss';
</style>
