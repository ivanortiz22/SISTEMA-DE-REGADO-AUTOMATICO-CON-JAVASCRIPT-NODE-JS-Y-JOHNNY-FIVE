var cinco = require("johnny-five");
var circuito = new cinco.Board();
var bombillo,  celda ;

circuito.on("ready", prender);




function prender()
{
    var configuracion = {pin:"A0", freq: 50};
    celda = new cinco.Sensor(configuracion);
    bombillo = new cinco.Led(13);
    motorcito = new cinco.Led(8);
    
    ondear();

    
}

function ondear()
{
    console.log("humedad: " + celda.value);
    
    var luz = celda.value;

    var lcd = new cinco.LCD({
        
        controller: "PCF8574T"
        });
    
    lcd.useChar('check');
    if(luz >1000 && luz <=1024 )
    {
        
        bombillo.on();
        motorcito.on();
        
        lcd.cursor(0, 4).print("HUMEDAD: :check:");
        lcd.cursor(1, 4).print("0%");
    }
    
    else if(luz > 900 && luz <=1000)
    {
        
        bombillo.on();
        motorcito.on();
        
        lcd.cursor(0, 4).print("HUMEDAD: :check:");
        lcd.cursor(1, 4).print("15%");
    }  
    else if(luz > 800 && luz <=900)
    {
       
        bombillo.on();
        motorcito.on();
        
        lcd.cursor(0, 4).print("HUMEDAD: :check:");
        lcd.cursor(1, 4).print("35%");
    }
    else if(luz > 700 && luz <=800)
    {
      
        bombillo.on();
        motorcito.on();
        
        lcd.cursor(0, 4).print("HUMEDAD: :check:");
        lcd.cursor(1, 4).print("50%");
    }
    else if(luz > 600 && luz <=700)
    {
        
        bombillo.off();
        motorcito.off();
       
        lcd.cursor(0, 4).print("HUMEDAD: :check:");
        lcd.cursor(1, 4).print("75%");
    }
    else if(luz > 500 && luz <=600)
    {
        
        bombillo.off();
        motorcito.off();
        
        lcd.cursor(0, 4).print("HUMEDAD: :check:");
        lcd.cursor(1, 4).print("90%");
    }
    else if(luz > 400 && luz <=500)
    {
        
        bombillo.off();
        motorcito.off();
        
        lcd.cursor(0, 4).print("HUMEDAD: :check:");
        lcd.cursor(1, 4).print("100%");
    }
    else if(luz > 300 && luz <=400)
    {
        
        bombillo.off();
        motorcito.off();
        
        lcd.cursor(0, 4).print("HUMEDAD: :check:");
        lcd.cursor(1, 4).print("100%");
    }
    else if(luz > 200 && luz <=300)
    {
      
        bombillo.off();
        motorcito.off();
        
        lcd.cursor(0, 4).print("HUMEDAD: :check:");
        lcd.cursor(1, 4).print("100%");
    }
    else if(luz > 100 && luz <=200)
    {
       
        bombillo.off();
        motorcito.off();
        
        lcd.cursor(0, 4).print("HUMEDAD: :check:");
        lcd.cursor(1, 4).print("100%");
    }
    else if(luz > 0 && luz <=100)
    {
     
        bombillo.off();
        motorcito.off();
        
        lcd.cursor(0, 4).print("HUMEDAD: :check:");
        lcd.cursor(1, 4).print("100%");
    }
    
    else
    {   
        
        motorcito.off();
        
        
    }
    
    setTimeout(ondear, 1000);
    
}
