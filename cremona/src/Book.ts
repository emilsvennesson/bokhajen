export class Book {
  readonly name: string;
  readonly uid: number;
  readonly articleNumber: number;
  readonly price: number;
  readonly url: string[];
  readonly image: string;
  readonly weight: number;
  readonly description?: string;
  readonly courseCodes?: string[];
  readonly authors?: string[];
  readonly isbn?: number;
  readonly year?: number;
  readonly publisher?: string;
  readonly edition?: number;

  constructor(props: { [key: string]: any }) {
    this.name = props.name.sv;
    this.uid = props.uid;
    this.articleNumber = parseInt(props.articleNumber);
    try {
      this.description = props.description.sv.replace(/(<([^>]+)>)/gi, ' '); // strip out HTML tags
    } catch (error) {}
    this.price = props.price.current.SEK;
    this.url = props.url;
    this.image = props.images[0];
    this.weight = props.weight;
    if (props['attributes'][1357] !== undefined) {
      this.authors = props['attributes'][1357]['sv']
        .replace(', ', ',')
        .split(',');
    } else if (props['attributes'][2513] !== undefined) {
      this.authors = props['attributes'][2513]['sv']
        .replace(', ', ',')
        .split(',');
    }
    if (props['attributes'][1424] !== undefined)
      // convert string of course codes to list
      this.courseCodes = props['attributes'][1424]['sv']
        .replace(/ /g, '')
        .split(',');
    if (props['attributes'][1422] !== undefined)
      this.year = parseInt(props['attributes'][1422]['sv']);
    if (props.ean) this.isbn = parseInt(props.ean);
    if (props['attributes'][1420] !== undefined)
      this.publisher = props['attributes'][1420]['sv'];
    if (props['attributes'][1421] !== undefined)
      this.edition = parseInt(props['attributes'][1421]['sv']);
  }
}
