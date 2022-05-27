function Atributos(){
    this.nadar=Nadar;
    this.caminar=Caminar;
    this.saltar=Saltar;
    this.volar=Volar;


    this.setNadar=function(_Nadar){
        Nadar=_Nadar;
    }

    this.setCaminar=function(_Caminar){
        Caminar=_Caminar;
    }


    this.setSaltar=function(_Saltar){
        Saltar=_Saltar;
    }


    this.setVolar=function(_volar){
        Volar=_volar;
    }


}

function salida(){
    var obj=new movimiento();
    
    obj.setNadar("rapido");
    obj.setCaminar("lento");
    obj.setSaltar("alto");
    obj.setVolar("bajo");

    var mov1=obj.setNadar();
    var mov2=obj.setCaminar();
    var mov3=obj.setSaltar();
    var mov4=obj.setVolar();



    document.write("MOVIMIENTOS: <br>");

    document.write("Nadar: "+mov1+"<br>");
    document.write("Caminar: "+mov2+"<br>");
    document.write("Saltar: "+mov3+"<br>");
    document.write("Volar: "+mov4+"<br>");

}