// Trainer-Ereigniskarten ("Trainer fordert dich zum Kampf heraus!")
// Eigene Datenbank, getrennt von der Pokémon-DB (pokemonDB in index.html).
// Die Werte der Karte (KP, Attacken) gelten für den Kampf, nicht die aus der Pokémon-DB.
//
// nr:       Nummer oben links auf der Karte (gleich der Kat. des Pokémon)
// titel:    Titel der Karte, name: Name des Trainers (leer, wenn die Karte keinen Namen hat)
// pokemon:  Name in der Pokémon-DB (für Bild und Typen), kat: Kat., stufe: S1 bis S3
// hp:       KP auf der Karte
// atks:     n = Name, die = Trefferwürfel, t = Typ, d = Schaden
// belohnung: Text der Belohnung (wird nach einem Sieg angezeigt)
const trainerCards = [
    {
        id: "vogelfaenger-jimmy", nr: 1, titel: "Vogelfänger", name: "Jimmy", belohnung: "1x Pokéball",
        pokemon: "Taubsi", kat: 1, stufe: 2, hp: 160,
        atks: [
            { n: "Windstoß", die: "D12", t: "Flug",   d: 55 },
            { n: "Tackle",   die: "D20", t: "Normal", d: 45 }
        ]
    },
    {
        id: "trainer-sebastian", nr: 2, titel: "Trainer", name: "Sebastian", belohnung: "1x Supertrank",
        pokemon: "Georok", kat: 2, stufe: 1, hp: 200,
        atks: [
            { n: "Steinwurf", die: "D12", t: "Gestein", d: 70 }
        ]
    },
    {
        id: "trainerin-serena", nr: 3, titel: "Trainerin", name: "Serena", belohnung: "3x Pokéball",
        pokemon: "Flamara", kat: 3, stufe: 2, hp: 220,
        atks: [
            { n: "Flammenwurf",  die: "D20", t: "Feuer",  d: 100 },
            { n: "Ruckzuckhieb", die: "D20", t: "Normal", d: 95 }
        ]
    },
    {
        id: "alter-mann", nr: 3, titel: "Alter Mann", name: "", belohnung: "1x Hypertrank",
        pokemon: "Kingler", kat: 3, stufe: 2, hp: 230,
        atks: [
            { n: "Blubbstrahl", die: "D12", t: "Wasser", d: 95 },
            { n: "Lehmschuss",  die: "D20", t: "Boden",  d: 100 }
        ]
    }
];
