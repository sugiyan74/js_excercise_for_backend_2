const axios = require('axios').default;
const APIURL = 'https://opentdb.com/api.php?amount=10';

(async() => {
    try {
        const response = await axios.get(APIURL);
        const results = response.data.results;
        console.log('クイズデータ:', results);
    } catch {
        console.log('エラーメッセージ', error.message)
    }
})();