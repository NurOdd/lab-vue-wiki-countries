<template>
    
        <!-- container wrapper div -->
        <div class="container" style="height: calc(100vh - 52px);">
            <!-- columns wrapper div -->
            <div class="columns mt-0 " style="height: 100%;">
                <!-- Countries List (column) -->
                <div class="column is-4" style="overflow: auto">
                    <router-link v-for="country in countries" class="media is-clickable" :to="{name: 'details', params:{code: country.alpha3code}}"/>
                        <figure class="media-left">
                            <p class="image is-64x64">
                                <img src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerClass}.png`" />
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>{{country.name.common}}</strong>
                                </p>
                            </div>
                        </div>
                </div>   
                
            </div>
        </div>


</template>

<script setup>
import countries from '../assets/countries.json'
console.log(countries)

</script>

<style scoped>
</style>