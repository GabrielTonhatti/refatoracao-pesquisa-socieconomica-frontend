class Respostas {
    private _labels: Array<string>;
    private _data: Array<number>;

    public constructor() {
        this._labels = new Array<string>();
        this._data = new Array<number>();
    }

    public get labels(): Array<string> {
        return this._labels;
    }

    public set labels(value: Array<string>) {
        this._labels = value;
    }

    public get data(): Array<number> {
        return this._data;
    }

    public set data(value: Array<number>) {
        this._data = value;
    }
}

export default Respostas;
