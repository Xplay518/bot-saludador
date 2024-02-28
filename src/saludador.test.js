import saludar from "./src/saludador.js";

describe("Saludar", () => {
    it("debería saludar correctamente", () => {
        expect(saludar("Juan", "masculino", 25, "ES")).toEqual("Buenos días, Juan!");
        expect(saludar("María", "femenino", 35, "ES")).toEqual("Buenos días, Sra María!");
        expect(saludar("Pedro", "masculino", 40, "ES")).toEqual("Buenos días, Sr Pedro!");
        expect(saludar("John", "masculino", 25, "EN")).toEqual("Good morning, John!");
        expect(saludar("Mary", "femenino", 35, "EN")).toEqual("Good morning, Mrs Mary!");
        expect(saludar("Peter", "masculino", 40, "EN")).toEqual("Good morning, Mr Peter!");
    });
});
