<script>
    //header
    const avatarHeader = document.querySelector(".user-menu-profile-image") && document.querySelector(".user-menu-profile-image").getAttribute("style");
    const header__notifications = document.querySelector(".header__notifications");
    const header__gaming = document.querySelectorAll(".gaming-currency-header-link");
    
    if(document.querySelector(".header") && window.location.href.indexOf("moderator") === -1 && window.location.href.indexOf("webinar") === -1) {
        document.querySelector(".header").innerHTML = `<header class="header2">
            <div class="container">
                <div class="header-wrapper">
                    <div class="header-top">
                        <div class="header-gaming"></div>
                        <div class="header-notifications"></div>
                    </div>
                    <div class="header-bottom">
                        <a href="https://iomp.ru">
                            <img
                                src="https://api.iomp.ru/public/storage/all/logo.svg"
                                alt="IOMP"
                                class="header-logo__img"
                            />
                        </a>
            
                        <nav class="header-nav">
                            <a href="https://iomp.ru/shop" class="btn-regular_color header__btn">
                                Магазин курсов
                            </a>
            
                            <div class="header-menu-hidden">
                                <a href="https://iomp.ru/timetable" class="header__link">Расписание</a>
                                <a href="https://iomp.ru/teachers" class="header__link">Преподаватели</a>
                                <a href="https://iomp.ru/magazine" class="header__link">Журнал</a>
                            </div>
                            
                            <div class="header-modal-wrapper">
                                <div class="header-modal-content">
                                    <div class="header-modal-close">
                                        <svg
                                            width="25"
                                            height="25"
                                            viewBox="0 0 39 38"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <line
                                                x1="2.70711"
                                                y1="1.29289"
                                                x2="38.0624"
                                                y2="36.6482"
                                                stroke="black"
                                                strokeWidth="2"
                                            />
                                            <line
                                                x1="1.29289"
                                                y1="36.6482"
                                                x2="36.6482"
                                                y2="1.2929"
                                                stroke="black"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                    </div>
                            
                                    <a href="https://iomp.ru/" class="header-modal-logo__link">
                                        <img
                                            src="https://api.iomp.ru/public/storage/all/logo.svg"
                                            alt="IOMP"
                                            class="header-modal-logo__img"
                                        />
                                    </a>
                            
                                    <nav class="header-modal-nav">
                                        <a
                                            href="https://iomp.ru/shop"
                                            class="header-modal__link"
                                        >
                                            Магазин курсов
                                        </a>
                                        <a
                                            href="https://iomp.ru/timetable"
                                            class="header-modal__link"
                                        >
                                            Расписание
                                        </a>
                                        <a
                                            href="https://iomp.ru/teachers"
                                            class="header-modal__link"
                                        >
                                            Преподаватели
                                        </a>
                                        <a
                                            href="https://iomp.ru/institute"
                                            class="header-modal__link"
                                        >
                                            Сведения об образовательной организации
                                        </a>
                                        <a
                                            href="https://iomp.ru/magazine"
                                            class="header-modal__link"
                                        >
                                            Журнал
                                        </a>
                                        <a
                                            href="https://iomp.ru/library"
                                            class="header-modal__link"
                                        >
                                            Мои курсы
                                        </a>
                                        <a
                                            href="https://iomp.ru/session-room"
                                            class="header-modal__link"
                                        >
                                            Сессионная комната
                                        </a>
                                        <a
                                            href="/personal/certificate"
                                            class="header-modal__link"
                                        >
                                            Сертификаты
                                        </a>
                                        <a
                                            href="https://iomp.ru/cabinet"
                                            class="header-modal__link"
                                        >
                                            Настройки
                                        </a>
                                        <a
                                            href="/personal/auth/logout?lg=ru"
                                            class="header-modal__link"
                                        >
                                            Выйти
                                        </a>
                                    </nav>
                                </div>
                            </div>
                            <div class="header-menu-burger">
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 512 320"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M501.333 0H10.667C4.779 0 0 4.779 0 10.667C0 16.555 4.779 21.334 10.667 21.334H501.334C507.222 21.334 512.001 16.555 512.001 10.667C512.001 4.779 507.221 0 501.333 0Z"
                                    />
                                    <path
                                        d="M501.333 149.333H10.667C4.779 149.333 0 154.112 0 160C0 165.888 4.779 170.667 10.667 170.667H501.334C507.222 170.667 512.001 165.888 512.001 160C512.001 154.112 507.221 149.333 501.333 149.333Z"
                                    />
                                    <path
                                        d="M501.333 298.667H10.667C4.779 298.667 0 303.445 0 309.333C0 315.221 4.779 320 10.667 320H501.334C507.222 320 512.001 315.221 512.001 309.333C512 303.445 507.221 298.667 501.333 298.667Z"
                                    />
                                </svg>
                            </div>
                        </nav>
            
                        <div class="header-right">
                            <div class="header-user">
                                <div class="header-user__img-wrapper">
                                    <div class="header-user__img" style="${avatarHeader}"></div>
                                </div>
                                <svg
                                    width="15"
                                    height="9"
                                    viewBox="0 0 15 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <line
                                        x1="0.353553"
                                        y1="0.646447"
                                        x2="7.42462"
                                        y2="7.71751"
                                        stroke="#000"
                                    />
                                    <line
                                        x1="6.64645"
                                        y1="7.71752"
                                        x2="13.7175"
                                        y2="0.646454"
                                        stroke="#000"
                                    />
                                </svg>
                                <div class="header-user-menu">
                                    <a href="/personal" class="header-user-menu__link">
                                        <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.869566 24.7826C0.389294 24.7826 0 24.3932 0 23.913V3.58696C0 1.60908 1.60908 0 3.58696 0H19.1304C19.6107 0 20 0.389348 20 0.869566V20.8696C20 21.3498 19.6107 21.7392 19.1304 21.7392C18.6502 21.7392 18.2609 21.3498 18.2609 20.8696V1.73913H3.58696C2.56804 1.73913 1.73913 2.56804 1.73913 3.58696V23.913C1.73913 24.3932 1.34984 24.7826 0.869566 24.7826Z" fill="#000"></path><path d="M19.1304 27.826H3.91304C1.75538 27.826 0 26.0708 0 23.913C0 21.7554 1.75538 20 3.91304 20H19.1304C19.6107 20 20 20.3894 20 20.8696C20 21.3498 19.6107 21.7392 19.1304 21.7392H3.91304C2.71434 21.7392 1.73913 22.7144 1.73913 23.913C1.73913 25.1118 2.71434 26.087 3.91304 26.087H19.1304C19.6107 26.087 20 26.4764 20 26.9566C20 27.4368 19.6107 27.826 19.1304 27.826Z" fill="#000"></path><path d="M19.1309 24.7827H3.91353C3.43325 24.7827 3.04395 24.3933 3.04395 23.9131C3.04395 23.4329 3.43325 23.0435 3.91353 23.0435H19.1309C19.6112 23.0435 20.0004 23.4329 20.0004 23.9131C20.0004 24.3933 19.6112 24.7827 19.1309 24.7827Z" fill="#000"></path><path d="M4.78267 21.7392C4.30239 21.7392 3.91309 21.3498 3.91309 20.8696V0.869566C3.91309 0.389348 4.30239 0 4.78267 0C5.26293 0 5.65223 0.389348 5.65223 0.869566V20.8696C5.65223 21.3498 5.26293 21.7392 4.78267 21.7392Z" fill="#000"></path></svg>
                                        Мои курсы
                                    </a>
                                    <a href="https://iomp.ru/session-room" class="header-user-menu__link">
                                        <svg width="359" height="347" viewBox="0 0 359 347" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8.37916" y="28.2393" width="158.788" height="239.995" rx="10.5" transform="rotate(-7.185 8.37916 28.2393)" stroke="#000" stroke-width="15"></rect><path d="M192.092 23.53C187.976 23.057 184.257 26.0095 183.784 30.1245C183.311 34.2395 186.264 37.9589 190.379 38.4319L192.092 23.53ZM247.161 269.634L254.593 270.644L254.593 270.644L247.161 269.634ZM275.486 61.2119L282.918 62.2219L282.918 62.2219L275.486 61.2119ZM190.379 38.4319L257.096 46.1004L258.809 31.1985L192.092 23.53L190.379 38.4319ZM268.055 60.2019L239.729 268.624L254.593 270.644L282.918 62.2219L268.055 60.2019ZM227.905 277.614L77.25 257.05L75.2213 271.912L225.876 292.476L227.905 277.614ZM239.729 268.624C238.948 274.373 233.653 278.398 227.905 277.614L225.876 292.476C239.836 294.382 252.696 284.605 254.593 270.644L239.729 268.624ZM257.096 46.1004C264.055 46.9002 268.998 53.2612 268.055 60.2019L282.918 62.2219C284.993 46.9523 274.118 32.9581 258.809 31.1985L257.096 46.1004Z" fill="#000"></path><path d="M292.135 78.5636C288.314 76.9627 283.92 78.7619 282.319 82.5821C280.718 86.4024 282.517 90.7971 286.337 92.398L292.135 78.5636ZM250.819 319.447L257.638 322.569L257.638 322.569L250.819 319.447ZM338.276 128.422L331.457 125.3L338.276 128.422ZM286.337 92.398L324.923 108.567L330.72 94.733L292.135 78.5636L286.337 92.398ZM331.457 125.3L244 316.325L257.638 322.569L345.096 131.544L331.457 125.3ZM230.076 321.499L91.8618 258.122L85.6097 271.757L223.824 335.134L230.076 321.499ZM244 316.325C241.585 321.6 235.35 323.917 230.076 321.499L223.824 335.134C236.631 341.006 251.773 335.38 257.638 322.569L244 316.325ZM324.923 108.567C331.437 111.297 334.397 118.878 331.457 125.3L345.096 131.544C351.564 117.416 345.051 100.738 330.72 94.733L324.923 108.567Z" fill="#000"></path></svg>
                                        Сессионная комната
                                    </a>
                                    <a href="/personal/certificate" class="header-user-menu__link">
                                        <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.0604 0H1.93949C0.87011 0 0 0.87011 0 1.93949V18.3041C0 19.3735 0.87011 20.2436 1.93949 20.2436H16.0048L15.5801 22.8336C15.5002 23.3212 15.6614 23.7628 16.0115 24.0149C16.3615 24.2669 16.8312 24.2804 17.2684 24.05L20.303 22.4527C20.3877 22.4093 20.621 22.4093 20.7056 22.4527L23.7402 24.05C23.9478 24.1593 24.1628 24.2137 24.3688 24.2137C24.5967 24.2137 24.8135 24.1471 24.9972 24.0147C25.3472 23.7627 25.5085 23.321 25.4287 22.8334L25.0041 20.2435H26.0605C27.1299 20.2435 28 19.3734 28 18.304V1.93949C27.9999 0.869999 27.1298 0 26.0604 0ZM20.5044 16.9192C18.6406 16.9192 17.1241 15.4027 17.1241 13.539C17.1241 11.6752 18.6406 10.1587 20.5044 10.1587C22.3682 10.1587 23.8846 11.6752 23.8846 13.539C23.8846 15.4027 22.3682 16.9192 20.5044 16.9192ZM21.48 20.9817C20.9147 20.684 20.094 20.684 19.5288 20.9817L17.3834 22.1109L18.0654 17.9506C18.7888 18.3521 19.6202 18.5815 20.5045 18.5815C21.3888 18.5815 22.2201 18.352 22.9436 17.9506L23.2094 19.5725C23.21 19.5752 23.2102 19.5781 23.2108 19.5807L23.6256 22.1111L21.48 20.9817ZM26.3375 18.3041C26.3375 18.4543 26.2106 18.5812 26.0604 18.5812H24.7315L24.4279 16.7294C24.4267 16.722 24.4247 16.7151 24.4233 16.7077C25.1253 15.8413 25.5472 14.7386 25.5472 13.539C25.5472 10.7584 23.285 8.49629 20.5045 8.49629C17.7239 8.49629 15.4618 10.7584 15.4618 13.539C15.4618 14.7386 15.8836 15.8411 16.5857 16.7077C16.5843 16.715 16.5823 16.722 16.5811 16.7293L16.2773 18.5826C16.268 18.5823 16.259 18.5812 16.2497 18.5812H1.93949C1.78932 18.5812 1.66242 18.4543 1.66242 18.3041V1.93949C1.66242 1.78932 1.78932 1.66242 1.93949 1.66242H26.0604C26.2106 1.66242 26.3375 1.78932 26.3375 1.93949V18.3041Z" fill="#000"></path><path d="M23.1208 4.78345H4.28006C3.8209 4.78345 3.44885 5.1555 3.44885 5.61466C3.44885 6.07382 3.8209 6.44587 4.28006 6.44587H23.1208C23.58 6.44587 23.952 6.07382 23.952 5.61466C23.952 5.1555 23.58 4.78345 23.1208 4.78345Z" fill="#000"></path><path d="M12.2597 9.29053H4.28006C3.8209 9.29053 3.44885 9.66258 3.44885 10.1217C3.44885 10.5809 3.8209 10.9529 4.28006 10.9529H12.2597C12.7188 10.9529 13.0909 10.5809 13.0909 10.1217C13.0909 9.66258 12.7188 9.29053 12.2597 9.29053Z" fill="#000"></path></svg>
                                        Сертификаты
                                    </a>
                                    <a href="https://iomp.ru/cabinet" class="header-user-menu__link">
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="header-user-menu__link__svg"><path d="M10.6007 10.0343V0.578655C10.6007 0.25718 10.3436 0 10.0221 0C9.7006 0 9.44342 0.25718 9.44342 0.578655V10.0343C8.1018 10.3043 7.08594 11.4916 7.08594 12.9147C7.08594 14.3377 8.1018 15.5251 9.44342 15.7951V20.0043C9.44342 20.3257 9.7006 20.5829 10.0221 20.5829C10.3436 20.5829 10.6007 20.3257 10.6007 20.0043V15.7951C11.9424 15.5251 12.9582 14.3377 12.9582 12.9147C12.9582 11.4959 11.9466 10.3043 10.6007 10.0343ZM10.0221 14.6935C9.04051 14.6935 8.24324 13.8963 8.24324 12.9147C8.24324 11.9331 9.04051 11.1359 10.0221 11.1359C11.0036 11.1359 11.8009 11.9331 11.8009 12.9147C11.8009 13.8963 11.0036 14.6935 10.0221 14.6935Z" fill="#000"></path><path d="M3.51479 5.18217V0.578655C3.51479 0.25718 3.25761 0 2.93613 0C2.61465 0 2.35748 0.25718 2.35748 0.578655V5.18217C1.01586 5.45221 0 6.63952 0 8.06259C0 9.48564 1.01586 10.673 2.35748 10.943V20.0043C2.35748 20.3257 2.61465 20.5829 2.93613 20.5829C3.25761 20.5829 3.51479 20.3257 3.51479 20.0043V10.9387C4.85641 10.6687 5.87227 9.48136 5.87227 8.05829C5.87227 6.63524 4.85641 5.45221 3.51479 5.18217ZM2.93613 9.84141C1.95456 9.84141 1.15731 9.04415 1.15731 8.06259C1.15731 7.08101 1.95456 6.28376 2.93613 6.28376C3.91771 6.28376 4.71496 7.08101 4.71496 8.06259C4.71496 9.04415 3.91341 9.84141 2.93613 9.84141Z" fill="#000"></path><path d="M17.6437 5.18217V0.578655C17.6437 0.25718 17.3865 0 17.065 0C16.7436 0 16.4864 0.25718 16.4864 0.578655V5.18217C15.1448 5.45221 14.1289 6.63952 14.1289 8.06259C14.1289 9.48564 15.1448 10.673 16.4864 10.943V20.0085C16.4864 20.33 16.7436 20.5872 17.065 20.5872C17.3865 20.5872 17.6437 20.33 17.6437 20.0085V10.9387C18.9853 10.6687 20.0012 9.48136 20.0012 8.05829C20.0012 6.63524 18.9896 5.45221 17.6437 5.18217ZM17.065 9.84141C16.0834 9.84141 15.2862 9.04415 15.2862 8.06259C15.2862 7.08101 16.0834 6.28376 17.065 6.28376C18.0466 6.28376 18.8438 7.08101 18.8438 8.06259C18.8438 9.04415 18.0466 9.84141 17.065 9.84141Z" fill="#000"></path></svg>
                                        Настройки
                                    </a>
                                    <a href="/personal/auth/logout?lg=ru" class="header-user-menu__link">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.94548 8.01137H0.489124C0.219127 8.01137 0 7.78228 0 7.50001C0 7.21774 0.219127 6.98865 0.489124 6.98865H9.94548C10.2155 6.98865 10.4346 7.21774 10.4346 7.50001C10.4346 7.78228 10.2155 8.01137 9.94548 8.01137Z" fill="#000"></path><path d="M7.33666 10.7386C7.21139 10.7386 7.08625 10.6889 6.99095 10.5886C6.79989 10.3889 6.79989 10.065 6.99095 9.86516L9.25399 7.49937L6.99095 5.13345C6.79989 4.9337 6.79989 4.60973 6.99095 4.40998C7.18214 4.21022 7.4919 4.21022 7.68296 4.40998L10.2916 7.13732C10.4826 7.33707 10.4826 7.66091 10.2916 7.86066L7.68296 10.5879C7.58707 10.6889 7.46193 10.7386 7.33666 10.7386Z" fill="#000"></path><path d="M7.82627 15C4.85821 15 2.23788 13.1332 1.14942 10.2436C1.0503 9.98177 1.17413 9.68452 1.42526 9.5809C1.67568 9.47865 1.96072 9.60612 2.05984 9.87004C2.99963 12.3648 5.26327 13.9773 7.82627 13.9773C11.2423 13.9773 14.0219 11.0713 14.0219 7.5C14.0219 3.92871 11.2423 1.02272 7.82627 1.02272C5.26327 1.02272 2.99963 2.63521 2.05984 5.12996C1.96001 5.39388 1.67568 5.52135 1.42526 5.4191C1.17413 5.31548 1.0503 5.01823 1.14942 4.75643C2.23788 1.86679 4.85821 0 7.82627 0C11.7817 0 15.0001 3.36479 15.0001 7.5C15.0001 11.6352 11.7817 15 7.82627 15Z" fill="#000"></path></svg>
                                        Выйти
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>`;
    }
    
    if (header__gaming) {
        for (let i = 0; i < header__gaming.length; i++) {
            document.querySelector(".header-gaming").appendChild(header__gaming[i]); 
        }
    }
    
    const headerNotificationsWrapper = header__notifications && document.querySelector(".header-notifications").appendChild(header__notifications);
    
    const headerOpen = document.querySelector(".header-menu-burger");
    const headerClose = document.querySelector(".header-modal-close");
    const headerWrapper = document.querySelector(".header-modal-wrapper");
    const headerContent = document.querySelector(".header-modal-content");
    
    const toggleHeaderOpen = () => {
        headerWrapper.classList.add("header-modal-wrapper_active");
        headerContent.classList.add("header-modal-content_active");
    };
    
    const toggleHeaderClose = () => {
        headerWrapper.classList.remove("header-modal-wrapper_active");
        headerContent.classList.remove("header-modal-content_active");
    };
    
    window.onclick = function (e) {
	    if (e.target == headerWrapper) {
		    toggleHeaderClose();
	    }
    }
    
    if (headerOpen && headerClose) {
        headerOpen.addEventListener("click", toggleHeaderOpen);
        headerClose.addEventListener("click", toggleHeaderClose);
    }
    

    if (window.location.href === "https://shop.iomp.ru/personal/") {
        //library
        const libraryContainer = document.querySelector(".elements-container");
        const libraryElementsLength = document.querySelectorAll(".element-course").length;
        const libraryElementLink = document.querySelectorAll(".element-cover > a");
        const libraryElementImg = document.querySelectorAll(".element-cover");
        const libraryElementTitle = document.querySelectorAll(".element-title-text");
        
        if(libraryElementsLength) {
          libraryContainer.innerHTML = `<h2 class="title library__title">Мои курсы</h2>`;
           
          for (let i = 0; i < libraryElementsLength; i++) {
                libraryContainer.innerHTML += `<a href="${libraryElementLink[i].getAttribute("href")}" target="_blank" class="library-block">
                    <div class="library-block-left">
                        <div
                            class="library-block-thumb"
                            style="${libraryElementImg[i].getAttribute("style")}; background-size: cover; background-repeat: no-repeat; background-position: top center;"
                        ></div>
                        <div class="library-block-text">
                            <span
                                class="library-block__subtitle"
                            >
                                Курс
                            </span>
                            <h3
                                class="library-block__title"
                            >
                                ${libraryElementTitle[i].innerHTML}
                            </h3>
                        </div>
                    </div>
                    <div class="library-block-right">
                        <div class="library-block__btn">
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10 0C4.48566 0 0 4.48609 0 10C0 15.5139 4.48566 20 10 20C15.5143 20 20 15.5139 20 10C20 4.48609 15.5143 0 10 0ZM10 19.1667C4.94547 19.1667 0.83332 15.0545 0.83332 10C0.83332 4.94547 4.94547 0.83332 10 0.83332C15.0545 0.83332 19.1667 4.94547 19.1667 10C19.1667 15.0545 15.0545 19.1667 10 19.1667Z" />
                                <path d="M13.9754 9.64966L8.14211 5.89966C8.01434 5.81626 7.84914 5.81177 7.7173 5.88419C7.58301 5.95743 7.5 6.09743 7.5 6.25001V13.75C7.5 13.9026 7.58301 14.0426 7.7173 14.1158C7.77914 14.1496 7.84832 14.1667 7.91668 14.1667C7.9948 14.1667 8.07375 14.1447 8.14211 14.1004L13.9754 10.3504C14.0943 10.2739 14.1667 10.1416 14.1667 10C14.1667 9.85841 14.0943 9.72618 13.9754 9.64966ZM8.33332 12.9867V7.01337L12.9793 10L8.33332 12.9867Z" />
                            </svg>
                            <span>Перейти к обучению</span>
                        </div>
                    </div>
                </a>`;
            } 
        }
        
        const search = document.querySelector(".quicksearch");
        
        search.addEventListener("change", (e) => {
            if (libraryElementsLength) {
                libraryContainer.innerHTML = `<h2 class="title library__title">Мои курсы</h2>`;
                
                let reg = new RegExp(search.value.toLowerCase());
                
                for (let i = 0; i < libraryElementsLength; i++) {
                    if(reg.test(libraryElementTitle[i].innerHTML.toLowerCase())) {
                        libraryContainer.innerHTML += `
                            <a href="${libraryElementLink[i].getAttribute("href")}" target="_blank" class="library-block">
                                <div class="library-block-left">
                                    <div
                                        class="library-block-thumb"
                                        style="${libraryElementImg[i].getAttribute("style")}; background-size: cover; background-repeat: no-repeat; background-position: top center;"
                                    ></div>
                                    <div class="library-block-text">
                                        <span
                                            class="library-block__subtitle"
                                        >
                                            Курс
                                        </span>
                                        <h3
                                            class="library-block__title"
                                        >
                                            ${libraryElementTitle[i].innerHTML}
                                        </h3>
                                    </div>
                                </div>
                                <div class="library-block-right">
                                    <div class="library-block__btn">
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10 0C4.48566 0 0 4.48609 0 10C0 15.5139 4.48566 20 10 20C15.5143 20 20 15.5139 20 10C20 4.48609 15.5143 0 10 0ZM10 19.1667C4.94547 19.1667 0.83332 15.0545 0.83332 10C0.83332 4.94547 4.94547 0.83332 10 0.83332C15.0545 0.83332 19.1667 4.94547 19.1667 10C19.1667 15.0545 15.0545 19.1667 10 19.1667Z" />
                                            <path d="M13.9754 9.64966L8.14211 5.89966C8.01434 5.81626 7.84914 5.81177 7.7173 5.88419C7.58301 5.95743 7.5 6.09743 7.5 6.25001V13.75C7.5 13.9026 7.58301 14.0426 7.7173 14.1158C7.77914 14.1496 7.84832 14.1667 7.91668 14.1667C7.9948 14.1667 8.07375 14.1447 8.14211 14.1004L13.9754 10.3504C14.0943 10.2739 14.1667 10.1416 14.1667 10C14.1667 9.85841 14.0943 9.72618 13.9754 9.64966ZM8.33332 12.9867V7.01337L12.9793 10L8.33332 12.9867Z" />
                                        </svg>
                                        <span>Перейти к обучению</span>
                                    </div>
                                </div>
                            </a>`;
                    } 
                }
            }
        });
    }
    
    (function (w, t, p, v, c, f, s, r, h, l, d) { w[p] = "//callpy.com/"; w[v] = "5.10"; w[c] = false; if (t == w) { var tmp = l.callpy_data; if (tmp == null || !l.callpy_html || !l[c]) { w[f] = false } else { w[f] = true; w[s] = JSON.parse(tmp); var tm = new Date().getTime(); if (tm - w[s].lastSave < 20000) { if (w[s].insertcode) { eval(w[s].insertcode) } else { w[f] = false } } else { w[f] = false } } } else { w[f] = false } var callpy_script = d.createElement("script"); try { var tmp = parent.window.location.href ? 1 : 0 } catch (e) { var tmp = 0 } callpy_script.type = "text/javascript"; callpy_script.async = true; if (!w[f] || !l[h]) { l[h] = new Date().getTime() } callpy_script.src = w[p] + "c/" + w.location.host.replace(/www./i, "") + "/" + (t == w ? (w[f] ? 1 : 2) : (tmp == 1 ? 4 : 3)) + ".js?id=19399&m=" + l[h]; callpy_script.onload = function () { iowisp.init() }; d.body.appendChild(callpy_script) })(window, window.top, "callpy_path", "callpy_version", "tiny", "sven", "callpy_storage", "callpy_chat_scroller", "callpy_lastchat", localStorage, document);
</script>
