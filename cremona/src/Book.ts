export class Book {
    readonly name: string;
    readonly uid: number;
    readonly articleNumber: string;
    readonly description: string;
    readonly price: number;
    readonly url: string[];
    readonly image: string;
    readonly courseCodes: string[];
    readonly authors: string[];
    readonly isbn: number;
    readonly weight: number;
    readonly year: number;

    constructor(props) {
        this.name = props.name.sv;
        this.uid = props.uid;
        this.articleNumber = props.articleNumber;
        this.description = props.description.sv.replace(/(<([^>]+)>)/gi, ' ');  // strip out HTML tags
        this.price = props.price.current.SEK;
        this.url = props.url;
        this.image = props.images[0];
        props['attributes'][1424] !== undefined ? // convert string of course codes to list
            this.courseCodes = props['attributes'][1424]['sv'].replace(/ /g, '').split(',') :
            this.courseCodes = [];
        props['attributes'][1357] !== undefined ?
            this.authors = props['attributes'][1357]['sv'].replace(', ', ',').split(',') :
            this.authors = [];
        props['attributes'][1422] !== undefined ?
            this.year = parseInt(props['attributes'][1422]['sv']) :
            this.year = null;
        this.isbn = parseInt(props.ean);
        this.weight = props.weight;
    }
}
