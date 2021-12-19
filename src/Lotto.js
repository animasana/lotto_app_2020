export default class Lotto {    
    constructor(nRows = 5, nCols = 6, nSize = 45) {
        this.nRows = nRows;
        this.nCols = nCols;
        this.nSize = nSize;

        /*
        this.lottoMatrix = new Array(nRows);
        for (let i = 0; i < this.lottoMatrix.length; i++)
            this.lottoMatrix[i] = new Array(nCols);
        */
        this.lottoMatrix = new Array(nRows).fill(null).map(() => new Array(nCols));        
    }       

    sample() {
        if (this.nRows <= 0 || this.nCols <= 0 || this.nSize < this.nCols) {    
            throw Error('Illegal Argument!!!');
        }
        
        for (let i = 0; i < this.lottoMatrix.length; i++) {
            const initSeq = Array(this.nSize).fill().map((_, index) => index + 1);
            for (let j = 0; j < this.lottoMatrix[i].length; j++) {
                let drawnIndex = Math.floor(initSeq.length * Math.random());
                this.lottoMatrix[i][j] = initSeq.splice(drawnIndex, 1)[0];
            }
        }        
    }
    
    sort() {
        this.lottoMatrix.forEach(aRow => aRow.sort((a, b) => a - b));
    }

    matrixToString() {
        const fig = Math.floor(Math.log10(this.nSize)) + 1;
        const pad = (n, fig) => {
            n += '';
            return n.length >= fig ? n : new Array(fig - n.length + 1).join('0') + n;
        }
        
        return this.lottoMatrix.map(aRow => aRow.map(num => pad(num, fig)).join(' ')).join('\n');        
    }

    str() {
        try {
            this.sample();
            this.sort();
            return this.matrixToString();
        }
        catch (e) {
            return '' + e;
        }        
    }
}