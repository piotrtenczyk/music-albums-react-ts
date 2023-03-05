import React from "react";
import { HPP } from "../common/HomePageParagraph";
import Album from "../common/musicAlbum/Album";

function HomePage() {
  const description = {
    title: "tytul",
    artist: "zenekMartyniuk",
    price: 0,
  };

  const coverImageFromMichal =
    "https://upload.wikimedia.org/wikipedia/commons/8/8e/Zenon_Martyniuk_%28member_of_Polish_band_Akcent%29_2018.jpg";

  const coverImageFromGrzegorz =
    "https://s3.viva.pl/newsy/zenek-martyniuk-jamnik-484850-GALLERY_BIG.jpg";

  return (
    <div className="App">
      <HPP>
        Checkout out our music albums. These are the top albums on iTunes at the
        moment. If you like any of them, feel free to add them to a shopping
        cart.
      </HPP>
      <HPP>
        Also have a look at our hand picked favourites (we often run some good
        discounts on those).
      </HPP>
      <HPP>Michał P. podał nam taki ciekawy album:</HPP>
      <Album
        id="-1"
        number={1}
        coverImageUrl={coverImageFromMichal}
        description={{ ...description, price: 0.01 }}
      />
      <HPP>Druga wersja:</HPP>

      <Album
        id="-2"
        number={2}
        coverImageUrl={coverImageFromGrzegorz}
        description={description}
        discountValue={100}
      />

      <HPP>Konkurs Albumow do testu:</HPP>
      <Album
        id={"konkursowe123"}
        number={666}
        coverImageUrl={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzSYue0zcxM7U9CuARMA-hFEcxkL9F_Gldg&usqp=CAU"
        }
        description={{ title: "Placz Kotku", artist: "Behemot", price: 666 }}
      />

      <Album
        id={"konkursowe123"}
        number={666}
        coverImageUrl={"https://m.media-amazon.com/images/I/614ub5HQC2L.jpg"}
        description={{ title: "Placz Kotku", artist: "Behemot", price: 666 }}
      />

      <Album
        id="MojKochanyZenus <3"
        number={1}
        coverImageUrl={
          "https://radekpusko.pl/wp-content/uploads/2017/03/Zenek-Martyniuk.jpg"
        }
        description={{
          title: "Ach jak tesknie",
          artist: "Zenon Martyniuk",
          price: 0,
        }}
      />

      <Album
        id={"12223"}
        number={1}
        coverImageUrl={
          "https://rd.com/wp-content/uploads/2020/12/GettyImages-78777891-scaled.jpg"
        }
        description={{
          title: "Open for new knowledge",
          artist: "Developer ",
          price: 9.99,
        }}
      />
      <Album
        id={"Phoebe"}
        number={1}
        coverImageUrl={
          "https://www.nicepng.com/png/detail/397-3972078_poster-smelly-cat-smelly-cat-friends.png"
        }
        description={{
          title: "Smelly cat",
          artist: "Phoebe Buffay",
          price: 10,
        }}
      />
    </div>
  );
}

export default HomePage;
