<template lang="html">
    <div class="container">
        <img src="logo-payoff-desktop.png" alt="logo">
        <p class="name">{{name}}</p>
        <p>{{job}}</p>
        <p>presso</p>
        <p>{{location}}</p>
        <img src="refresh-button-desktop.png" alt="random" @click="update()">
    </div>
</template>

<script>
export default {
    data: function() {
        return {
        }
    }
}
</script>

<style lang="css">
</style>