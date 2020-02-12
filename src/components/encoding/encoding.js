export default class Base64 {

    static encodeBase64 = (input) => {
        const base64Keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        let output = '';
        let chr1, chr2, chr3;
        let enc1, enc2, enc3, enc4;
        
        let i = 0;

        input = this._utf8_encode(input);
        
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            
            enc1 = chr1 >> 2;
            // Берем 2 последних бита chr1 и складываем их с четырьмя из chr2
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            // Берем 4 последних бита chr2 и складываем их с двумя из chr3
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            // Берем 6 последних бит из chr3
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
            enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
            enc4 = 64;
            }

            output =
            output +
            base64Keys.charAt(enc1) +
            base64Keys.charAt(enc2) +
            base64Keys.charAt(enc3) +
            base64Keys.charAt(enc4);
        }

        return output;
    }

    static _utf8_encode = (string) => {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
    
        for (var n = 0; n < string.length; n++) {
    
            var c = string.charCodeAt(n);
    
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
    
        }
    
        return utftext;
    }

}



