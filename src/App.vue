<template>
<h1>{{ text }}</h1>
</template>

<script>
export default {
    data() {
	return {
	    text: "Lorem"
	}
    }
}
</script>

<style scoped>
h1 {
    color: hsl(0, 50%, 30%);
}
</style>
