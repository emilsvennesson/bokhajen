# cremona #
**cremona** is a small library for getting books from the Chalmers store.

## Installation ##
```
npm i cremona
```


## Example ##
```javascript
import Client from 'cremona';

const client = new Client();
const books = await client.search('algebra och diskret matematik');
console.log(books);
client.close();
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
      courseCodes: [ 'TMV210', 'TMA220', 'TMV200', 'MVE070' ],
      authors: [ 'Johan Jonasson', 'Stefan Lemurell' ],
      year: 2013,
      isbn: 9789144090504,
      weight: 417
    }
  ]
  ```


## License ##
This module is licensed under the **The MIT License**. Please see the [LICENSE.txt](LICENSE.txt) file for details.