<template>
    <div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
                <img src="https://on-desktop.com/wps/Nature_Mountains_Mountain_on_the_background_of_the_planet_032585_.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Метка первого слайда</h5>
                    <p>Некоторый репрезентативный заполнитель для первого слайда.</p>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <img src="https://on-desktop.com/wps/Space_Space_area_on_the_background_of_the_planet_101329_.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Метка второго слайда</h5>
                    <p>Некоторый репрезентативный заполнитель для второго слайда.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://on-desktop.com/wps/Space_The_ship_on_a_background_of_a_planet_082161_.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Метка третьего слайда</h5>
                    <p>Некоторый репрезентативный заполнитель для третьего слайда.</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Предыдущий</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Следующий</span>
        </button>
    </div>
</template>
      
    
<script>
export default {
    name: "HomeCarousel",
    mounted() {
        console.log('Component HomeCarousel mounted.')
    }
};
</script>
    
<style scoped></style>