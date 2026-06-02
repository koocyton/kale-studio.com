/** AES-256-CBC，与 App lookonpc_crypto.dart 对齐：Base64URL(IV16 || ciphertext) */
window.LookonpcCrypto = (function () {
  const IV_LEN = 16;
  const KEY_LEN = 32;

  function base64UrlToBytes(s) {
    var t = String(s).replace(/-/g, '+').replace(/_/g, '/');
    while (t.length % 4) t += '=';
    var bin = atob(t);
    var out = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }

  function bytesToBase64Url(bytes) {
    var bin = '';
    bytes.forEach(function (b) { bin += String.fromCharCode(b); });
    return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }

  function generateSessionKeyBytes() {
    var key = new Uint8Array(KEY_LEN);
    crypto.getRandomValues(key);
    return key;
  }

  function importAesKey(keyBytes) {
    if (keyBytes.length !== KEY_LEN) {
      return Promise.reject(new Error('invalid key length'));
    }
    return crypto.subtle.importKey('raw', keyBytes, { name: 'AES-CBC' }, false, ['decrypt']);
  }

  function decryptPayload(keyBytes, dataB64) {
    return importAesKey(keyBytes).then(function (cryptoKey) {
      var raw = base64UrlToBytes(dataB64);
      if (raw.length <= IV_LEN) throw new Error('ciphertext too short');
      var iv = raw.slice(0, IV_LEN);
      var ct = raw.slice(IV_LEN);
      return crypto.subtle.decrypt({ name: 'AES-CBC', iv: iv }, cryptoKey, ct);
    }).then(function (buf) {
      return new TextDecoder('utf-8', { fatal: false }).decode(buf);
    });
  }

  return {
    IV_LEN: IV_LEN,
    KEY_LEN: KEY_LEN,
    base64UrlToBytes: base64UrlToBytes,
    bytesToBase64Url: bytesToBase64Url,
    generateSessionKeyBytes: generateSessionKeyBytes,
    decryptPayload: decryptPayload,
  };
})();
