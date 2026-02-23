/* ============================================
   NIGHTCITY BLOG — Application Logic
   ============================================ */

var me = null, posts = [], users = [], upI = '';
var K = { u: 'nc9u', p: 'nc9p', s: 'nc9s' };

// === UTILITY FUNCTIONS ===
function $(id) { return document.getElementById(id) }
function esc(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML }
function fmtD(d) {
    var dt = new Date(d);
    var m = ['Th01', 'Th02', 'Th03', 'Th04', 'Th05', 'Th06', 'Th07', 'Th08', 'Th09', 'Th10', 'Th11', 'Th12'];
    return dt.getDate() + ' ' + m[dt.getMonth()] + ', ' + dt.getFullYear();
}

// === DATA PERSISTENCE ===
function loadD() {
    var u = localStorage.getItem(K.u);
    users = u ? JSON.parse(u) : [];
    var p = localStorage.getItem(K.p);
    posts = p ? JSON.parse(p) : JSON.parse(JSON.stringify(DP));
    if (!p) saveP();
}
function saveP() { localStorage.setItem(K.p, JSON.stringify(posts)) }
function saveU() { localStorage.setItem(K.u, JSON.stringify(users)) }
function chkS() { var s = localStorage.getItem(K.s); if (s) me = JSON.parse(s) }
function savS() { localStorage.setItem(K.s, JSON.stringify(me)) }

// === AUTHOR PROFILE HELPER ===
function getAuthorProfile(authorKey) {
    if (AUTHORS[authorKey]) return AUTHORS[authorKey];
    return { display: authorKey, avatar: '🎮', role: 'Gamer', bio: 'Một gamer đam mê.' };
}

function getAuthorPostCount(authorKey) {
    return posts.filter(function (p) { return p.author === authorKey }).length;
}

function getAuthorTotalLikes(authorKey) {
    return posts.filter(function (p) { return p.author === authorKey })
        .reduce(function (s, p) { return s + p.likes }, 0);
}

// === BUILD WRITE SELECT & SIDEBAR GAMES ===
function buildWriteSelect() {
    var sel = $('wpG');
    sel.innerHTML = '';
    Object.keys(GL).forEach(function (k) {
        var o = document.createElement('option');
        o.value = k;
        o.textContent = GL[k];
        sel.appendChild(o);
    });
}

function buildSidebarGames() {
    var sg = $('sGames');
    if (!sg) return;
    var games = [];
    var seen = {};
    posts.forEach(function (p) {
        if (!seen[p.game]) { seen[p.game] = 1; games.push(p.game) }
    });
    sg.innerHTML = games.map(function (g) {
        return '<span class="sGame" onclick="filterByGame(\'' + g + '\')">' +
            (GE[g] || '🎮') + ' ' + (GL[g] || g) + '</span>';
    }).join('');
}

function filterByGame(game) {
    cSB();
    go('home');
    $('searchInput').value = GL[game] || game;
    doSearch();
}

// === SEARCH ===
function doSearch() {
    var q = $('searchInput').value.trim().toLowerCase();
    $('searchClear').classList.toggle('show', q.length > 0);
    var data = posts;
    if (q) {
        data = posts.filter(function (p) {
            return p.title.toLowerCase().indexOf(q) >= 0 ||
                p.body.toLowerCase().indexOf(q) >= 0 ||
                p.display.toLowerCase().indexOf(q) >= 0 ||
                (GL[p.game] || '').toLowerCase().indexOf(q) >= 0 ||
                p.game.toLowerCase().indexOf(q) >= 0;
        });
    }
    rG('grid', data);
}

function clearSearch() {
    $('searchInput').value = '';
    $('searchClear').classList.remove('show');
    rG();
}

// === NAVIGATION / ROUTING ===
function go(v, d) {
    cSB();
    ['hV', 'dV', 'daV', 'myV', 'coV', 'proV'].forEach(function (id) {
        var e = $(id); if (e) e.style.display = 'none';
    });
    $('hero').style.display = (v === 'home') ? 'flex' : 'none';

    if (v === 'home') {
        $('hV').style.display = 'block';
        buildWriteSelect(); buildSidebarGames(); rG();
        anime({ targets: '#hV', opacity: [0, 1], duration: 500, easing: 'easeOutCubic' });
    }
    else if (v === 'dash') {
        if (!me) { oM('li'); toast('Đăng nhập trước nha!', 'e'); return }
        rDa(); $('daV').style.display = 'block';
        anime({ targets: '#daV', opacity: [0, 1], translateY: [14, 0], duration: 450, easing: 'easeOutCubic' });
    }
    else if (v === 'myp') {
        if (!me) { oM('li'); toast('Đăng nhập trước nha!', 'e'); return }
        rMy(); $('myV').style.display = 'block';
        anime({ targets: '#myV', opacity: [0, 1], translateY: [14, 0], duration: 450, easing: 'easeOutCubic' });
    }
    else if (v === 'contact') {
        $('coV').style.display = 'block';
        anime({ targets: '#coV', opacity: [0, 1], translateY: [14, 0], duration: 450, easing: 'easeOutCubic' });
        anime({ targets: '.ci', opacity: [0, 1], translateX: [-10, 0], delay: anime.stagger(60, { start: 150 }), duration: 350, easing: 'easeOutCubic' });
    }
    else if (v === 'post' && d) {
        rP(d); $('dV').style.display = 'block';
        anime({ targets: '#dV', opacity: [0, 1], duration: 350, easing: 'easeOutCubic' });
    }
    else if (v === 'profile' && d) {
        showProfile(d); $('proV').style.display = 'block';
        anime({ targets: '#proV', opacity: [0, 1], translateY: [14, 0], duration: 450, easing: 'easeOutCubic' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// === INIT ===
window.addEventListener('DOMContentLoaded', function () {
    loadD(); chkS(); sFile();
    anime({ targets: '.ldt', opacity: [0, 1], scale: [.92, 1], duration: 500, easing: 'easeOutCubic' });
    anime({
        targets: '#ldF', width: '100%', duration: 1300, easing: 'easeInOutQuad', complete: function () {
            setTimeout(function () {
                $('loader').classList.add('done');
                setTimeout(function () {
                    $('loader').style.display = 'none';
                    rNav(); go('home'); iPtc(); iHero(); iSh(); iScr();
                }, 450);
            }, 200);
        }
    });
});

// === AUTH ===
function doRe() {
    var u = $('reU').value.trim(), d = $('reD').value.trim(), p = $('reP').value, e = $('reE');
    if (!u || !d || !p) { e.textContent = 'Điền đủ thông tin đi.'; return }
    if (p.length < 4) { e.textContent = 'Mật khẩu ít nhất 4 ký tự.'; return }
    if (users.find(function (x) { return x.username === u })) { e.textContent = 'Tên này có người dùng rồi.'; return }
    users.push({ username: u, display: d, password: p });
    saveU(); me = { username: u, display: d }; savS();
    cM('re'); rNav(); toast('Chào mừng, ' + d + '! 🎮'); conf();
}

function doLi() {
    var u = $('liU').value.trim(), p = $('liP').value, e = $('liE');
    if (!u || !p) { e.textContent = 'Điền đủ đi.'; return }
    var f = users.find(function (x) { return x.username === u && x.password === p });
    if (!f) { e.textContent = 'Sai tên hoặc mật khẩu.'; return }
    me = { username: f.username, display: f.display }; savS();
    cM('li'); rNav(); toast('Chào mừng trở lại, ' + f.display + '!');
}

function logout() {
    localStorage.removeItem(K.s); me = null;
    rNav(); go('home'); toast('Đã đăng xuất 👋');
}

// === NAV RENDERING ===
function rNav() {
    var el = $('nR');
    if (me) {
        el.innerHTML = '<div class="nu"><div class="nAv">👤</div><span>' + esc(me.display) + '</span></div>' +
            '<button class="nb y" onclick="logout()">Logout</button>';
    } else {
        el.innerHTML = '<button class="nb" onclick="oM(\'li\')">Đăng nhập</button>' +
            '<button class="nb m" onclick="oM(\'re\')">Đăng ký</button>';
    }
    anime({ targets: '#nR>*', opacity: [0, 1], translateY: [-4, 0], delay: anime.stagger(40), duration: 300, easing: 'easeOutCubic' });
}

// === SIDEBAR ===
function tSB() {
    $('sb').classList.toggle('on');
    $('sO').classList.toggle('on');
    if ($('sb').classList.contains('on')) {
        anime({ targets: '.sl', opacity: [0, 1], translateX: [-10, 0], delay: anime.stagger(40, { start: 100 }), duration: 300, easing: 'easeOutCubic' });
    }
}
function cSB() { $('sb').classList.remove('on'); $('sO').classList.remove('on') }

// === GRID RENDERING ===
function rG(tid, cl) {
    var g = $(tid || 'grid');
    var data = cl || (curF === 'all' ? posts : posts.filter(function (p) { return p.game === curF }));
    data.sort(function (a, b) { return new Date(b.date) - new Date(a.date) });

    if (!data.length) {
        g.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--dim);padding:40px">Chưa có bài viết nào.</p>';
        return;
    }

    g.innerHTML = data.map(function (p) {
        return '<div class="card" data-g="' + p.game + '" onclick="go(\'post\',' + p.id + ')">' +
            (p.image ? '<img class="cI" src="' + esc(p.image) + '" onerror="this.style.display=\'none\'" loading="lazy">' : '') +
            '<div class="cB"><span class="cT" data-g="' + p.game + '">' + (GL[p.game] || p.game) + '</span>' +
            '<div class="cTi">' + esc(p.title) + '</div>' +
            '<div class="cE">' + esc(p.body) + '</div>' +
            '<div class="cF"><div class="cA"><span>' + (GE[p.game] || '🎮') + '</span>' +
            '<span class="cN">' + esc(p.display) + '</span>' +
            '<span>&middot; ' + fmtD(p.date) + '</span></div>' +
            '<div class="cS"><span>♥' + p.likes + '</span><span>💬' + (p.comments || []).length + '</span></div>' +
            '</div></div></div>';
    }).join('');

    anime({
        targets: '#' + (tid || 'grid') + ' .card',
        opacity: [0, 1],
        translateY: [30, 0],
        scale: [0.96, 1],
        delay: anime.stagger(70, { start: 50 }),
        duration: 600,
        easing: 'easeOutExpo'
    });
}

function rMy() {
    if (!me) return;
    rG('myG', posts.filter(function (p) { return p.author === me.username }));
}

// === DASHBOARD ===
function rDa() {
    if (!me) return;
    var mp = posts.filter(function (p) { return p.author === me.username });
    var tl = mp.reduce(function (s, p) { return s + p.likes }, 0);
    var tc = mp.reduce(function (s, p) { return s + (p.comments || []).length }, 0);

    $('daV').innerHTML = '<button class="bk" onclick="go(\'home\')">← Quay lại</button>' +
        '<div class="bH"><h2 class="daT">DASHBOARD</h2><button class="wB" onclick="oW()">+ Viết bài</button></div>' +
        '<p class="daS">Chào ' + esc(me.display) + '!</p>' +
        '<div class="stG">' +
        '<div class="stC"><div class="stN" data-v="' + mp.length + '">0</div><div class="stL">Bài viết</div></div>' +
        '<div class="stC"><div class="stN" data-v="' + tl + '">0</div><div class="stL">Lượt thích</div></div>' +
        '<div class="stC"><div class="stN" data-v="' + tc + '">0</div><div class="stL">Bình luận</div></div>' +
        '<div class="stC"><div class="stN" data-v="' + posts.length + '">0</div><div class="stL">Tổng bài</div></div></div>' +
        '<h3 style="font-size:.82rem;color:var(--c);margin-bottom:12px;font-family:var(--fm)">// BÀI GẦN ĐÂY</h3><div id="daR"></div>';

    document.querySelectorAll('.stN').forEach(function (el) {
        var val = parseInt(el.dataset.v);
        var obj = { v: 0 };
        anime({
            targets: obj, v: val, round: 1, duration: 1000, delay: 200, easing: 'easeOutExpo',
            update: function () { el.textContent = Math.round(obj.v) }
        });
    });
    anime({ targets: '.stC', opacity: [0, 1], translateY: [12, 0], delay: anime.stagger(70, { start: 60 }), duration: 450, easing: 'easeOutCubic' });

    var rc = mp.slice(0, 4);
    var dp = $('daR');
    if (!rc.length) { dp.innerHTML = '<p style="color:var(--dim);font-size:.84rem">Chưa viết bài nào.</p>'; return }
    dp.innerHTML = rc.map(function (p) {
        return '<div class="daI" onclick="go(\'post\',' + p.id + ')">' + esc(p.title) +
            '<small>' + fmtD(p.date) + ' ♥' + p.likes + '</small></div>';
    }).join('');
    anime({ targets: '.daI', opacity: [0, 1], translateX: [-8, 0], delay: anime.stagger(50, { start: 400 }), duration: 300, easing: 'easeOutCubic' });
}

// === POST DETAIL ===
function rP(id) {
    var p = posts.find(function (x) { return x.id === id });
    if (!p) return;
    var liked = me && p.likedBy && p.likedBy.indexOf(me.username) >= 0;
    var own = me && me.username === p.author;
    var cmts = p.comments || [];
    var profile = getAuthorProfile(p.author);

    var h = '<button class="bk" onclick="go(\'home\')">← Quay lại</button>';
    h += '<span class="dTg">' + (GL[p.game] || p.game) + '</span>';
    h += '<h1 class="dTi">' + esc(p.title) + '</h1>';
    h += '<div class="dM" onclick="go(\'profile\',\'' + esc(p.author) + '\')"><div class="dAv">' + profile.avatar + '</div><div class="dIn">' +
        '<span class="dNm">' + esc(p.display) + '</span><span class="dDt">' + fmtD(p.date) + '</span></div></div>';

    if (p.image) h += '<img class="dIm" src="' + esc(p.image) + '" onclick="oLB(this.src)" onerror="this.style.display=\'none\'">';
    h += '<div class="dBd">' + esc(p.body) + '</div>';

    h += '<div class="dAc"><button class="ab ' + (liked ? 'lk' : '') + '" onclick="tL(' + id + ')">' + (liked ? '♥' : '♡') + ' ' + p.likes + '</button>';
    h += '<span class="ab">💬 ' + cmts.length + '</span>';
    if (own) h += '<button class="ab dl" onclick="dP(' + id + ')">🗑 Xóa</button>';
    h += '</div><div class="cms"><h3>// BÌNH LUẬN (' + cmts.length + ')</h3>';

    cmts.forEach(function (c) {
        h += '<div class="cm"><div class="cmH"><span class="cmN">' + esc(c.display) + '</span>' +
            '<span class="cmD">' + fmtD(c.date) + '</span></div>' +
            '<div class="cmT">' + esc(c.text) + '</div></div>';
    });

    if (me) {
        h += '<div class="cmF"><textarea class="cmI" id="cmT" placeholder="Viết bình luận..."></textarea>' +
            '<button class="cmS" onclick="aCm(' + id + ')">Gửi</button></div>';
    } else {
        h += '<div class="cmL"><a onclick="oM(\'li\')">Đăng nhập</a> để bình luận.</div>';
    }
    h += '</div>';
    $('dV').innerHTML = h;

    // Animations
    anime.timeline({ easing: 'easeOutExpo' })
        .add({ targets: '.dTg', opacity: [0, 1], translateX: [-15, 0], duration: 400 })
        .add({ targets: '.dTi', opacity: [0, 1], translateY: [15, 0], duration: 500 }, 50)
        .add({ targets: '.dM', opacity: [0, 1], translateX: [-10, 0], duration: 400 }, 120)
        .add({ targets: '.dBd', opacity: [0, 1], duration: 500 }, 180)
        .add({
            targets: '.cm', opacity: [0, 1], translateY: [8, 0],
            delay: anime.stagger(50), duration: 400
        }, 300);
}

// === AUTHOR PROFILE PAGE ===
function showProfile(authorKey) {
    var profile = getAuthorProfile(authorKey);
    var pCount = getAuthorPostCount(authorKey);
    var pLikes = getAuthorTotalLikes(authorKey);
    var pComments = posts.filter(function (p) { return p.author === authorKey })
        .reduce(function (s, p) { return s + (p.comments || []).length }, 0);
    var authorPosts = posts.filter(function (p) { return p.author === authorKey })
        .sort(function (a, b) { return new Date(b.date) - new Date(a.date) });

    var h = '<button class="bk" onclick="go(\'home\')">← Quay lại</button>';
    h += '<div class="pro-banner"></div>';
    h += '<div class="pro-main">';
    h += '<div class="pro-avatar">' + profile.avatar + '</div>';
    h += '<div class="pro-info">';
    h += '<div class="pro-name">' + esc(profile.display) + '</div>';
    h += '<span class="pro-role">' + esc(profile.role) + '</span>';
    h += '</div>';
    h += '<div class="pro-bio">' + esc(profile.bio) + '</div>';
    h += '<div class="pro-stats">';
    h += '<div class="pro-stat"><b>' + pCount + '</b>bài viết</div>';
    h += '<div class="pro-stat"><b>' + pLikes + '</b>lượt thích</div>';
    h += '<div class="pro-stat"><b>' + pComments + '</b>bình luận</div>';
    h += '</div>';
    h += '</div>';

    if (authorPosts.length) {
        h += '<h3 class="pro-posts-title">// BÀI VIẾT CỦA ' + esc(profile.display).toUpperCase() + '</h3>';
        h += '<div class="grid" id="proGrid"></div>';
    }

    $('proV').innerHTML = h;

    // Render author's posts as cards in the grid
    if (authorPosts.length) {
        rG('proGrid', authorPosts);
    }

    anime.timeline({ easing: 'easeOutExpo' })
        .add({ targets: '.pro-banner', opacity: [0, 1], scaleY: [0, 1], duration: 400 })
        .add({ targets: '.pro-avatar', scale: [.6, 1], opacity: [0, 1], duration: 500 }, 80)
        .add({ targets: '.pro-info', opacity: [0, 1], translateY: [8, 0], duration: 400 }, 150)
        .add({ targets: '.pro-bio', opacity: [0, 1], duration: 400 }, 200)
        .add({
            targets: '.pro-stat', opacity: [0, 1], translateY: [10, 0],
            delay: anime.stagger(60), duration: 350
        }, 250);
}

// === WRITING ===
function oW() {
    if (!me) { oM('li'); toast('Đăng nhập trước nha!', 'e'); return }
    oM('wr');
}

function doP() {
    var t = $('wpT').value.trim(), g = $('wpG').value, b = $('wpB').value.trim();
    if (!t || !b) { toast('Điền tiêu đề và nội dung đi.', 'e'); return }
    var img = upI || $('wpI').value.trim();
    posts.unshift({
        id: Date.now(), author: me.username, display: me.display,
        game: g, title: t, body: b, date: new Date().toISOString().split('T')[0],
        likes: 0, likedBy: [], comments: [], image: img
    });
    saveP(); cM('wr'); buildWriteSelect(); rG();
    toast('Đăng bài thành công! 🎉');
    $('wpT').value = ''; $('wpB').value = ''; $('wpI').value = '';
    clI(); conf();
}

// === INTERACTIONS ===
function tL(id) {
    if (!me) { toast('Đăng nhập để thả tim!', 'e'); return }
    var p = posts.find(function (x) { return x.id === id });
    if (!p) return;
    if (!p.likedBy) p.likedBy = [];
    var i = p.likedBy.indexOf(me.username);
    if (i >= 0) { p.likedBy.splice(i, 1); p.likes-- }
    else {
        p.likedBy.push(me.username); p.likes++;
        var h = document.createElement('div');
        h.textContent = '♥';
        h.style.cssText = 'position:fixed;top:50%;left:50%;font-size:2.5rem;color:var(--m);z-index:9998;pointer-events:none;transform:translate(-50%,-50%)';
        document.body.appendChild(h);
        anime({ targets: h, scale: [.5, 2], opacity: [1, 0], translateY: -50, duration: 700, easing: 'easeOutCubic', complete: function () { h.remove() } });
    }
    saveP(); rP(id);
}

function dP(id) {
    if (!confirm('Xóa bài này?')) return;
    posts = posts.filter(function (p) { return p.id !== id });
    saveP(); go('home'); toast('Đã xóa.');
}

function aCm(id) {
    var txt = $('cmT').value.trim();
    if (!txt) { toast('Viết gì đó đi.', 'e'); return }
    var p = posts.find(function (x) { return x.id === id });
    if (!p) return;
    if (!p.comments) p.comments = [];
    p.comments.push({
        id: Date.now(), author: me.username, display: me.display,
        text: txt, date: new Date().toISOString().split('T')[0]
    });
    saveP(); rP(id); toast('Đã bình luận!');
}

// === IMAGE UPLOAD ===
function iT(t) {
    $('tU').classList.toggle('on', t === 'u');
    $('tF').classList.toggle('on', t === 'f');
    $('iUB').classList.toggle('on', t === 'u');
    $('iFB').classList.toggle('on', t === 'f');
}

function sFile() {
    var fi = $('fI'), fd = $('fD');
    if (!fi || !fd) return;
    fi.addEventListener('change', function () { hF(this) });
    fd.addEventListener('click', function (e) { if (e.target !== fi) fi.click() });
    fd.addEventListener('dragover', function (e) { e.preventDefault(); fd.style.borderColor = 'var(--c)' });
    fd.addEventListener('dragleave', function (e) { e.preventDefault(); fd.style.borderColor = '' });
    fd.addEventListener('drop', function (e) {
        e.preventDefault(); fd.style.borderColor = '';
        var f = e.dataTransfer.files[0];
        if (f && f.type.startsWith('image/')) {
            var dt = new DataTransfer(); dt.items.add(f); fi.files = dt.files; hF(fi);
        }
    });
}

function hF(input) {
    var file = input.files[0];
    if (!file) return;
    if (file.size > 10485760) { toast('Ảnh quá lớn (max 10MB).', 'e'); return }
    var reader = new FileReader();
    reader.onload = function (e) {
        var img = new Image();
        img.onload = function () {
            var cv = document.createElement('canvas');
            var w = img.width, h = img.height;
            if (w > 2400) { h = h * 2400 / w; w = 2400 }
            cv.width = w; cv.height = h;
            var ctx = cv.getContext('2d');
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            ctx.drawImage(img, 0, 0, w, h);
            upI = cv.toDataURL('image/jpeg', .97);
            $('pI').src = upI;
            $('imP').style.display = 'block';
            anime({ targets: '#imP', opacity: [0, 1], duration: 300, easing: 'easeOutCubic' });
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function clI() { upI = ''; $('imP').style.display = 'none'; $('pI').src = ''; $('fI').value = '' }

// === LIGHTBOX ===
function oLB(src) {
    $('lbI').src = src;
    $('lb').classList.add('on');
    anime({ targets: '#lb img', scale: [.85, 1], opacity: [0, 1], duration: 400, easing: 'easeOutCubic' });
}

function cLB() {
    anime({
        targets: '#lb img', scale: [1, .9], opacity: [1, 0], duration: 200, easing: 'easeInCubic',
        complete: function () { $('lb').classList.remove('on') }
    });
}

// === MODALS ===
function oM(t) {
    var ov = $(t + 'O'), box = $(t + 'B');
    ov.classList.add('show');
    box.classList.remove('in');
    void box.offsetWidth;
    box.classList.add('in');
    anime({ targets: '#' + t + 'B .mi', opacity: [0, 1], translateY: [6, 0], delay: anime.stagger(40, { start: 120 }), duration: 350, easing: 'easeOutCubic' });
    anime({ targets: '#' + t + 'B .ms', opacity: [0, 1], delay: 300, duration: 300, easing: 'easeOutCubic' });
    var err = $(t + 'E');
    if (err) err.textContent = '';
}

function cM(t) {
    var ov = $(t + 'O'), box = $(t + 'B');
    anime({
        targets: box, opacity: 0, scale: .92, duration: 200, easing: 'easeInCubic',
        complete: function () { ov.classList.remove('show'); box.style.opacity = ''; box.style.transform = '' }
    });
}

function sM(a, b) { cM(a); setTimeout(function () { oM(b) }, 250) }

// Modal overlay close
document.querySelectorAll('.ov').forEach(function (o) {
    o.addEventListener('click', function (e) {
        if (e.target === o) cM(o.id.replace('O', ''));
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        if ($('liO').classList.contains('show')) doLi();
        if ($('reO').classList.contains('show')) doRe();
    }
    if (e.key === 'Escape') {
        cLB();
        document.querySelectorAll('.ov.show').forEach(function (o) { cM(o.id.replace('O', '')) });
    }
});

// === EFFECTS ===
function toast(msg, type) {
    var el = $('tst');
    el.textContent = msg;
    el.className = 'toast' + (type === 'e' ? ' err' : '');
    el.classList.add('show');
    setTimeout(function () { el.classList.remove('show') }, 3000);
}

function conf() {
    var cols = ['#00f0ff', '#ff003c', '#fcee09', '#4dff91'];
    for (var i = 0; i < 20; i++) {
        var d = document.createElement('div');
        d.style.cssText = 'position:fixed;width:6px;height:6px;background:' + cols[i % 4] +
            ';top:50%;left:50%;z-index:9998;pointer-events:none;transform:translate(-50%,-50%);clip-path:var(--cut-sm)';
        document.body.appendChild(d);
        anime({
            targets: d,
            translateX: anime.random(-200, 200),
            translateY: anime.random(-220, 50),
            rotate: anime.random(0, 360),
            scale: [1, 0],
            opacity: [1, 0],
            duration: anime.random(500, 1000),
            easing: 'easeOutCubic',
            complete: (function (el) { return function () { el.remove() } })(d)
        });
    }
}

// === PARTICLE CANVAS ===
function iPtc() {
    var cv = $('ptc'), ctx = cv.getContext('2d');
    var W, H;
    var pts = [];

    function rs() { W = cv.width = innerWidth; H = cv.height = innerHeight }
    rs(); addEventListener('resize', rs);

    for (var i = 0; i < 28; i++) {
        pts.push({
            x: Math.random() * W, y: Math.random() * H,
            r: Math.random() + .3,
            c: ['rgba(0,240,255,', 'rgba(255,0,60,', 'rgba(252,238,9,'][i % 3],
            o: Math.random() * .12 + .02,
            vx: (Math.random() - .5) * .12,
            vy: (Math.random() - .5) * .12
        });
    }

    pts.forEach(function (p) {
        anime({
            targets: p,
            o: [p.o, Math.random() * .15 + .02],
            duration: Math.random() * 4000 + 2000,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine'
        });
    });

    (function draw() {
        ctx.clearRect(0, 0, W, H);
        pts.forEach(function (p) {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
            if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.28);
            ctx.fillStyle = p.c + p.o + ')'; ctx.fill();
        });
        for (var i = 0; i < pts.length; i++) {
            for (var j = i + 1; j < pts.length; j++) {
                var d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
                if (d < 120) {
                    ctx.beginPath();
                    ctx.moveTo(pts[i].x, pts[i].y);
                    ctx.lineTo(pts[j].x, pts[j].y);
                    ctx.strokeStyle = 'rgba(0,240,255,' + (1 - d / 120) * .03 + ')';
                    ctx.lineWidth = .3;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(draw);
    })();
}

// === HERO ANIMATIONS ===
function iHero() {
    // Glitch-in for hero title
    anime.timeline({ easing: 'easeOutExpo' })
        .add({ targets: '.hT', opacity: [0, 1], duration: 100 })
        .add({
            targets: '.hT span', opacity: [0, 1], translateY: [30, 0], scale: [.8, 1],
            delay: anime.stagger(120), duration: 800
        }, 0)
        .add({
            targets: '.hT', translateX: [{ value: -4, duration: 50 }, { value: 4, duration: 50 },
            { value: -2, duration: 50 }, { value: 0, duration: 50 }]
        }, 400)
        .add({ targets: '.hSu', opacity: [0, 1], translateY: [15, 0], duration: 700 }, 350);

    // Neon grid lines
    var svg = $('hSvg');
    for (var i = 0; i < 6; i++) {
        var l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        var hz = Math.random() > .5;
        var pos = Math.random() * 100;
        if (hz) {
            l.setAttribute('x1', '0%'); l.setAttribute('x2', '100%');
            l.setAttribute('y1', pos + '%'); l.setAttribute('y2', pos + '%');
        } else {
            l.setAttribute('y1', '0%'); l.setAttribute('y2', '100%');
            l.setAttribute('x1', pos + '%'); l.setAttribute('x2', pos + '%');
        }
        l.setAttribute('stroke', ['#00f0ff', '#ff003c', '#fcee09', '#4dff91', '#00f0ff', '#ff003c'][i]);
        l.setAttribute('stroke-width', '.3');
        l.setAttribute('opacity', '0');
        svg.appendChild(l);
        anime({
            targets: l, opacity: [0, .06, 0], strokeDashoffset: [anime.setDashoffset, 0],
            delay: i * 250 + 800, duration: 3000, easing: 'easeInOutSine', loop: true, direction: 'alternate'
        });
    }

    // Periodic hero glitch
    setInterval(function () {
        var ht = document.querySelector('.hT');
        if (!ht || ht.offsetParent === null) return;
        anime({
            targets: '.hT',
            translateX: [{ value: -3, duration: 40 }, { value: 3, duration: 40 },
            { value: -1, duration: 30 }, { value: 0, duration: 30 }],
            easing: 'easeInOutQuad'
        });
    }, 5000 + Math.random() * 3000);
}

function iSh() {
    var c = $('hS');
    var shapes = [];
    for (var i = 0; i < 8; i++) {
        var d = document.createElement('div');
        d.className = 'hSh';
        var sz = Math.random() * 40 + 10;
        d.style.cssText = 'width:' + sz + 'px;height:' + sz + 'px;left:' + Math.random() * 100 +
            '%;top:' + Math.random() * 100 + '%;border-color:' +
            ['rgba(0,240,255,.06)', 'rgba(255,0,60,.06)', 'rgba(252,238,9,.06)'][i % 3] +
            ';transform:rotate(45deg)';
        c.appendChild(d);
        shapes.push(d);
    }
    anime({
        targets: shapes,
        translateX: function () { return anime.random(-20, 20) },
        translateY: function () { return anime.random(-20, 20) },
        rotate: function () { return anime.random(40, 50) },
        opacity: [0, .06],
        duration: function () { return anime.random(4000, 7000) },
        delay: anime.stagger(100),
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
    });
}

// === SCROLL ANIMATIONS ===
function iScr() {
    var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (e.isIntersecting) {
                anime({ targets: e.target, opacity: [0, 1], translateY: [16, 0], duration: 450, easing: 'easeOutCubic' });
                obs.unobserve(e.target);
            }
        });
    }, { threshold: .1 });
    document.querySelectorAll('.fu').forEach(function (el) { obs.observe(el) });
}

// === SCROLL PROGRESS ===
window.addEventListener('scroll', function () {
    var h = document.documentElement.scrollHeight - innerHeight;
    $('sP').style.width = (h > 0 ? (scrollY / h) * 100 : 0) + '%';
});
