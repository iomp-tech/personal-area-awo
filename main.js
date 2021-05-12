<script>
    //header
    const avatarHeader = document.querySelector(".user-menu-profile-image").getAttribute("style");
    const header__notifications = document.querySelector(".header__notifications");
    const header__gaming = document.querySelector(".gaming-currency-header-link");
    
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
                                    <img
                                        src="https://api.iomp.ru/public/storage/all/book.svg"
                                        alt="Мои курсы"
                                    />
                                    Мои курсы
                                </a>
                                <a href="/personal/certificate" class="header-user-menu__link">
                                    <img
                                        src="https://api.iomp.ru/public/storage/all/certificates.svg"
                                        alt="Сертификаты"
                                    />
                                    Сертификаты
                                </a>
                                <a href="https://iomp.ru/cabinet" class="header-user-menu__link">
                                    <img
                                        src="https://api.iomp.ru/public/storage/all/setting.svg"
                                        alt="Настройки"
                                    />
                                    Настройки
                                </a>
                                <a href="/personal/auth/logout?lg=ru" class="header-user-menu__link">
                                    <img
                                        src="https://api.iomp.ru/public/storage/all/logout.svg"
                                        alt="Выйти"
                                    />
                                    Выйти
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>`;
    
    const headerGamingWrapper = document.querySelector(".header-gaming").appendChild(header__gaming);
    const headerNotificationsWrapper = document.querySelector(".header-notifications").appendChild(header__notifications);
    
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
    
    headerOpen.addEventListener("click", toggleHeaderOpen);
    headerClose.addEventListener("click", toggleHeaderClose);

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
    
    (function (w, t, p, v, c, f, s, r, h, l, d) { w[p] = "//callpy.com/"; w[v] = "5.10"; w[c] = false; if (t == w) { var tmp = l.callpy_data; if (tmp == null || !l.callpy_html || !l[c]) { w[f] = false } else { w[f] = true; w[s] = JSON.parse(tmp); var tm = new Date().getTime(); if (tm - w[s].lastSave < 20000) { if (w[s].insertcode) { eval(w[s].insertcode) } else { w[f] = false } } else { w[f] = false } } } else { w[f] = false } var callpy_script = d.createElement("script"); try { var tmp = parent.window.location.href ? 1 : 0 } catch (e) { var tmp = 0 } callpy_script.type = "text/javascript"; callpy_script.async = true; if (!w[f] || !l[h]) { l[h] = new Date().getTime() } callpy_script.src = w[p] + "c/" + w.location.host.replace(/www./i, "") + "/" + (t == w ? (w[f] ? 1 : 2) : (tmp == 1 ? 4 : 3)) + ".js?id=19399&m=" + l[h]; callpy_script.onload = function () { iowisp.init() }; d.body.appendChild(callpy_script) })(window, window.top, "callpy_path", "callpy_version", "tiny", "sven", "callpy_storage", "callpy_chat_scroller", "callpy_lastchat", localStorage, document);
</script>
