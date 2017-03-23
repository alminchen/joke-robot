<template>
	<div class="page">
		<img src="../assets/images/5.jpeg" height="1244" width="700" alt="" class="index">
	</div>
</template>
<script>
	export default{
		created(){
			setTimeout(()=>{
				this.$router.push({'name':"happy"})
			},1000)
		}
	}
</script>
<style lang="scss">
	.index{
		width:100%;
		background-color:#fff;
		height: 100%
	}
</style>