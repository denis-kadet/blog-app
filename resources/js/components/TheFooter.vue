<template>
    <footer class="container">
      <div class="row">
        <div class="col-8">
          <ul class="nav flex-column">
            
            <li class="nav-item mb-2">
               <router-link class="nav-link p-0 text-muted" :to="{ name: 'PageHome' }">Главная</router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link class="nav-link p-0 text-muted" :to="{ name: 'PageAbout' }">Портфолио</router-link>
            </li>
            <li class="nav-item mb-2">
              <router-link class="nav-link p-0 text-muted" :to="{ name: 'PageContacts' }">Контакты</router-link>
            </li>
            <li class="d-none nav-item mb-2">
              <router-link class="nav-link p-0 text-muted" :to="{ name: 'PageTeam' }">Команда</router-link>
            </li>
          </ul>
        </div>

        <div class="col-4">
          <form>
            <h5>Подпишитесь на нашу рассылку новостей</h5>
            <p>Ежемесячный дайджест того, что у нас нового и интересного.</p>
            <div class="d-flex w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">Email</label>
              <input id="newsletter1" type="text" class="form-control" placeholder="Email">
              <button class="btn btn-primary" type="button">Подписаться</button>
            </div>
          </form>
        </div>
      </div>

      <div class="d-flex justify-content-between border-top">
        <p>© 2023 Company, Inc. All rights reserved.</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24">
                <use xlink:href="#twitter"></use>
              </svg></a></li>
          <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24">
                <use xlink:href="#instagram"></use>
              </svg></a></li>
          <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24">
                <use xlink:href="#facebook"></use>
              </svg></a></li>
        </ul>
      </div>
    </footer>
</template>

<script>
export default {
  name: "footermenu",
  mounted() {
    console.log('Component footermenu mounted.');
  }
};
</script>
    
<style scoped>
footer {
  /* Чтобы footer не уменьшался */
  flex-shrink: 0;
}
</style>