/* ============================================
   NIGHTCITY BLOG — Data & Content
   ============================================ */

// === GAME LIST ===
var GL = {
    cyberpunk: 'Cyberpunk 2077',
    witcher: 'The Witcher 3',
    dishonored: 'Dishonored',
    outlast: 'Outlast',
    gta: 'GTA V',
    detroit: 'Detroit: Become Human',
    hollowknight: 'Hollow Knight',
    eldenring: 'Elden Ring',
    metro: 'Metro Exodus',
    stardew: 'Stardew Valley',
    minecraft: 'Minecraft',
    roblox: 'Roblox',
    residentevil: 'Resident Evil',
    littlenightmare: 'Little Nightmares',
    rdr2: 'Red Dead Redemption 2',
    silksong: 'Hollow Knight: Silksong',
    dyinglight: 'Dying Light',
    clairobscur: 'Clair Obscur: Expedition 33',
    general: 'General'
};

// === GAME EMOJIS ===
var GE = {
    cyberpunk: '🌆', witcher: '🐺', dishonored: '🗡️', outlast: '👁️',
    gta: '🌴', detroit: '🤖', hollowknight: '🪲', eldenring: '⚔️',
    metro: '☢️', stardew: '🌾', minecraft: '⛏️', roblox: '🧱',
    residentevil: '🧟', littlenightmare: '🕯️', rdr2: '🤠',
    silksong: '🦋', dyinglight: '🧟‍♂️', clairobscur: '🎭', general: '🎮'
};

// === STEAM IMAGE BASE ===
var SI = 'https://cdn.cloudflare.steamstatic.com/steam/apps/';

// === AUTHOR PROFILES ===
var AUTHORS = {
    'V_Corpo': {
        display: 'V — Corpo',
        avatar: '🌆',
        role: 'Corpo Runner',
        bio: 'Cựu nhân viên Arasaka, giờ rong ruổi Night City. Chuyên review RPG và game có cốt truyện nặng ký. Đã chơi Cyberpunk 2077 hơn 500 giờ.'
    },
    'GeraltMain': {
        display: 'Geralt Main',
        avatar: '🐺',
        role: 'Witcher',
        bio: 'Fan cứng The Witcher từ hồi còn đọc sách Sapkowski. Thích game thế giới mở, thế giới giả tưởng, và mấy cái kết khiến mình phải suy nghĩ nhiều.'
    },
    'GhostRun': {
        display: 'Tay Ghost',
        avatar: '🗡️',
        role: 'Bậc Thầy Ẩn Nấp',
        bio: 'Chuyên chơi ẩn nấp, không giết ai, không bị phát hiện. Nếu game có huy chương Ghost thì phải lấy bằng được.'
    },
    'ScaredGamer': {
        display: 'Gamer Sợ Ma',
        avatar: '👻',
        role: 'Người Sống Sót',
        bio: 'Sợ ma nhưng vẫn chơi game kinh dị. Đã la hét qua hơn 50 tựa kinh dị. Hàng xóm đã quen tiếng la rồi.'
    },
    'LSLocal': {
        display: 'Dân Los Santos',
        avatar: '🌴',
        role: 'GTA Veteran',
        bio: 'Chơi GTA từ hồi Vice City, giờ vẫn loanh quanh Los Santos. Biết mọi ngõ ngách trong game, ngoài đời thì hay lạc đường.'
    },
    'AndroidDreamer': {
        display: 'Android Dreamer',
        avatar: '🤖',
        role: 'Triết Gia Công Nghệ',
        bio: 'Mê mấy game về trí tuệ nhân tạo. Detroit: Become Human thay đổi cách mình nhìn công nghệ. Đang chờ game nào vượt được Detroit.'
    },
    'BugKnight': {
        display: 'Bug Knight',
        avatar: '🪲',
        role: 'Dân Indie',
        bio: 'Chuyên săn game độc lập hay. Hollow Knight là tôn giáo. Tin rằng game độc lập có hồn hơn game bom tấn. Kinh phí nhỏ nhưng trái tim to.'
    },
    'Tarnished': {
        display: 'Tarnished',
        avatar: '⚔️',
        role: 'Souls Veteran',
        bio: 'Đã chết hơn 10.000 lần trong các game FromSoftware. Malenia đánh 200+ lần mới qua. Không hối hận gì hết.'
    },
    'Artyom': {
        display: 'Artyom',
        avatar: '☢️',
        role: 'Dân Hậu Tận Thế',
        bio: 'Fan Metro từ tiểu thuyết đầu tiên. Thích game hậu tận thế với bầu không khí nặng nề. Mê đồ hoạ đổ bóng thời gian thực.'
    },
    'NCLocal': {
        display: 'Dân Night City',
        avatar: '🌃',
        role: 'Night City Native',
        bio: 'Sinh ra và lớn lên ở Night City (trong game thôi). Phantom Liberty là DLC hay nhất năm. V x Judy forever.'
    },
    'WolfSchool': {
        display: 'Trường Sói',
        avatar: '🐺',
        role: 'Chuyên Gia Truyện Thuyết',
        bio: 'Đọc hết sách The Witcher, chơi hết 3 phần game, xem hết loạt phim Netflix. Nhiệm vụ Bloody Baron làm thay đổi tiêu chuẩn nhiệm vụ phụ mãi mãi.'
    },
    'EmilyMain': {
        display: 'Emily Main',
        avatar: '👑',
        role: 'Nữ Hoàng Dunwall',
        bio: 'Chơi Emily trong Dishonored 2. Biết hết mọi đường tắt, mọi cách tiếp cận mỗi màn chơi. Arkane Studios là studio yêu thích nhất.'
    },
    'FarmingPro': {
        display: 'Nông Dân Pro',
        avatar: '🌾',
        role: 'Valley Farmer',
        bio: 'Đã farm hơn 2000 giờ trong Stardew Valley. Biết lịch sinh nhật tất cả NPC. Shane là bạn đời, cà phê là nhiên liệu.'
    },
    'BlockBuilder': {
        display: 'Thợ Xây Block',
        avatar: '⛏️',
        role: 'Redstone Engineer',
        bio: 'Chơi Minecraft từ bản Beta 1.7. Xây từ nhà đất cho tới thành phố. Redstone là đam mê, Creeper là nỗi ám ảnh.'
    },
    'ROBLOXKid': {
        display: 'ROBLOX Creator',
        avatar: '🧱',
        role: 'Nhà Phát Triển',
        bio: 'Tự học lập trình qua Roblox Studio. Đã tạo 5 game trên nền tảng với hơn 100 ngàn lượt chơi. Roblox không chỉ là game, nó là nền tảng sáng tạo.'
    },
    'STARSMember': {
        display: 'S.T.A.R.S.',
        avatar: '🧟',
        role: 'Raccoon Survivor',
        bio: 'Fan Resident Evil từ PS1. RE4 Remake là đỉnh cao của horror action. Mr. X đuổi trong RE2 Remake khiến tui không ngủ được 3 đêm.'
    },
    'LittleSix': {
        display: 'Little Six',
        avatar: '🕯️',
        role: 'Lữ Khách Ác Mộng',
        bio: 'Little Nightmares là game giải đố ám ảnh nhất tui từng chơi. Thích game có phong cách nghệ thuật độc đáo và cách kể chuyện không cần lời thoại.'
    },
    'CowboyRider': {
        display: 'Cowboy Rider',
        avatar: '🤠',
        role: 'Kẻ Ngoài Vòng Pháp Luật',
        bio: 'Arthur Morgan là nhân vật hay nhất lịch sử gaming. RDR2 khiến tui bật khóc 3 lần. Rockstar tạo thế giới đẹp nhất từng có.'
    },
    'SilkFan': {
        display: 'Silk Fan',
        avatar: '🦋',
        role: 'Silksong Waiter',
        bio: 'Đã chờ Silksong từ 2019. Mỗi ngày check r/HollowKnightMemes một lần. Tin rằng Silksong sẽ xứng đáng với sự chờ đợi.'
    },
    'ParkourZombie': {
        display: 'Parkour Zombie',
        avatar: '🧟‍♂️',
        role: 'Chạy Đêm',
        bio: 'Dying Light là game zombie hay nhất. Parkour cộng zombie bằng thiên tài. Đêm trong game là nỗi sợ thực sự. Volatile vẫn làm tui giật mình.'
    },
    'ExpeditionLead': {
        display: 'Expedition Lead',
        avatar: '🎭',
        role: 'Mê Nhập Vai',
        bio: 'Mê game nhập vai theo lượt từ nhỏ. Clair Obscur: Expedition 33 là hi vọng mới cho thể loại này. Phong cách nghệ thuật đẹp tới mức mỗi khung hình là một bức tranh.'
    }
};

// === DEFAULT POSTS ===
var DP = [
    {
        id: 1,
        author: 'V_Corpo',
        display: 'V — Corpo',
        game: 'cyberpunk',
        title: 'Chơi corpo V nữ xong tui không gượng dậy nổi',
        body: 'Nói thiệt nha, lúc đầu chọn Corpo vì nghĩ ngon lành — quyền lực sẵn rồi còn gì. Ai dè Arasaka nó đá V ra đường trong 10 phút đầu. Ngồi ngơ ngác.\n\nNhưng chính vì vậy mà hay. V từ corpo quen sống sung sướng, tự dưng mất sạch. Rồi gặp Judy — hai đứa khác nhau hoàn toàn mà hợp nhau kiểu gì ấy. Judy là người duy nhất trong Night City khiến mình cảm thấy thật sự an toàn, kiểu không cần phải đề phòng gì hết á.\n\nQuest lặn ở Laguna Bend đẹp muốn khóc. Hai đứa lặn xuống coi thành phố chìm, không nói gì nhiều, chỉ ở cạnh nhau. Cái khoảnh khắc yên bình giữa một thành phố hỗn loạn — nó quý dữ lắm.\n\nEnding The Star — V bỏ Night City, đi cùng Aldecaldos ra sa mạc. Judy đi cùng. Chưa ending nào khiến tui hài lòng như vậy. Không phải vì nó happy, mà vì nó đúng — đúng với con người của V, đúng với câu chuyện hai đứa đã đi qua cùng nhau.',
        date: '2025-01-15',
        likes: 34,
        likedBy: [],
        image: SI + '1091500/header.jpg',
        comments: [
            { id: 101, author: 'jg', display: 'Johnny Fan', text: 'V corpo mà yêu Judy thì xung đột giai cấp hay dữ luôn 😭', date: '2025-01-16' },
            { id: 102, author: 'ps', display: 'Panam Gang', text: 'Ending The Star đỉnh thiệt, dù tui team Panam nhưng vẫn phục', date: '2025-01-16' }
        ]
    },
    {
        id: 2,
        author: 'GeraltMain',
        display: 'Geralt Main',
        game: 'witcher',
        title: 'Blood and Wine hay hơn game chính của nhiều hãng',
        body: 'Chơi Blood and Wine lần thứ 3 rồi mà vẫn hay. Thiệt tình không hiểu sao họ làm được.\n\nToussaint đẹp tới mức tui hay mở game chỉ để cưỡi ngựa đi dạo. Mấy trăm giờ ở Velen mưa gió ảm đạm, bước vào đây như đi nghỉ mát. Ánh nắng chiếu qua vườn nho, gió thổi nhẹ, NPC đi lại tự nhiên — nó không như game nữa, nó như một thế giới có thật.\n\nDettlaff là phản diện hay nhất. Ổng bị người yêu phản bội rồi sụp đổ. Đánh ổng mà thấy tội. Tui đánh xong ngồi nghĩ nửa tiếng — liệu mình có đúng không khi giết một người đang đau khổ?\n\nCuối game Geralt ngồi trước nhà, nhìn mình cười. Tui chưa sẵn sàng cho khoảnh khắc đó 🥲. Cái nhìn đó như kiểu \"mọi thứ đã ổn rồi, nghỉ ngơi đi\". Sau bao năm chiến đấu, Geralt xứng đáng được yên bình.',
        date: '2025-01-10',
        likes: 41,
        likedBy: [],
        image: SI + '292030/header.jpg',
        comments: [
            { id: 201, author: 'tt', display: 'Team Triss', text: 'Ending ngồi ngoài hiên với Triss đọc sách, yên bình quá 🥰', date: '2025-01-11' }
        ]
    },
    {
        id: 3,
        author: 'GhostRun',
        display: 'Tay Ghost',
        game: 'dishonored',
        title: 'Chơi ghost run Dishonored xong nghiện luôn',
        body: 'Thiệt tình cho Dishonored một cơ hội đi mọi người.\n\nLần đầu chơi không giết ai, không bị phát hiện. Khi qua xong màn hình hiện Ghost, Shadow, Clean Hands — cái sướng tả không nổi. Nó giống kiểu bạn vừa vượt qua một thử thách mà chính bạn tự đặt ra cho mình, và bạn làm được.\n\nLady Boyle\'s Last Party — xâm nhập tiệc mặt nạ để tìm mục tiêu. Thiết kế màn chơi quá giỏi. Bạn có thể giết, bỏ thuốc mê, hoặc thậm chí thuyết phục ai đó \"giải quyết\" giúp bạn. Mỗi cách đều có hậu quả riêng.\n\nBlink — kỹ năng hay nhất từng có trong game. Teleport ngắn, nhanh gọn, mượt mà. 10 điểm. Cảm giác blink liên tục qua mấy mái nhà lúc nửa đêm — tui thấy mình thật sự là một bóng ma. Đừng bỏ qua game này.',
        date: '2025-01-08',
        likes: 22,
        likedBy: [],
        image: SI + '205100/header.jpg',
        comments: []
    },
    {
        id: 4,
        author: 'ScaredGamer',
        display: 'Gamer Sợ Ma',
        game: 'outlast',
        title: 'Outlast — game kinh dị hay nhất mà tui suýt không dám chơi hết',
        body: 'Outlast là game kinh dị đầu tiên khiến tui phải tắt game giữa chừng vì sợ quá.\n\nKhông vũ khí, không chiến đấu, chỉ có cái camera night vision và đôi chân. Mount Massive Asylum ám ảnh thiệt sự. Mỗi lần nghe tiếng bước chân sau lưng là tim muốn rớt. Cái cảm giác bất lực — biết nguy hiểm ở ngay đó mà chỉ có thể chạy — nó khiến trải nghiệm kinh dị lên một tầm khác.\n\nChris Walker đuổi tui qua mấy cái hành lang tối thui, tui la hét như đang bị rượt thiệt. Hàng xóm gõ cửa hỏi thăm. Lần sau chơi phải kéo rèm lại.\n\nOutlast 2 cũng hay nhưng phần 1 vẫn là kinh điển. Ai thích horror thì phải chơi. Nhớ tắt đèn phòng cho trọn trải nghiệm. Hoặc đừng, vì sức khoẻ tinh thần quan trọng hơn 😂.',
        date: '2025-01-04',
        likes: 28,
        likedBy: [],
        image: SI + '238320/header.jpg',
        comments: [
            { id: 401, author: 'hl', display: 'Fan Kinh Dị', text: 'Chơi tắt đèn xong hối hận cả đời 😂', date: '2025-01-05' }
        ]
    },
    {
        id: 5,
        author: 'LSLocal',
        display: 'Dân Los Santos',
        game: 'gta',
        title: 'GTA V ra 10 năm rồi mà chưa game nào vượt qua được',
        body: 'GTA V ra hơn 10 năm rồi mà vẫn chưa game nào tạo được thế giới mở sống động như Los Santos.\n\nTrevor là nhân vật điên nhất lịch sử gaming. Lần đầu gặp ổng tui nghĩ \"game này dark thiệt\". Nhưng càng chơi càng thấy ổng là nhân vật thật nhất — ổng điên nhưng ổng honest. Ổng nói gì nghĩ nấy, không giả tạo. Giữa Michael đầy mâu thuẫn và Franklin đang cố leo lên, Trevor là người duy nhất sống thật với bản thân, dù cái \"thật\" đó hơi đáng sợ.\n\nMission đột nhập FIB là đỉnh cao. Ba nhân vật phối hợp, chuyển qua chuyển lại giữa Michael, Franklin và Trevor. Tui nhớ lần đầu chơi cảm giác như đang xem phim hành động Hollywood mà mình là đạo diễn vậy. Chưa game nào làm được vậy.\n\nGTA Online thì khỏi nói — cả thập kỷ rồi mà vẫn đông người chơi. Rockstar biết cách giữ chân người ta. GTA 6 ra khi nào thì ra, tui vẫn bay Oppressor trong Online mỗi tối.',
        date: '2025-01-03',
        likes: 38,
        likedBy: [],
        image: SI + '271590/header.jpg',
        comments: [
            { id: 501, author: 'mp', display: 'Fan Michael', text: 'Michael là nhân vật dễ đồng cảm nhất. Khủng hoảng tuổi trung niên phiên bản game 😂', date: '2025-01-04' }
        ]
    },
    {
        id: 6,
        author: 'AndroidDreamer',
        display: 'Android Dreamer',
        game: 'detroit',
        title: 'Detroit: Become Human — thế nào là "con người"?',
        body: 'Detroit: Become Human khiến tui ngồi suy nghĩ về cái nghĩa của \"con người\" là gì.\n\nConnor là nhân vật hay nhất game. Một người máy được tạo ra để săn lùng đồng loại, rồi dần dần tự hỏi mình thật sự là ai. Mối quan hệ giữa Connor và Hank là điểm sáng lớn nhất — hai người khác nhau hoàn toàn, từ ghét nhau tới tin tưởng nhau, cái hành trình đó tự nhiên và chân thật.\n\nMỗi lựa chọn đều có hậu quả thiệt sự. Lần chơi đầu tui để Kara chết, ngồi ngơ ngác 5 phút. Tải lại liền. Cái game khiến mình thương nhân vật tới mức không chấp nhận nổi một kết cục xấu — đó là cách kể chuyện đỉnh cao.\n\nĐồ hoạ đẹp muốn xỉu. Cảnh biểu tình người máy đi dưới mưa tuyết là một trong những khoảnh khắc đẹp nhất tui từng thấy trong game. Quantic Dream có nhiều game gây tranh cãi nhưng Detroit là kiệt tác thật sự.',
        date: '2024-12-30',
        likes: 33,
        likedBy: [],
        image: SI + '1222140/header.jpg',
        comments: [
            { id: 601, author: 'hr', display: 'Fan Hank', text: 'Connor và Hank là cặp đôi bạn thân hay nhất gaming, không nhận cãi', date: '2024-12-31' }
        ]
    },
    {
        id: 7,
        author: 'BugKnight',
        display: 'Bug Knight',
        game: 'hollowknight',
        title: 'Hollow Knight giá 300 ngàn mà nội dung nhiều hơn game cả triệu',
        body: 'Hollow Knight với cái giá rẻ bèo mà cho nội dung nhiều hơn mấy game bom tấn giá gấp 5 lần.\n\nHallownest là thế giới đẹp và buồn. Mỗi khu vực có cảm xúc riêng — Thành phố Nước Mắt với tiếng mưa rơi không ngừng, Deepnest ám ảnh tới mức tui phải bật đèn phòng. Greenpath thì xanh mướt yên bình, như kiểu game đang cho mình nghỉ ngơi trước khi quăng mình vào mấy cái trận đấu trùm điên khùng.\n\nTrận trùm trong game này khó mà công bằng. Nightmare King Grimm đánh chắc cả trăm lần mới qua. Path of Pain gần làm tui đập tay cầm. Nhưng mỗi lần qua được thì cái cảm giác sướng nó ở tầm khác — kiểu \"tui đã làm được, tui không tin nổi\".\n\nTeam Cherry chỉ có 3 người mà làm ra cái game này. Nghĩ tới là nể. Game giá rẻ, nội dung miễn phí liên tục, không bán thêm gì cả — chỉ có tình yêu dành cho người chơi. Silksong ra khi nào vậy trời 😭 Tui đã chờ từ 2019 rồi, vẫn chưa bỏ cuộc.',
        date: '2024-12-28',
        likes: 47,
        likedBy: [],
        image: SI + '367520/header.jpg',
        comments: [
            { id: 701, author: 'sl', display: 'Tín Đồ Souls', text: 'Nhạc nền Thành phố Nước Mắt tui để ngủ mỗi đêm, không nói giỡn 🌧️', date: '2024-12-29' }
        ]
    },
    {
        id: 8,
        author: 'Tarnished',
        display: 'Tarnished',
        game: 'eldenring',
        title: 'Elden Ring — game nhập vai thế giới mở hay nhất tui từng chơi',
        body: 'Elden Ring là game nhập vai thế giới mở hay nhất tui từng chơi. FromSoftware kết hợp với George R.R. Martin tạo ra thế giới đẹp tới mức tui hay dừng lại ngắm cảnh thay vì đánh trùm.\n\nLần đầu thấy Erdtree từ xa, cái cảm giác ấy không game nào tái hiện được. Nó to, nó sáng, nó đẹp — và nó khiến mình tò mò muốn tới gần. Rồi cưỡi Torrent phi qua Limgrave lúc hoàng hôn — đẹp muốn khóc. Thế giới mở mà không cần dấu hiệu chỉ đường nào cả, chỉ cần thấy cái gì đó thú vị là chạy tới, kiểu khám phá rất tự nhiên.\n\nMalenia — trùm khó nhất tui từng đánh. \"I am Malenia, Blade of Miquella\" nghe cả trăm lần tới mức thuộc lòng. Giai đoạn hai với Hoa Đỏ Aeonia tui chết không biết bao nhiêu lần. Nhưng khi qua được — trời ơi — cái cảm giác đó đáng mọi giây phút bực bội, muốn bỏ cuộc.\n\nBản mở rộng Shadow of the Erdtree cũng đỉnh. FromSoftware không biết làm game dở. Ông Miyazaki ơi, tui nợ ông quá nhiều giờ ngủ.',
        date: '2024-12-25',
        likes: 55,
        likedBy: [],
        image: SI + '1245620/header.jpg',
        comments: [
            { id: 801, author: 'ml', display: 'Fan Malenia', text: '\"Let me solo her\" — huyền thoại cộng đồng Elden Ring 🗡️', date: '2024-12-26' }
        ]
    },
    {
        id: 9,
        author: 'Artyom',
        display: 'Artyom',
        game: 'metro',
        title: 'Metro Exodus — FPS đẹp nhất mà ít người biết',
        body: 'Metro Exodus khiến tui thấy mấy game FPS khác nông cạn quá. Bầu không khí hậu tận thế của nó đáng sợ mà đẹp.\n\nVolga — level đầu tiên bước ra khỏi metro, thấy ánh sáng mặt trời lần đầu tiên. Cảm giác freedom sau bao năm sống dưới lòng đất. Tui nhớ mình đứng ngây ra nhìn bầu trời mấy phút, không làm gì hết. Lần đầu tiên trong game FPS mà tui dừng lại chỉ để... ngắm.\n\nCaspian Desert và Taiga Forest — mỗi level một mùa, một bầu không khí hoàn toàn khác. Cái guitar scene trên tàu hoả là một trong những khoảnh khắc yên bình nhất gaming. Anna nằm nghe, mấy đồng đội ngồi quanh đống lửa — giữa thế giới đã sụp đổ, vẫn còn người để yêu thương.\n\nRay tracing trong game này đẹp tới mức tui upgrade PC chỉ để chơi lại ở max settings. Đáng từng đồng nâng cấp.',
        date: '2024-12-22',
        likes: 26,
        likedBy: [],
        image: SI + '412020/header.jpg',
        comments: [
            { id: 901, author: 'sp', display: 'Spartan', text: 'Guitar scene trên tàu hoả, tui ngồi nghe hết bài mà không skip ❤️', date: '2024-12-23' }
        ]
    },
    {
        id: 10,
        author: 'NCLocal',
        display: 'Dân Night City',
        game: 'cyberpunk',
        title: 'Ending Tower trong Phantom Liberty phá nát tâm hồn tui',
        body: 'Tui cần ai đó nói chuyện sau cái ending này.\n\nV chấp nhận thoả thuận với Reed, bị đưa vào Neural Matrix rồi tỉnh dậy sau 2 năm. Mọi thứ thay đổi hết. Johnny đã đi rồi. Judy cũng rời Night City luôn. Mọi người tiếp tục sống, chỉ có V bị kẹt lại trong một phiên bản của chính mình mà không còn nhận ra nữa.\n\nCảnh cuối V tập đi lại, mưa rơi ngoài cửa sổ. Nó đau vì nó thật. Đôi khi sống sót không có nghĩa là thắng. Bạn giữ được mạng nhưng mất đi mọi thứ khiến cuộc sống đáng sống.\n\nPhantom Liberty biến Cyberpunk thành kiệt tác. CDPR đã chuộc lại mọi lỗi lầm từ ngày launch. Idris Elba đóng Solomon Reed quá xuất sắc — giọng ổng, cái ánh mắt ổng, nó khiến mình tin đây là người thật chứ không phải NPC. Mua đi, đáng từng đồng.',
        date: '2025-01-02',
        likes: 52,
        likedBy: [],
        image: SI + '1091500/header.jpg',
        comments: [
            { id: 1001, author: 'js', display: 'Judy Fan', text: '"Judy rời Night City" sao nhắc tui làm gì 💔', date: '2025-01-03' }
        ]
    },
    {
        id: 11,
        author: 'WolfSchool',
        display: 'Trường Sói',
        game: 'witcher',
        title: 'Quest Bloody Baron hay hơn cốt truyện chính nhiều game',
        body: '"Family Matters" trong Witcher 3 không phải quest phụ đâu nha. Nó là bộ phim ngắn 4 tiếng.\n\nBloody Baron phức tạp nhất trong mấy nhân vật RPG tui từng gặp. Ổng bạo lực gia đình, nghiện rượu. NHƯNG cách họ viết khiến mình không thể đơn giản ghét ổng. Ổng cũng yêu gia đình theo cách méo mó của mình. Cái ranh giới giữa \"tệ\" và \"bi kịch\" — CD Projekt Red vẽ nó rõ ràng hơn ai hết.\n\nĐoạn Botchling — Baron ôm đứa con biến thành quái vật đi qua nghĩa trang giữa đêm. Tui đặt tay cầm xuống, ngồi thở. Cái hình ảnh đó ám ảnh tui tới giờ. Một ông bố ôm đứa con mà ổng đã gián tiếp giết, cố gắng chuộc lại trong bóng tối.\n\nSide quest mà hay hơn cốt truyện chính nhiều hãng lớn. Nói thiệt. Nếu chưa chơi Witcher 3 thì đây là lý do đủ để bắt đầu.',
        date: '2024-12-28',
        likes: 45,
        likedBy: [],
        image: SI + '292030/header.jpg',
        comments: []
    },
    {
        id: 12,
        author: 'EmilyMain',
        display: 'Emily Main',
        game: 'dishonored',
        title: 'Màn chơi A Crack in the Slab — hay nhất tui từng gặp',
        body: 'Dishonored 2 có nhiều màn hay nhưng A Crack in the Slab ở đẳng cấp khác luôn.\n\nBạn được cái đồng hồ cho phép di chuyển giữa quá khứ với hiện tại ngay tức thì. Giết một người ở quá khứ, hiện tại thay đổi liền trước mắt. Ý tưởng này nghe đơn giản nhưng thực hiện thì thiên tài. Bạn có thể đứng ở hiện tại, nhìn qua khung kính thấy quá khứ đầy người, rồi nhấn nút — hiện tại bỏ hoang nhưng có mấy con sâu máu. Cái cảm giác chuyển qua lại hai mốc thời gian giữa một trận đánh — mượt mà, hồi hộp, và đẹp mắt vô cùng.\n\nKỹ năng Domino của Emily là thiên tài. Nối 4 kẻ thù, đánh ngất 1 thì cả 4 ngất hết. Kết hợp với Far Reach thì bạn trở thành một cơn bão vô hình không ai nhìn thấy.\n\nArkane Studios hiểu thiết kế màn chơi ở tầm mà rất ít hãng nào chạm tới. Prey và Dishonored xứng đáng được yêu thương nhiều hơn. Mong những studio như vậy luôn có chỗ đứng trong ngành.',
        date: '2025-01-05',
        likes: 19,
        likedBy: [],
        image: SI + '403640/header.jpg',
        comments: []
    },

    // ========== NEW GAME POSTS ==========

    {
        id: 13,
        author: 'FarmingPro',
        display: 'Nông Dân Pro',
        game: 'stardew',
        title: 'Stardew Valley — game chữa lành tâm hồn tui theo đúng nghĩa đen',
        body: 'Tui bắt đầu chơi Stardew Valley lúc đang stress nặng vì công việc. Nghĩ chơi tạm cho thư giãn. 600 giờ sau tui vẫn chưa dừng.\n\nCái hay của Stardew là nó không ép bạn làm gì hết. Muốn farm thì farm, muốn câu cá cả ngày thì cứ câu, muốn chui xuống hầm đánh slime thì thoải mái. Không có deadline, không có pressure — chỉ có bạn, cái farm, và thời gian.\n\nShane là NPC tui thích nhất. Ban đầu ổng cộc cằn, hay uống bia, sống như không có ngày mai. Rồi từ từ mình hiểu — ổng đang trầm cảm. Cái heart event ổng đứng trên vách đá lúc trời mưa... tui ngồi khóc thiệt. Khi mình giúp ổng vượt qua, thấy ổng vui lên, nuôi gà, chăm cháu — cái ấm áp đó game AAA triệu đô chưa chắc làm được.\n\nConcernedApe — một người duy nhất làm hết mọi thứ: code, pixel art, nhạc, story. Ổng là inspiration cho mọi indie dev. Mỗi update đều free. Ổng xứng đáng được tôn vinh hơn bất kỳ CEO hãng game lớn nào.\n\nNếu bạn đang mệt, đang chán — cho Stardew một cơ hội. Nó không hứa gì to tát, chỉ hứa rằng bạn sẽ cảm thấy bình yên. Và nó giữ lời.',
        date: '2025-01-18',
        likes: 62,
        likedBy: [],
        image: SI + '413150/header.jpg',
        comments: [
            { id: 1301, author: 'ff', display: 'Farm Fan', text: 'Shane heart event làm tui khóc 3 lần chơi 3 lần 🥺', date: '2025-01-19' },
            { id: 1302, author: 'gc', display: 'Gamer Chill', text: 'Game này tui hay mở lúc nửa đêm, farm tí rồi ngủ. Ngủ ngon hơn meditation', date: '2025-01-19' }
        ]
    },
    {
        id: 14,
        author: 'BlockBuilder',
        display: 'Thợ Xây Block',
        game: 'minecraft',
        title: 'Minecraft — 15 năm rồi mà vẫn chưa game nào thay thế được',
        body: 'Tui chơi Minecraft từ hồi lớp 7, giờ đi làm rồi vẫn chơi. 15 năm — game này theo tui gần nửa cuộc đời.\n\nCái thiên tài của Minecraft không phải đồ hoạ, không phải combat — mà là sự tự do. Bạn muốn xây lâu đài? Xây. Muốn làm máy tính bằng redstone? Làm. Muốn chơi survival với bạn bè cả đêm? Cứ việc. Game không nói cho bạn biết phải làm gì. Bạn tự quyết định ý nghĩa của nó.\n\nTui nhớ lần đầu đào được kim cương — la hét loạn xạ cả phòng. Nhớ đêm đầu tiên trong survival, ngồi trong cái nhà đất nghe tiếng zombie bên ngoài mà run. Nhớ server SMP với mấy đứa bạn hồi đó — giờ mỗi đứa một nơi, nhưng cái nhà chung trong Minecraft vẫn còn.\n\nMinecraft không chỉ là game, nó là nơi lưu giữ kỷ niệm. Mỗi khối block bạn đặt xuống đều mang một câu chuyện. Tui biết nghe sến nhưng đó là sự thật. Cảm ơn Notch (dù gì thì cũng cảm ơn), cảm ơn Mojang, cảm ơn Minecraft đã cho tui một tuổi thơ đẹp.',
        date: '2025-01-20',
        likes: 71,
        likedBy: [],
        image: SI + '1672970/header.jpg',
        comments: [
            { id: 1401, author: 'sm', display: 'Server Master', text: 'Server SMP hồi cấp 3 là kỷ niệm đẹp nhất tuổi thơ tui 🏡', date: '2025-01-21' }
        ]
    },
    {
        id: 15,
        author: 'ROBLOXKid',
        display: 'ROBLOX Creator',
        game: 'roblox',
        title: 'Roblox không chỉ là "game trẻ con" — mọi người sai rồi',
        body: 'Mỗi lần nói tui chơi Roblox là bị nhìn kiểu \"mày bao nhiêu tuổi rồi\". Nhưng thật sự, Roblox không phải một game — nó là một nền tảng sáng tạo. Và cái nền tảng đó đang thay đổi cách chúng ta nghĩ về game.\n\nTui bắt đầu chơi vì tò mò, rồi bắt đầu học lập trình Lua để tự tạo game. Bây giờ tui đã có 5 game phát hành trên đó, game đông nhất đạt 50 ngàn người chơi cùng lúc. Roblox dạy tui lập trình nhanh hơn bất kỳ khoá học nào, vì động lực là \"tui muốn cái game này hay hơn nữa\".\n\nBlox Fruits, Doors, Brookhaven — mỗi game là sáng tạo của một nhà phát triển nhỏ với ước mơ lớn. Có người kiếm hàng triệu đô từ Roblox ở tuổi 20. Cái hệ sinh thái này độc đáo hơn người ta nghĩ rất nhiều.\n\nĐồ hoạ đơn giản? Đúng. Phong cách vuông vức? Đúng. Nhưng đừng đánh giá game bằng đồ hoạ. Tui đã có những khoảnh khắc hồi hộp trong Doors hơn cả mấy game kinh dị đắt tiền. Tui đã cười ngã ghế khi chơi Natural Disaster Survival với bạn bè.\n\nRoblox là nơi một đứa trẻ 14 tuổi có thể biến ý tưởng thành hiện thực. Và đó là điều kỳ diệu thật sự của gaming.',
        date: '2025-01-22',
        likes: 44,
        likedBy: [],
        image: 'https://blog.roblox.com/wp-content/uploads/2023/06/RTC_Hero01.png',
        comments: [
            { id: 1501, author: 'ld', display: 'Lua Dev', text: 'Từ Roblox tui chuyển sang học Unity rồi Unreal, tất cả bắt đầu từ đây 💪', date: '2025-01-23' }
        ]
    },
    {
        id: 16,
        author: 'STARSMember',
        display: 'S.T.A.R.S.',
        game: 'residentevil',
        title: 'Resident Evil 4 Remake — Capcom cho thấy thế nào là remake đúng nghĩa',
        body: 'RE4 Remake không chỉ là remake, nó là tác phẩm nghệ thuật.\n\nGame gốc đã đỉnh rồi. Nhưng Capcom không build lại 1:1 mà họ reimagine — giữ nguyên nhân vật, giữ nguyên cốt lõi, nhưng thay đổi mọi thứ khác. Combat mượt hơn, atmosphere đáng sợ hơn, Ashley không còn bị ghét nữa mà thật sự trở thành nhân vật mình muốn bảo vệ.\n\nLần đầu đi qua làng, nghe tiếng chuông nhà thờ vang lên, mấy con Ganados thả mình ra rồi bước đi — cái cảm giác creepy mới kinh. Mình không biết tại sao họ dừng lại, và chính sự không biết đó mới đáng sợ.\n\nKrauser boss fight trong remake hay hơn gốc 10 lần. Knife fight tuyệt vời. Và trùm cuối Saddler — cái scale lớn hơn rất nhiều mà vẫn giữ được tension.\n\nMr. X trong RE2 Remake cũng vẫn là nỗi ám ảnh. Nghe tiếng bước chân \"dum dum dum\" là biết ổng đang tới. Tim tui đập loạn mỗi lần. Capcom đang ở đỉnh cao của thể loại survival horror, và tui rất mong RE5 Remake.',
        date: '2025-01-25',
        likes: 49,
        likedBy: [],
        image: SI + '2050650/header.jpg',
        comments: [
            { id: 1601, author: 'le', display: 'Fan Leon', text: 'Leon trong RE4 Remake đẹp trai hơn 90% diễn viên Hollywood nói thiệt 🥴', date: '2025-01-26' },
            { id: 1602, author: 'ah', display: 'Bảo Vệ Ashley', text: 'Ashley bản remake xứng đáng được đánh giá tốt hơn. Cô ấy dũng cảm hơn mọi người nghĩ', date: '2025-01-26' }
        ]
    },
    {
        id: 17,
        author: 'LittleSix',
        display: 'Little Six',
        game: 'littlenightmare',
        title: 'Little Nightmares — cái ám ảnh không cần một lời thoại',
        body: 'Little Nightmares chứng minh rằng storytelling không cần dialogue. Không một dòng thoại, không một đoạn text — chỉ có hình ảnh, âm thanh, và cảm giác.\n\nSix — cô bé mặc áo mưa vàng, bé xíu giữa thế giới khổng lồ đáng sợ. Mỗi kẻ thù đều là biểu tượng cho một nỗi sợ rất thật. The Janitor với đôi tay dài bất thường mò mẫm trong bóng tối — tui la hét mỗi lần bị nó tóm. The Twin Chefs trong bếp, chặt thái gì đó mà mình không muốn biết.\n\nPart 2 với Mono và Six còn heartbreaking hơn. Ending đó — Six buông tay Mono ra — tui ngồi ngây ra 10 phút. Tại sao cô ấy lại làm vậy? Cái theory loop vô tận khiến lore game này sâu thăm thẳm.\n\nArt style của game này unique. Mọi thứ đều hơi lệch, hơi sai, hơi méo — và chính sự \"hơi\" đó tạo ra vibe ám ảnh không game nào copy được. Bandai Namco nên tiếp tục series này, vì thế giới Little Nightmares còn quá nhiều bí ẩn chưa được giải.',
        date: '2025-01-28',
        likes: 37,
        likedBy: [],
        image: SI + '424840/header.jpg',
        comments: [
            { id: 1701, author: 'da', display: 'Dark Artist', text: 'Art style game này tui lấy làm inspiration vẽ tranh luôn 🎨', date: '2025-01-29' }
        ]
    },
    {
        id: 18,
        author: 'CowboyRider',
        display: 'Cowboy Rider',
        game: 'rdr2',
        title: 'Red Dead Redemption 2 — game khiến tui bật khóc nhiều nhất',
        body: 'Tui cần phải nói thẳng: Arthur Morgan là nhân vật hay nhất lịch sử video game. Không cần tranh cãi.\n\nBan đầu tui nghĩ Arthur chỉ là thêm một tên outlaw nữa thôi. Nhưng 60 giờ sau, khi ngồi trên lưng ngựa nhìn hoàng hôn ở Heartland, nghe tiếng Arthur ho — tui biết mọi thứ sắp thay đổi. Cái chẩn đoán lao phổi không chỉ là plot twist, nó thay đổi toàn bộ ý nghĩa của game.\n\nTừ lúc biết Arthur bệnh, mọi hành động đều nặng hơn. Giúp người ta cảm thấy urgent hơn. Ngắm cảnh đẹp hơn vì biết không còn bao lâu. Cái journal entry Arthur viết ngày càng run — chi tiết nhỏ mà đau lòng quá.\n\nEnding on the mountain — \"I\'m afraid\" — Arthur nhìn mặt trời mọc lần cuối. Tui khóc. Khóc thiệt. Không có game nào làm tui phản ứng cảm xúc mạnh như vậy. Rockstar tạo ra một thế giới đẹp tới mức mình không muốn rời đi, rồi ép mình phải nói lời tạm biệt.\n\nHorse bonding, camp interactions, random encounters — mọi thứ đều có soul. Đây không phải game, đây là trải nghiệm sống.',
        date: '2025-02-01',
        likes: 78,
        likedBy: [],
        image: SI + '1174180/header.jpg',
        comments: [
            { id: 1801, author: 'am', display: 'Arthur Morgan Stan', text: '"I gave you all I had" — câu này vẫn làm tui khóc mỗi lần nhớ lại 😭', date: '2025-02-02' },
            { id: 1802, author: 'jm', display: 'John Fan', text: 'Arthur hy sinh để John có cuộc sống tốt đẹp hơn. Và rồi RDR1... 💔', date: '2025-02-02' }
        ]
    },
    {
        id: 19,
        author: 'SilkFan',
        display: 'Silk Fan',
        game: 'silksong',
        title: 'Hollow Knight: Silksong — tui vẫn tin, vẫn chờ, vẫn đau',
        body: 'Silksong được announce năm 2019. Giờ là 2025. Tui vẫn chờ.\n\nMỗi lần Nintendo Direct hay Game Awards là tui ngồi trước màn hình với trái tim đập loạn, cầu nguyện thấy cái trailer Silksong. Và mỗi lần — mỗi lần — tui đều thất vọng. Subreddit r/HollowKnight chuyển thành asylum cho mấy đứa chờ Silksong. Meme \"Silksong is real\" trở thành copium hàng ngày.\n\nNhưng tui hiểu Team Cherry. 3 người, đam mê, không muốn ra game dở. Hollow Knight đã chứng minh họ biết làm gì — mỗi content update đều free và đều đỉnh. Không có microtransaction, không có battle pass, chỉ có tình yêu dành cho game.\n\nNhìn trailer cũ — Hornet chạy, nhảy, chiến đấu qua Pharloom — combat nhanh hơn, dynamic hơn. Những tool mới, những boss mới. Tiềm năng là khổng lồ.\n\nTui sẽ chờ. Dù phải chờ tới 2026, 2027. Vì nếu nó bằng một nửa Hollow Knight thì cũng đã hay hơn 90% game trên thị trường rồi. Team Cherry ơi, take your time, nhưng xin đừng quên tụi tui 🥲.',
        date: '2025-02-05',
        likes: 58,
        likedBy: [],
        image: SI + '1030300/header.jpg',
        comments: [
            { id: 1901, author: 'wt', display: 'Eternal Waiter', text: 'Tui đã chờ lâu tới mức quên mình đang chờ cái gì, rồi nhớ ra rồi lại buồn 🤡', date: '2025-02-06' },
            { id: 1902, author: 'hk', display: 'HK Lore', text: 'Pharloom lore được leak từ datamine HK mà nghe đã hype rồi. Tin tui đi.', date: '2025-02-06' }
        ]
    },
    {
        id: 20,
        author: 'ParkourZombie',
        display: 'Parkour Zombie',
        game: 'dyinglight',
        title: 'Dying Light — parkour giữa thành phố zombie chưa bao giờ vui tới vậy',
        body: 'Dying Light là bằng chứng rằng zombie game vẫn chưa hết thời. Chỉ cần ai đó có ý tưởng hay.\n\nParkour + zombie = công thức đơn giản mà thiên tài. Ban ngày bạn nhảy trên mái nhà, đá zombie rớt xuống đường, quăng firecrackers để mấy đứa khác chạy lại. Vui dữ. Nhưng khi mặt trời lặn — mọi thứ thay đổi.\n\nĐêm trong Dying Light là nỗi sợ thực sự. Volatile chạy nhanh hơn bạn, mạnh hơn bạn, và chúng ở khắp nơi. Lần đầu bị đuổi ban đêm tui run tay tới mức nhảy lạc hướng rớt xuống đất. Tiếng tim đập trong game sync với tim tui ngoài đời.\n\nCo-op là highlight. 4 đứa cùng parkour trên mái nhà lúc hoàng hôn, rồi hoảng loạn chạy khi đêm xuống — những khoảnh khắc đó không scripted, không ai bảo ai, mà nó tự nhiên xảy ra. Organic fun.\n\nDying Light 2 cũng hay nhưng phần 1 vẫn có cái charm riêng. Harran mãi trong tim. Techland biết làm zombie game, và tui mong họ tiếp tục.',
        date: '2025-02-08',
        likes: 41,
        likedBy: [],
        image: SI + '239140/header.jpg',
        comments: [
            { id: 2001, author: 'nz', display: 'Night Zone', text: 'Volatiles ban đêm traumatize tui 3 năm rồi vẫn sợ mỗi lần nghe tiếng la 😨', date: '2025-02-09' }
        ]
    },
    {
        id: 21,
        author: 'ExpeditionLead',
        display: 'Expedition Lead',
        game: 'clairobscur',
        title: 'Clair Obscur: Expedition 33 — hi vọng mới cho dòng game nhập vai theo lượt',
        body: 'Khi thấy trailer Clair Obscur: Expedition 33 lần đầu, tui quên mất là mình đang xem game. Tui tưởng đó là phim hoạt hình.\n\nPhong cách nghệ thuật của game này ở tầm khác. Mỗi khung hình là một bức tranh — thật sự luôn. Thẩm mỹ lấy cảm hứng từ hội hoạ Baroque pha trộn với viễn tưởng, tạo ra hình ảnh chưa từng thấy trong gaming. Unreal Engine 5 được tận dụng tới mức đỉnh cao.\n\nLối chơi là nhập vai theo lượt nhưng kết hợp yếu tố chủ động kiểu né đòn và tấn công đúng nhịp — giống Paper Mario hoặc Legend of Dragoon nhưng hiện đại hơn. Điều này giải quyết nhược điểm lớn nhất của thể loại theo lượt: trận đánh nhàm chán. Mỗi trận đều cần tập trung, đều cần phản xạ tốt.\n\nCốt truyện thú vị: mỗi năm \"Paintress\" xoá một con số, ai có tuổi bằng số đó sẽ biến mất mãi mãi. Expedition 33 là đoàn thám hiểm cuối cùng liều mạng để ngăn Paintress. Tăm tối, đầy chất thơ, và triết lý sâu sắc.\n\nĐây là game đầu tay của studio Sandfall Interactive. Nếu game hoàn thành được những gì trailer hứa hẹn, đây chắc chắn sẽ là ứng cử viên game hay nhất năm. Dòng game nhập vai theo lượt đang trở lại, và Clair Obscur có thể là ngọn lửa thắp sáng cho cả thể loại.',
        date: '2025-02-12',
        likes: 53,
        likedBy: [],
        image: SI + '1903340/header.jpg',
        comments: [
            { id: 2101, author: 'jf', display: 'Fan Nhập Vai', text: 'Cuối cùng cũng có game nhập vai theo lượt xứng đáng với đồ hoạ hiện đại. Lấy tiền tui đi 💸', date: '2025-02-13' },
            { id: 2102, author: 'as', display: 'Sinh Viên Mỹ Thuật', text: 'Phong cách nghệ thuật game này là tư liệu tham khảo cho cả khoá học tui. Đẹp tới ngạt thở.', date: '2025-02-13' }
        ]
    }
];
