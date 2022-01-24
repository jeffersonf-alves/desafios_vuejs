<template>
    <header>    
        <nav class="navbar navbar-light bg-dark d-flex justify-content-center">
            <a class="navbar-brand text-center" href="#">
                <h1 class="h1 text-light text-center">@Jefferson Alves</h1>
            </a>
        </nav>
        <nav class="nav  d-flex justify-content-center bg-secondary">
                <router-link class="nav-link text-light" router-link-active to="/carrosel">Carrosel</router-link>
                <router-link class="nav-link text-light" router-link-active to="/text">Text-editor</router-link>
                <router-link class="nav-link text-light" router-link-active to="/acerte">Acerte</router-link>
                <router-link class="nav-link text-light" router-link-active to="/about">About</router-link>
        </nav>

    </header>
</template>

<script>

export default({
    
})
</script>

<style scoped>

.router-link-active{
    color: black !important;
}

</style>