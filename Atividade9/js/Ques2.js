        let celsius = document.getElementById("celsius");
        let fahrenheit = document.getElementById("fahrenheit");

        // Celsius para Fahrenheit
        celsius.addEventListener("input", function(){

            let c = parseFloat(celsius.value);

            if(isNaN(c)){
                fahrenheit.value = "";
                return;
            }

            let f = (c * 9/5) + 32;

            fahrenheit.value = f.toFixed(2);
        });

        // Fahrenheit para Celsius
        fahrenheit.addEventListener("input", function(){

            let f = parseFloat(fahrenheit.value);

            if(isNaN(f)){
                celsius.value = "";
                return;
            }

            let c = (f - 32) * 5/9;

            celsius.value = c.toFixed(2);
        });
