

const creadorDeProductos = (nombreDelProducto, cantidadDelProducto, precioDelProducto) => {
    const producto = {
        nombre: nombreDelProducto,
        cantidad: cantidadDelProducto,
        precio: precioDelProducto,
        calcularTotal: () => {
            this.total = this.cantidad * this.precio
        },
        total: cantidadDelProducto * precioDelProducto
    };

    return producto;
}

let IngresarProducto = 1;
const carrito = [];

while (IngresarProducto !== 3) {
    if (IngresarProducto == 1) {
        const nombreDelProducto = prompt("Ingrese el nombre del producto")
        const cantidadDelProducto = Number(prompt("ingrese la cantidad del producto"))
        const precioDelProducto = Number(prompt("ingrese el precio del producto"))

        const nuevoProducto = creadorDeProductos(nombreDelProducto, cantidadDelProducto, precioDelProducto)
        carrito.push(nuevoProducto);

    } else if (IngresarProducto == 2) {

        let ModificarProducto = prompt("Que producto desea modificar ? indicar nombre.")

        carrito.forEach((producto) => {
            if (producto.nombre === ModificarProducto) {
                let valorAModificar = prompt("indicar mediante el numero correspondiente que desea modificar" + "\n" + "1.Nombre" + "\n" + "2.Cantidad" + "\n" + "3.Precio")
                switch (valorAModificar) {
                    case "1":
                        let nuevoNombre = prompt("ingrese el nuevo nombre")
                        producto.nombre = nuevoNombre
                        break;
                    case "2":
                        let nuevaCantidad = Number(prompt("ingrese la nueva cantidad"))
                        producto.cantidad = nuevaCantidad;
                        producto.total = nuevaCantidad * producto.precio
                        break;
                    case "3":
                        let nuevoPrecio = Number(prompt("ingrese el nuevo precio"))
                        producto.precio = nuevoPrecio;
                        producto.total = nuevoPrecio * producto.cantidad
                        break;
                }
            }
        })

    }
    carrito.forEach((producto) => {alert("Nombre: "+ producto.nombre + "\n" + " Cantidad: "+ producto.cantidad + "\n" + " Precio: "+ producto.precio)})

    console.table(carrito)
    IngresarProducto = Number(prompt("Que accion desea realizar ? Indicar con el numero correspondiente" + "\n" + "1.Agregar" + "\n" + "2.Modificar" + "\n" + "3.Totalizar"));

}
let totalproductos = 0;
carrito.forEach((producto) => {
    totalproductos = totalproductos + producto.total;
})
alert(totalproductos)
console.log(carrito);





// solicitarle al usuario el producto que desea modificar
//preguntar que quiere modificar
// fijarme si el valor existe
// si el producto existe, lo modificamos y lo guardamos 