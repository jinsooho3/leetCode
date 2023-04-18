/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(w1, w2) {
    let answer = '';
    const minLen = Math.min(w1.length, w2.length);
    for (let i = 0; i < minLen; i++) {
        answer += w1[i] + w2[i];
    }
    if (w1.length > w2.length) {
        answer += w1.slice(minLen);
    } else if (w2.length > w1.length) {
        answer += w2.slice(minLen);
    }
    return answer;
};
