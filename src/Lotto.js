export default class Lotto {
	constructor(nRows = 5, nCols = 6, nSize = 45) {
		this.nRows = nRows;
		this.nCols = nCols;
		this.nSize = nSize;

		this.matrix = new Array(nRows).fill(null).map(() => new Array(nCols));
	}

	sample() {
		if (this.nRows <= 0 || this.nCols <= 0 || this.nSize < this.nCols) {
			throw Error("Illegal Argument!!!");
		}

		for (let i = 0; i < this.matrix.length; i++) {
			const seq = Array(this.nSize)
				.fill()
				.map((_, index) => index + 1);
			for (let j = 0; j < this.matrix[i].length; j++) {
				let drawnIndex = Math.floor(seq.length * Math.random());
				this.matrix[i][j] = seq.splice(drawnIndex, 1)[0];
			}
		}
	}

	sort() {
		this.matrix.forEach((row) => row.sort((a, b) => a - b));
	}

	matrixToString() {
		const fig = Math.floor(Math.log10(this.nSize)) + 1;
		const pad = (n) => {
			n += "";
			return n.length >= fig ? n : new Array(fig - n.length + 1).join("0") + n;
		};

		return this.matrix.map((row) => row.map(pad).join(" ")).join("\n");
	}

	str() {
		try {
			this.sample();
			this.sort();
			return this.matrixToString();
		} catch (e) {
			return "" + e;
		}
	}
}
