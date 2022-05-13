import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Book, CremonaClient } from 'cremona';
import { useEffect, useState } from 'react';
import { Advert } from '../../services/Advert';

interface Props {
  ad?: Advert;
}

const client = new CremonaClient();

export default function AccountAdsAccordion({ ad }: Props) {
  const [book, setBook] = useState<Book | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getBook = async () => {
      setLoading(true);
      let cBooks: Book[] = [];
      try {
        if (ad) cBooks = await client.getBook(parseInt(ad?.bookId, 10));
      } catch (e) {
        // do some cringe
      }
      if (cBooks[0]) {
        // do some cringe
        setBook(cBooks[0]);
      }
      setLoading(false);
    };
    getBook();
  }, [ad]);
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {!loading && book && <Typography>{book.name}</Typography>}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
