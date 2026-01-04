// おじさんの名前リスト
const ojisanNames = [
    "海老根", "安達", "菊池", "常田", "岡部",
    "山内", "増谷", "小甲", "三善", "秋元",
    "轟", "堺", "松居", "中村", "川野",
    "池田", "生井", "清水"
];

// おじさん顔絵文字バリエーション
const ojisanEmojis = [
    '🧑‍💼','🧔','👨','👨‍💼','👨‍🦱','👨‍🦰','👨‍🦳','👴','🧓','🧑‍🏭',
    '👨‍🏭','🧑‍🔧','🧑‍💻','👨‍💻','🕴️','🧑‍🔬','🧑‍⚖️','🧑‍🚀','🧔‍♂️'
];

// 激怒メッセージ（当たり時の25%）
const angryMessages = [
    '社会人として失格だよ。',
    'そんな態度では仕事にならない。',
    'お前に任せて本当に良かったと思ってるのか？',
    'お客様に見せられるクオリティじゃないぞ。',
    'それでプロを名乗るつもり？',
    'いつまでたっても成長しないな。',
    '君にはガッカリだよ。',
    'それ、上司として恥ずかしいよ。',
    'その報告じゃ話にならない。',
    'こんな仕事で給料がもらえると思うな。',
    'どうして何度言ってもできない？',
    'やる気が感じられないな。',
    'ビジネスを舐めてるのか？',
    '他のメンバーに申し訳ないと思わないのか？',
    'このままだとプロジェクトから外すぞ。'
];

// 褒め言葉メッセージ（当たり時）
const praiseMessages = [
    '素晴らしい仕事をしてくれた。',
    '期待以上の成果を出してくれた。',
    '君の努力は本当に評価できる。',
    'このプロジェクトの成功は君のおかげだ。',
    'プロフェッショナルとして最高の仕事だ。',
    'お客様からも絶賛されている。',
    'チームの誇りだよ。',
    'この調子で頑張ってくれ。',
    '君のような人材がいて本当に心強い。',
    '営業成績が素晴らしい。',
    '提案力が抜群だ。',
    'コミュニケーション能力が高い。',
    'リーダーシップを発揮してくれてありがとう。',
    '細部まで気配りができている。',
    '信頼できるパートナーだ。'
];

// 独り言集100選（外れ時）
const monologueMessages = [
    // 仕事系
    '今日も残業か...',
    '会議が長すぎる...',
    '資料作成、また明日か...',
    '営業成績が上がらないな...',
    '上司の指示がよくわからない...',
    '同僚との関係、うまくいってない...',
    '転職を考えている...',
    '給料が安すぎる...',
    '仕事の意味が見出せない...',
    'ストレスが溜まりすぎている...',
    '休みが欲しい...',
    '昇進の見込みがない...',
    'プロジェクトがうまくいかない...',
    'クライアントからのクレームが...',
    'プレゼンがうまくいかなかった...',
    
    // 家庭系
    '家族との時間が取れない...',
    '妻が最近冷たい...',
    '子供と話す時間がない...',
    '家事を手伝えていない...',
    '家族に感謝されていない...',
    '家計が苦しい...',
    '子供の教育費が...',
    '親の介護が大変...',
    '家族旅行に行けていない...',
    '家に帰るのが遅すぎる...',
    '家族との会話が減った...',
    '妻との関係が...',
    '子供が心配だ...',
    '家族の健康が気になる...',
    '家のローンが...',
    
    // 恋愛系
    '恋人がいない...',
    'デートの時間が取れない...',
    '恋人との関係がうまくいかない...',
    '結婚を考えているが...',
    '別れを考えている...',
    '恋愛に疲れた...',
    '出会いがない...',
    '告白する勇気がない...',
    '恋人との距離が...',
    '結婚式の準備が大変...',
    '恋人との将来が不安...',
    '浮気を疑われている...',
    '恋人との価値観が合わない...',
    '長距離恋愛がつらい...',
    '恋人とのコミュニケーションが...',
    
    // 健康・体調系
    '最近疲れが取れない...',
    '体重が増えた...',
    '運動不足だな...',
    '肩こりがひどい...',
    '腰痛が...',
    '睡眠不足が続いている...',
    'ストレスで体調が...',
    '健康診断の結果が...',
    'タバコをやめたい...',
    'お酒を控えたい...',
    '運動する時間がない...',
    '体が重い...',
    '頭痛がする...',
    '目が疲れている...',
    '風邪をひきそう...',
    
    // 人生・将来系
    '将来が不安だ...',
    '人生の目標が見つからない...',
    '何のために生きているのか...',
    '老後のことが心配...',
    '貯金が増えない...',
    '夢を諦めた...',
    'やりたいことができない...',
    '時間が足りない...',
    '人生がつまらない...',
    '変わりたいけど変われない...',
    '過去を後悔している...',
    '未来が怖い...',
    '自分に自信がない...',
    '何をすべきかわからない...',
    '人生の意味を考えている...',
    
    // 笑い系・ユーモア
    '今日もお腹が空いた...',
    'コンビニ弁当、またか...',
    'エレベーターで一人だけ...',
    '電車で座れなかった...',
    '雨に降られた...',
    '財布を忘れた...',
    'スマホの充電が切れた...',
    'コーヒーをこぼした...',
    '靴紐が切れた...',
    '傘を忘れた...',
    '定期券を忘れた...',
    '昼ごはんを忘れた...',
    '会議で居眠りしそう...',
    '同僚の話が長い...',
    'エアコンの温度が合わない...',
    
    // 悲しい系・深刻
    '一人でいる時間が長い...',
    '誰も理解してくれない...',
    '孤独を感じる...',
    '生きる意味を考えている...',
    '過去の失敗が頭から離れない...',
    '自分を責めている...',
    '希望が見えない...',
    '心が重い...',
    '笑顔を作るのがつらい...',
    '人と話すのが億劫...',
    '何もしたくない...',
    '気持ちが沈んでいる...',
    '涙が出そう...',
    '誰にも言えない...',
    '一人で抱え込んでいる...',
    
    // その他・日常
    '今日も同じことの繰り返し...',
    '週末が待ち遠しい...',
    '月曜日が嫌だ...',
    '通勤ラッシュがつらい...',
    '満員電車が...',
    '朝が起きられない...',
    '夜更かししすぎた...',
    '明日も早い...',
    '休みが少ない...',
    'やりたいことができない...'
];

// グローバル変数
let clickCount = 0;
let angryCount = 0;
let praiseCount = 0;
let currentAngryIndex = -1;
const totalOjisan = 18;

// 配列をシャッフルする関数
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// おじさんタイプをランダムに生成（絵文字のみランダム）
function getRandomOjisanType(name) {
    const emoji = ojisanEmojis[Math.floor(Math.random() * ojisanEmojis.length)];
    return { emoji, name };
}

// 激怒するおじさんをランダムに選択
function selectAngryOjisan() {
    currentAngryIndex = Math.floor(Math.random() * totalOjisan);
}

// 初期化
function init() {
    const grid = document.getElementById('ojisanGrid');
    grid.innerHTML = '';
    
    // 18人の名前をシャッフルして割り当て
    const shuffledNames = shuffleArray(ojisanNames);
    
    // 18人のおじさんを生成（全員異なる名前）
    for (let i = 0; i < totalOjisan; i++) {
        const name = shuffledNames[i];
        const randomType = getRandomOjisanType(name);
        
        const ojisanDiv = document.createElement('div');
        ojisanDiv.className = 'ojisan';
        ojisanDiv.dataset.index = i;
        ojisanDiv.dataset.name = name; // 名前をデータ属性に保存
        
        const emoji = document.createElement('div');
        emoji.className = 'ojisan-emoji';
        emoji.textContent = randomType.emoji;
        
        const nameDiv = document.createElement('div');
        nameDiv.className = 'ojisan-name';
        nameDiv.textContent = name;
        
        ojisanDiv.appendChild(emoji);
        ojisanDiv.appendChild(nameDiv);
        ojisanDiv.addEventListener('click', () => handleClick(i));
        
        grid.appendChild(ojisanDiv);
    }
    
    // 統計をリセット
    clickCount = 0;
    angryCount = 0;
    praiseCount = 0;
    document.getElementById('clickCount').textContent = clickCount;
    document.getElementById('angryCount').textContent = angryCount;
    
    // ランダムに激怒するおじさんを選択
    selectAngryOjisan();
    
    // ポップアップの閉じるボタン
    document.getElementById('closePopup').addEventListener('click', closePopup);
}

// ランダムな名前を取得（自分以外）
function getRandomOtherName(currentName) {
    const otherNames = ojisanNames.filter(name => name !== currentName);
    return otherNames[Math.floor(Math.random() * otherNames.length)];
}

// クリック処理
function handleClick(index) {
    clickCount++;
    document.getElementById('clickCount').textContent = clickCount;
    
    const ojisan = document.querySelector(`[data-index="${index}"]`);
    ojisan.classList.add('clicked');
    
    setTimeout(() => {
        ojisan.classList.remove('clicked');
    }, 200);
    
    const clickedName = ojisan.querySelector('.ojisan-name').textContent;
    const randomName = getRandomOtherName(clickedName);
    
    // 激怒チェック（当たりのみ処理）
    if (index === currentAngryIndex) {
        // 25%の確率で激怒メッセージ、75%で褒め言葉
        if (Math.random() < 0.75) {
            // 25%の確率で激怒メッセージ
            angryCount++;
            document.getElementById('angryCount').textContent = angryCount;
            
            // 激怒アニメーション
            ojisan.classList.add('angry');
            ojisan.querySelector('.ojisan-emoji').textContent = '😡';
            
            // 音効果
            playAngrySound();
            
            // ポップアップ表示（激怒メッセージ）
            showAngryPopup(clickedName, randomName);
        } else {
            // 75%で褒め言葉
            praiseCount++;
            document.getElementById('angryCount').textContent = praiseCount;
            
            // 褒め言葉アニメーション（当たり）
            ojisan.classList.add('praise');
            ojisan.querySelector('.ojisan-emoji').textContent = '😊';
            
            // 音効果（褒め言葉用）
            playPraiseSound();
            
            // ポップアップ表示（褒め言葉）
            showPraisePopup(clickedName, randomName);
        }
        
        // 新しい激怒するおじさんを選択（少し遅延を入れる）
        setTimeout(() => {
            resetOjisan(index);
            selectAngryOjisan();
        }, 2000);
    } else {
        // 外れ時：独り言を表示
        const randomMonologue = monologueMessages[Math.floor(Math.random() * monologueMessages.length)];
        showMonologuePopup(clickedName, randomMonologue);
    }
}

// おじさんをリセット
function resetOjisan(index) {
    const ojisan = document.querySelector(`[data-index="${index}"]`);
    ojisan.classList.remove('angry');
    ojisan.classList.remove('praise');
    
    // 元の絵文字に戻す（名前は保持、絵文字のみ変更）
    const name = ojisan.dataset.name;
    const randomType = getRandomOjisanType(name);
    ojisan.querySelector('.ojisan-emoji').textContent = randomType.emoji;
    // 名前は変更しない（元の名前を保持）
}

// ポップアップ表示（激怒メッセージ）
function showAngryPopup(ojisanName, randomName) {
    const popup = document.getElementById('resultPopup');
    const popupContent = popup.querySelector('.popup-content');
    const popupTitle = popup.querySelector('h2');
    const message = document.getElementById('popupMessage');
    
    popupContent.classList.remove('praise');
    popupTitle.textContent = '💥 激怒！ 💥';
    const randomMessage = angryMessages[Math.floor(Math.random() * angryMessages.length)];
    message.textContent = `${ojisanName}が${randomName}に${randomMessage}`;
    
    popup.classList.add('show');
}

// ポップアップ表示（褒め言葉）
function showPraisePopup(ojisanName, randomName) {
    const popup = document.getElementById('resultPopup');
    const popupContent = popup.querySelector('.popup-content');
    const popupTitle = popup.querySelector('h2');
    const message = document.getElementById('popupMessage');
    
    popupContent.classList.add('praise');
    popupContent.classList.remove('monologue');
    popupTitle.textContent = '✨ 当たり！ ✨';
    const randomMessage = praiseMessages[Math.floor(Math.random() * praiseMessages.length)];
    message.textContent = `${ojisanName}が${randomName}に${randomMessage}`;
    
    popup.classList.add('show');
}

// ポップアップ表示（独り言）
function showMonologuePopup(ojisanName, monologue) {
    const popup = document.getElementById('resultPopup');
    const popupContent = popup.querySelector('.popup-content');
    const popupTitle = popup.querySelector('h2');
    const message = document.getElementById('popupMessage');
    
    popupContent.classList.add('monologue');
    popupContent.classList.remove('praise');
    popupTitle.textContent = '💭 独り言 💭';
    message.textContent = `${ojisanName}「${monologue}」`;
    
    popup.classList.add('show');
}

// ポップアップを閉じる
function closePopup() {
    const popup = document.getElementById('resultPopup');
    const popupContent = popup.querySelector('.popup-content');
    popup.classList.remove('show');
    popupContent.classList.remove('praise');
    popupContent.classList.remove('monologue');
}

// 激怒音効果（Web Audio APIを使用）
function playAngrySound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 200;
        oscillator.type = 'sawtooth';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
    } catch (e) {
        // 音声が再生できない場合は無視
    }
}

// 褒め言葉音効果（Web Audio APIを使用）
function playPraiseSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 400;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (e) {
        // 音声が再生できない場合は無視
    }
}

// ページ読み込み時に初期化
window.addEventListener('DOMContentLoaded', init);