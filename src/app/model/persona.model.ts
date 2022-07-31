export class persona {
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    titulo: string;
    descripcionP: string;

    constructor(nombre: string, apellido: string, img: string, titulo: string, descripcionP: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.titulo = titulo;
        this.descripcionP = descripcionP;
    }
}