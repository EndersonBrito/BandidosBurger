gsap.registerPlugin(Observer),
ScrollTrigger.config({
    limitCallbacks: !0,
    ignoreMobileResize: !0
}),
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
    null != document.querySelector(".menu__navtrigger2") && (document.querySelectorAll(".menu__navtrigger2").forEach((function(e) {
        e.addEventListener("click", (function() {
            document.querySelector("body").classList.toggle("menu--open")
        }
        ))
    }
    ))),
    
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
                e.style.animationDuration = 8 + "s";
                e.style.overflow = "hidden";
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
       console.log("sfsd");
    }
    document.querySelector("body").classList.contains("home") && (gsap.to(".header--main", {
        scrollTrigger: {
            trigger: ".home__featured",
            start: "top 50%",
            end: "top 20%",
            scrub: 1,
            anticipatePin: 1,
            onUpdate: function(e) {
                return t = 0,
                document.querySelector(".header--main").style.opacity = 1 - t,
                void (document.querySelector(".header--main").style.pointerEvents = t > .8 ? "none" : "auto");
                var t
            }
        },
        duration: 10,
        ease: "none"
    }),   
    window.innerWidth > 767 && (
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

var e, t, n, r, o, a = "";
window.addEventListener("scroll", (function() {
    var t;
    window.innerHeight,
    window.innerWidth,
    document.querySelectorAll(".hide").forEach((function(e, t) {
        (e.getBoundingClientRect().top < 0 ) && e.classList.contains("hide") && (e.classList.remove("hide"),
        e.classList.add("show"))
    }
    )),
    e = !0,
    null != document.querySelector(".fast__booking") && function() {
        var e = document.querySelector(".fast__booking");
        if (null != e) {
            var t = e.getBoundingClientRect()
              , n = document.querySelectorAll(".over");
            if (n.length)
                for (var r = 0; r <= n.length - 1; r++) {
                    var o = n[r].getBoundingClientRect();
                    if (o.x <= t.x && parseInt(o.x) + parseInt(o.width) >= t.x && o.top < t.y && o.top + o.height > t.y + 0) {
                        var a = n[r].getAttribute("data-section");
                        return document.querySelector("body").setAttribute("data-section", a),
                        !0
                    }
                }
        }
    }(),
    null != document.querySelector(".home__hero--video") && (window.scrollY > window.innerHeight + 100 ? document.querySelector(".home__hero--video video").pause() : document.querySelector(".home__hero--video video"))   
}
));
a = 0,

function d(e, t) {
    var n = e.getBoundingClientRect()
      , r = window.innerWidth || doc.documentElement.clientWidth
      , o = window.innerHeight || doc.documentElement.clientHeight
      , a = (n.height > o && n.height,
    t || -window.innerHeight / 4);
    return !(n.right < 0 || n.bottom < 0 || n.left > r || n.top > o + a)
}
function u(e, t) {
    return Math.round(e * Math.pow(10, t)) / Math.pow(10, t)
}

function i() {
    var e = window.scrollY;
    Math.abs(a - e) <= 5 || (e > a ? document.querySelector(".header--main").classList.remove("is--visible") : e > window.innerHeight ? document.querySelector(".header--main").classList.add("is--visible") : document.querySelector(".header--main").classList.remove("is--visible"), a = e)
}
function D(e) {
    e.preventDefault();
    var t = e.touches;
    t && 1 === t.length || (document.body.classList.add("body--grabbing"), u = !0, document.addEventListener("pointermove", v, !1), document.addEventListener("pointerup", w, !1), h = e.clientX - S, l = m, M = e.clientY - k, y = c)
}


///Carrusel scale
const cardsContainer = document.querySelector(".card-carousel");
  const cardsController = document.querySelector(".card-carousel + .card-controller")

  class DraggingEvent {
    constructor(target = undefined) {
      this.target = target;
    }
    
    event(callback) {
      let handler;
      
      this.target.addEventListener("mousedown", e => {
        e.preventDefault()
        
        handler = callback(e)
        
        window.addEventListener("mousemove", handler)
        
        document.addEventListener("mouseleave", clearDraggingEvent)
        
        window.addEventListener("mouseup", clearDraggingEvent)
        
        function clearDraggingEvent() {
          window.removeEventListener("mousemove", handler)
          window.removeEventListener("mouseup", clearDraggingEvent)
        
          document.removeEventListener("mouseleave", clearDraggingEvent)
          
          handler(null)
        }
      })
      
      this.target.addEventListener("touchstart", e => {
        handler = callback(e)
        
        window.addEventListener("touchmove", handler)
        
        window.addEventListener("touchend", clearDraggingEvent)
        
        document.body.addEventListener("mouseleave", clearDraggingEvent)
        
        function clearDraggingEvent() {
          window.removeEventListener("touchmove", handler)
          window.removeEventListener("touchend", clearDraggingEvent)
          
          handler(null)
        }
      })
    }
    
    // Get the distance that the user has dragged
    getDistance(callback) {
      function distanceInit(e1) {
        let startingX, startingY;
        
        if ("touches" in e1) {
          startingX = e1.touches[0].clientX
          startingY = e1.touches[0].clientY
        } else {
          startingX = e1.clientX
          startingY = e1.clientY
        }
        

        return function(e2) {
          if (e2 === null) {
            return callback(null)
          } else {
            
            if ("touches" in e2) {
              return callback({
                x: e2.touches[0].clientX - startingX,
                y: e2.touches[0].clientY - startingY
              })
            } else {
              return callback({
                x: e2.clientX - startingX,
                y: e2.clientY - startingY
              })
            }
          }
        }
      }
      
      this.event(distanceInit)
    }
  }


  class CardCarousel extends DraggingEvent {
    constructor(container, controller = undefined) {
      super(container)
      
      // DOM elements
      this.container = container
      this.controllerElement = controller
      this.cards = container.querySelectorAll(".card-special")
      
      // Carousel data
      this.centerIndex = (this.cards.length - 1) /2;
      this.cardWidth = this.cards[0].offsetWidth / this.container.offsetWidth * 100
      this.xScale = {};
      
      // Resizing
      window.addEventListener("resize", this.updateCardWidth.bind(this))
      
      if (this.controllerElement) {
        this.controllerElement.addEventListener("keydown", this.controller.bind(this))      
      }

      
      // Initializers
      this.build()
      
      // Bind dragging event
      super.getDistance(this.moveCards.bind(this))
    }
    
    updateCardWidth() {
      this.cardWidth = this.cards[0].offsetWidth / this.container.offsetWidth * 100
      
      this.build()
    }
    
    build(fix = 0) {
      
      for (let i = 0; i < this.cards.length; i++) {
        const x = i - this.centerIndex;
        const scale = this.calcScale(x)
        const scale2 = this.calcScale2(x)
        const zIndex = -(Math.abs(i - this.centerIndex))
    
        
        const leftPos = this.calcPos(x, scale2)
       
        
        this.xScale[x] = this.cards[i]
        
        this.updateCards(this.cards[i], {
          x: x,
          scale: scale,
          leftPos: leftPos,
          zIndex: zIndex
        })
      }
    }
    
    
    controller(e) {
      const temp = {...this.xScale};
        
        if (e.keyCode === 39) {
          // Left arrow
          for (let x in this.xScale) {
            const newX = (parseInt(x) - 1 < -this.centerIndex) ? this.centerIndex : parseInt(x) - 1;

            temp[newX] = this.xScale[x]
          }
        }
        
        if (e.keyCode == 37) {
          // Right arrow
          for (let x in this.xScale) {
            const newX = (parseInt(x) + 1 > this.centerIndex) ? -this.centerIndex : parseInt(x) + 1;

            temp[newX] = this.xScale[x]
          }
        }
        
        this.xScale = temp;
        
        for (let x in temp) {
          const scale = this.calcScale(x),
                scale2 = this.calcScale2(x),
                leftPos = this.calcPos(x, scale2),
                zIndex = -Math.abs(x)

          this.updateCards(this.xScale[x], {
            x: x,
            scale: scale,
            leftPos: leftPos,
            zIndex: zIndex
          })
        }
    }
    
    calcPos(x, scale) {
      let formula;
      
      if (x < 0) {
        formula = (scale * 100 - this.cardWidth) / 2
        
        return formula-5

      } else if (x > 0) {
        formula = 110 - (scale * 100 + this.cardWidth) / 2
        
        return formula
      } else {
        formula = 100 - (scale * 100 + this.cardWidth) / 2
        
        return formula
      }
    }
    
    updateCards(card, data) {
     
      if (data.x || data.x == 0) {
        card.setAttribute("data-x", data.x)
      }
      
      if (data.scale || data.scale == 0) {
        card.style.transform = `scale(${data.scale})`

        if (data.scale == 0) {
          card.style.opacity = data.scale
        } else {
          card.style.opacity = 1;
        }
      }
    
      if (data.leftPos) {
        card.style.left = `${data.leftPos}%`        
      }
      
      if (data.zIndex || data.zIndex == 0) {
        if (data.zIndex == 0) {
          card.classList.add("highlight")
        } else {
          card.classList.remove("highlight")
        }
        
        card.style.zIndex = data.zIndex  
      }
    }
    
    calcScale2(x) {
      let formula;
    
      if (x <= 0) {
        formula = 1 - -1 / 5 * x
        
        return formula
      } else if (x > 0) {
        formula = 1 - 1 / 5 * x
        
        return formula
      }
    }
    
    calcScale(x) {
      const formula = 1 - 1 /5 * Math.pow(x, 2)
      
      if (formula <= 0) {
        return 0 
      } else {
        return formula      
      }
    }
    
    checkOrdering(card, x, xDist) {    
      const original = parseInt(card.dataset.x)
      const rounded = Math.round(xDist)
      let newX = x
      
      if (x !== x + rounded) {
        if (x + rounded > original) {
          if (x + rounded > this.centerIndex) {
            
            newX = ((x + rounded - 1) - this.centerIndex) - rounded + -this.centerIndex
          }
        } else if (x + rounded < original) {
          if (x + rounded < -this.centerIndex) {
            
            newX = ((x + rounded + 1) + this.centerIndex) - rounded + this.centerIndex
          }
        }
        
        this.xScale[newX + rounded] = card;
      }
      
      const temp = -Math.abs(newX + rounded)
      
      this.updateCards(card, {zIndex: temp})

      return newX;
    }
    
    moveCards(data) {
      let xDist;
      
      if (data != null) {
        this.container.classList.remove("smooth-return")
        xDist = data.x / 250;
      } else {

        
        this.container.classList.add("smooth-return")
        xDist = 0;

        for (let x in this.xScale) {
          this.updateCards(this.xScale[x], {
            x: x,
            zIndex: Math.abs(Math.abs(x) - this.centerIndex)
          })
        }
      }

      for (let i = 0; i < this.cards.length; i++) {
        const x = this.checkOrdering(this.cards[i], parseInt(this.cards[i].dataset.x), xDist),
              scale = this.calcScale(x + xDist),
              scale2 = this.calcScale2(x + xDist),
              leftPos = this.calcPos(x + xDist, scale2)
        
        this.updateCards(this.cards[i], {
          scale: scale,
          leftPos: leftPos
        })
      }

    }
  }

  const carousel = new CardCarousel(cardsContainer)


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
