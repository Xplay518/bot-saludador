import saludar from "./src/saludador.js";

describe("Saludar", () => {
    it("debería saludar correctamente", () => {
        expect(saludar("Juan", "masculino", 25)).toEqual("Buenos días, Juan!");
        expect(saludar("María", "femenino", 35)).toEqual("Buenos días, Sra María!");
        expect(saludar("Pedro", "masculino", 40)).toEqual("Buenos días, Sr Pedro!");
    });
});
