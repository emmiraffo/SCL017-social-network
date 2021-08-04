import MockFirebase from "../_mocks_/firebase-mock.js"
global.firebase = MockFirebase();

import {crearPost} from "../src/fireBase/post.js"

describe("crearPost", () => {
    it ("deberia de poder crear un post", () => {
        return crearPost("Que buena es esta pelicula").then ((data) => {
            expect(data).tobe("el post fue creado");
        })
    })
})