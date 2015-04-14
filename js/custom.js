


$(function() {
    $("img.lazy").lazyload();
    var setupForm = {
        init : function(){ 
            $('.donation-form').each(function() {
                setupForm.addListeners($(this));
                setupForm.addValidation($(this));
            });         
        },
        addListeners : function($form){
            $('.amountInput', $form).focus(function(){
                $(this).parents('.manual').find('input[type=radio]').prop('checked', true);         
            });

        },
        addValidation: function ($form){
            $($form).validate({
                ignore: [],
                focusCleanup: false,
                focusInvalid: true, 
                errorElement: "p",
                errorPlacement: function(error, element) {
                    element.parents(".manual").find(".error").html(error);                
                    $(form).find('button[type=submit]').removeAttr('disabled');  
                },          
                rules: {            
                    'amountother': {
                        required: function(){
                            console.log($(form).find('input[type=radio]').val());
                            return $(form).find('input[type=radio]').val() == "variab"
                        },
                        Integer: true,
                        min: 10                        
                    },
                },
                messages: { 
                        required: "required field",
                        Integer: "numbers only",
                        min: "at least 10"                        
                },        
                submitHandler: function(form) {
                    if ($(form).valid()) {
                        $(form).find('button[type=submit]').removeAttr('disabled');
                        form.submit();
                    } else {
                        $(form).find('button[type=submit]').attr('disabled', 'disabled');
                    }                 
                }
            });                   

        }
    }
                
    $(document).ready(function(){
        
        $( ".tabs" ).tabs();
        
        setupForm.init();
    });    
    $("aside.article-image").css({
        backgroundSize: "cover"
    });
    setTimeout(function() {
        $("#map").removeClass("inactive")
    }, 1);
    setTimeout(function() {
        $(".funding-total").removeClass("inactive")
    }, 1);
    $("#lead #lead-inner .orange-button").click(function() {
        $(this).toggleClass("active");
        $(this).parents("#lead").next().slideToggle()
    });
    $(".collective-images img").click(function() {
        $(".collective-images img").not(this).removeClass("active");
        $(this).toggleClass("active");
        if (!$("#expanded-image-container").hasClass("active")) {
            $("#expanded-image-container").slideToggle();
            $("#expanded-image-container").toggleClass("active")
        } else {}
    });
    $("#expanded-image-container span.close").click(function() {
        $(".collective-images img").removeClass("active");
        $("#expanded-image-container").slideToggle();
        $("#expanded-image-container").removeClass("active")
    });
    $("section#map .map-overlay span.close").click(function(e) {
        $(this).parents(".map-overlay-outer").fadeOut()
    });
    $(".project-buttons .orange-button").click(function() {
        $(this).toggleClass("active");
        $(this).parents(".project-details").next().slideToggle()
    });
    $("section.project-donate header p").click(function() {
        $(this).parents(".project-donate").prev().find(".orange-button").toggleClass("active");
        $(this).parents(".project-donate").slideToggle()
    });
    $(".link").click(function() {
        $(".map-overlay-outer").hide();
        theDiv = $(this).attr("href");
        $(theDiv).show()
    });
    $.fn.countTo = function(e) {
        e = $.extend({}, $.fn.countTo.defaults, e || {});
        var t = Math.ceil(e.speed / e.refreshInterval),
            n = (e.to - e.from) / t;
        return $(this).each(function() {
            function u() {
                s += n;
                i++;
                $(r).html(s.toFixed(e.decimals));
                if (typeof e.onUpdate == "function") {
                    e.onUpdate.call(r, s)
                }
                if (i >= t) {
                    clearInterval(o);
                    s = e.to;
                    if (typeof e.onComplete == "function") {
                        e.onComplete.call(r, s)
                    }
                }
            }
            var r = this,
                i = 0,
                s = e.from,
                o = setInterval(u, e.refreshInterval)
        })
    };
    $.fn.countTo.defaults = {
        from: 0,
        to: 100,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        onUpdate: null,
        onComplete: null
    }
});
$(function(e) {
    e(".timer0a").countTo({
        from: 0,
        to: 20,
        speed: 1e3,
        refreshInterval: 50
    });
    e(".timer0b").countTo({
        from: 0,
        to: 5678,
        speed: 1e3,
        refreshInterval: 50,
        onUpdate: function(t) {
            var n = e(".timer0b").text();
            if (n > 1e3) {
                e(".timer0b").text(n.substring(0, 1) + "," + n.substring(1, 6))
            }
            if (n > 1e4) {
                e(".timer0b").text(n.substring(0, 2) + "," + n.substring(2, 6))
            }
            if (n > 1e5) {
                e(".timer0b").text(n.substring(0, 3) + "," + n.substring(3, 6))
            }
        }
    });
    e(".timer1a").countTo({
        from: 0,
        to: 80,
        speed: 1e3,
        refreshInterval: 50
    });
    e(".timer1b").countTo({
        from: 1260,
        to: 1008,
        speed: 1e3,
        refreshInterval: 50,
        onUpdate: function(t) {
            var n = e(".timer1b").text();
            if (n > 1e3) {
                e(".timer1b").text(n.substring(0, 1) + "," + n.substring(1, 6))
            }
            if (n > 1e4) {
                e(".timer1b").text(n.substring(0, 2) + "," + n.substring(2, 6))
            }
            if (n > 1e5) {
                e(".timer1b").text(n.substring(0, 3) + "," + n.substring(3, 6))
            }
        }
    });
    e(".timer2a").countTo({
        from: 0,
        to: 40,
        speed: 1e3,
        refreshInterval: 50
    });
    e(".timer2b").countTo({
        from: 114195,
        to: 45678,
        speed: 1e3,
        refreshInterval: 50,
        onUpdate: function(t) {
            var n = e(".timer2b").text();
            if (n > 1e3) {
                e(".timer2b").text(n.substring(0, 1) + "," + n.substring(1, 6))
            }
            if (n > 1e4) {
                e(".timer2b").text(n.substring(0, 2) + "," + n.substring(2, 6))
            }
            if (n > 1e5) {
                e(".timer2b").text(n.substring(0, 3) + "," + n.substring(3, 6))
            }
        }
    });
    e(".timer3a").countTo({
        from: 0,
        to: 100,
        speed: 1e3,
        refreshInterval: 50
    });
    e(".timer3b").countTo({
        from: 0,
        to: 0,
        speed: 1e3,
        refreshInterval: 50,
        onUpdate: function(t) {
            var n = e(".timer3b").text();
            if (n > 1e3) {
                e(".timer3b").text(n.substring(0, 1) + "," + n.substring(1, 6))
            }
            if (n > 1e4) {
                e(".timer3b").text(n.substring(0, 2) + "," + n.substring(2, 6))
            }
            if (n > 1e5) {
                e(".timer3b").text(n.substring(0, 3) + "," + n.substring(3, 6))
            }
        }
    })
});
$(function() {
    $("#big-image img:eq(0)").nextAll().hide();
    $(".small-images img").click(function(e) {
        var t = $(this).index();
        $("#big-image img").eq(t).show().siblings().hide()
    })
});
(function(e, t, n, r, i) {
    var s = e("<div>")[0],
        o = /url\(["']?(.*?)["']?\)/,
        u = [],
        a = {
            top: 0,
            left: 0,
            bottom: 1,
            right: 1,
            center: .5
        };
    if ("backgroundSize" in s.style && !e.debugBGS) {
        return
    }
    e.cssHooks.backgroundSize = {
        set: function(t, n) {
            var r = !e.data(t, "bgsImg"),
                i, s, o;
            e.data(t, "bgsValue", n);
            if (r) {
                u.push(t);
                e.refreshBackgroundDimensions(t, true);
                s = e("<div>").css({
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    overflow: "hidden"
                });
                o = e("<img>").css({
                    position: "absolute"
                }).appendTo(s), s.prependTo(t);
                e.data(t, "bgsImg", o[0]);
                i = (e.css(t, "backgroundPosition") || e.css(t, "backgroundPositionX") + " " + e.css(t, "backgroundPositionY")).split(" ");
                e.data(t, "bgsPos", [a[i[0]] || parseFloat(i[0]) / 100, a[i[1]] || parseFloat(i[1]) / 100]);
                e.css(t, "zIndex") == "auto" && (t.style.zIndex = 0);
                e.css(t, "position") == "static" && (t.style.position = "relative");
                e.refreshBackgroundImage(t)
            } else {
                e.refreshBackground(t)
            }
        },
        get: function(t) {
            return e.data(t, "bgsValue") || ""
        }
    };
    e.cssHooks.backgroundImage = {
        set: function(t, n) {
            return e.data(t, "bgsImg") ? e.refreshBackgroundImage(t, n) : n
        }
    };
    e.refreshBackgroundDimensions = function(t, n) {
        var r = e(t),
            i = {
                width: r.innerWidth(),
                height: r.innerHeight()
            },
            s = e.data(t, "bgsDim"),
            o = !s || i.width != s.width || i.height != s.height;
        e.data(t, "bgsDim", i);
        if (o && !n) {
            e.refreshBackground(t)
        }
    };
    e.refreshBackgroundImage = function(t, n) {
        var r = e.data(t, "bgsImg"),
            i = (o.exec(n || e.css(t, "backgroundImage")) || [])[1],
            s = r && r.src,
            u = i != s,
            a, f;
        if (u) {
            r.style.height = r.style.width = "auto";
            r.onload = function() {
                var n = {
                    width: r.width,
                    height: r.height
                };
                if (n.width == 1 && n.height == 1) {
                    return
                }
                e.data(t, "bgsImgDim", n);
                e.data(t, "bgsConstrain", false);
                e.refreshBackground(t);
                r.style.visibility = "visible";
                r.onload = null
            };
            r.style.visibility = "hidden";
            r.src = i;
            if (r.readyState || r.complete) {
                r.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
                r.src = i
            }
            t.style.backgroundImage = "none"
        }
    };
    e.refreshBackground = function(t) {
        var n = e.data(t, "bgsValue"),
            i = e.data(t, "bgsDim"),
            s = e.data(t, "bgsImgDim"),
            o = e(e.data(t, "bgsImg")),
            u = e.data(t, "bgsPos"),
            a = e.data(t, "bgsConstrain"),
            f, l = i.width / i.height,
            c = s.width / s.height,
            h;
        if (n == "contain") {
            if (c > l) {
                e.data(t, "bgsConstrain", f = "width");
                h = r.floor((i.height - i.width / c) * u[1]);
                o.css({
                    top: h
                });
                if (f != a) {
                    o.css({
                        width: "100%",
                        height: "auto",
                        left: 0
                    })
                }
            } else {
                e.data(t, "bgsConstrain", f = "height");
                h = r.floor((i.width - i.height * c) * u[0]);
                o.css({
                    left: h
                });
                if (f != a) {
                    o.css({
                        height: "100%",
                        width: "auto",
                        top: 0
                    })
                }
            }
        } else if (n == "cover") {
            if (c > l) {
                e.data(t, "bgsConstrain", f = "height");
                h = r.floor((i.height * c - i.width) * u[0]);
                o.css({
                    left: -h
                });
                if (f != a) {
                    o.css({
                        height: "100%",
                        width: "auto",
                        top: 0
                    })
                }
            } else {
                e.data(t, "bgsConstrain", f = "width");
                h = r.floor((i.width / c - i.height) * u[1]);
                o.css({
                    top: -h
                });
                if (f != a) {
                    o.css({
                        width: "100%",
                        height: "auto",
                        left: 0
                    })
                }
            }
        }
    };
    var f = e.event,
        l, c = {
            _: 0
        },
        h = 0,
        p, d;
    l = f.special.throttledresize = {
        setup: function() {
            e(this).on("resize", l.handler)
        },
        teardown: function() {
            e(this).off("resize", l.handler)
        },
        handler: function(t, n) {
            var r = this,
                i = arguments;
            p = true;
            if (!d) {
                e(c).animate(c, {
                    duration: Infinity,
                    step: function() {
                        h++;
                        if (h > l.threshold && p || n) {
                            t.type = "throttledresize";
                            f.dispatch.apply(r, i);
                            p = false;
                            h = 0
                        }
                        if (h > 9) {
                            e(c).stop();
                            d = false;
                            h = 0
                        }
                    }
                });
                d = true
            }
        },
        threshold: 1
    };
    e(t).on("throttledresize", function() {
        e(u).each(function() {
            e.refreshBackgroundDimensions(this)
        })
    })
})(jQuery, window, document, Math);
! function(e, t, n, r) {
    var i = e(t);
    e.fn.lazyload = function(s) {
        function o() {
            var t = 0;
            f.each(function() {
                var n = e(this);
                if (!l.skip_invisible || n.is(":visible"))
                    if (e.abovethetop(this, l) || e.leftofbegin(this, l));
                    else if (e.belowthefold(this, l) || e.rightoffold(this, l)) {
                    if (++t > l.failure_limit) return !1
                } else n.trigger("appear"), t = 0
            })
        }
        var u, f = this,
            l = {
                threshold: 0,
                failure_limit: 0,
                event: "scroll",
                effect: "show",
                container: t,
                data_attribute: "original",
                skip_invisible: !0,
                appear: null,
                load: null,
                placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
            };
        return s && (r !== s.failurelimit && (s.failure_limit = s.failurelimit, delete s.failurelimit), r !== s.effectspeed && (s.effect_speed = s.effectspeed, delete s.effectspeed), e.extend(l, s)), u = l.container === r || l.container === t ? i : e(l.container), 0 === l.event.indexOf("scroll") && u.bind(l.event, function() {
            return o()
        }), this.each(function() {
            var t = this,
                n = e(t);
            t.loaded = !1, (n.attr("src") === r || n.attr("src") === !1) && n.is("img") && n.attr("src", l.placeholder), n.one("appear", function() {
                if (!this.loaded) {
                    if (l.appear) {
                        var r = f.length;
                        l.appear.call(t, r, l)
                    }
                    e("<img />").bind("load", function() {
                        var r = n.attr("data-" + l.data_attribute);
                        n.hide(), n.is("img") ? n.attr("src", r) : n.css("background-image", "url('" + r + "')"), n[l.effect](l.effect_speed), t.loaded = !0;
                        var i = e.grep(f, function(e) {
                            return !e.loaded
                        });
                        if (f = e(i), l.load) {
                            var s = f.length;
                            l.load.call(t, s, l)
                        }
                    }).attr("src", n.attr("data-" + l.data_attribute))
                }
            }), 0 !== l.event.indexOf("scroll") && n.bind(l.event, function() {
                t.loaded || n.trigger("appear")
            })
        }), i.bind("resize", function() {
            o()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && i.bind("pageshow", function(t) {
            t.originalEvent && t.originalEvent.persisted && f.each(function() {
                e(this).trigger("appear")
            })
        }), e(n).ready(function() {
            o()
        }), this
    }, e.belowthefold = function(n, s) {
        var o;
        return o = s.container === r || s.container === t ? (t.innerHeight ? t.innerHeight : i.height()) + i.scrollTop() : e(s.container).offset().top + e(s.container).height(), o <= e(n).offset().top - s.threshold
    }, e.rightoffold = function(n, s) {
        var o;
        return o = s.container === r || s.container === t ? i.width() + i.scrollLeft() : e(s.container).offset().left + e(s.container).width(), o <= e(n).offset().left - s.threshold
    }, e.abovethetop = function(n, s) {
        var o;
        return o = s.container === r || s.container === t ? i.scrollTop() : e(s.container).offset().top, o >= e(n).offset().top + s.threshold + e(n).height()
    }, e.leftofbegin = function(n, s) {
        var o;
        return o = s.container === r || s.container === t ? i.scrollLeft() : e(s.container).offset().left, o >= e(n).offset().left + s.threshold + e(n).width()
    }, e.inviewport = function(t, n) {
        return !(e.rightoffold(t, n) || e.leftofbegin(t, n) || e.belowthefold(t, n) || e.abovethetop(t, n))
    }, e.extend(e.expr[":"], {
        "below-the-fold": function(t) {
            return e.belowthefold(t, {
                threshold: 0
            })
        },
        "above-the-top": function(t) {
            return !e.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-screen": function(t) {
            return e.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-screen": function(t) {
            return !e.rightoffold(t, {
                threshold: 0
            })
        },
        "in-viewport": function(t) {
            return e.inviewport(t, {
                threshold: 0
            })
        },
        "above-the-fold": function(t) {
            return !e.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-fold": function(t) {
            return e.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-fold": function(t) {
            return !e.rightoffold(t, {
                threshold: 0
            })
        }
    })
}(jQuery, window, document)


$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
