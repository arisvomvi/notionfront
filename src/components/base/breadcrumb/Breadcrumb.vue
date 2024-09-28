<template>
	<nav class="breadcrumb" aria-label="breadcrumb" role="navigation">
		
		<ol>
			<li v-for="i in 4" aria-current="">
				<a href="#">
					kakak
				</a>
			</li>
			<li>kka</li>
		</ol>
	</nav>
</template>

<script>
export default {
	name: 'Breadcrumb'
}
</script>

<style lang="scss">
	@import './breadcrumb.scss';
</style>
	<!-- <template v-if="(index + 1) !== breadcrumbItems.length">
					<a :href="item?.url" @click.prevent="onClick(item)">{{ item?.title }}</a>
				</template>
				<template v-else>
					{{ item?.title }}
				</template> -->
<!-- 
	<nav v-if="breadcrumbItems.length > 1" class="breadcrumb" aria-label="breadcrumb" role="navigation">
		<ol>
			<li v-for="(item, index) in breadcrumbItems" :key="index" :aria-current="(index + 1) === breadcrumbItems.length ? 'page' : null">
				<template v-if="(index + 1) !== breadcrumbItems.length">
					<a :href="item?.url" @click.prevent="onClick(item)">{{ item?.title }}</a>
				</template>
				<template v-else>
					{{ item?.title }}
				</template>
			</li>
		</ol>
	</nav>
</template>

<script>
import { defineComponent } from 'vue'
import {mapActions, mapState} from "pinia";
import {useGlobalStore} from "~/stores/global";
import {useCatalogStore} from "~/stores/catalog";
import {cloneDeep} from "lodash";

export default defineComponent({
	name: 'nvkBreadcrumb',
	mixins: [],
	props: {
		items: {
			type: Array,
			default:() => {
				return [];
			},
		},
	},
	data() {
		return {
			initRoute: null,
		}
	},
	created() {
		this.breadcrumbSet(cloneDeep(this.items));
	},
	watch: {
		$route(to, from) {
			if(this.initRoute === null) { this.initRoute = to.fullPath; }
			if(to.fullPath === this.initRoute) {
				this.breadcrumbSet(this.items);
			}
		},
	},
	computed: {
		...mapState(useGlobalStore, {
			localeId: 'localeId',
			breadcrumbItems: 'breadcrumb',
			urls: 'urls',
		}),
		...mapState(useCatalogStore, {
			catalogItemExists: 'isItemExists',
		}),
	},
	methods: {
		...mapActions(useGlobalStore, {
			breadcrumbSet: 'breadcrumbSet',
		}),
		...mapActions(useCatalogStore, {
			catalogRequest: 'request',
		}),
		onClick(item) {
			// console.log('onClick', item);
			/*if(!_.isEmpty(item?.link) && item.link.includes('/category/')) {
				// link:"efreshgr://category/?id=129"
				// url:"https://dev.e-fresh.gr/el/kaba/xymoi-krya-rofhmata/pagwmeno-tsai"
				const linkParams = new URLSearchParams(item.link.split('?')[1]);

				this.$router.push({
					name: 'category',
					params: { slug: item?.url.replace(this.urls.home + '/', '') },
					query: {category_id: linkParams.get('id'), type: 'category'},
				});
				//window.location.href = item?.url;
			} else*/ if(item?.tag === 'products') {
				this.catalogProduct(item);
			} else {
				window.location.href = item?.url;
			}
		},
		catalogProduct(item) {
			// tag: products
			// category_parent_id: 86
			let params = {
				category_id: item?.category_parent_id ?? null,
			};
			if(item?.q) { params.q = item.q; }

			if(this.catalogItemExists('catalog-main')) {
				this.catalogRequest('catalog-main', params, 'breadcrumb');
			} else {
				let slug = this.localeId === 'el' ? 'proionta' : 'products';
				this.$router.push({name: 'category', params: {slug: slug}, query: params});
			}
		},
	},
})
</script> -->
