export default class Lotto {    
    constructor(nRows = 5, nCols = 6, nSize = 45) {
        this.nRows = nRows;
        this.nCols = nCols;
        this.nSize = nSize;

        this.lottoMatrix = new Array(nRows);
        for (let i = 0; i < this.lottoMatrix.length; i++)
            this.lottoMatrix[i] = new Array(nCols);
    }       

    sample() {
        if (this.nRows <= 0 || this.nCols <= 0 || this.nSize < this.nCols) {    
            throw Error('Illegal Argument!!!');
        }
        
        for (let i = 0; i < this.lottoMatrix.length; i++) {
            let initSeq = Array(this.nSize).fill().map((_, index) => index + 1);
            for (let j = 0; j < this.lottoMatrix[i].length; j++)
                this.lottoMatrix[i][j] = initSeq.splice(
                    Math.floor(initSeq.length * Math.random()), 1)[0];
        }        
    }
    
    sort() {
        for (const aRow of this.lottoMatrix) {
            aRow.sort((first, second) => first - second);
        }        
    }

    matrixToString() {
        const fig = Math.floor(Math.log10(this.nSize)) + 1;
        const pad = (n, fig) => {
            n += '';
            return n.length >= fig ? n : new Array(fig - n.length + 1).join('0') + n;
        }
        
        return this.lottoMatrix
            .map(aRow => aRow.map(num => pad(num, fig)).join(' ')).join('\n');        
    }

    getLottoString() {
        try {
            this.sample();
            this.sort();
            return this.matrixToString();
        }
        catch (e) {
            return '' + e;
        }        
    }

    logB(base, x) {
        return Math.log(x) / Math.log(base);
    }    
}
