<template>
  <nav class="bg-codalem-blue pb-3 mb-0">
    <ul class="flex flex-wrap justify-center gap-x-20">
      <li>
        <NuxtLink class="cursor-pointer no-underline hover:text-blue-200 text-lg" to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink class="cursor-pointer no-underline hover:text-blue-200 text-lg" to="/#plus-dinformations">Contact</NuxtLink>
      </li>
      <li>
        <a class="cursor-pointer no-underline hover:text-blue-200 text-lg" target="_parent" href="https://fr.linkedin.com/company/codalem">News</a>
      </li>
      <li>
        <NuxtLink class="cursor-pointer no-underline hover:text-blue-200 text-lg" to="/configurator">Avantages</NuxtLink>
      </li>
    </ul>
</nav>
</template>

<script lang="ts" setup>

</script>

<style>
ul {
  text-decoration: none;
}
nav > ul > li > a {
  text-decoration: none !important;
}
</style>
