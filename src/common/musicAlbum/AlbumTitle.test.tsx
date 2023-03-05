import { render, RenderResult } from "@testing-library/react";
import AlbumTitle from "./AlbumTitle";

describe("AlbumTitle.tsx", () => {
  it("render result maches snapshot", () => {
    // Chcemy sprawdzic czy component <AlbumTitle /> sie wogole wyswietla
    //    Pytanie 1: Jak uzywamy AlbumTitle    Odp: <AlbumTitle>xxx</AlbumTitle>
    //    Pytanie 2: Czego mam oczekiwac po wyswietleniu <AlbumTitle>xxx</AlbumTitle> ?
    //      a) xxx
    //      b) <p>xxx</p>
    //      c) <div></div>
    //      d) <div>xxx</div>  (chyba prawidlowa odpowiedz :)

    // Problem: Musimy dac testowi mozliwosc wyswietlenia komponentu, niezaleznie od srodowiska, w ktorym jest odpalony.

    // Rozwiazanie problemu : rtl  = react testing library  ( z tej bilblioteki bierzemy redenrera, ktory pozwoli testowi wykorzystac implementacje, ktora dziala tak jak przegladarka www)
    const renderResult: RenderResult = render(<AlbumTitle>xxx</AlbumTitle>);
    expect(renderResult.container).toMatchSnapshot(); // to zapisalo nam plik ze snapshotem w katalogu __snapshots__
  });
});
