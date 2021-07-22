class Producto{
    productos=[];
    idProducto=0;
    
    //METODO CREAR PRODUCTO
    nuevoProducto(producto){ 
        let productoCreado={
            titulo: producto.title,
            precio: parseInt(producto.price),
            urlFoto: producto.thumbnail,
            id:++this.idProducto
        }    
        this.productos.push(productoCreado);
        return productoCreado;
    }

    //METODO LISTAR PRODUCTOS
    get productosListados(){
        if (this.productos.length==0){
            return {error:"No existen productos"}
        }
        return this.productos;
    }

    //METODO FILTRAR POR ID
    filtrarPorId(id){
        let idParsed=parseInt(id);        
        let objetoFiltrado=this.productos.find((obj)=>{
            return obj.id==idParsed;
        })        
        if (objetoFiltrado==undefined){
            return {error:"No existe el producto deseado"}
        }
        return objetoFiltrado;
    }

    //METODO ACTUALIZAR POR ID
    actualizarPorId(id,productoActualizado){ 
        let idParsed=parseInt(id);   
        let productoAModificar=this.productos.find((obj)=>{
            return obj.id==idParsed;
        });
        if (productoAModificar==undefined){
            return {error:"No existe el producto que desea actualizar"}
        }else{
            productoAModificar.titulo=productoActualizado.title;
            productoAModificar.precio=productoActualizado.price;
            productoAModificar.urlFoto=productoActualizado.thumbnail;
            return productoAModificar;
        }
    }

    //METODO BORRAR POR ID
    borrarPorId(id){
        let idParsed=parseInt(id);
        let productoABorrar=this.productos.find((obj,idx)=>{
            if(obj.id==idParsed){
                this.productos.splice(idx,1);
                return obj;
            };            
        })
        console.log(productoABorrar);
        if (productoABorrar==undefined){
            return {error:"No existe el producto que desea borrar"}
        }
            return productoABorrar;        
    }  
}

module.exports = new Producto;