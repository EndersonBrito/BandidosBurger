window.onload = function () {
	window.addEventListener("DOMContentLoaded", (function(e) {
        if (setTimeout((function() {
            document.querySelector("body").classList.remove("st")
        }
        ), 100),
        null != document.querySelector(".menu__navtrigger") && (document.querySelectorAll(".menu__navtrigger").forEach((function(e) {
            e.addEventListener("click", (function() {
                document.querySelector("body").classList.toggle("menu--open")
            }
            ))
        }
        )),
        document.querySelectorAll(".menu__close").forEach((function(e) {
            e.addEventListener("click", (function() {
                document.querySelector("body").classList.toggle("menu--open")
            }
            ))
        }
        ))),
        null != document.querySelector(".home__hero--video") && (document.querySelectorAll(".home__hero--video").forEach((function(e) {
            e.addEventListener("click", (function() {
                document.querySelector("body").classList.toggle("hamburger--open")
            }
            ))
        }
        )),
        document.querySelectorAll(".hamburger--close").forEach((function(e) {
            e.addEventListener("click", (function() {
                document.querySelector("body").classList.toggle("hamburger--open")
            }
            ))
        }
        ))),
        null != document.querySelector(".fastbooking__btn") && (document.querySelectorAll(".fastbooking__btn").forEach((function(e) {
            e.addEventListener("click", (function() {
                document.querySelector(".fast__booking").classList.add("is--visible")
            }
            ))
        }
        )),
        window.innerWidth > 767 && document.querySelector(".fast__booking").classList.add("is--visible"),
        i()),
        null != document.querySelector(".home__specials") && Array.from(document.querySelectorAll(".home__specials .card-js")).sort((function() {
            return .5 - Math.random()
        }
        )).slice(0, 6).forEach((function(e) {
            e.classList.remove("d-none")
        }
        )),
        null != document.querySelector('.fast__booking input[type="date"]') && document.querySelector('.fast__booking input[type="date"]').addEventListener("change", (function() {
            this.value.length > 0 && this.classList.add("fullfilled")
        }
        )),
        null != document.querySelector(".scroll__top") && document.querySelectorAll(".scroll__top").forEach((function(e) {
            e.addEventListener("click", (function() {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }
            ))
        }
        )),
        null != document.querySelector(".lang--switch") && document.querySelectorAll(".lang--switch .active").forEach((function(e, t) {
            e.addEventListener("click", (function(t) {
                t.preventDefault(),
                e.parentNode.classList.toggle("open")
            }
            ))
        }
        )),
        null != document.querySelector(".faq__text--wrp") && (document.querySelectorAll(".faq__text--wrp").forEach((function(e, t) {
            var n = e.offsetHeight;
            e.setAttribute("data-height", n),
            e.style.height = 0
        }
        )),
        document.querySelectorAll(".faq__title--wrp").forEach((function(e, t) {
            e.addEventListener("click", (function() {
                var t = e.getAttribute("data-pos");
                if (e.classList.contains("item--open"))
                    e.classList.remove("item--open"),
                    document.querySelector('.faq__text--wrp[data-pos="' + t + '"]').classList.remove("item--open"),
                    document.querySelector('.faq__text--wrp[data-pos="' + t + '"]').style.height = 0;
                else {
                    e.classList.add("item--open"),
                    document.querySelector('.faq__text--wrp[data-pos="' + t + '"]').classList.add("item--open");
                    var n = document.querySelector('.faq__text--wrp[data-pos="' + t + '"]').getAttribute("data-height");
                    document.querySelector('.faq__text--wrp[data-pos="' + t + '"]').style.height = n + "px"
                }
            }
            ))
        }
        ))),
        null != document.querySelectorAll(".rail__container") && setTimeout((function() {
            document.querySelectorAll(".rail__container").forEach((function(e) {
                var t = e.offsetWidth || 8 * window.innerWidth
                  , n = window.innerWidth
                  , r = n < 768 ? parseInt(t / n * 4) : parseInt(t / n * 6)
                  , o = e.getAttribute("data-vel") ? e.getAttribute("data-vel") : 24
                  , a = r < o ? o : r;
                e.querySelectorAll(".track__container").forEach((function(e) {
                    e.style.animationDuration = a + "s"
                }
                ))
            }
            ))
        }
        ), 100),
        t = document.querySelector(".home__container"),
        featuredScale = document.querySelector(".featured__scale"),
        featuredSlide = document.querySelector("#featured__wrp"),
        n = document.querySelector(".home__hero"),
        r = document.querySelector(".home__hero--video"),
        null != t && (o = parseInt(getComputedStyle(featuredSlide).getPropertyValue("border-radius"))),
        window.innerWidth < 767) {
            var a = new Flickity(document.querySelector(".slides-container.home__featured"),{
                prevNextButtons: !1,
                pageDots: !1,
                initialIndex: 0,
                groupCells: !0,
                cellAlign: "left",
                contain: !0
            });
            a.on("dragStart", (function() {
                document.querySelector(".slides-container.home__featured").classList.add("dragging"),
                document.querySelectorAll(".slides-container.home__featured .home__featured__cell").forEach((function(e) {
                    return e.style.pointerEvents = "none"
                }
                ))
            }
            )),
            a.on("dragEnd", (function() {
                document.querySelector(".slides-container.home__featured").classList.remove("dragging"),
                document.querySelectorAll(".slides-container.home__featured .home__featured__cell").forEach((function(e) {
                    return e.style.pointerEvents = "all"
                }
                ))
            }
            )),
            document.querySelector("#prevButtonM").addEventListener("click", (function() {
                a.previous()
            }
            )),
            document.querySelector("#nextButtonM").addEventListener("click", (function() {
                a.next()
            }
            ))
        }
        document.querySelector("body").classList.contains("home") && (gsap.to(".header--main", {
            scrollTrigger: {
                trigger: ".home__featured",
                start: "top 50%",
                end: "top 20%",
                scrub: 1,
                anticipatePin: 1,
                onUpdate: function(e) {
                    return t = e.progress,
                    document.querySelector(".header--main").style.opacity = 1 - t,
                    void (document.querySelector(".header--main").style.pointerEvents = t > .8 ? "none" : "auto");
                    var t
                }
            },
            duration: 10,
            ease: "none"
        }),
        gsap.to("#featured__wrp", {
            scrollTrigger: {
                trigger: ".home__featured",
                start: "top bottom",
                end: "top 40%",
                scrub: 1,
                onUpdate: function(e) {
                    return function(e) {
                        var t = 1 - (e - .24 * e) < .24 ? .24 : 1 - (e - .24 * e);
                        if (window.innerWidth < 768 && (t = e < .45 ? 1 : t),
                        e < 1) {
                            var a = (u(.2 * e, 6) + s).toFixed(4)
                              , i = (u(5.000000000000001 * (parseFloat(a) - s), 4),
                            1.8 - a);
                            window.innerWidth < 768 && (a = 1),
                            featuredScale.style.transform = "scale(" + a + ")",
                            featuredSlide.style.borderRadius = o + "px",
                            r.style.transform = "scale(" + i + ")";
                            var d = 1 + 5 * (1 - a);
                            document.querySelector(".featured__slider").style.transform = "scale(" + d + ")",
                            document.querySelector(".header--main").classList.remove("header--hide"),
                            document.querySelector(".slider-text-container").classList.remove("inview")
                        } else
                            featuredScale.style.transform = "scale(1)",
                            featuredSlide.style.borderRadius = 0,
                            document.querySelector(".header--main").classList.add("header--hide"),
                            document.querySelector(".featured__slider").style.transform = "scale(1)",
                            document.querySelector(".slider-text-container").classList.add("inview");
                        n.style.opacity = t
                    }(e.progress)
                }
            },
            ease: "none"
        }),
        console.log("ll"),
        window.innerWidth > 767 && (console.log("pppp"),
        gsap.to(".featured__container", {
            scrollTrigger: {
                trigger: ".home__featured",
                start: "top top",
                end: "bottom top",
                scrub: !0,
                invalidateOnRefresh: !0,
                fastScrollEnd: !0
            },
            yPercent: 16,
            transformOrigin: "top",
            ease: "none"
        })),
        ["#video__foodtruck", "#video__about"].forEach((function(e) {
            var t = document.querySelector(e).closest(".video__container");
            gsap.to(e, {
                scrollTrigger: {
                    trigger: t,
                    start: "top bottom",
                    end: "80%",
                    scrub: 1
                },
                yPercent: 16,
                duration: 1e3,
                ease: "none"
            })
        }
        )),
        document.querySelector(".fast__booking"),
        ScrollTrigger.observe({
            target: document.querySelector("body"),
            type: "wheel,touch,pointer",
            onUp: function() {
                ScrollTrigger.isInViewport(document.querySelector(".page__footer")) || document.querySelector(".fast__booking").classList.remove("sticked")
            },
            onDown: function() {
                ScrollTrigger.isInViewport(document.querySelector(".page__footer"), .1) && document.querySelector(".fast__booking").classList.add("sticked")
            }
        }),
        gsap.to(".page__content", {
            scrollTrigger: {
                trigger: ".home__mundo--bandidos",
                start: "2%",
                end: "80%",
                scrub: !0
            },
            y: -170,
            transformOrigin: "left bottom",
            duration: 1e3,
            ease: "none"
        }))
    }
    ));
}


const consentBox =  
    document.getElementById("consentBox"); 
const acceptBtn =  
    document.querySelector(".consentButton"); 
const rejectBtn =  
    document.querySelector(".rejectButton"); 
  
acceptBtn.onclick = () => { 
    document.cookie = "CookieBy=GeeksForGeeks; max-age="
        + 60 * 60 * 24; 
    if (document.cookie) { 
        consentBox.classList.add("hide"); 
    } else { 
        alert 
            ("Cookie can't be set! Please"+ 
              " unblock this site from the cookie"+ 
              " setting of your browser."); 
    } 
}; 
  
rejectBtn.onclick = () => { 
    alert( 
        "Cookies rejected. Some functionality may be limited."); 
    consentBox.classList.add("hide"); 
}; 
  
let checkCookie =  
    document.cookie.indexOf("CookieBy=GeeksForGeeks"); 
checkCookie !== -1 ? consentBox.classList.add("hide") : 
    consentBox.classList.remove("hide");