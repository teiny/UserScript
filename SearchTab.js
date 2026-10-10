// ==UserScript==
// @name         搜索栏增强
// @name:en      Search Bar Enhancer
// @name:zh      搜索栏增强
// @name:zh-CN   搜索栏增强
// @name:zh-TW   搜尋欄增強
// @namespace    https://github.com/teiny/UserScript
// @homepageURL  https://github.com/teiny/UserScript
// @version      1.0.0
// @description  在页面顶部使用图标切换搜索引擎，沿用当前搜索词；支持自定义网站、关键词选择符、图标缓存，并减少与顶部搜索框的遮挡。
// @description:en    Switch search engines from a top icon bar using the current query. Supports custom sites, search input selectors, cached icons and floating search header offsets.
// @description:zh    在页面顶部使用图标切换搜索引擎，沿用当前搜索词；支持自定义网站、关键词选择符、图标缓存，并减少与顶部搜索框的遮挡。
// @description:zh-CN 在页面顶部使用图标切换搜索引擎，沿用当前搜索词；支持自定义网站、关键词选择符、图标缓存，并减少与顶部搜索框的遮挡。
// @description:zh-TW 在頁面頂部使用圖示切換搜尋引擎，沿用目前搜尋詞；支援自訂網站、關鍵詞選擇器、圖示快取，並減少與頂部搜尋框的遮擋。
// @author       彪大大
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEZ0lEQVRYR8WWX2hbVRzHv7+TOhxsZfembIyJdrYncVWk2K5T+2JBO9Tpi7QPOqHzoX9u2sIGivig26MKU1xyb7upHSIIDkQdOlB0fahM2TJ0uLXNTedgRZgmN+0qzLbJ/clNk5ql+XMTqJ6nkPM7v+/nfs/v/M4h/M+DKtVX3zNrxQbhSy7bm7Jr54bkeKV5svGuAJSRmaeIuQvMewDsKiC2wOCTgDiT0BrPVAJTEkAJRvaRwOsA7QZjFoRzTLjo/OYUZj2C6xlcDxIPA3gEQC0YHwryvBXT7p12A1IUwKubAQaCaWGBo9aAfKdUQvWEeReWcAiEgwBiDNGT0Bq+KgdREMAbivQw0RiAyxDotvrllXKJsvOqbnYB+BRAAgJPW/3yXKm1awA2Bye9d4iaGAPjCU12uBXOj1N1k0GYgk2dVqDxerE8awBUIzoG5mZ7saZj7uDOuWoBthwzHxMenGVCMDEgh1wBKCFTI0KIQX0JrfH4qq0jkSesft+3lcKoemQUoF7Y3GkNFl5/mwOqEb3EzEsJTbZmxRR9pp9gH7KZu+cCvp8rgajToy02+AKAMUuTLxVauwpQN3ptu51a/p0ZwURgxTI1FH0UxD8AOGVpsrsS8Zyi/JoBmdCkLAmgGDP7iO3TxPxcPOD7zAn26hGDQftTSTTPD8uZagAUw3yBGB+nYDfMa/6r+TlWHVBD04dB4g1K2bviQ/6ptAO66Xw9LE22VyOe/ohj0/exR0zaKXQUatmrAF7d/JKBZ2o31my8dmDn3xmABQDvW5p0mktVo37stztv3kreKgughMwQEbSlJLb+NSz/zABMgzlsBXzPV6UOYJsR3brMfKMsgNcwX2TGRykbLfOD8uIKQOQTgB6yNOmvFqBuZKbVtu3zxNwUD/gmi9aAol99kJD6hZgPxAO+kyunIFMXOf9VCqIY5qsEHLHE/Cb0tS4XBXAmlJD5hwC+iQfk/pxj9CNA24ipOx5oOF8pgGqYlxhYTgzIlpLHMA2gm18Q8KwAtca0xnDahRGziVJ4LRfKLYSiR3sJPAq2j1gB/+HyAEa0nZgnAD5uab4+t0LF4hTdvEDAdkuTO4rFrLmMvEb0TWZ+pRS1GzBVN50ruSv/XilZA//ue2QKIH+xo1MOIFu8K3FsWZrP69qBnOKbANDuOIGUOGoNy5tlhUfMJjC9DOaevNjLliYfKFsD+QHZ3pB+GTGNEdsT8UHfT/lxih59kji1ByScjllbEJToO2ug8XFXW5AblOkPbwPoTBsKLAKYBXCdQPVwHqWZQcBpBvYC2FDErTW3qqtnuZPMa0y3gcVuG2gj5jYQ7WAgTIwwQ4Q9jHBssCGCs1yjTpo3AFLdQLgGKLf/ufN1H0xtthc9vwK4u8i6bkuTp5y5dQFwEmcuoe8B3F8AYnUr1g3AEd0SvHKPEDWfA9R8GwTbvVbAf2JdHcgKZh4k72KlOJ0iHk967K6FPn/sPwFY7SuGuddOYjH/VbSuW+CmcP8Bvs7fMICKGssAAAAASUVORK5CYII=
// @require      https://cdn.jsdelivr.net/npm/jquery@1.9.1/jquery.min.js
// @match        *://*/*
// @exclude      *://gmail.com/*
// @exclude      *://mail.*.com/*
// @exclude      *://mail.163.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @connect      self
// @connect      google.com
// @connect      baidu.com
// @connect      bing.com
// @connect      duckduckgo.com
// @connect      github.com
// @connect      githubassets.com
// @connect      zhihu.com
// @connect      bilibili.com
// @connect      *
// @license      GPL-3.0-only
// ==/UserScript==
 
(function($) {
    'use strict';
 
    /////////////// 变量配置 ///////////////////////////
 
    //是否开启谷歌搜索链接新窗口打开
    var is_google_blank = 1;
 
    //是否启用搜索栏增强
    var is_open_multi_search=1;
 
    ///////////////////// 这里可以自定义自己的网站 /////////////////////
    //默认的搜索引擎，格式：[名称][搜索网址][是否新窗口打开，可省略] 搜索关键词用 #keyword# 表示，每行一个网站
    var defaultLinkList = `
[谷歌搜索] [https://www.google.com/search?q=#keyword#]
[百度搜索] [https://www.baidu.com/s?wd=#keyword#]
[Bing搜索] [https://cn.bing.com/search?q=#keyword#]
[DuckDuckGo] [https://duckduckgo.com/?q=#keyword#]
[GitHub] [https://github.com/search?q=#keyword#]
[知乎搜索] [https://www.zhihu.com/search?type=content&q=#keyword#] [新窗口]
[Bilibili] [https://search.bilibili.com/all?keyword=#keyword#] [新窗口]
`;
    //去除两端多余的换行符
    defaultLinkList = defaultLinkList.replace(/^\n/, '').replace(/\n$/, '');
 
    //去除字符串两端空白符
    var trim=function(str){return typeof str ==='string' ? str.replace(/^\s\s*/,'').replace(/\s\s*$/,'') : str;}

    //自定义名称、网址和设置文本按纯文本显示。
    var escapeHtml = function(str){
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    var getIconText = function(title){
        var chars = Array.from(trim(title));
        return chars.slice(0, /^\p{Script=Han}/u.test(chars[0] || "") ? 1 : 2).join("") || "?";
    }

    //按站点保存 PNG 数据，而不是依赖浏览器的临时 HTTP 缓存。
    var iconRequests = Object.create(null);
    var requestIconSource = function(url, blob){
        return new Promise(function(resolve, reject){
            var request;
            var finish = function(callback, value){ clearTimeout(timer); callback(value); }
            //anonymous 在部分浏览器使用 fetch，单独计时以确保可以超时退出。
            var timer = setTimeout(function(){
                if(request) request.abort();
                reject(new Error("图标请求超时"));
            }, 5000);
            try {
                request = GM_xmlhttpRequest({
                    method:"GET", url:url, anonymous:true, responseType:blob ? "blob" : "",
                    onload:function(response){
                        finish(response.status >= 200 && response.status < 300 ? resolve : reject, response);
                    },
                    onerror:function(error){ finish(reject, error); },
                    onabort:function(error){ finish(reject, error); },
                    ontimeout:function(error){ finish(reject, error); }
                });
            } catch(error) { finish(reject, error); }
        });
    }
    var readIconImage = function(src){
        return new Promise(function(resolve, reject){
            var image = new Image();
            image.onload = function(){ resolve(image); }
            image.onerror = reject;
            image.src = src;
        });
    }
    var fetchIconData = async function(url){
        var response = await requestIconSource(url, true);
        var blob = response.response;
        if(!blob || !blob.size || blob.size > 262144) throw new Error("图标大小无效");
        var data = await new Promise(function(resolve, reject){
            var reader = new FileReader();
            reader.onload = function(){ resolve(reader.result); }
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
        var image = await readIconImage(data);
        var canvas = document.createElement("canvas");
        canvas.width = canvas.height = 32;
        var scale = Math.min(32 / image.naturalWidth, 32 / image.naturalHeight);
        var width = image.naturalWidth * scale, height = image.naturalHeight * scale;
        canvas.getContext("2d").drawImage(image, (32 - width) / 2, (32 - height) / 2, width, height);
        return canvas.toDataURL("image/png");
    }
    var declaredIcon = function(doc, base){
        var link = doc.querySelector('link[rel~="icon"],link[rel="apple-touch-icon"]');
        if(!link || !link.getAttribute("href")) return "";
        try {
            var url = new URL(link.getAttribute("href"), base);
            return /^https?:$/.test(url.protocol) ? url.href : "";
        } catch(error) { return ""; }
    }
    var loadSiteIcon = function(origin){
        if(iconRequests[origin]) return iconRequests[origin];
        iconRequests[origin] = (async function(){
            var key = "wish_s_iconcache:" + origin;
            var cached = GM_getValue(key, "");
            if(typeof cached === "string" && cached.indexOf("data:image/png;base64,") === 0){
                try { await readIconImage(cached); return cached; }
                catch(error) { GM_setValue(key, ""); }
            }
            var source = origin === location.origin ? declaredIcon(document, document.baseURI) : "";
            var urls = source ? [source, origin + "/favicon.ico"] : [origin + "/favicon.ico"];
            var tried = [];
            var tryIcon = async function(url){
                if(!url || tried.indexOf(url) !== -1) return "";
                tried.push(url);
                try {
                    var data = await fetchIconData(url);
                    GM_setValue(key, data);
                    return data;
                } catch(error) { return ""; }
            }
            for(var url of urls){
                var data = await tryIcon(url);
                if(data) return data;
            }
            if(origin !== location.origin){
                try {
                    var page = await requestIconSource(origin + "/", false);
                    var doc = new DOMParser().parseFromString(page.responseText, "text/html");
                    return await tryIcon(declaredIcon(doc, page.finalUrl || origin + "/"));
                } catch(error) { /* 获取失败时保留文字。 */ }
            }
            return "";
        })();
        return iconRequests[origin];
    }
 
    //配置只解析一次；读取旧设置和保存新设置使用同一套规则。
    var keywordMarker = "__wish_search_keyword__";
    var escapeRegExp = function(value){ return value.replace(/[.*+?^\${}()|[\]\\]/g, "\\$&"); }
    var keywordPattern = function(value){
        return new RegExp("^" + value.split(keywordMarker).map(escapeRegExp).join("(.*?)") + "$");
    }
    var parseLinkList = function(data){
        if(typeof data !== "string") return [];
        var sites = [];
        data.split(/\r\n?|\n/).forEach(function(line){
            line = trim(line);
            var match = line.match(/^[\[【]([^\]】]+)[\]】]\s*[\[【](https?:\/\/.*?)[\]】](?=\s*(?:[\[【(（]|$))(.*)$/i);
            if(!match) return;
            var title = trim(match[1]), url = trim(match[2]), tail = trim(match[3]);
            if(!title || !url.includes("#keyword#") || /[\s\\\u0000-\u001f\u007f]/.test(url)) return;
            var newWindow = false, selector = "";
            while(/^[\[【]/.test(tail)){
                var command = tail.match(/^[\[【]\s*(新窗口(?:打开)?|右侧)\s*[\]】]\s*/);
                if(!command) return;
                if(command[1] !== "右侧") newWindow = true;
                tail = tail.slice(command[0].length);
            }
            if(tail){
                var input = tail.match(/^[（(]([\s\S]*)[）)]$/);
                if(!input || !trim(input[1])) return;
                selector = trim(input[1]);
                //find 只解析选择符，避免把自定义文本当作 HTML 创建。
                try { $(document).find(selector); } catch(error) { return; }
            }
            try {
                var address = new URL(url.replace(/#keyword#/g, keywordMarker));
                if(!/^https?:$/.test(address.protocol) || address.username || address.password ||
                   address.hostname.includes(keywordMarker)) return;
                var query = Array.from(address.searchParams);
                if(!address.pathname.includes(keywordMarker) && !address.hash.includes(keywordMarker) &&
                   !query.some(function(pair){ return pair[1].includes(keywordMarker); })) return;
                sites.push({
                    title:title, url:url, address:address, newWindow:newWindow, selector:selector, line:line,
                    pathPattern:keywordPattern(address.pathname),
                    fixedQuery:query.filter(function(pair){ return !pair[1].includes(keywordMarker); })
                });
            } catch(error) { /* 非法行不影响其余网站。 */ }
        });
        return sites;
    }
    var savedLinkList = GM_getValue("wish_s_searchlinklist");
    var linkListText = typeof savedLinkList === "string" ? savedLinkList : defaultLinkList;
    var sites = parseLinkList(linkListText);
    var siteHost = function(host){
        if(host === "www.google.com.hk") return "www.google.com";
        if(host === "www.bing.com") return "cn.bing.com";
        if(host === "baidu.com") return "www.baidu.com";
        return host;
    }
    var matchesSite = function(site, page){
        var address = site.address;
        if(address.protocol !== page.protocol || address.port !== page.port ||
           siteHost(address.hostname) !== siteHost(page.hostname)) return false;
        //保留百度首页的使用方式，其余站点按完整路径匹配。
        var baiduHome = siteHost(address.hostname) === "www.baidu.com" && address.pathname === "/s" && page.pathname === "/";
        return (baiduHome || site.pathPattern.test(page.pathname)) &&
            (!address.hash || keywordPattern(address.hash).test(page.hash)) &&
            site.fixedQuery.every(function(pair){ return page.searchParams.getAll(pair[0]).includes(pair[1]); });
    }
    var currentPageHref, currentSite;
    var getCurrentSite = function(){
        if(currentPageHref === location.href) return currentSite;
        currentPageHref = location.href;
        var page = new URL(location.href);
        currentSite = undefined;
        sites.forEach(function(site){
            //同一路径下优先使用带有更多固定参数的配置，如 Google 图片搜索。
            if(matchesSite(site, page) && (!currentSite || site.fixedQuery.length > currentSite.fixedQuery.length)) currentSite = site;
        });
        return currentSite;
    }
 
    var main=function(){
        //谷歌搜索链接新窗口打开
        if(siteHost(location.hostname) === "www.google.com" && is_google_blank){
            $("#search .rc a").attr("target", "_blank");
        }
 
        /////////////// 搜索栏增强开始 //////////////////////////////////////////////
 
        if(!is_open_multi_search){
            return;
        }
        //根据当前匹配的网站读取网址中的搜索词，兼容查询参数和路径。
        var getQueryPramValue = function(){
            var site = getCurrentSite();
            if(!site) return "";
            var page = new URL(location.href), word;
            for(var pair of site.address.searchParams){
                if(!pair[1].includes(keywordMarker)) continue;
                var match = keywordPattern(pair[1]).exec(page.searchParams.get(pair[0]) || "");
                if(match) return match[1];
            }
            for(var part of ["pathname", "hash"]){
                if(!site.address[part].includes(keywordMarker)) continue;
                var match = keywordPattern(site.address[part]).exec(page[part]);
                if(match){
                    word = match[1];
                    try { return decodeURIComponent(word); }
                    catch(error) { return word; }
                }
            }
            return "";
        }
        var readKeyword = function(selector, text){
            var element = $(document).find(selector).first();
            var value = element.val();
            if(Array.isArray(value)) value = value.join(" ");
            if(typeof value === "string" && trim(value)) return value;
            return text ? trim(element.text()) : "";
        }
        var firstKeyword = function(selectors){
            for(var selector of selectors){
                var value = readKeyword(selector);
                if(value) return value;
            }
            return "";
        }
        var tryUserKW = function(){
            var site = getCurrentSite(), selector = site && site.selector;
            if(!selector) return "";
            try {
                var value = readKeyword(selector, true);
                if(!value && /^[\w-]+$/.test(selector)){
                    value = readKeyword("#" + CSS.escape(selector), true) || readKeyword("." + CSS.escape(selector), true) ||
                        readKeyword('input[name="' + selector + '"]', true);
                }
                return value;
            } catch(error) { return ""; }
        }
        //保留已有选择符的优先顺序，避免不同输入框争用搜索词。
        var primarySelectors = [
            "#kw", "textarea[name=q]", "input[name=q]", "#upquery", "#baidu_translate_input", "#sb_form_q", "#query",
            "#trans-input", "#Popover2-toggle", "input.word", "input[name=q]:eq(1)", "#search", "#searchword",
            "input[name=keyword]", "input[name=searchInput]", "[name=search_query]", "#mq", "#keywords", "input[name=p]",
            ".right_contents input.selector_input", "#searchIput", "input[name=text]", "input[name=Keywords]", "#q",
            "#toolbar-search-input", "input.search-input", "input[name=facet-search-input]"
        ];
        var commonSelectors = [
            "q", "query", "search", "keyword", "Keywords", "w", "searchInput", "word", "search-input", "text", "s", "key"
        ].map(function(name){ return 'input[name="' + name + '"]'; }).concat([
            "q", "query", "search", "keyword", "Keywords", "w", "input"
        ].map(function(id){ return "input#" + id; }), ["#input[name=searchWord]"], [
            "searchInput", "word", "search-input", "text", "s", "search_input", "key"
        ].map(function(id){ return "input#" + id; }), [
            "q", "query", "search", "keyword", "Keywords", "w", "input", "key",
            "searchInput", "word", "search-input", "text", "s", "search_input"
        ].map(function(name){ return "input." + name; }));
        var getkw = function(){
            var kw = tryUserKW() || firstKeyword(primarySelectors) || readKeyword(".headword", true) ||
                firstKeyword(commonSelectors) || getQueryPramValue() ||
                firstKeyword(["input[name=ld_search_inp]:eq(1)", "#twotabsearchtextbox", "#key_S", "#stickSearchKey"]);
            return encodeURIComponent(trim(kw));
        }
        //按钮只使用统一解析后的有效网站。
        var data2html = function(){
            return sites.map(function(site){
                return '<div class="wish_s_item"><a href="' + escapeHtml(site.url) + '"' +
                    (site.newWindow ? ' target="_blank" rel="noopener"' : '') +
                    ' title="' + escapeHtml(site.title) + '" aria-label="' + escapeHtml(site.title) + '">' +
                    '<span class="wish_s_icon" aria-hidden="true">' + escapeHtml(getIconText(site.title)) + '</span></a></div>';
            }).join("\n");
        }

        //为顶部栏留出文档空间，并同步下移页面顶部的固定/吸顶搜索区。
        var setupTopBar = function(){
            var wrapper = document.getElementById("wish_search_wrapper");
            var root = document.documentElement;
            var padding = parseFloat(getComputedStyle(root).paddingTop) || 0;
            var offsetStyle = document.createElement("style");
            offsetStyle.textContent = 'html{padding-top:calc(' + padding + 'px + var(--wish-search-height,0px))!important;}' +
                '[data-wish-search-offset]{top:calc(var(--wish-search-original-top) + var(--wish-search-height,0px))!important;}';
            document.head.appendChild(offsetStyle);
            var candidates = new Set(), scanRoots = new Set([document.body]), frame = 0;
            var queueScan = function(el){
                if(el.nodeType !== 1 || wrapper.contains(el)) return;
                for(var root of scanRoots){
                    if(root.contains(el)) return;
                    if(el.contains(root)) scanRoots.delete(root);
                }
                scanRoots.add(el);
            }
            var observe = function(){
                observer.observe(document.body, {subtree:true, childList:true, attributes:true, attributeFilter:["class", "style", "hidden"]});
            }
            var refresh = function(){
                frame = 0;
                observer.disconnect();
                candidates.forEach(function(el){ el.removeAttribute("data-wish-search-offset"); });
                var height = wrapper.getBoundingClientRect().height;
                root.style.setProperty("--wish-search-height", height + "px");
                scanRoots.forEach(function(scanRoot){
                    if(!scanRoot.isConnected) return;
                    [scanRoot].concat(Array.from(scanRoot.querySelectorAll("*"))).forEach(function(el){
                        if(wrapper.contains(el)) return;
                        var style = getComputedStyle(el);
                        //absolute 只处理相对文档定位、包含搜索框的顶部区域。
                        var absoluteSearch = style.position === "absolute" &&
                            ((el.offsetParent === document.body && getComputedStyle(document.body).position === "static") || el.offsetParent === root) &&
                            el.querySelector('input[name],textarea[name],[role="search"]');
                        if(style.position === "fixed" || style.position === "sticky" || absoluteSearch) candidates.add(el);
                        else candidates.delete(el);
                    });
                });
                scanRoots.clear();
                var offsets = [];
                candidates.forEach(function(el){
                    if(!el.isConnected){ candidates.delete(el); return; }
                    var style = getComputedStyle(el), top = parseFloat(style.top);
                    var rect = el.getBoundingClientRect();
                    if(!isFinite(top) || top < 0 || top > 160 || !rect.width || !rect.height || rect.height > innerHeight / 2) return;
                    if(style.position !== "sticky" && (rect.top < 0 || rect.top > 160 + height)) return;
                    //嵌套滚动容器中的吸顶元素不需要为视口顶部栏避让。
                    if(style.position === "sticky"){
                        for(var parent = el.parentElement; parent && parent !== document.body; parent = parent.parentElement){
                            if(/auto|scroll|hidden/.test(getComputedStyle(parent).overflowY)) return;
                        }
                    }
                    offsets.push({element:el, top:style.top, position:style.position});
                });
                offsets.forEach(function(item){
                    if(item.position !== "fixed" && item.element.parentElement.closest('[data-wish-search-offset]')) return;
                    item.element.style.setProperty("--wish-search-original-top", item.top);
                    item.element.setAttribute("data-wish-search-offset", "");
                });
                observe();
            }
            var schedule = function(scan){
                if(scan) queueScan(document.body);
                if(!frame) frame = requestAnimationFrame(refresh);
            }
            var observer = new MutationObserver(function(records){
                var changed = false;
                records.forEach(function(record){
                    if(wrapper.contains(record.target)) return;
                    changed = true;
                    //页面插入或修改全局样式时，位置可能影响任意区域。
                    var changesStyle = record.target.nodeType === 1 && record.target.matches('style,link[rel="stylesheet"]') ||
                        Array.from(record.addedNodes).concat(Array.from(record.removedNodes)).some(function(node){
                            return node.nodeType === 1 && (node.matches('style,link[rel="stylesheet"]') || node.querySelector('style,link[rel="stylesheet"]'));
                        });
                    if(changesStyle) queueScan(document.body);
                    else if(record.type === "attributes") queueScan(record.target);
                    else if(Array.from(record.addedNodes).concat(Array.from(record.removedNodes)).some(function(node){ return node.nodeType === 1; })){
                        if(record.target !== document.body) queueScan(record.target);
                        else record.addedNodes.forEach(queueScan);
                    }
                });
                if(changed) schedule(false);
            });
            var sizeObserver = new ResizeObserver(function(){ schedule(false); });
            sizeObserver.observe(wrapper);
            window.addEventListener("resize", function(){ schedule(true); });
            window.addEventListener("scroll", function(){ schedule(false); }, {passive:true});
            refresh();
        }
        //搜索触发事件
        var bindSearch=function(){
            if($("#wish_search_wrapper").length > 0){
                return;
            }
 
            var areaLinkList = linkListText;
            var searchLinkList = data2html();
 
            //搜索列表HTML，可在这里调整显示顺序和列表显示效果
            var html=`
<!--搜索栏增强样式-->
<style>
#wish_search_wrapper{position:fixed;top:0;left:0;right:0;background:#fff;color:#222;z-index:2147483646;display:grid;grid-template-columns:32px minmax(0,1fr) 32px;align-items:center;gap:8px;min-height:44px;padding:5px 12px;border-bottom:1px solid #ddd;box-shadow:0 1px 4px #0001;font:14px/1.5 Arial,sans-serif;text-align:left;}
#wish_search_wrapper,#wish_search_wrapper *{box-sizing:border-box;}
#wish_search_wrapper a{color:#2457a7;text-decoration:none;}
#wish_search_list{display:flex;align-items:center;gap:4px;width:max-content;max-width:100%;margin:0 auto;overflow-x:auto;overflow-y:hidden;white-space:nowrap;scrollbar-width:thin;}
#wish_search_list a{display:flex;align-items:center;justify-content:center;width:38px;height:32px;padding:4px;font-size:14px;line-height:24px;border-radius:4px;}
#wish_search_list a:hover,#wish_search_list a:focus{background:transparent;}
#wish_search_list .wish_s_item{flex:none;}
#wish_search_list .wish_s_icon{display:flex;align-items:center;justify-content:center;width:22px;height:22px;font-size:12px;font-weight:bold;transition:transform .16s ease;}
#wish_search_list .wish_s_icon img{display:block;width:22px;height:22px;object-fit:contain;}
#wish_search_list a:hover .wish_s_icon,#wish_search_list a:focus .wish_s_icon{transform:scale(1.2);}
@media(prefers-reduced-motion:reduce){#wish_search_list .wish_s_icon{transition:none;}}
#wish_search_toolbar{grid-column:3;grid-row:1;}
#wish_search_settingbtn{display:block;width:32px;height:32px;padding:0;border:0;border-radius:4px;background:transparent;color:#2457a7;font:22px/32px Arial,sans-serif;cursor:pointer;}
#wish_search_settingbtn:hover,#wish_search_settingbtn:focus-visible{background:#eaf0f8;}
#wish_search_content{grid-column:2;grid-row:1;min-width:0;}
/* 定义滚动条 */
#wish_search_list::-webkit-scrollbar {
    width: 4px;  /* 设置滚动条宽度 */
    height: 4px; /* 设置水平滚动条高度 */
}
 
/* 定义滚动条轨道 */
#wish_search_list::-webkit-scrollbar-track {
    background: transparent; /* 轨道透明 */
}
 
/* 定义滚动条滑块 */
#wish_search_list::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.15); /* 半透明滑块 */
    border-radius: 10px;
}
 
/* 当滑动条被悬停时 */
#wish_search_list::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.3); /* 悬停时滑块变得更明显 */
}
</style>
<!----------------------wish_search_wrapper-begin---------------------->
<div id="wish_search_wrapper">
<!--设置按钮-->
<div id="wish_search_toolbar">
<button type="button" id="wish_search_settingbtn" title="设置" aria-label="设置">&#9881;&#65038;</button>
</div>
<!---------------wish_search_content-begin-------------->
<div id="wish_search_content">
<!--搜索引擎列表-->
<div id="wish_search_list" role="navigation" aria-label="切换搜索引擎">
`+searchLinkList+`
</div>
<!--设置样式-->
<style>
#wish_search_setting_wrapper{display:none;background:#fff;position:fixed;top:calc(var(--wish-search-height,44px) + 8px);left:12px;right:12px;max-width:900px;max-height:calc(100vh - var(--wish-search-height,44px) - 20px);overflow:auto;margin:0 auto;border:2px solid #C5C7CF;padding:10px;border-radius:8px;box-shadow:0 8px 32px #0003;white-space:normal;}
#wish_search_setting_title{display:inline-block;}
#wish_search_setting_close{float: right;display:inline-block}
#wish_search_setting_top{margin-bottom:8px;font-size:14px;}
#wish_search_setting_bottom{margin-top:1.5px;}
#wish_search_setting_close a,#wish_search_setting_close a:visited{color: #2440b3;}
#wish_search_setting_save{
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    border: 1px solid transparent;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    border-radius: 5px;
    font-size:16px;
    padding:6px 14px;
    cursor:pointer;
}
#wish_search_setting_tips{
    display:none;
    background-color:#d4edda;border-color:#c3e6cb;color:#155724;padding: 0.75rem 1.25rem;
    padding:0 8px;line-height:40px;height:40px;font-size:16px;text-align:center;border-radius: 0.25rem;border: 1px solid transparent;
}
#wish_search_content{font-size:15px;}
#wish_search_setting_reset{margin-top:4px;color:#999;cursor:pointer;float:right;}
#wish_search_setting_title sup{color:#2440b3;cursor:pointer;font-weight:bold;}
#wish_search_setting_searchlist,#wish_search_setting_bottom button, #wish_search_setting_bottom span{font-size:14px;}
a#wish_search_setting_more{color:#2440b3;margin-left:8px;}
</style>
<!--------wish_search_setting_wrapper-begin------->
<div id="wish_search_setting_wrapper">
<!--设置标题-->
<div id="wish_search_setting_top">
<span id="wish_search_setting_title"><b>搜索栏增强设置</b>&nbsp;&nbsp;<span style="color:red;">格式：[名称] [搜索网址] [新窗口]<sup title="说明：&#10;1. 添加 [新窗口] 可在新标签页打开搜索链接&#10;2. 省略时在当前标签页打开&#10;3. 添加该项后，对应页面通常不显示搜索栏">?</sup> (关键词选择符)<sup title="说明：&#10;1. 指定从当前网站的哪个搜索框读取搜索词，通常可以省略&#10;2. 可根据搜索框的 id、name 或 class 填写，尽量只匹配一个搜索框&#10;3. 例如：(#search_input)、(input[name=query]) 或 (input.search-input)&#10;4. 选择符放在对应网站配置行末尾&#10;5. 选择符语法错误时，该行会被跳过">?</sup>&nbsp;&nbsp;搜索关键词用 #keyword# 表示，每行一个网站</span></span>
<span id="wish_search_setting_close"><a id="wish_search_setting_close_a" href="javascript:;">关闭</a></span>
</div>
<!--设置内容-->
<div id="wish_search_setting_content">
<div id="wish_search_setting_tips"></div>
<textarea id="wish_search_setting_searchlist" aria-label="自定义搜索引擎列表" wrap="off" style="width:100%;height:45vh;min-height:100px;border:2px solid #C5C7CF;color:#222;line-height:150%;">`+escapeHtml(areaLinkList)+`</textarea>
</div>
<!--设置底部-begin-->
<div id="wish_search_setting_bottom">
<button type="button" id="wish_search_setting_save">保存</button>
<span id="wish_search_setting_remark" style="color:#333">&nbsp;&nbsp;修改后点击保存生效，非法配置会自动跳过。</span>
<a id="wish_search_setting_more" href="https://github.com/teiny/UserScript" target="_blank" rel="noopener">项目主页</a>
<span id="wish_search_setting_reset">恢复默认</span>
</div>
<!--设置底部-ebd-->
</div>
<!--------wish_search_setting_wrapper-end------->
</div>
<!---------------wish_search_content-end-------------->
</div>
<!------------------wish_search_wrapper-end----------------->
`;
            //追加搜索列表
            if($("#wish_search_wrapper").length > 0){
                $("#wish_search_wrapper").remove();
            }
            $("body").append(html);
            setupTopBar();
 
            //初始化搜索引擎链接
            var initLink = function(){
                //初始化data-href链接
                $("#wish_search_list a").each(function(index){
                    var me=$(this);
                    me.attr("data-href", me.attr("href"));
                    var icon = me.find(".wish_s_icon")[0];
                    loadSiteIcon(sites[index].address.origin).then(function(data){
                        if(!data || !icon.isConnected) return;
                        var image = new Image();
                        image.alt = "";
                        image.src = data;
                        icon.textContent = "";
                        icon.appendChild(image);
                    });
                });
 
                //链接跳转
                $("#wish_search_list a").on('click mouseover focus', function(){
                    var me=$(this);
                    var href=me.attr("data-href").replace(/#keyword#/g, getkw());
                    me.attr("href", href);
                    return true;
                });
            }
            initLink();
            //用户帮助点击事件
            $("#wish_search_setting_title sup").click(function(){
                alert($(this).attr("title"));
            });
            /////////////////////////////// 设置窗口开始 /////////////////////////////
 
            //保存时跳过非法行；没有有效项时保留原设置。
            $("#wish_search_setting_save").click(function(){
                var data = $("#wish_search_setting_searchlist").val();
                var validSites = parseLinkList(data);
                if(!validSites.length){
                    alert("没有有效的网站配置，请检查名称、搜索网址和关键词选择符。原设置已保留。");
                    return false;
                }
                var skipped = data.split(/\r\n?|\n/).filter(function(line){ return trim(line); }).length - validSites.length;
                var me = $(this);
                me.attr("disabled", true).html("保存中...");
                linkListText = validSites.map(function(site){ return site.line; }).join("\n");
                GM_setValue("wish_s_searchlinklist", linkListText);
                sites = validSites;
                currentPageHref = undefined;
                $("#wish_search_setting_searchlist").val(linkListText);
                $("#wish_search_list").html(data2html());
                initLink();
                $("#wish_search_setting_tips").text(skipped ? "保存成功，已跳过 " + skipped + " 行非法配置。" : "保存成功。").show();
                me.html("保存成功");
                setTimeout(function(){
                    me.attr("disabled", false).html("保存");
                    $("#wish_search_setting_tips").hide();
                    $("#wish_search_setting_wrapper").hide("fast");
                }, 1000);
            });
            //设置按钮被点击
            $("#wish_search_settingbtn").click(function(){
                $("#wish_search_setting_wrapper").toggle("fast");
                $("#wish_search_setting_searchlist").focus();
            });
            //设置关闭
            $("#wish_search_setting_close_a").click(function(){
                $("#wish_search_setting_wrapper").hide("fast");
            });
            //在编辑区填入默认列表，保存后才生效。
            $("#wish_search_setting_reset").click(function(){
                if(confirm("将编辑区替换为默认网站列表，保存后生效。是否继续？")){
                    $("#wish_search_setting_searchlist").val(defaultLinkList);
                    var me=$(this);
                    me.html("已填入默认列表，点击保存后生效。");
                    setTimeout(function(){me.html("恢复默认");}, 3000);
                }
            });
            ///////////////////////////// 设置窗口结束 /////////////////////////////////
        };
 
        //////// main ////////////
        bindSearch();
        /////////////// 搜索栏增强结束 //////////////////////////////////////////////
    };
 
    var isDomainAllow = function(){
        var site = getCurrentSite();
        return !!site && !site.newWindow;
    }
 
    //开始执行
    if(isDomainAllow()){
        main();
    }
 
})(jQuery);
