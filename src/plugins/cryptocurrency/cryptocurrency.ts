export class Cryptocurrency {
    symbol: string;
    name: string;
    description: string;

    constructor(symbol: string, name: string, description: string) {
        this.symbol = symbol;
        this.name = name;
        this.description = description;
    }
}
