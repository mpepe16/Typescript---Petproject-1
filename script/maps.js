"use strict";
var Genre;
(function (Genre) {
    Genre[Genre["Rock"] = 0] = "Rock";
    Genre[Genre["CountryAndWestern"] = 1] = "CountryAndWestern";
    Genre[Genre["Classical"] = 2] = "Classical";
    Genre[Genre["Pop"] = 3] = "Pop";
    Genre[Genre["HeavyMetal"] = 4] = "HeavyMetal";
})(Genre || (Genre = {}));
class MusicCollection {
    constructor() {
        this.collection = new Map();
    }
    Add(genre, artist) {
        for (let individual of artist) {
            this.AddArtist(genre, individual);
        }
    }
    Get(genre) {
        return this.collection.get(genre);
    }
    AddArtist(genre, artist) {
        if (!this.collection.has(genre)) {
            this.collection.set(genre, []);
        }
        let artists = this.collection.get(genre);
        if (artist) {
            artists === null || artists === void 0 ? void 0 : artists.push(artist);
        }
    }
}
let collection = new MusicCollection();
collection.Add(Genre.Classical, [`Debussy`, `Bach`, `Elgar`, `Beethoven`]);
collection.Add(Genre.CountryAndWestern, [`Dolly Parton`, `Toby Keith`,
    `Willie Nelson`]);
collection.Add(Genre.HeavyMetal, [`Tygers of Pan Tang`, `Saxon`, `Doro`]);
collection.Add(Genre.Pop, [`Michael Jackson`, `Abba`, `The Spice Girls`]);
collection.Add(Genre.Rock, [`Deep Purple`, `Led Zeppelin`, `The Dixie
Dregs`]);
collection.AddArtist(Genre.HeavyMetal, 'Slipknot');
console.log(collection.Get(Genre.HeavyMetal));
//# sourceMappingURL=maps.js.map