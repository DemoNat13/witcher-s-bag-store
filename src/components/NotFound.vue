<template>
  <div class="not-found">
    <p class="not-found__text mx-2">Упс! Кажется, Плотва отклонилась от курса! <br>
      Нажмите на изображение, чтобы применить "Аксий" и вернуться!</p>
    <router-link
      class="my-0"
      :to="{path:'/'}"
    >
      <img src="@/assets/error.jpg" class="not-found__horse-img">
    </router-link>
   </div>
</template>

<script>
export default {
  name: 'NotFound',
  data: () => ({

  }),
};
</script>

<style lang="scss" scoped>
  @media(max-width: 768px) {
    .not-found p.not-found__text {
      font-size: 1rem;
    }
  }
  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1.25rem;
    .not-found__text {
      text-align: center;
      font-size: 1.5rem;
    }
    .not-found__horse-img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
    .router-link-active {
      display: flex;
      max-width: 60%;
    }
  }
</style>
