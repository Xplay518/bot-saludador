import saludar from "./src/saludador.js";

describe("Saludar", () => {
    it("debería saludar correctamente", () => {
        expect(saludar("Juan", "masculino", 25)).toEqual("¡Hola Juan!");
        expect(saludar("María", "femenino", 35)).toEqual("¡Hola Sra María!");
        expect(saludar("Pedro", "masculino", 40)).toEqual("¡Hola Sr Pedro!");
    });
});
