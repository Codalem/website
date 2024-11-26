<template>
  <div class="bg-codalem-blue flex justify-center items-start p-10 mb-0 sm:p-20 w-full codalem-logo-container">
    <nuxt-img :src="'/codalem_white_nobar.png'" class="max-h-32 codalem-logo-nobar swing-in-bottom-bck" />
    <nuxt-img :src="'/codalem_white.png'" class="max-h-32 codalem-logo reveal px-10 sm:px-20 w-full" />
    <h1 class="text-center text-6xl p-10">
      Codalem
    </h1>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src?: string
}>()
</script>

<style lang="scss" scoped>
h1 {
  font-family: "Sans serif", cursive;
  color: #222d5a;
  display: none;
}

.reveal {
  position: absolute;
  -webkit-animation: reveal-bar 2s cubic-bezier(0.175, 0.885, 0.320, 1.275) both 0.5s;
          animation: reveal-bar 2s cubic-bezier(0.175, 0.885, 0.320, 1.275) both 0.5s;
}

.swing-in-bottom-bck {
  -webkit-animation: hide-bar 2s cubic-bezier(0.175, 0.885, 0.320, 1.275) both 75s,
                     swing-in-bottom-bck 1.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
          animation: hide-bar 2s cubic-bezier(0.175, 0.885, 0.320, 1.275) both 75s,
                     swing-in-bottom-bck 1.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
}

.codalem-logo {
  // transition: clip-path 1s ease-in-out;
  object-fit: contain; /* Ajuste l'image à la taille du conteneur */
}

@keyframes hide-bar {
  0% {
    clip-path: inset(0 0 0 0); /* Montre toute l'image */
  }
  100% {
    clip-path: inset(0 0 0 100%); /* Masque l'image du dessus */
  }
}
@-webkit-keyframes hide-bar {
  0% {
    clip-path: inset(0 0 0 0); /* Masque l'image du dessus */
  }
  100% {
    clip-path: inset(0 100% 0 0); /* Montre toute l'image */
  }
}

@keyframes reveal-bar {
  0% {
    clip-path: inset(0 100% 0 0); /* Masque l'image du dessus */
  }
  100% {
    clip-path: inset(0 0 0 0); /* Montre toute l'image */
  }
}
@-webkit-keyframes reveal-bar {
  0% {
    clip-path: inset(0 100% 0 0); /* Masque l'image du dessus */
  }
  100% {
    clip-path: inset(0 0 0 0); /* Montre toute l'image */
  }
}


@-webkit-keyframes swing-in-bottom-bck {
  0% {
    -webkit-transform: rotateX(-70deg);
            transform: rotateX(-70deg);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0);
            transform: rotateX(0);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
    opacity: 1;
  }
}
@keyframes swing-in-bottom-bck {
  0% {
    -webkit-transform: rotateX(-70deg);
            transform: rotateX(-70deg);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0);
            transform: rotateX(0);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
    opacity: 1;
  }
}
</style>