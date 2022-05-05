# cremona

**cremona** is a module for getting books from the Chalmers store.

## Installation

```
npm i cremona
```

## Example

Below is an example of a search query. Based on testing (as there is no public documentation to be found), the query will match against any data available in the Book object - such as course codes, title, authors etc.

```javascript
import { CremonaClient, Book } from 'cremona';
const client = new CremonaClient();
const books = await client.search('TMV210');
console.log(books);
```

console.log:

```javascript
[
  Book {
    name: 'Algebra och diskret matematik',
    uid: 8899096,
    articleNumber: '9144090501',
    description: 'Boken vänder sig främst till studerande under första året på universitet eller teknisk högskola. Den är i första hand avsedd som kursbok till en inledande kurs i matematik i allmänhet och diskret matematik i synnerhet.  Materialet presenteras i den ordning som teorin byggs upp och på ett sådant sätt att inga logiska luckor uppstår. Stor vikt läggs vid att introducera läsaren till matematiskt tänkande och bevisföring.',
    price: 415,
    url: {
      en: 'https://www.chalmersstore.se/en/swedish-litterature/algebra-och-diskret-matematik.html',
      sv: 'https://www.chalmersstore.se/svensk-litteratur/algebra-och-diskret-matematik.html'
    },
    image: 'https://cdn.abicart.com/shop/22777/art77/h9096/8899096-origpic-4b50c1.jpg',
    authors: [ 'Johan Jonasson', 'Stefan Lemurell' ],
    courseCodes: [ 'TMV210', 'TMA220', 'TMV200', 'MVE070' ],
    year: 2013,
    isbn: 9789144090504,
    weight: 417,
    publisher: 'Studentlitteratur',
    edition: 2
  }
]
```

## License

This module is licensed under the **The MIT License**. Please see the [LICENSE.txt](https://github.com/emilsvennesson/dat257-xzibit/cremona/LICENSE.txt) file for details.
