import { Box, Container } from '@mui/material';
import { Book } from 'cremona/dist/Book';
import BookDetailViewDescription from './BookDetailViewDescription';

interface Props {
  newBook: Book;
}

export default function BookDetailView({ newBook }: Props) {
  const book: Book = newBook;
  return (
    <Box sx={{ display: 'flex', flexGrow: 0, flexDirection: 'row' }}>
      <Container sx={{ flexGrow: 1 }}>
        <BookDetailViewDescription newBook={book} />
      </Container>
      <Container sx={{ flexGrow: 1 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Porta lorem mollis
        aliquam ut. Aliquam etiam erat velit scelerisque in. Felis donec et odio
        pellentesque diam volutpat commodo. Sed turpis tincidunt id aliquet
        risus feugiat in ante metus. Eu sem integer vitae justo eget magna
        fermentum iaculis. Magna ac placerat vestibulum lectus mauris. Nunc sed
        augue lacus viverra vitae. Cursus risus at ultrices mi tempus imperdiet.
        Velit dignissim sodales ut eu. Gravida arcu ac tortor dignissim
        convallis aenean et tortor. Sed arcu non odio euismod. Mauris augue
        neque gravida in fermentum et sollicitudin ac. Nulla porttitor massa id
        neque. Turpis in eu mi bibendum neque. Nisl rhoncus mattis rhoncus urna
        neque viverra justo nec. Scelerisque felis imperdiet proin fermentum
        leo. Eros donec ac odio tempor orci dapibus ultrices. Urna et pharetra
        pharetra massa massa ultricies mi quis hendrerit. Orci phasellus egestas
        tellus rutrum tellus pellentesque. Risus commodo viverra maecenas
        accumsan lacus. Dignissim enim sit amet venenatis urna cursus eget nunc.
        Velit euismod in pellentesque massa placerat. Posuere urna nec tincidunt
        praesent semper feugiat nibh sed pulvinar. Blandit aliquam etiam erat
        velit. Et magnis dis parturient montes nascetur ridiculus mus mauris.
        Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet
        consectetur. Proin sagittis nisl rhoncus mattis rhoncus urna neque
        viverra justo. Sed risus pretium quam vulputate dignissim suspendisse in
        est ante. In eu mi bibendum neque egestas congue quisque. Leo integer
        malesuada nunc vel. Enim lobortis scelerisque fermentum dui faucibus in.
        Amet massa vitae tortor condimentum lacinia quis vel eros. Vel orci
        porta non pulvinar neque. Arcu cursus vitae congue mauris rhoncus aenean
        vel elit scelerisque. Amet nulla facilisi morbi tempus iaculis urna id
        volutpat lacus. Lectus urna duis convallis convallis. Turpis in eu mi
        bibendum neque egestas congue quisque egestas. Hendrerit gravida rutrum
        quisque non. Ac ut consequat semper viverra nam. Tincidunt praesent
        semper feugiat nibh sed pulvinar proin gravida hendrerit. Arcu cursus
        euismod quis viverra nibh cras pulvinar mattis nunc. Habitant morbi
        tristique senectus et netus et. Ipsum nunc aliquet bibendum enim
        facilisis gravida neque convallis a. At tellus at urna condimentum. Sem
        integer vitae justo eget magna fermentum. Tellus orci ac auctor augue
        mauris. Feugiat sed lectus vestibulum mattis ullamcorper velit. Lectus
        magna fringilla urna porttitor rhoncus dolor purus. Proin nibh nisl
        condimentum id venenatis a condimentum. A scelerisque purus semper eget
        duis at tellus. Tristique nulla aliquet enim tortor at auctor. Est velit
        egestas dui id ornare arcu odio ut sem. Leo integer malesuada nunc vel
        risus commodo viverra maecenas accumsan. Ac feugiat sed lectus
        vestibulum mattis ullamcorper velit. Et netus et malesuada fames ac
        turpis egestas. Ut etiam sit amet nisl purus in mollis. Erat nam at
        lectus urna duis convallis. Posuere urna nec tincidunt praesent semper
        feugiat nibh sed pulvinar. Nibh mauris cursus mattis molestie a iaculis
        at erat. Id diam maecenas ultricies mi eget. Ut faucibus pulvinar
        elementum integer enim neque volutpat. Egestas tellus rutrum tellus
        pellentesque eu tincidunt tortor aliquam nulla. Faucibus ornare
        suspendisse sed nisi lacus. Diam vel quam elementum pulvinar etiam non.
        Pellentesque habitant morbi tristique senectus. Ac felis donec et odio
        pellentesque diam. Enim tortor at auctor urna. Nibh mauris cursus mattis
        molestie a. Dolor sed viverra ipsum nunc aliquet bibendum enim
        facilisis. Cursus sit amet dictum sit amet justo donec enim. Erat
        imperdiet sed euismod nisi porta. Fermentum dui faucibus in ornare quam
        viverra orci sagittis eu. Consequat semper viverra nam libero. Faucibus
        vitae aliquet nec ullamcorper sit amet. Netus et malesuada fames ac
        turpis egestas sed tempus. Aliquam etiam erat velit scelerisque in
        dictum non consectetur. Sit amet aliquam id diam maecenas ultricies.
        Erat imperdiet sed euismod nisi porta. Aliquam etiam erat velit
        scelerisque in dictum non consectetur a. Scelerisque eu ultrices vitae
        auctor eu augue ut. Vestibulum mattis ullamcorper velit sed ullamcorper
        morbi. Augue ut lectus arcu bibendum at varius vel pharetra vel.
        Volutpat commodo sed egestas egestas fringilla phasellus faucibus
        scelerisque eleifend. Sodales ut etiam sit amet. Feugiat scelerisque
        varius morbi enim nunc faucibus. Porta nibh venenatis cras sed. Risus at
        ultrices mi tempus imperdiet nulla malesuada pellentesque. Id venenatis
        a condimentum vitae sapien. Aenean sed adipiscing diam donec adipiscing
        tristique risus. Magna fermentum iaculis eu non diam. Ante in nibh
        mauris cursus mattis molestie. Et malesuada fames ac turpis egestas sed
        tempus urna et. Ultrices eros in cursus turpis massa. Dolor morbi non
        arcu risus quis varius quam quisque. Dictumst vestibulum rhoncus est
        pellentesque elit. Ac auctor augue mauris augue neque gravida. Sed
        euismod nisi porta lorem mollis aliquam. Auctor neque vitae tempus quam
        pellentesque nec nam. Lobortis elementum nibh tellus molestie nunc non.
        Vel fringilla est ullamcorper eget nulla. Arcu bibendum at varius vel
        pharetra. Euismod nisi porta lorem mollis aliquam. Vitae congue mauris
        rhoncus aenean vel elit scelerisque mauris. Aenean pharetra magna ac
        placerat vestibulum. Porta nibh venenatis cras sed felis eget velit
        aliquet sagittis. Vel quam elementum pulvinar etiam non quam lacus
        suspendisse faucibus. Placerat vestibulum lectus mauris ultrices eros in
        cursus turpis massa. Vel orci porta non pulvinar neque laoreet
        suspendisse interdum consectetur. At volutpat diam ut venenatis tellus.
        Tortor vitae purus faucibus ornare suspendisse sed. Consectetur a erat
        nam at lectus urna duis convallis convallis. Arcu cursus euismod quis
        viverra nibh cras. Auctor augue mauris augue neque gravida in. Duis at
        tellus at urna. Massa id neque aliquam vestibulum morbi blandit cursus
        risus at. Ornare aenean euismod elementum nisi. Molestie ac feugiat sed
        lectus vestibulum mattis ullamcorper velit sed. Mauris pharetra et
        ultrices neque. Vestibulum rhoncus est pellentesque elit ullamcorper
        dignissim cras tincidunt. Eget felis eget nunc lobortis mattis aliquam.
        Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Magna
        sit amet purus gravida quis. Vitae justo eget magna fermentum iaculis eu
        non diam. Ac turpis egestas integer eget aliquet nibh praesent. Nec
        ullamcorper sit amet risus nullam eget felis eget nunc. Fames ac turpis
        egestas maecenas pharetra convallis posuere morbi. Ut enim blandit
        volutpat maecenas. A lacus vestibulum sed arcu non. Id volutpat lacus
        laoreet non curabitur gravida arcu. Sagittis id consectetur purus ut
        faucibus. Malesuada proin libero nunc consequat interdum varius sit
        amet. Ac turpis egestas sed tempus urna. Habitasse platea dictumst
        quisque sagittis. Eget duis at tellus at urna condimentum mattis
        pellentesque. Donec massa sapien faucibus et molestie ac. Justo eget
        magna fermentum iaculis. Semper viverra nam libero justo laoreet sit.
        Eros in cursus turpis massa tincidunt dui. Ante in nibh mauris cursus.
        Velit scelerisque in dictum non consectetur a. Mauris ultrices eros in
        cursus turpis massa tincidunt dui. Lectus magna fringilla urna porttitor
        rhoncus dolor purus. Eu nisl nunc mi ipsum. Pellentesque adipiscing
        commodo elit at imperdiet. Aliquam eleifend mi in nulla posuere
        sollicitudin aliquam ultrices sagittis. Blandit volutpat maecenas
        volutpat blandit aliquam etiam erat velit scelerisque. Blandit massa
        enim nec dui nunc mattis enim ut. Tortor vitae purus faucibus ornare.
        Est ullamcorper eget nulla facilisi etiam. Maecenas pharetra convallis
        posuere morbi leo urna molestie at. Risus at ultrices mi tempus
        imperdiet nulla malesuada pellentesque elit. Arcu non odio euismod
        lacinia. Semper eget duis at tellus at urna condimentum. Ac tortor vitae
        purus faucibus ornare suspendisse. A iaculis at erat pellentesque.
        Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Phasellus
        faucibus scelerisque eleifend donec. Cursus vitae congue mauris rhoncus
        aenean. Id consectetur purus ut faucibus pulvinar elementum integer. Sit
        amet dictum sit amet justo donec enim. Lacus vel facilisis volutpat est
        velit egestas dui. Suspendisse interdum consectetur libero id faucibus
        nisl. Arcu risus quis varius quam quisque id diam. Convallis a cras
        semper auctor neque vitae tempus quam pellentesque. Turpis in eu mi
        bibendum neque. In fermentum posuere urna nec. Sit amet risus nullam
        eget felis eget nunc. Purus gravida quis blandit turpis cursus in hac
        habitasse. Quam lacus suspendisse faucibus interdum posuere. Quis
        commodo odio aenean sed adipiscing diam donec adipiscing tristique.
        Tortor condimentum lacinia quis vel eros. Tristique senectus et netus et
        malesuada fames ac turpis. Sed cras ornare arcu dui vivamus arcu felis
        bibendum. Nec dui nunc mattis enim ut tellus elementum sagittis.
        Habitasse platea dictumst vestibulum rhoncus est pellentesque elit
        ullamcorper dignissim. Porta nibh venenatis cras sed felis eget. Sit
        amet cursus sit amet dictum sit. Etiam sit amet nisl purus in mollis.
        Eget nulla facilisi etiam dignissim diam quis enim lobortis. Tempor orci
        dapibus ultrices in iaculis nunc sed. Consectetur adipiscing elit ut
        aliquam purus sit amet luctus. Metus aliquam eleifend mi in nulla
        posuere sollicitudin aliquam. Mauris sit amet massa vitae tortor
        condimentum lacinia quis vel. Sed blandit libero volutpat sed cras
        ornare arcu dui vivamus. Scelerisque fermentum dui faucibus in ornare
        quam. At lectus urna duis convallis convallis. Dolor magna eget est
        lorem ipsum dolor. Adipiscing elit duis tristique sollicitudin nibh sit
        amet commodo nulla. Senectus et netus et malesuada fames ac. Neque
        volutpat ac tincidunt vitae semper quis lectus nulla. Urna condimentum
        mattis pellentesque id nibh tortor id. Ultrices dui sapien eget mi
        proin. Ac tortor dignissim convallis aenean. Semper auctor neque vitae
        tempus. Et tortor at risus viverra adipiscing at in. Purus non enim
        praesent elementum facilisis leo. Auctor eu augue ut lectus arcu
        bibendum at varius vel. Id semper risus in hendrerit gravida rutrum
        quisque. Vulputate ut pharetra sit amet aliquam id diam maecenas. A
        pellentesque sit amet porttitor eget. Sem nulla pharetra diam sit amet.
        Justo eget magna fermentum iaculis eu. Lorem ipsum dolor sit amet.
        Consectetur adipiscing elit duis tristique sollicitudin. Gravida quis
        blandit turpis cursus. Diam in arcu cursus euismod. Pellentesque diam
        volutpat commodo sed egestas egestas. Ut aliquam purus sit amet luctus
        venenatis lectus magna. Condimentum lacinia quis vel eros donec ac odio
        tempor. Malesuada bibendum arcu vitae elementum. Commodo odio aenean sed
        adipiscing. Diam donec adipiscing tristique risus nec feugiat in. Donec
        et odio pellentesque diam volutpat commodo sed. Egestas sed tempus urna
        et pharetra. Vulputate ut pharetra sit amet aliquam id diam maecenas.
        Dui ut ornare lectus sit amet est placerat in egestas. Tristique
        sollicitudin nibh sit amet. Ut consequat semper viverra nam libero
        justo. Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi.
        Facilisi morbi tempus iaculis urna id volutpat. Risus pretium quam
        vulputate dignissim suspendisse. Quisque non tellus orci ac auctor.
        Aliquet risus feugiat in ante metus. Enim ut sem viverra aliquet. Varius
        duis at consectetur lorem donec massa sapien faucibus et. Congue nisi
        vitae suscipit tellus mauris a diam maecenas. Aliquam malesuada bibendum
        arcu vitae elementum curabitur vitae nunc. Amet volutpat consequat
        mauris nunc congue nisi vitae suscipit. Mauris rhoncus aenean vel elit
        scelerisque mauris pellentesque pulvinar. Sem integer vitae justo eget
        magna fermentum. Justo donec enim diam vulputate ut pharetra sit amet
        aliquam. Consectetur a erat nam at lectus. Sodales ut etiam sit amet.
        Non quam lacus suspendisse faucibus. Non quam lacus suspendisse faucibus
        interdum posuere lorem ipsum. Elit sed vulputate mi sit amet. Nisi porta
        lorem mollis aliquam ut porttitor leo. Adipiscing diam donec adipiscing
        tristique risus nec. Ullamcorper morbi tincidunt ornare massa eget
        egestas purus. Id aliquet risus feugiat in ante metus dictum at. Purus
        semper eget duis at tellus at urna. Tristique senectus et netus et
        malesuada fames. Scelerisque eleifend donec pretium vulputate sapien nec
        sagittis aliquam malesuada. Id nibh tortor id aliquet lectus proin nibh
        nisl. Non sodales neque sodales ut etiam. Feugiat pretium nibh ipsum
        consequat. Etiam tempor orci eu lobortis elementum nibh tellus molestie
        nunc. Sem viverra aliquet eget sit amet. Suscipit adipiscing bibendum
        est ultricies integer quis auctor. Nunc vel risus commodo viverra
        maecenas. Velit sed ullamcorper morbi tincidunt ornare massa. Tellus at
        urna condimentum mattis. Leo a diam sollicitudin tempor. Amet
        consectetur adipiscing elit pellentesque habitant. Gravida arcu ac
        tortor dignissim convallis aenean et. Vitae proin sagittis nisl rhoncus
        mattis. Enim tortor at auctor urna nunc id cursus metus. Neque vitae
        tempus quam pellentesque nec nam aliquam sem. Commodo quis imperdiet
        massa tincidunt nunc pulvinar. Eros donec ac odio tempor orci. Donec et
        odio pellentesque diam volutpat. Nulla facilisi etiam dignissim diam
        quis enim lobortis. Phasellus faucibus scelerisque eleifend donec
        pretium vulputate. Tristique sollicitudin nibh sit amet commodo nulla
        facilisi nullam. Vitae semper quis lectus nulla at volutpat. Sed
        elementum tempus egestas sed sed risus pretium quam. Vitae auctor eu
        augue ut lectus arcu bibendum. Nibh tellus molestie nunc non. Est velit
        egestas dui id ornare. Fringilla urna porttitor rhoncus dolor purus non
        enim. Imperdiet sed euismod nisi porta lorem mollis aliquam. Amet mauris
        commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Nunc sed id
        semper risus. Massa placerat duis ultricies lacus. Adipiscing at in
        tellus integer feugiat. Volutpat est velit egestas dui id ornare arcu.
      </Container>
    </Box>
  );
}
