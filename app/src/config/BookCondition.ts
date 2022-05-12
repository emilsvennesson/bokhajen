export enum BookCondition {
  EXCELLENT = 'Utmärkt skick',
  GOOD = 'Bra skick',
  BAD = 'Slitet skick',
}

export function getBookConditionDescription(condition: BookCondition): string {
  switch (condition) {
    case BookCondition.EXCELLENT:
      return 'Boken har använts med försiktighet och saknar helt överstrykningar och anteckningar. Boken är som ny men omslaget kan vara lätt nött.';
    case BookCondition.GOOD:
      return 'Boken kan innehålla en del överstrykningar eller anteckningar. Omslaget kan vara något kantstött men boken är generellt i bra skick.';
    case BookCondition.BAD:
      return 'Boken kan vara fylld av överstrykningar eller anteckningar. Omslaget kan vara slitet men boken är fullt läsbar och inga sidor saknas.';
    default:
      return '';
  }
}
