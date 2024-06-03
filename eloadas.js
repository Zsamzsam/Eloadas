 export class Eloadas {
    constructor(sorokSzama, helyekSzama) {
        if (sorokSzama <= 0 || helyekSzama <= 0) {
            throw new Error('ArgumentException');
        }
        this.foglalasok = Array(sorokSzama).fill().map(() => Array(helyekSzama).fill(false));
    }

    lefoglal() {
        for (let i = 0; i < this.foglalasok.length; i++) {
            for (let j = 0; j < this.foglalasok[i].length; j++) {
                if (!this.foglalasok[i][j]) {
                    this.foglalasok[i][j] = true;
                    return true;
                }
            }
        }
        return false;
    }

    get szabadHelyek() {
        let szabad = 0;
        for (let i = 0; i < this.foglalasok.length; i++) {
            for (let j = 0; j < this.foglalasok[i].length; j++) {
                if (!this.foglalasok[i][j]) {
                    szabad++;
                }
            }
        }
        return szabad;
    }

    get teli() {
        return this.szabadHelyek === 0;
    }

    foglalt(sorSzam, helySzam) {
        if (sorSzam <= 0 || helySzam <= 0 || sorSzam > this.foglalasok.length || helySzam > this.foglalasok[0].length) {
            throw new Error('ArgumentException');
        }
        return this.foglalasok[sorSzam - 1][helySzam - 1];
    }
}