<template>
    <!-- Country Details (column) -->
    <div class="column is-8">
                    <section class="section" v-if="!isLoading">

                        <figure class="image is-128x128">
                            <img :src="'https://flagpedia.net/data/flags/icon/72x54/${country.alpha}.png"`>
                        </figure>
                        <div class="title">{{country.name.common}}</div>
                        <table class="table is-fullwidth">
                            <tbody>
                                <tr>
                                    <td>Capital</td>
                                    <td>{{country.capital[0]}}</td>
                                </tr>
                                <tr>
                                    <td>Area</td>
                                    <td>{{country.area}} km <sup>2</sup></td>
                                </tr>
                                <tr>
                                    <td>Borders</td>
                                    <td>
                                        <ul>
                                            <li v-for="borders in country.borders"><router-link :to="{name:'details', params: {code:border}}></routerlink></li>
                                        </ul>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </section>
                </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import {useRoute} from 'vue-router';
import countries from '../assets/countries.json';


const route =useRoute();
const country = ref();
const isLoading = ref(true)

onMounted(() => {
    country.value = findCountry(route.params.code);
    console.log(country.value)
    isLoading.value = false
})

watch(() => route.params.code, newValue => {
    country.value= findCountry(route.params.code);
});

const findCountry = (code) => {
    return CountriesListVue.find((country)=>{
        return country.alpha3code===code
    })
    

}

</script>

<style scoped>
</style>