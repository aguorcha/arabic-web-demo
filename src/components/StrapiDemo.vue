<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const selectedLanguage = ref('es');
const selectedFont = ref('noto');
const loading = ref(true);
const error = ref(null);
const name = ref('');
const texts = ref({
  spanish: {},
  english: {},
  french: {},
  arabic: {},
});
const url = ref('');

const fetchTexts = async () => {
  loading.value = true;
  try {
    const resSpanish = await axios.get('http://localhost:1337/api/organizations?locale=es');
    const resEnglish = await axios.get('http://localhost:1337/api/organizations?locale=en');
    const resFrench = await axios.get('http://localhost:1337/api/organizations?locale=fr');
    const resArabic = await axios.get('http://localhost:1337/api/organizations?locale=ar');

    texts.value.spanish = resSpanish.data.data[0];
    texts.value.english = resEnglish.data.data[0];
    texts.value.french = resFrench.data.data[0];
    texts.value.arabic = resArabic.data.data[0];

    name.value = resSpanish.data.data[0].name;
    url.value = resSpanish.data.data[0].url;
  } catch (err) {
    error.value = 'Error al cargar los textos de Strapi';
    console.error(err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchTexts();
});

// const name = computed(() => {
//   switch (selectedLanguage.value) {
//     case 'es':
//       return texts.value.spanish.name;
//     case 'en':
//       return texts.value.english.name;
//     case 'fr':
//       return texts.value.french.name;
//     case 'ar':
//       return texts.value.arabic.name;
//     default:
//       return texts.value.spanish.name;
//   }
// });

const description = computed(() => {
  switch (selectedLanguage.value) {
    case 'es':
      return texts.value.spanish.description;
    case 'en':
      return texts.value.english.description;
    case 'fr':
      return texts.value.french.description;
    case 'ar':
      return texts.value.arabic.description;
    default:
      return texts.value.spanish.description;
  }
});

const toggleFont = () => {
  selectedFont.value = selectedFont.value === 'noto' ? 'ibm' : 'noto';
};

const fontClass = computed(() => {
  return selectedFont.value === 'noto'
    ? selectedLanguage.value ? 'font-noto-sans-arabic' : 'font-noto-sans'
    : selectedLanguage.value ? 'font-ibm-plex-sans-arabic' : 'font-ibm-plex-sans';
});

const textDirection = computed(() => {
  return selectedLanguage.value === 'ar' ? 'rtl' : 'ltr';
});
</script>

<template>
<div class="bg-green-100 mt-10 mx-auto w-5/6 rounded-lg flex flex-col p-4">
  
  <div class="flex justify-between">
    <select v-model="selectedLanguage" class="p-2 my-4 bg-green-800 text-white w-52 rounded-lg">
      <option value="es">Español</option>
      <option value="en">Inglés</option>
      <option value="fr">Francés</option>
      <option value="ar">Árabe</option>
    </select>

    <button @click="toggleFont" class="p-2 my-4 bg-green-800 text-white w-56 rounded-lg">
      Cambiar fuente a {{ selectedFont === 'noto' ? 'IBM Plex' : 'Noto' }}
    </button>
  </div>

  <div :dir="textDirection" :class="fontClass">
    <h1 class="text-2xl mb-2">{{ name }}</h1>
    <p class="mb-2">{{ description }}</p>
    <a :href="url" class="text-black underline" target="_blank">
      {{ url }}
    </a>
  </div>

</div>
</template>

<style scoped>

</style>