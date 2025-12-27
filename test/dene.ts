class Insan {

    
    isim: string;
    yas: number;
    cinsiyet: string;

    constructor(isim: string, yas: number, cinsiyet: string) {
        this.isim = isim;
        this.yas = yas;
        this.cinsiyet = cinsiyet;
    }
}

const mustafa = new Insan("Mustafa", 25, "Erkek");
console.log(mustafa);