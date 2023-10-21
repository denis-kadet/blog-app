<template>
    <div>
        <div class="container">
            <div class="bg-light">
                <div class="row">
                    <div class="col-lg-8 col-md-12 p-5 bg-white rounded-3">
                        <div class="d-flex mb-3 flex-column">
                            <h1 class="h5 text-capitalize my-4">Какая услуга Вам нужна?</h1>
                            <div class="d-flex flex-wrap">
                                <div class="d-flex flex-wrap justify-content-center align-items-center me-4">
                                    <input type="checkbox" name="webdev" class="form-check-input m-0 me-3" id="webdev" />
                                    <label for="webdev"> Веб-разработка</label>
                                </div>
                                <div class="d-flex flex-wrap justify-content-center align-items-center me-4">
                                    <input type="checkbox" name="webdes" class="form-check-input m-0 me-3" id="webdes" />
                                    <label for="webdes"> Веб-дизайн</label>
                                </div>
                                <div class="d-flex flex-wrap justify-content-center align-items-center me-4">
                                    <input type="checkbox" name="logodes" class="form-check-input m-0 me-3" id="logodes" />
                                    <label for="logodes"> Дизайн логоттипа</label>
                                </div>
                                <div class="d-flex flex-wrap justify-content-center align-items-center me-4">
                                    <input type="checkbox" name="others" class="form-check-input m-0 me-3" id="others" />
                                    <label for="others"> Другое </label>
                                </div>
                            </div>
                        </div>
                        <form class="row mb-3">
                            <div class="col-md-6 p-3">
                                <input required placeholder="Имя" type="text" name="" id="" />
                            </div>
                            <div class="col-md-6 p-3">
                                <input required placeholder="Фамилия" type="text" name="" id="" />
                            </div>
                            <div class="col-md-6 p-3">
                                <input required placeholder="E-mail" type="email" name="" id="" />
                            </div>
                            <div class="col-md-6 p-3">
                                <input required placeholder="Телефон" type="tel" name="" id="" />
                            </div>
                            <div class="col-md">
                                <textarea required name="" placeholder="Сообщение" id="" cols="30"
                                    rows="1"></textarea>
                            </div>
                            <div class="text-end mt-4">
                                <input class="btn px-4 py-3 btn-outline-dark" type="submit" value="Отправить" />
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-4 col-md-12 text-white aside px-4 py-5">
                        <div class="mb-5">
                            <h1 class="h3">Контактная информация</h1>
                            <p class="opacity-50">
                                <small>
                                    Заполните форму и мы свяжемся с вами в течение 24 часов.
                                </small>
                            </p>
                        </div>
                        <div class="d-flex flex-column px-0">
                            <ul class="m-0 p-0">
                                <li class="d-flex justify-content-start align-items-center mb-4">
                                    <span class="opacity-50 d-flex align-items-center me-3 fs-2">
                                        <i class="fa fa-phone"></i>
                                    </span>
                                    <span>+7 (999) 806 89 59</span>
                                  </li>
                                <li class="d-flex align-items-center r mb-4">
                                    <span class="opacity-50 d-flex align-items-center me-3 fs-2">
                                        <i class="fas fa-mail-bulk"></i>
                                    </span>
                                    <span>max.nesh@yandex.ru</span>
                                </li>
                                <li class="d-flex justify-content-start align-items-center mb-4">
                                    <span class="opacity-50 d-flex align-items-center me-3 fs-2">
                                        <i class="fa-solid fa-location-pin"></i>
                                    </span>
                                    <span>
                                        Россия, Московская область, город Орехово-Зуево
                                    </span>
                                </li>
                            </ul>
                            <div class="text-muted text-center">
                                <code>
                                Логотип прикрутит
                            </code>
                                <br />
                                <code> Логотип прикрутит </code> <br />
                                <code>
                            </code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PageContacts",
    created() {
        console.log('Component Contacts mounted.')
    }
}
</script>

<style lang="scss" scoped>
* {
	font-family: "Poppins", sans-serif;
}
body {
	background-image: linear-gradient( to left bottom, #051937, #05162f, #051327, #040f1f, #010a18);
	background-size: 800%;
	animation: animateClr 1s infinite cubic-bezier(0.62, 0.28, 0.23, 0.99);
}
input[type="text"], input[type="email"], input[type="tel"], textarea {
	border: none;
	border-bottom: 2px solid rgb(128, 126, 126);
	background: transparent;
	outline: none;
	width: 100%;
	text-transform: capitalize;
	padding: 1rem 0.4rem;
}
.aside {
	background-image: linear-gradient( to left bottom, #051937, #002350, #002d69, #003684, #01409f);
	animation: animateClr 5s infinite cubic-bezier(0.62, 0.28, 0.23, 0.99);
	background-size: 400%;
}
@keyframes animateClr {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
