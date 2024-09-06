function convertLetter(letter) {
    const dakutenMap = {
        'が': 'か', 'ぎ': 'き', 'ぐ': 'く', 'げ': 'け', 'ご': 'こ',
        'ざ': 'さ', 'じ': 'し', 'ず': 'す', 'ぜ': 'せ', 'ぞ': 'そ',
        'だ': 'た', 'ぢ': 'ち', 'づ': 'つ', 'で': 'て', 'ど': 'と',
        'ば': 'は', 'び': 'ひ', 'ぶ': 'ふ', 'べ': 'へ', 'ぼ': 'ほ',
        'ガ': 'カ', 'ギ': 'キ', 'グ': 'ク', 'ゲ': 'ケ', 'ゴ': 'コ',
        'ザ': 'サ', 'ジ': 'シ', 'ズ': 'ス', 'ゼ': 'セ', 'ゾ': 'ソ',
        'ダ': 'タ', 'ヂ': 'チ', 'ヅ': 'ツ', 'デ': 'テ', 'ド': 'ト',
        'バ': 'ハ', 'ビ': 'ヒ', 'ブ': 'フ', 'ベ': 'ヘ', 'ボ': 'ホ'
    };
    
    const handakutenMap = {
        'ぱ': 'は', 'ぴ': 'ひ', 'ぷ': 'ふ', 'ぺ': 'へ', 'ぽ': 'ほ',
        'パ': 'ハ', 'ピ': 'ヒ', 'プ': 'フ', 'ペ': 'ヘ', 'ポ': 'ホ'
    };
    
    const alphanumericAndSymbolsMap = {
        'a': 'a________', 'b': 'b________', 'c': 'c________', 'd': 'd________', 'e': 'e________',
        'f': 'f________', 'g': 'g________', 'h': 'h________', 'i': 'i________', 'j': 'j________',
        'k': 'k________', 'l': 'l________', 'm': 'm________', 'n': 'n________', 'o': 'o________',
        'p': 'p________', 'q': 'q________', 'r': 'r________', 's': 's________', 't': 't________',
        'u': 'u________', 'v': 'v________', 'w': 'w________', 'x': 'x________', 'y': 'y________',
        'z': 'z________', '0': '0________', '1': '1________', '2': '2________', '3': '3________',
        '4': '4________', '5': '5________', '6': '6________', '7': '7________', '8': '8________',
        '9': '9________', '+': '+________',
        'A': 'a________big', 'B': 'b________big', 'C': 'c________big', 'D': 'd________big',
        'E': 'e________big', 'F': 'f________big', 'G': 'g________big', 'H': 'h________big',
        'I': 'i________big', 'J': 'j________big', 'K': 'k________big', 'L': 'l________big',
        'M': 'm________big', 'N': 'n________big', 'O': 'o________big', 'P': 'p________big',
        'Q': 'q________big', 'R': 'r________big', 'S': 's________big', 'T': 't________big',
        'U': 'u________big', 'V': 'v________big', 'W': 'w________big', 'X': 'x________big',
        'Y': 'y________big', 'Z': 'z________big'
    };

    const smallHiraganaToLarge = {
        'ぁ': 'あ', 'ぃ': 'い', 'ぅ': 'う', 'ぇ': 'え', 'ぉ': 'お',
        'ゃ': 'や', 'ゅ': 'ゆ', 'ょ': 'よ', 'っ': 'つ', 'ゎ': 'わ',
        'ゐ': 'い', 'ゑ': 'え', 'ゝ': 'い', 'ゞ': 'い', 'ゟ': 'い'
    };

    const kanjiMap = {
        '握': '握________', // 例として追加
        // 他の漢字の変換ルールをここに追加
    };

    // 空白の変換ルール（全角と半角）
    const spaceMap = {
        ' ': '-________', // 半角スペースを修正
        '　': '-________' // 全角スペース
    };
    
    // 空白の場合の処理
    if (spaceMap[letter]) {
        return spaceMap[letter];
    }

    // 小さいひらがなを大きなひらがなに変換
    if (smallHiraganaToLarge[letter]) {
        letter = smallHiraganaToLarge[letter];
    }

    if (kanjiMap[letter]) {
        return kanjiMap[letter];
    } else if (dakutenMap[letter]) {
        return dakutenMap[letter] + '________' + 'ten';
    } else if (handakutenMap[letter]) {
        return handakutenMap[letter] + '________' + 'maru';
    } else if (alphanumericAndSymbolsMap[letter]) {
        return alphanumericAndSymbolsMap[letter];
    } else {
        return letter + '________';
    }
}

function addColonsToEach(text) {
    return text.split('').map(char => `:${convertLetter(char)}:`).join('');
}

function convertText() {
    const inputText = document.getElementById('inputText').value;
    const normalizedText = inputText.replace(/\n/g, '');
    const outputText = addColonsToEach(normalizedText);
    document.getElementById('outputText').value = ':' + outputText.slice(1, -1) + ':';
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
}
