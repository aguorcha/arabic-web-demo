<script setup>
import { ref, computed } from 'vue'

const isArabic = ref(false);
const selectedFont = ref('noto');

const texts = {
  spanish: {
    title: 'Bienvenidos a la demo',
    paragraph: 'Este es un párrafo de prueba en español. Aquí puedes agregar más contenido para ver cómo se comporta el diseño con textos largos. Por ejemplo, puedes hablar sobre la importancia de la prueba de conceptos y cómo se utilizan en el desarrollo de proyectos web. Además, asegúrate de considerar la adaptación de estilos para diferentes idiomas y direcciones de texto.',
    subtitle1: 'Subtítulo de prueba',
    longText1: 'Aquí tienes otro párrafo largo para probar el diseño. Este texto debe incluir varios aspectos del contenido que podrías mostrar en tu aplicación. El objetivo es asegurar que el diseño se adapte bien a textos extensos y que todos los elementos se vean correctamente alineados y espaciados.',
    subtitle2: 'Segundo subtítulo de prueba',
    longText2: 'Este es un segundo párrafo largo que proporciona más contenido para evaluar cómo se comporta el diseño con textos extensos. Puedes incluir información adicional sobre el propósito de tu proyecto, las características que estás probando y cualquier otro detalle relevante que quieras mostrar en tu demostración.'
  },
  arabic: {
    title: 'مرحبا بكم في العرض التجريبي',
    paragraph: 'هذه فقرة تجريبية باللغة العربية. يمكنك هنا إضافة المزيد من المحتوى لمراقبة كيفية تصرف التصميم مع النصوص الطويلة. على سبيل المثال، يمكنك التحدث عن أهمية تجارب المفاهيم وكيفية استخدامها في تطوير مشاريع الويب. بالإضافة إلى ذلك، تأكد من مراعاة تكيف الأنماط مع اللغات المختلفة واتجاهات النص.',
    subtitle1: 'عنوان فرعي تجريبي',
    longText1: 'هنا لديك فقرة طويلة أخرى لاختبار التصميم. يجب أن يتضمن هذا النص عدة جوانب من المحتوى الذي قد تعرضه في تطبيقك. الهدف هو التأكد من أن التصميم يتكيف بشكل جيد مع النصوص الطويلة وأن جميع العناصر تظهر بشكل صحيح ومترتب.',
    subtitle2: 'عنوان فرعي تجريبي ثاني',
    longText2: 'هذه فقرة طويلة ثانية توفر المزيد من المحتوى لتقييم كيفية تصرف التصميم مع النصوص الممتدة. يمكنك تضمين معلومات إضافية حول هدف مشروعك، والميزات التي تختبرها، وأي تفاصيل أخرى ذات صلة تريد عرضها في العرض التقديمي الخاص بك.'
  }
};

const title = computed(() => isArabic.value ? texts.arabic.title : texts.spanish.title);
const paragraph = computed(() => isArabic.value ? texts.arabic.paragraph : texts.spanish.paragraph);
const subtitle1 = computed(() => isArabic.value ? texts.arabic.subtitle1 : texts.spanish.subtitle1);
const longText1 = computed(() => isArabic.value ? texts.arabic.longText1 : texts.spanish.longText1);
const subtitle2 = computed(() => isArabic.value ? texts.arabic.subtitle2 : texts.spanish.subtitle2);
const longText2 = computed(() => isArabic.value ? texts.arabic.longText2 : texts.spanish.longText2);

const toggleLanguage = () => {
  isArabic.value = !isArabic.value;
};

const toggleFont = () => {
  selectedFont.value = selectedFont.value === 'noto' ? 'ibm' : 'noto';
};

const fontClass = computed(() => {
  return selectedFont.value === 'noto'
    ? isArabic.value ? 'font-noto-sans-arabic' : 'font-noto-sans'
    : isArabic.value ? 'font-ibm-plex-sans-arabic' : 'font-ibm-plex-sans';
});
</script>

<template>
<div class="bg-green-100 mt-10 mx-auto w-5/6 rounded-lg flex flex-col p-4">
  
  <div class="flex justify-between">
    <button @click="toggleLanguage" class="p-2 my-4 bg-green-800 text-white w-52 rounded-lg">
      Cambiar a {{ isArabic ? 'Español' : 'Árabe' }}
    </button>
    <button @click="toggleFont" class="p-2 my-4 bg-green-800 text-white w-56 rounded-lg">
      Cambiar fuente a {{ selectedFont === 'noto' ? 'IBM Plex' : 'Noto' }}
    </button>
  </div>

  <div :dir="isArabic ? 'rtl' : 'ltr'" :class="fontClass">
    <h1 class="text-2xl mb-2">{{ title }}</h1>
    <p>{{ paragraph }}</p>
    <h2 class="text-xl mt-4 mb-2 font-bold">{{ subtitle1 }}</h2>
    <p class="font-bold">{{ longText1 }}</p>
    <h2 class="text-xl mt-4 mb-2 italic">{{ subtitle2 }}</h2>
    <p class="italic">{{ longText2 }}</p>
  </div>

</div>
</template>

<style scoped>

</style>
