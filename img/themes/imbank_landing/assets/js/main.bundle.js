(() => {
    var e = {
            584: function(e) {
                function t(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function i(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var o = t[i];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                var o, n = function() {
                    function e() {
                        var i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                            o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        t(this, e), this.selector = i, this.elements = [], this.version = "1.3.0", this.vp = this.getViewportSize(), this.body = document.querySelector("body"), this.options = {
                            wrap: o.wrap || !1,
                            wrapWith: o.wrapWith || "<span></span>",
                            marginTop: o.marginTop || 0,
                            marginBottom: o.marginBottom || 0,
                            stickyFor: o.stickyFor || 0,
                            stickyClass: o.stickyClass || null,
                            stickyContainer: o.stickyContainer || "body"
                        }, this.updateScrollTopPosition = this.updateScrollTopPosition.bind(this), this.updateScrollTopPosition(), window.addEventListener("load", this.updateScrollTopPosition), window.addEventListener("scroll", this.updateScrollTopPosition), this.run()
                    }
                    return function(e, t, o) {
                        t && i(e.prototype, t), o && i(e, o)
                    }(e, [{
                        key: "run",
                        value: function() {
                            var e = this,
                                t = setInterval((function() {
                                    if ("complete" === document.readyState) {
                                        clearInterval(t);
                                        var i = document.querySelectorAll(e.selector);
                                        e.forEach(i, (function(t) {
                                            return e.renderElement(t)
                                        }))
                                    }
                                }), 10)
                        }
                    }, {
                        key: "renderElement",
                        value: function(e) {
                            var t = this;
                            e.sticky = {}, e.sticky.active = !1, e.sticky.marginTop = parseInt(e.getAttribute("data-margin-top")) || this.options.marginTop, e.sticky.marginBottom = parseInt(e.getAttribute("data-margin-bottom")) || this.options.marginBottom, e.sticky.stickyFor = parseInt(e.getAttribute("data-sticky-for")) || this.options.stickyFor, e.sticky.stickyClass = e.getAttribute("data-sticky-class") || this.options.stickyClass, e.sticky.wrap = !!e.hasAttribute("data-sticky-wrap") || this.options.wrap, e.sticky.stickyContainer = this.options.stickyContainer, e.sticky.container = this.getStickyContainer(e), e.sticky.container.rect = this.getRectangle(e.sticky.container), e.sticky.rect = this.getRectangle(e), "img" === e.tagName.toLowerCase() && (e.onload = function() {
                                return e.sticky.rect = t.getRectangle(e)
                            }), e.sticky.wrap && this.wrapElement(e), this.activate(e)
                        }
                    }, {
                        key: "wrapElement",
                        value: function(e) {
                            e.insertAdjacentHTML("beforebegin", e.getAttribute("data-sticky-wrapWith") || this.options.wrapWith), e.previousSibling.appendChild(e)
                        }
                    }, {
                        key: "activate",
                        value: function(e) {
                            e.sticky.rect.top + e.sticky.rect.height < e.sticky.container.rect.top + e.sticky.container.rect.height && e.sticky.stickyFor < this.vp.width && !e.sticky.active && (e.sticky.active = !0), this.elements.indexOf(e) < 0 && this.elements.push(e), e.sticky.resizeEvent || (this.initResizeEvents(e), e.sticky.resizeEvent = !0), e.sticky.scrollEvent || (this.initScrollEvents(e), e.sticky.scrollEvent = !0), this.setPosition(e)
                        }
                    }, {
                        key: "initResizeEvents",
                        value: function(e) {
                            var t = this;
                            e.sticky.resizeListener = function() {
                                return t.onResizeEvents(e)
                            }, window.addEventListener("resize", e.sticky.resizeListener)
                        }
                    }, {
                        key: "destroyResizeEvents",
                        value: function(e) {
                            window.removeEventListener("resize", e.sticky.resizeListener)
                        }
                    }, {
                        key: "onResizeEvents",
                        value: function(e) {
                            this.vp = this.getViewportSize(), e.sticky.rect = this.getRectangle(e), e.sticky.container.rect = this.getRectangle(e.sticky.container), e.sticky.rect.top + e.sticky.rect.height < e.sticky.container.rect.top + e.sticky.container.rect.height && e.sticky.stickyFor < this.vp.width && !e.sticky.active ? e.sticky.active = !0 : (e.sticky.rect.top + e.sticky.rect.height >= e.sticky.container.rect.top + e.sticky.container.rect.height || e.sticky.stickyFor >= this.vp.width && e.sticky.active) && (e.sticky.active = !1), this.setPosition(e)
                        }
                    }, {
                        key: "initScrollEvents",
                        value: function(e) {
                            var t = this;
                            e.sticky.scrollListener = function() {
                                return t.onScrollEvents(e)
                            }, window.addEventListener("scroll", e.sticky.scrollListener)
                        }
                    }, {
                        key: "destroyScrollEvents",
                        value: function(e) {
                            window.removeEventListener("scroll", e.sticky.scrollListener)
                        }
                    }, {
                        key: "onScrollEvents",
                        value: function(e) {
                            e.sticky && e.sticky.active && this.setPosition(e)
                        }
                    }, {
                        key: "setPosition",
                        value: function(e) {
                            this.css(e, {
                                position: "",
                                width: "",
                                top: "",
                                left: ""
                            }), this.vp.height < e.sticky.rect.height || !e.sticky.active || (e.sticky.rect.width || (e.sticky.rect = this.getRectangle(e)), e.sticky.wrap && this.css(e.parentNode, {
                                display: "block",
                                width: e.sticky.rect.width + "px",
                                height: e.sticky.rect.height + "px"
                            }), 0 === e.sticky.rect.top && e.sticky.container === this.body ? (this.css(e, {
                                position: "fixed",
                                top: e.sticky.rect.top + "px",
                                left: e.sticky.rect.left + "px",
                                width: e.sticky.rect.width + "px"
                            }), e.sticky.stickyClass && e.classList.add(e.sticky.stickyClass)) : this.scrollTop > e.sticky.rect.top - e.sticky.marginTop ? (this.css(e, {
                                position: "fixed",
                                width: e.sticky.rect.width + "px",
                                left: e.sticky.rect.left + "px"
                            }), this.scrollTop + e.sticky.rect.height + e.sticky.marginTop > e.sticky.container.rect.top + e.sticky.container.offsetHeight - e.sticky.marginBottom ? (e.sticky.stickyClass && e.classList.remove(e.sticky.stickyClass), this.css(e, {
                                top: e.sticky.container.rect.top + e.sticky.container.offsetHeight - (this.scrollTop + e.sticky.rect.height + e.sticky.marginBottom) + "px"
                            })) : (e.sticky.stickyClass && e.classList.add(e.sticky.stickyClass), this.css(e, {
                                top: e.sticky.marginTop + "px"
                            }))) : (e.sticky.stickyClass && e.classList.remove(e.sticky.stickyClass), this.css(e, {
                                position: "",
                                width: "",
                                top: "",
                                left: ""
                            }), e.sticky.wrap && this.css(e.parentNode, {
                                display: "",
                                width: "",
                                height: ""
                            })))
                        }
                    }, {
                        key: "update",
                        value: function() {
                            var e = this;
                            this.forEach(this.elements, (function(t) {
                                t.sticky.rect = e.getRectangle(t), t.sticky.container.rect = e.getRectangle(t.sticky.container), e.activate(t), e.setPosition(t)
                            }))
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var e = this;
                            window.removeEventListener("load", this.updateScrollTopPosition), window.removeEventListener("scroll", this.updateScrollTopPosition), this.forEach(this.elements, (function(t) {
                                e.destroyResizeEvents(t), e.destroyScrollEvents(t), delete t.sticky
                            }))
                        }
                    }, {
                        key: "getStickyContainer",
                        value: function(e) {
                            for (var t = e.parentNode; !t.hasAttribute("data-sticky-container") && !t.parentNode.querySelector(e.sticky.stickyContainer) && t !== this.body;) t = t.parentNode;
                            return t
                        }
                    }, {
                        key: "getRectangle",
                        value: function(e) {
                            this.css(e, {
                                position: "",
                                width: "",
                                top: "",
                                left: ""
                            });
                            for (var t = Math.max(e.offsetWidth, e.clientWidth, e.scrollWidth), i = Math.max(e.offsetHeight, e.clientHeight, e.scrollHeight), o = 0, n = 0; o += e.offsetTop || 0, n += e.offsetLeft || 0, e = e.offsetParent;);
                            return {
                                top: o,
                                left: n,
                                width: t,
                                height: i
                            }
                        }
                    }, {
                        key: "getViewportSize",
                        value: function() {
                            return {
                                width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                                height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
                            }
                        }
                    }, {
                        key: "updateScrollTopPosition",
                        value: function() {
                            this.scrollTop = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0) || 0
                        }
                    }, {
                        key: "forEach",
                        value: function(e, t) {
                            for (var i = 0, o = e.length; i < o; i++) t(e[i])
                        }
                    }, {
                        key: "css",
                        value: function(e, t) {
                            for (var i in t) t.hasOwnProperty(i) && (e.style[i] = t[i])
                        }
                    }]), e
                }();
                o = n, e.exports = o
            },
            917: (e, t, i) => {
                e.exports = i(698)(1802)
            },
            33: (e, t, i) => {
                e.exports = i(698)(1993)
            },
            106: (e, t, i) => {
                e.exports = i(698)(2285)
            },
            311: (e, t, i) => {
                e.exports = i(698)(3106)
            },
            456: (e, t, i) => {
                e.exports = i(698)(4631)
            },
            26: (e, t, i) => {
                e.exports = i(698)(4852)
            },
            345: (e, t, i) => {
                e.exports = i(698)(4870)
            },
            267: (e, t, i) => {
                e.exports = i(698)(757)
            },
            333: (e, t, i) => {
                e.exports = i(698)(8070)
            },
            183: (e, t, i) => {
                e.exports = i(698)(8563)
            },
            966: (e, t, i) => {
                e.exports = i(698)(8763)
            },
            565: (e, t, i) => {
                e.exports = i(698)(9001)
            },
            825: (e, t, i) => {
                e.exports = i(698)(9761)
            },
            698: e => {
                "use strict";
                e.exports = library
            }
        },
        t = {};

    function i(o) {
        var n = t[o];
        if (void 0 !== n) return n.exports;
        var s = t[o] = {
            exports: {}
        };
        return e[o].call(s.exports, s, s.exports, i), s.exports
    }
    i.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return i.d(t, {
            a: t
        }), t
    }, i.d = (e, t) => {
        for (var o in t) i.o(t, o) && !i.o(e, o) && Object.defineProperty(e, o, {
            enumerable: !0,
            get: t[o]
        })
    }, i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        "use strict";
        i(183), i(311), i(267), i(345);
        var e = i(33),
            t = i.n(e),
            o = (i(917), i(106), i(825)),
            n = i(333),
            s = i.n(n),
            r = i(966),
            a = i(456),
            l = (i(584), i(26)),
            c = i(183);
        const d = i(565);
        ! function(e) {
            const i = window,
                n = (document.html, document.body),
                c = document.querySelector(".page-header"),
                p = document.querySelector(".page-header-first-row"),
                u = document.querySelector(".page-header-no-rows"),
                f = document.querySelector(".third-level-menu-row"),
                m = document.querySelectorAll(".page-section"),
                h = document.querySelector(".search-area-outer"),
                g = document.querySelectorAll(".bg-img"),
                y = document.querySelectorAll("svg"),
                w = document.querySelectorAll("[data-scrollbar]"),
                v = document.querySelectorAll('[data-svg-inject="true"]'),
                k = document.querySelectorAll(".bg-shape"),
                b = document.querySelectorAll(".js-sticky-column"),
                S = document.querySelectorAll(".js-grid-area"),
                x = document.querySelectorAll(".js-popup-iframe"),
                C = document.querySelectorAll(".js-slider"),
                q = document.querySelectorAll(".js-slider-2"),
                E = document.querySelectorAll(".js-slider-3"),
                A = document.querySelectorAll(".js-timeline-1-slider"),
                j = document.querySelectorAll(".js-text-only-slider-wrap"),
                P = document.querySelectorAll(".next-section"),
                T = document.querySelectorAll(".card-type-1"),
                L = document.querySelectorAll(".card-type-4"),
                z = document.querySelectorAll(".card-type-5"),
                F = document.querySelectorAll(".card-type-10"),
                I = document.querySelectorAll(".card-type-12"),
                M = document.querySelectorAll(".card-type-14"),
                D = document.querySelectorAll(".card-type-22"),
                H = document.querySelectorAll(".card-type-26"),
                V = document.querySelectorAll(".card-type-33"),
                $ = document.querySelectorAll(".card-type-35"),
                R = document.querySelectorAll(".card-hide-bottom"),
                O = document.querySelectorAll(".js-compare"),
                _ = document.querySelectorAll(".js-more-items-wrapper"),
                W = document.querySelectorAll(".form-layout-1 .form-column-cont li"),
                B = document.querySelectorAll(".drop-down-cont"),
                N = document.querySelectorAll(".js-hover-opaciate"),
                U = document.querySelectorAll(".tab-layout"),
                Y = document.querySelectorAll(".tab-layout-2-section"),
                Z = document.querySelectorAll(".popup-modal-trigger"),
                G = document.querySelectorAll(".section-anchor-nav"),
                Q = document.querySelectorAll(".js-dropdown-popup"),
                J = document.querySelectorAll(".js-view-more-less-content"),
                K = document.querySelectorAll(".js-more-content-popup-trigger"),
                X = document.querySelectorAll(".js-more-content-popup-collection"),
                ee = document.querySelectorAll(".circular-progress"),
                te = document.querySelectorAll('[data-toggle="tooltip"]'),
                ie = document.querySelectorAll(".js-listing-filter"),
                oe = document.querySelectorAll(".js-map-filter"),
                ne = (document.querySelectorAll(".feature-24-body form"), document.querySelector(".quick-links-area")),
                se = document.querySelector(".quick-menu-trigger"),
                re = document.querySelector(".page-footer"),
                ae = document.querySelectorAll(".js-ajax-custom-tab-layout"),
                le = e => Array.prototype.slice.call(e),
                ce = e => {
                    let t = document.createElement("div"),
                        i = "";
                    for (let o = 0; o < e.length; ++o) {
                        if (void 0 !== t.style[e[o]]) {
                            i = e[o];
                            break
                        }
                        i = null
                    }
                    return i
                },
                de = (ce(["animationDelay", "webkitAnimationDelay", "mozAnimationDelay", "oAnimationDelay"]), ce(["animationDuration", "webkitAnimationDuration", "mozAnimationDuration", "oAnimationDuration"]), ce(["transform", "msTransform", "MozTransform", "WebkitTransform", "OTransform"])),
                pe = t => {
                    let i = ".svg-scaler";
                    if (e(t).closest(i).length > 0) {
                        let o = t,
                            n = o.getAttribute("viewBox"),
                            s = -1 === n.search(",") ? n.split(" ") : n.split(","),
                            r = s[2],
                            a = 100 * s[3] / r;
                        e(o).closest(i).css({
                            paddingBottom: a + "%"
                        })
                    }
                },
                ue = e => parseInt(e) > 9 ? parseInt(e) : `0${parseInt(e)}`,
                fe = (t, i) => {
                    e("html, body").stop().animate({
                        scrollTop: t
                    }, null == i || "" == i ? 1e3 : i)
                },
                me = (t, i) => {
                    t.each((function() {
                        e(this).find(i).wrapInner('<div class="mx-height-content-holder"/>')
                    }));
                    const o = () => {
                        let o = -1,
                            n = 0,
                            s = 0;
                        return t.each((function() {
                            let t = e(this).find(i);
                            n = t.css("paddingTop"), s = t.css("paddingBottom"), t.find(".mx-height-content-holder").outerHeight() > o && (o = t.find(".mx-height-content-holder").outerHeight())
                        })), parseFloat(o) + parseFloat(n) + parseFloat(s)
                    };
                    e(window).on("resize", (function() {
                        t.each((function() {
                            e(this).find(i).css({
                                height: `${o()}px`
                            })
                        }))
                    })), e(window).resize()
                },
                he = () => ({
                    loadMapApi: () => d({
                        key: "AIzaSyAbY8rGQkxmquiQxlqtNEPpnb6aaSC2zho"
                    }),
                    createMap: (e, t, i) => new e.Map(t, i)
                }),
                ge = t => {
                    let i = t.querySelector(".js-grid"),
                        o = t.querySelector(".category-filter-dropdown"),
                        n = new r.default(i);
                    if (s()(i).on("progress", (() => {
                            n && n.refreshItems().layout()
                        })), o) {
                        let t = e(o),
                            i = t.find(".dropdown-select"),
                            s = t.find(".dropdown-item"),
                            r = s.filter(".selected-dropdown-item");
                        const a = (e, t) => {
                                let i = e.html();
                                e.addClass("selected-dropdown-item").siblings().removeClass("selected-dropdown-item"), t.html(i)
                            },
                            l = e => {
                                n.filter((t => {
                                    const i = t.getElement();
                                    return !e || e === i.getAttribute("data-post-category")
                                }))
                            },
                            c = t => {
                                let o = e(t).data("filter-value"),
                                    n = "number" == typeof o ? String(o) : o;
                                l(n), a(e(t), i)
                            };
                        if (s.click((function() {
                                c(e(this))
                            })), r) {
                            let e = r.attr("data-filter-value");
                            void 0 !== e && !1 !== e && c(r)
                        }
                    }
                },
                ye = {
                    appinit: () => {
                        ye.isPalindrome(), ye.smallestPositiveInt(), ye.characterOccurences(), ye.possiblePairs(), ye.possiblePairsCount(), ye.binarySearch(), ye.fibonacci(), ye.memoFibonacci(), ye.bgImgs(), ye.svgInjector(), ye.svgScaling(), ye.bgShapesPosition(), ye.iframePopUp(), ye.secondLevelMenuPositioning(), ye.menuShadowClass(), ye.menuAdjust(), ye.opaciateItems(), ye.stickyColumns(), ye.masonryLayout(), ye.heroSlider(), ye.slider2(), ye.slider3(), ye.timelineSlider1(), ye.textOnlySlider(), ye.nextSectionScroll(), ye.elMaxHeightSetter(), ye.dropDown(), ye.tabs(), ye.tabs2(), ye.viewMoreItems(), ye.viewMoreLessContent(), ye.compareItems(), ye.modalPopUpTrigger(), ye.sectionAnchorNav(), ye.dropDownPop(), ye.moreContentPopUpTrigger(), ye.moreContentPopUpCollection(), ye.progressCircle(), ye.dataTooltips(), ye.listingFilter(), ye.productServiceFormActions(), ye.mapFilter(), ye.aosAnimations(), ye.scrollContainers(), ye.search(), ye.sideMenu(), ye.quickLinksMenu(), ye.fixedFooterBottom(), ye.gravityFormsActions(), ye.ajaxCustomNavTabsAction()
                    },
                    isPalindrome: () => {},
                    smallestPositiveInt: () => {},
                    characterOccurences: () => {},
                    possiblePairs: () => {},
                    possiblePairsCount: () => {},
                    binarySearch: () => {},
                    fibonacci: () => {},
                    memoFibonacci: () => {},
                    bgImgs: () => {
                        let t = [],
                            i = le(g);
                        t = t.concat(i), t.forEach((t => {
                            (t => {
                                let i = t.querySelector("img"),
                                    o = i.getAttribute("src");
                                t.style.backgroundImage = "url(" + o + ")", e(i).hide()
                            })(t)
                        }))
                    },
                    svgInjector: () => {
                        if (v.length) {
                            le(v).forEach((t => {
                                let i = t.getAttribute("width"),
                                    n = t.getAttribute("height"),
                                    s = {
                                        afterEach(t, o) {
                                            pe(o), e(o).data("svg-blue-green-linear-gradient"), i && null != n && (o.setAttribute("width", i), o.setAttribute("height", n))
                                        }
                                    };
                                (0, o.SVGInjector)(t, s)
                            }))
                        }
                    },
                    svgScaling: () => {
                        le(y).forEach((e => {
                            pe(e)
                        }))
                    },
                    iframePopUp: () => {
                        if (x.length) {
                            le(x).forEach((t => {
                                e(t).magnificPopup({
                                    disableOn: 700,
                                    type: "iframe",
                                    mainClass: "mfp-fade",
                                    removalDelay: 160,
                                    preloader: !1,
                                    fixedContentPos: !1
                                })
                            }))
                        }
                    },
                    bgShapesPosition: () => {
                        if (k.length) {
                            le(k).forEach((e => {
                                let t = e.getAttribute("data-top-pos"),
                                    i = e.getAttribute("data-left-pos"),
                                    o = e.getAttribute("data-bottom-pos"),
                                    n = e.getAttribute("data-right-pos"),
                                    s = e.getAttribute("data-rotate"),
                                    r = e.getAttribute("data-width"),
                                    a = e.getAttribute("data-height"),
                                    l = e.getAttribute("data-opacity");
                                e.style.opacity = null != l ? l : 1, e.style.top = t, e.style.left = i, e.style.bottom = o, e.style.right = n, e.style.width = r, e.style.height = a, e.style[de] = "rotate(" + s + ")"
                            }))
                        }
                    },
                    secondLevelMenuPositioning: () => {
                        if (f) {
                            let t = e(c),
                                i = e(f);
                            e(window).on("resize", (function() {
                                let e = t.outerHeight();
                                i.css({
                                    top: `${e}px`
                                })
                            })), e(window).resize()
                        }
                    },
                    menuShadowClass: () => {
                        !f && p && c.classList.add("menu-shadow")
                    },
                    menuAdjust: () => {
                        let t = e(c),
                            o = e(p),
                            s = e(f),
                            r = 0,
                            a = e(n);
                        const l = () => {
                            let n = t.outerHeight(),
                                l = o.outerHeight(),
                                c = n + (s.length ? s.outerHeight() : 0);
                            r = i.scrollY, r > c && o.length ? (a.addClass("menu-adjust"), s && s.css({
                                top: e(".menu-adjust").find(".page-header").outerHeight() - l
                            })) : (a.removeClass("menu-adjust"), s && s.css({
                                top: n
                            }))
                        };
                        i.addEventListener("load", l), i.addEventListener("scroll", l), i.addEventListener("resize", l)
                    },
                    opaciateItems: () => {
                        if (N.length) {
                            le(N).forEach((t => {
                                e(t).children().each((function() {
                                    e(this).hover((function() {
                                        e(this).siblings().css({
                                            opacity: .2
                                        })
                                    }), (function() {
                                        e(this).siblings().css({
                                            opacity: 1
                                        })
                                    }))
                                }))
                            }))
                        }
                    },
                    stickyColumns: () => {
                        if (b.length) {
                            le(b).forEach((t => {
                                let i = e(t),
                                    o = t.getAttribute("data-offset-top");
                                i.parent().addClass("sticky-column-parent"), i.wrapInner('<div class="theiaStickySidebar"/>'), i.theiaStickySidebar({
                                    additionalMarginTop: null == o || "" === o ? 30 : parseInt(o)
                                })
                            }))
                        }
                    },
                    masonryLayout: () => {
                        if (S.length) {
                            le(S).forEach((e => {
                                ge(e)
                            }))
                        }
                    },
                    heroSlider: () => {
                        if (C.length) {
                            le(C).forEach((function(t) {
                                let o = t.querySelector(".swiper-pagination"),
                                    n = t.querySelector(".swiper-button-prev"),
                                    s = t.querySelector(".swiper-button-next"),
                                    r = e(n).closest(".swiper-navigation"),
                                    l = t.querySelector(".container");
                                e(t).find("[data-aos]");
                                new a.default(t, {
                                    loop: !0,
                                    pagination: {
                                        el: o,
                                        clickable: !0,
                                        type: "custom",
                                        renderCustom: function(e, t, i) {
                                            let o = "<ul>";
                                            for (let e = 1; e <= i; e++) o += `<li class="swiper-pagination-bullet ${t===e?"active":""}"><span class="swiper-pagination-dot"></span><div class="swiper-pagination-counter"><span class="swiper-pagination-counter-index">${ue(e)}</span><span class="swiper-pagination-counter-separator">/</span><span class="swiper-pagination-counter-total">${ue(i)}</span></div></li>`;
                                            return o += "</ul>", o
                                        }
                                    },
                                    navigation: {
                                        nextEl: s,
                                        prevEl: n
                                    },
                                    autoplay: {
                                        delay: 6e3,
                                        disableOnInteraction: !1
                                    },
                                    on: {
                                        slideChangeTransitionStart: function() {},
                                        slideChangeTransitionEnd: function() {}
                                    },
                                    speed: 1500
                                }), e(window).resize((function() {
                                    let t = (e(i).width() - e(l).outerWidth()) / 2;
                                    e(r).css({
                                        right: `${t}px`
                                    }), e(o).css({
                                        left: `${t}px`
                                    })
                                })), e(window).resize()
                            }))
                        }
                    },
                    slider2: () => {
                        if (q.length) {
                            le(q).forEach((t => {
                                let i = e(t).closest(".carousel-layout-2-container"),
                                    o = i.find(".swiper-pagination"),
                                    n = i[0].querySelector(".swiper-button-prev"),
                                    s = i[0].querySelector(".swiper-button-next");
                                new a.default(t, {
                                    loop: !0,
                                    slidesPerView: 1,
                                    pagination: {
                                        el: o[0],
                                        type: "bullets",
                                        clickable: !0
                                    },
                                    navigation: {
                                        nextEl: s,
                                        prevEl: n
                                    },
                                    breakpoints: {
                                        991: {
                                            slidesPerView: 2
                                        }
                                    }
                                })
                            }))
                        }
                    },
                    slider3: () => {
                        if (E.length) {
                            le(E).forEach((t => {
                                let i = e(t);
                                if (!i.hasClass("swiper-container")) {
                                    let t = i.children();
                                    i.addClass("swiper-container"), t.wrapAll('<div class="swiper-wrapper"/>'), t.each((function() {
                                        e(this).wrap('<div class="swiper-slide"/>')
                                    }))
                                }
                                let o = i.closest(".js-slider-3-wrap"),
                                    n = o.find(".swiper-pagination"),
                                    s = o[0].querySelector(".swiper-button-prev"),
                                    r = o[0].querySelector(".swiper-button-next"),
                                    l = i.data("slides-view"),
                                    c = null == l || "" == l ? 1 : l,
                                    d = i.data("slides-loop"),
                                    p = void 0 === d || "" === d || !0 === d;
                                new a.default(t, {
                                    loop: p,
                                    slidesPerView: 1,
                                    pagination: {
                                        el: n[0],
                                        type: "bullets",
                                        clickable: !0
                                    },
                                    navigation: {
                                        nextEl: r,
                                        prevEl: s
                                    },
                                    breakpoints: {
                                        991: {
                                            slidesPerView: c
                                        }
                                    }
                                })
                            }))
                        }
                    },
                    timelineSlider1: () => {
                        if (A.length) {
                            le(A).forEach((t => {
                                let i = e(t),
                                    o = i.closest(".js-timeline-slider-1-wrap"),
                                    n = (o.find(".swiper-pagination"), o.find(".swiper-navigation")),
                                    s = n[0].querySelector(".swiper-button-prev"),
                                    r = n[0].querySelector(".swiper-button-next"),
                                    l = i.find(".swiper-wrapper").find(".swiper-slide"),
                                    c = null == i.data("slides-view") || "" == i.data("slides-view") ? 1 : i.data("slides-view"),
                                    d = o.find(".timeline-dates-wrap");
                                const p = function() {
                                        let t = e('<div class="swiper-wrapper"/>');
                                        return t.appendTo(d), l.each((function() {
                                            let i = e(this).find(".timeline-item").data("timeline-item-date");
                                            t.append(`<div class="swiper-slide"><span class="timeline-dates">${i}</span></div>`)
                                        })), d
                                    }(),
                                    u = new a.default(p[0], {
                                        loop: !0,
                                        slidesPerView: 7,
                                        centeredSlides: !0,
                                        freeMode: !0,
                                        watchSlidesVisibility: !0,
                                        watchSlidesProgress: !0
                                    });
                                new a.default(t, {
                                    loop: !0,
                                    slidesPerView: 1,
                                    centeredSlides: !0,
                                    navigation: {
                                        nextEl: r,
                                        prevEl: s
                                    },
                                    thumbs: {
                                        swiper: u
                                    },
                                    breakpoints: {
                                        991: {
                                            slidesPerView: c
                                        }
                                    }
                                })
                            }))
                        }
                    },
                    textOnlySlider: () => {
                        if (j.length) {
                            le(j).forEach((t => {
                                let i = t.querySelector(".js-text-only-slider"),
                                    o = t.querySelector(".next-trigger-btn"),
                                    n = null == e(i).data("slides-view") || "" == e(i).data("slides-view") ? 2 : e(i).data("slides-view");
                                const s = new a.default(i, {
                                    loop: !0,
                                    slidesPerView: 1,
                                    loopedSlides: 2,
                                    breakpoints: {
                                        991: {
                                            slidesPerView: n
                                        }
                                    }
                                });
                                o.addEventListener("click", (function() {
                                    s.slideNext()
                                }))
                            }))
                        }
                    },
                    nextSectionScroll: () => {
                        if (P.length) {
                            le(P).forEach((t => {
                                let o = e(t),
                                    n = o.find(".next-section-el"),
                                    s = o.closest(".page-section"),
                                    r = s.next(".page-section"),
                                    a = s.find(".container");
                                o.hasClass("side-position-right") && (e(window).resize((function() {
                                    let t = (e(i).width() - a.outerWidth()) / 2;
                                    o.css({
                                        right: `${t}px`
                                    })
                                })), e(window).resize()), n.on("click", (function() {
                                    let e = r.offset().top;
                                    fe(e)
                                }))
                            }))
                        }
                    },
                    elMaxHeightSetter: () => {
                        if (m.length) {
                            le(m).forEach((t => {
                                let i = e(t),
                                    o = i.find(e(T)),
                                    n = i.find(e(L)),
                                    r = i.find(e(z)),
                                    a = i.find(e(F)),
                                    l = i.find(e(I)),
                                    c = i.find(e(M)),
                                    d = i.find(e(D)),
                                    p = i.find(e(H)),
                                    u = i.find(e(V)),
                                    f = i.find(e($));
                                i.find(e(W));
                                [{
                                    el: o,
                                    targetEl: ".card-type-1-title"
                                }, {
                                    el: n,
                                    targetEl: ".card-type-4-title"
                                }, {
                                    el: r,
                                    targetEl: ".card-type-5-title"
                                }, {
                                    el: a,
                                    targetEl: ".card-type-10-desc"
                                }, {
                                    el: l,
                                    targetEl: ".card-type-12-header"
                                }, {
                                    el: c,
                                    targetEl: ".card-type-14-img"
                                }, {
                                    el: d,
                                    targetEl: ".card-type-22-title"
                                }, {
                                    el: p,
                                    targetEl: ".card-type-26-img"
                                }, {
                                    el: u,
                                    targetEl: ".card-type-33-content"
                                }, {
                                    el: f,
                                    targetEl: ".card-type-35-header"
                                }].forEach((e => {
                                    e.el.length && (e.el.find("img").length ? s()(e.el[0]).on("progress", (() => {
                                        me(e.el, e.targetEl)
                                    })) : me(e.el, e.targetEl))
                                }))
                            }))
                        }
                    },
                    dropDown: () => {
                        if (B.length) {
                            le(B).forEach((t => {
                                let i = e(t),
                                    o = (i.find(".dropdown"), i.find(".dropdown-select-cont")),
                                    n = i.find(".dropdown-select"),
                                    s = i.find(".dropdown-menu"),
                                    r = i.find(".dropdown-item");
                                ! function() {
                                    let t = r.filter(".selected-dropdown-item").html();
                                    var i;
                                    i = n, e.trim(i.html()) || n.html(t)
                                }(), i.closest(".page-header-second-row").length && o.click((function() {
                                    e(this).closest(".dropdown");
                                    e(this).closest(".dropdown").hasClass("show"), s.toggle()
                                }))
                            }))
                        }
                    },
                    tabs: () => {
                        if (U.length) {
                            le(U).forEach((t => {
                                let i = e(t),
                                    o = i.find(".custom-tab-nav-list li"),
                                    n = i.find(".custom-tab-content-item");
                                const s = t => {
                                    let i = e(t),
                                        o = i.attr("href"),
                                        s = n.filter(o);
                                    s.find(".form-layout-1 .form-column-cont li");
                                    i.attr("aria-selected", !0), i.parent("li").addClass("active").siblings().removeClass("active").find("a").attr("aria-selected", !1), s.addClass("active").siblings().removeClass("active")
                                };
                                s(o.filter(":first-child").find("a")), o.find("a").on("click", (function(t) {
                                    t.preventDefault();
                                    let i = e(this);
                                    s(i)
                                }))
                            }))
                        }
                    },
                    tabs2: () => {
                        if (Y.length) {
                            le(Y).forEach((t => {
                                e(t).find('[data-toggle="tab"]').on("click", (function() {
                                    e(this).siblings().removeClass("active").attr({
                                        "aria-selected": !1
                                    })
                                }))
                            }))
                        }
                    },
                    cardHideReveal: () => {
                        if (R.length) {
                            le(R).forEach((t => {
                                let i = e(t),
                                    o = i.find(".card-hide-adjust-el"),
                                    n = i.find(".card-hide-el");
                                e(window).on("resize", (function() {
                                    let e = n.outerHeight();
                                    o[0].style[de] = `translate3d(0,${e}px,0)`
                                })), e(window).resize()
                            }))
                        }
                    },
                    viewMoreItems: () => {
                        if (_.length) {
                            le(_).forEach((t => {
                                let i = e(t),
                                    o = i.find(".js-more-items"),
                                    n = parseInt(null == o.data("view-items") || "" == o.data("view-items") ? 3 : o.data("view-items")),
                                    s = o.children(),
                                    r = s.length,
                                    a = i.find(".js-more-items-cta"),
                                    l = a.find(".js-more-items-cta-text"),
                                    c = null == l.data("view-more-text") || "" == l.data("view-more-text") ? "View More" : l.data("view-more-text"),
                                    d = null == l.data("view-less-text") || "" == l.data("view-less-text") ? "View Less" : l.data("view-less-text");
                                s.hide(), s.slice(0, n).show(), r > n && (l.text(c), a.addClass("show-cta"), a.addClass("view-more-cta")), a.click((function() {
                                    let t = s.filter(":visible").length;
                                    s.slice(t - 1, t + n).fadeIn(), s.filter(":visible").length >= r && (l.text(d), e(this).removeClass("view-more-cta"), e(this).addClass("view-less-cta")), t == r && (s.filter(":visible").hide(), s.slice(0, n).show(), l.text(c), e(this).removeClass("view-less-cta"), e(this).addClass("view-more-cta"))
                                }))
                            }))
                        }
                    },
                    viewMoreLessContent: () => {
                        if (J.length) {
                            le(J).forEach((t => {
                                let i = e(t),
                                    o = (i.find(".show-less-cont"), i.find(".show-more-cont")),
                                    n = i.find(".show-trigger-cta"),
                                    s = n.data("view-more-text"),
                                    r = null === s || "" === s ? "Show More" : s,
                                    a = n.data("view-less-text"),
                                    l = null === a || "" === a ? "Show Less" : a,
                                    c = i.parent().offset().top;
                                n.html(r), n.click((function(t) {
                                    let i = e(this).closest(".sticky-column-parent");
                                    o.hasClass("d-none") ? (o.removeClass("d-none"), e(this).text(l)) : (o.addClass("d-none"), e(this).text(r), i.length && fe(c - 225, 200)), t.preventDefault()
                                }))
                            }))
                        }
                    },
                    compareItems: () => {
                        if (O.length) {
                            le(O).forEach((t => {
                                let i = e(t),
                                    o = i.find(".comparison-data-list").children(),
                                    n = i.find(".comparison-table"),
                                    s = null == n.data("compare-items") || "" == n.data("compare-items") ? 2 : n.data("compare-items"),
                                    r = i.find(".comparison-table-dropdown-cont");
                                const a = (e, t) => {
                                        let i = e.html();
                                        t.html(i)
                                    },
                                    l = (t, i) => {
                                        let n = t.find(".dropdown-media-text").text(),
                                            s = o.filter((function(t) {
                                                return e(this).find(".comparison-data-list-item-header-title").text() === n
                                            }));
                                        i.empty(), i.append(s)
                                    };
                                ! function() {
                                    for (let e = 1; e <= s; e++) n.append('<div class="comparison-table-item"><div class="comparison-table-data-cont"/></div>')
                                }();
                                let c = function() {
                                        let t = n.find(".comparison-table-item");
                                        return t.each((function() {
                                            e(this).prepend(r.clone())
                                        })), t.find(".comparison-table-dropdown-cont")
                                    }(),
                                    d = function() {
                                        let t = [];
                                        return o.each((function() {
                                            let i = e(this).find(".comparison-data-list-item-header-title").text();
                                            t.push(i)
                                        })), t
                                    }();
                                ! function() {
                                    let t = d,
                                        i = n.find(".comparison-table-item");
                                    const o = (i, o) => {
                                        let n = i.siblings().find(".dropdown-menu"),
                                            s = t.filter(((e, t, i) => t !== o));
                                        n.each((function() {
                                            s.forEach(((t, i, o) => {
                                                e(this).append(`<li class="dropdown-item cursor-pointer ${0==i?"selected-dropdown-item":""}"><div class="media dropdown-media"><div class="dropdown-media-text text-gray-8">${t}</div></div></li>`)
                                            }))
                                        }))
                                    };
                                    i.each((function(t) {
                                        o(e(this), t)
                                    }))
                                }(), c.each((function() {
                                    let t = e(this).find(".dropdown-select-cont"),
                                        i = t.find(".dropdown-select"),
                                        o = e(this).find(".dropdown-menu"),
                                        n = e(this).find(".dropdown-item"),
                                        s = e(this).next(".comparison-table-data-cont");
                                    a(n.filter(".selected-dropdown-item"), i), l(n.filter(".selected-dropdown-item"), s), t.dropdown(), o.on("click", "li", (function() {
                                        let t = e(this),
                                            i = t.find(".dropdown-media-text").html(),
                                            o = t.closest(".comparison-table-item"),
                                            n = o.find(".dropdown-select"),
                                            s = o.siblings(),
                                            r = o.find(".comparison-table-data-cont");
                                        t.addClass("selected-dropdown-item").siblings().removeClass("selected-dropdown-item"), a(t, n), l(t, r);
                                        let c = d.indexOf(i),
                                            p = d.filter(((e, t, i) => t !== c));
                                        s.each((function() {
                                            let t = e(this).find(".dropdown-menu"),
                                                i = e(this).find(".dropdown-select .dropdown-media-text").text();
                                            t.empty(), p.forEach((e => {
                                                t.append(`<li class="dropdown-item cursor-pointer ${i==e?"selected-dropdown-item":""}"><div class="media dropdown-media"><div class="dropdown-media-text text-gray-8">${e}</div></div></li>`)
                                            }))
                                        }))
                                    }))
                                }))
                            }))
                        }
                    },
                    modalPopUpTrigger: () => {
                        if (Z.length) {
                            le(Z).forEach((t => {
                                e(t).magnificPopup({
                                    type: "inline",
                                    preloader: !1,
                                    modal: !0
                                }), e(document).on("click", ".popup-modal-dismiss", (function(t) {
                                    t.preventDefault(), e.magnificPopup.close()
                                }))
                            }))
                        }
                    },
                    sectionAnchorNav: () => {
                        if (G.length) {
                            le(G).forEach((t => {
                                let i, o = e(t).find("a"),
                                    n = o.map((function() {
                                        let t = e(e(this).attr("href"));
                                        if (t.length) return t
                                    }));
                                const s = t => {
                                    let s = t.scrollTop(),
                                        r = n.map((function() {
                                            if (e(this).offset().top < s + 500) return this
                                        }));
                                    r = r[r.length - 1];
                                    let a = r && r.length ? r[0].id : "";
                                    i !== a && (i = a, o.parent().removeClass("active").end().filter("[href='#" + a + "']").parent().addClass("active"))
                                };
                                o.click((function(t) {
                                    let i = e(this).attr("href"),
                                        o = "#" === i ? 0 : e(i).offset().top - 50;
                                    e(this).parent().addClass("active").siblings().removeClass("active"), fe(o - 150), t.preventDefault()
                                })), e(window).on("scroll", (function() {
                                    s(e(this))
                                })), e(window).on("resize", (function() {
                                    s(e(this))
                                })), e(window).resize()
                            }))
                        }
                    },
                    dropDownPop: () => {
                        if (Q.length) {
                            le(Q).forEach((t => {
                                let i = e(t),
                                    o = i.find(".popup-trigger-dropdown"),
                                    n = i.find(".dropdown-select-cont"),
                                    s = o.find(".dropdown-select"),
                                    r = s.text(),
                                    a = o.find(".dropdown-menu"),
                                    l = i.find(".pop-up-data-list").find(".pop-up-data-list-item"),
                                    c = [];
                                (c.push(r), l.each((function() {
                                    let t = e(this).data("pop-up-data-list-title");
                                    c.push(t)
                                })), c).forEach(((t, i, o) => {
                                        let n = l.filter((function() {
                                            return e(this).data("pop-up-data-list-title") === t
                                        })).attr("id");
                                        e(`<li class="dropdown-item cursor-pointer ${0==i?"selected-dropdown-item":""}"><div class="media dropdown-media"><a href="${null==n?"#":"#"+n}" class="dropdown-media-text text-gray-8">${t}</a></div></li>`).appendTo(a)
                                    })),
                                    function() {
                                        let t = a.find("li");
                                        const i = (e, t) => {
                                            let i = e.html();
                                            t.html(i)
                                        };
                                        i(t.filter(".selected-dropdown-item"), s), n.dropdown(), t.on("click", "a", (function(o) {
                                            let n = e(this),
                                                r = (n.html(), n.attr("href"));
                                            n.closest("li").addClass("selected-dropdown-item").siblings().removeClass("selected-dropdown-item"), i(n, s), "#" !== r && e.magnificPopup.open({
                                                items: {
                                                    src: r,
                                                    type: "inline"
                                                },
                                                mainClass: "modal-size-sm",
                                                callbacks: {
                                                    close: function() {
                                                        let e = t.filter(":first-child");
                                                        e.addClass("selected-dropdown-item").siblings().removeClass("selected-dropdown-item"), i(e.find(".dropdown-media-text"), s)
                                                    }
                                                }
                                            }), o.preventDefault()
                                        }))
                                    }()
                            }))
                        }
                    },
                    moreContentPopUpTrigger: () => {
                        if (K.length) {
                            le(K).forEach((t => {
                                let i = e(t),
                                    o = i.parent().find(".more-content-popup-item");
                                i.on("click", (function(t) {
                                    e.magnificPopup.open({
                                        items: {
                                            src: o,
                                            type: "inline"
                                        },
                                        mainClass: "modal-size-xs"
                                    }), t.preventDefault()
                                }))
                            }))
                        }
                    },
                    moreContentPopUpCollection: () => {
                        if (X.length) {
                            le(X).forEach((t => {
                                e(t).find(".js-more-content-popup-trigger")
                            }))
                        }
                    },
                    progressCircle: () => {
                        if (ee.length) {
                            le(ee).forEach((t => {
                                let i = e(t);
                                ((e, t, i, o, n) => {
                                    let s = e / t * 100;
                                    const r = e => e / 100 * 360;
                                    var a;
                                    s > 0 && (s <= 50 ? (o.css("transform", "rotate(" + r(s) + "deg)"), i.css("transform", "rotate(0deg)")) : (o.css("transform", "rotate(180deg)"), i.css("transform", "rotate(" + r(s - 50) + "deg)"))), n.text((a = s, +(Math.round(a + "e+2") + "e-2")) + "%")
                                })(parseFloat(i.data("progress-current").replace(/,/g, "")), parseFloat(i.data("progress-total").replace(/,/g, "")), i.find(".circular-progress-left .progress-bar"), i.find(".circular-progress-right .progress-bar"), i.find(".circular-progress-value-el"))
                            }))
                        }
                    },
                    dataTooltips: () => {
                        te.length && e(te).tooltip({
                            html: !0
                        })
                    },
                    listingFilter: () => {
                        if (ie.length) {
                            le(ie).forEach((t => {
                                let i = e(t),
                                    o = i.find(".listing-filter-dropdown"),
                                    n = o.find(".dropdown-select"),
                                    s = o.find(".dropdown-item"),
                                    r = i.find(".listing-filter-content"),
                                    a = r.find(".listing-filter-content-item");
                                s.click((function() {
                                    r.hasClass("d-none") && r.removeClass("d-none");
                                    let t = e(this),
                                        i = t.data("filter-value");
                                    t.addClass("selected-dropdown-item").siblings().removeClass("selected-dropdown-item"), ((e, t) => {
                                        let i = e.html();
                                        t.html(i)
                                    })(t, n), a.filter((function(t) {
                                        return e(this).data("filter-content-value") === i
                                    })).removeClass("d-none").siblings().addClass("d-none")
                                }))
                            }))
                        }
                    },
                    productServiceFormActions: () => {
                        e(document).on("gform_confirmation_loaded", (function(e, t) {}))
                    },
                    mapFilter: () => {
                        if (oe.length) {
                            le(oe).forEach((t => {
                                if (e(t).hasClass("js-listing-filter")) {
                                    let i, o = e(t.querySelector(".map-filter-dropdown")).find(".dropdown-item"),
                                        n = t.querySelector(".map-container").querySelector(".map-el"),
                                        s = e(t.querySelectorAll(".listing-filter-content-item"));
                                    const r = () => {
                                            let e = o.filter(".selected-dropdown-item");
                                            return {
                                                center: {
                                                    lat: parseFloat(e.data("map-lat-position")),
                                                    lng: parseFloat(e.data("map-long-position"))
                                                },
                                                zoom: parseFloat(e.data("map-zoom"))
                                            }
                                        },
                                        a = "undefined" != typeof wp_js_handle ? wp_js_handle.google_map_icon : "assets/imgs/content-images/map-markers.png",
                                        l = (t, i) => {
                                            let o = parseFloat(t.data("map-lat-position")),
                                                n = parseFloat(t.data("map-long-position")),
                                                r = parseFloat(t.data("map-zoom")),
                                                l = t.data("filter-value"),
                                                c = s.filter((function(t) {
                                                    return e(this).data("filter-content-value") === l
                                                })),
                                                d = [];
                                            i.setCenter({
                                                lat: o,
                                                lng: n
                                            });
                                            i.setZoom(r), c.find(".column-text-item").each((function() {
                                                d.push({
                                                    position: new google.maps.LatLng(parseFloat(e(this).data("map-lat-position")), parseFloat(e(this).data("map-long-position"))),
                                                    title: e(this).find(".column-text-item-header-title").html(),
                                                    content: e(this).html()
                                                })
                                            }));
                                            for (let e = 0; e < d.length; e++) {
                                                const t = new google.maps.Marker({
                                                        position: d[e].position,
                                                        title: d[e].title,
                                                        icon: a
                                                    }),
                                                    o = new google.maps.InfoWindow({
                                                        content: d[e].content
                                                    });
                                                t.setMap(i), t.addListener("click", (() => {
                                                    o.open(i, t)
                                                }))
                                            }
                                        };
                                    he().loadMapApi().then((function(t) {
                                        i = he().createMap(t, n, r()), o.click((function() {
                                            l(e(this), i)
                                        }))
                                    }))
                                }
                            }))
                        }
                    },
                    aosAnimations: () => {
                        t().init()
                    },
                    scrollContainers: () => {
                        w.length && l.default.initAll()
                    },
                    search: () => {
                        if (h) {
                            let t = document.querySelector(".seach-icon-cta"),
                                i = document.querySelector(".search-close");
                            const o = {
                                open: () => {
                                    e(n).addClass("search-view")
                                },
                                close: () => {
                                    e(n).removeClass("search-view")
                                }
                            };
                            e(t).on("click", (function() {
                                o.open()
                            })), e(i).on("click", (function() {
                                o.close()
                            }))
                        }
                    },
                    sideMenu: () => {
                        if (u) {
                            let t = u.querySelector(".main-nav"),
                                i = e(t).clone(),
                                o = e('<span class="quick-links-close close-btn text-primary"><i class="bi bi-x"></i></span>'),
                                s = u.querySelector(".quick-menu-trigger"),
                                r = document.querySelector(".hero-section .feature-1-section");
                            const a = {
                                open: () => {
                                    e(n).addClass("side-menu-opened")
                                },
                                close: () => {
                                    e(n).removeClass("side-menu-opened")
                                }
                            };
                            e(n).prepend(e('<div class="side-menu"/>').append(i).wrapInner('<div class="side-menu-in"/>')), o.prependTo(".side-menu-in"), e(r).clone().appendTo(".side-menu-in"), e(s).on("click", (function() {
                                a.open()
                            })), e(o).on("click", (function() {
                                a.close()
                            })), e(document).click((function(e) {
                                e.target == document.querySelector("#page-wrap") && a.close()
                            }))
                        }
                    },
                    quickLinksMenu: () => {
                        if (ne) {
                            let t = e(ne).find(".quick-links-area-tab-nav li"),
                                o = e(ne).find(".quick-links-area-tab-content-item"),
                                s = o.find(".quick-links-area-tab-content-nav-title a"),
                                r = e(ne).find(".general-quick-links"),
                                a = e(ne).find(".general-quick-links-title"),
                                l = e(ne).find(".quick-links-close");
                            const c = t => {
                                let i = t.find("a").attr("href"),
                                    n = o.filter((function() {
                                        return e(this).data("quick-link-content") == t.data("quick-link-nav")
                                    }));
                                t.addClass("active").siblings().removeClass("active"), n.length ? n.removeClass("d-none").addClass("d-block").siblings().removeClass("d-block").addClass("d-none") : window.open(i, "_self")
                            };
                            e(se).on("click", (function() {
                                e(n).addClass("quick-menu-view")
                            })), l.on("click", (function() {
                                e(n).removeClass("quick-menu-view")
                            }));
                            let d = t.filter(".active");
                            c(d), t.find("a").click((function(t) {
                                t.preventDefault(), c(e(this).closest("li"))
                            }));
                            const p = () => e(i).outerWidth();
                            s.click((function(t) {
                                if (!(p() < 1199)) return !0; {
                                    let i = e(this).closest(".quick-links-area-tab-content-item");
                                    i.find("ul").slideToggle(), i.siblings().find("ul").slideUp(), r.find("ul").slideUp(), t.preventDefault()
                                }
                            })), a.click((function(t) {
                                if (p() < 1199) {
                                    e(this).closest(".general-quick-links").find("ul").slideToggle(), o.find("ul").slideUp()
                                }
                            }))
                        }
                    },
                    fixedFooterBottom: () => {
                        re && e("#page-wrap").after(e(re))
                    },
                    gravityFormsActions: () => {
                        e(document).on("gform_post_render", (function(e, t, i) {}))
                    },
                    ajaxCustomNavTabsAction: () => {
                        if (ae.length) {
                            le(ae).forEach((t => {
                                const i = t.querySelectorAll(".js-ajax-custom-tab-nav"),
                                    o = t.querySelector(".feature-1-body-intro .js-ajax-custom-tab-nav"),
                                    n = t.querySelector(".ajax-tab-content-template"),
                                    s = t => {
                                        const i = e(t).closest(".js-ajax-custom-tab-layout"),
                                            o = e(t).attr("href"),
                                            s = e(t).attr("data-content-link"),
                                            r = i.find(".tab-pane"),
                                            a = r.filter(o),
                                            l = e('<div class="d-flex justify-content-center lds-facebook-wrap"><div class="lds-facebook"><div></div><div></div><div></div></div></div>');
                                        a.empty(), e(t).closest(".js-ajax-custom-tab-navs").find(".js-ajax-custom-tab-nav-parent").removeClass("active-custom-tab"), e(t).closest(".js-ajax-custom-tab-nav-parent").addClass("active-custom-tab"), r.removeClass("active"), a.addClass("active"), e.ajax({
                                            url: s,
                                            beforeSend: function() {
                                                a.append(l)
                                            },
                                            success: function(t) {
                                                a.empty();
                                                const i = t.files[0].reports;
                                                e.each(i, (function(t, i) {
                                                    let o = e(n).clone(),
                                                        s = i.reports_header,
                                                        r = i.report,
                                                        l = o.find(".feature-42-header-title"),
                                                        c = o.find(".pdf-wrapper"),
                                                        d = o.find(".pdf-container"),
                                                        p = o.find(".category-filter-dropdown .dropdown-menu"),
                                                        u = p.find(".dropdown-item"),
                                                        f = [];
                                                    l.text(s), e.each(r, (function(e, t) {
                                                        let i = d.clone();
                                                        i.attr("data-post-category", t.year), i.find(".pdf-container-link").attr("href", t.file), i.find(".media-body p").html(t.header), i.find(".pdf-container-icon").attr("src", t.icon), c.append(i), f.push(t.year)
                                                    })), c.find(".pdf-container").filter(":first-child").remove();
                                                    let m = f.filter(((e, t) => f.indexOf(e) === t));
                                                    e.each(m, (function(e, t) {
                                                        let i = u.clone();
                                                        i.attr("data-filter-value", t), i.find(".dropdown-media-text").html(t), p.append(i)
                                                    })), p.find(".dropdown-item").filter(":first-child").remove(), p.find(".dropdown-item").filter(":first-child").addClass("selected-dropdown-item"), o.removeClass("d-none"), a.append(o)
                                                })), a.find(".js-ajax-grid-area").each((function() {
                                                    ge(e(this)[0])
                                                }))
                                            }
                                        })
                                    };
                                e(i).on("click", (function(t) {
                                    t.preventDefault(), s(e(this))
                                })), s(o)
                            }))
                        }
                    }
                };
            e(document).ready((() => {
                ye.appinit()
            }))
        }(c)
    })()
})();