(function () { function r(e, n, t) { function o(i, f) { if (!n[i]) { if (!e[i]) { var c = "function" == typeof require && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
    1: [function (require, module, exports) {
        // QOLII Library for my website. MrT-tak.github.io. Copyrighted with CC-BY-NC license.
        // Useable code for all bootstrap users with the navbar menu setup like the example code from bootstrap and setup correctly
        const navbarMenu = document.getElementById("navbarMenu")
        var verbose = true

        function open() {
            navbarMenu.classList.remove("hidden")
            if (verbose) console.log("completed opening navbar menu in QOLII/Navbar");
        }

        function close() {
            navbarMenu.classList.add("hidden")
            if (verbose) console.log("completed closing navbar menu in QOLII/Navbar");
        }

    }, {}], 2: [function (require, module, exports) {
        // QoL Improvement Implementation for index and other .html files. Project QOLII.
        var opnb = require("/QOLII/operationsNavBar.js")
    }, { "/QOLII/operationsNavBar.js": 1 }]
}, {}, [2]);
