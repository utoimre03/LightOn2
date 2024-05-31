export default class EredmenyMegjelenit {
    #db
    #szuloeElem

    constructor(db, szuloeELem) {
        this.#db = db;
        this.#szuloeElem = szuloeElem
        this.megjelenit()
    }

    megjelenit() {
        let txt = `<p>${this.#db}</p>`
        this.#szuloeElem.html(txt)
    }
}