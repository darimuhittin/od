// ES5 Implementation: Prototype
function InsanES5(ad) {
    this.ad = ad;
    
}

InsanES5.prototype.konus = function() {
    return this.ad + " konuşuyor... (Prototype'dan method)";
};

// ES6 Implementation: Class
class InsanES6 {
    constructor(ad) {
        this.ad = ad;
    }

    konus() {
        return `${this.ad} konuşuyor... (Class'tan method)`;
    }
}

// UI & Logic
const consoleArea = document.getElementById('console-area');

function logToConsole(message, type) {
    const entry = document.createElement('div');
    entry.className = `log-entry ${type}`;
    
    const time = new Date().toLocaleTimeString();
    entry.innerHTML = `<span class="log-time">[${time}]</span> ${message}`;
    
    // Insert after the header
    const header = consoleArea.querySelector('h3');
    header.parentNode.insertBefore(entry, header.nextSibling);
}

function createES5() {
    const input = document.getElementById('es5-input');
    const name = input.value || 'İsimsiz';
    
    // Create Instance
    const kisi = new InsanES5(name);
    
    const msg = `<strong>ES5 Nesnesi Oluşturuldu:</strong> <br> 
                 &nbsp;&nbsp;Instance: <code>${JSON.stringify(kisi)}</code> <br>
                 &nbsp;&nbsp;Method Çağrısı: "${kisi.konus()}" <br>
                 &nbsp;&nbsp;<em>(Method prototype zincirinde aranıp bulundu.)</em>`;
    
    logToConsole(msg, 'es5');
}

function createES6() {
    const input = document.getElementById('es6-input');
    const name = input.value || 'İsimsiz';
    
    // Create Instance
    const kisi = new InsanES6(name);
    
    const msg = `<strong>ES6 Nesnesi Oluşturuldu:</strong> <br>
                 &nbsp;&nbsp;Instance: <code>${JSON.stringify(kisi)}</code> <br>
                 &nbsp;&nbsp;Method Çağrısı: "${kisi.konus()}" <br>
                 &nbsp;&nbsp;<em>(Arka planda yine Prototype kullanıldı ama syntax daha temiz.)</em>`;
    
    logToConsole(msg, 'es6');
}

// Initial welcome message
logToConsole("Sistem hazır. Lütfen bir oluşturma yöntemi seçin.", "");
