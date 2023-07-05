const solicitud = document.getElementById("solicitud1");
const solicitud2 = document.getElementById("solicitud2");
const solicitud3 = document.getElementById("solicitud3");
const contenido = document.getElementById("contenido");
const contenido2 = document.getElementById("contenido2");
const contenido3 = document.getElementById("contenido3");
let mouseDentro1 = false;
let mouseDentro2 = false;
let mouseDentro3 = false;

solicitud.addEventListener("mouseover", function () {
    if (!mouseDentro1) {
        function* generador() {
            for (let i = 1; i < 5; i++) {
                yield `https://swapi.dev/api/people/${i}/?format=json`;

                if (i == 5) {
                    return "Ultimo chao";
                }
            }
        }

        const procesos = generador();

        let cantidadUrl = 1;

        let impresion = setInterval(() => {
            fetch(`https://swapi.dev/api/people/${cantidadUrl}/?format=json`)
                .then((res) => res.json())
                .then((data) => {
                    const datosApi = data;
                    contenido.innerHTML += `
                            <div>
                                <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s"
                                style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
                                    <div class="timeline-icon color-icon1"><i class="fa fa-address-card" aria-hidden="true"></i>
                                    </div>
                                        <div class="timeline-text">
                                            <h6>${datosApi.name}</h6>
                                            <p>Alt:${datosApi.height}cm Peso:${datosApi.mass} Kg</p>
                                        </div>
                                </div>
                             </div>   
                    `;
                });
            console.log(procesos.next());

            if (cantidadUrl == 5) {
                clearInterval(impresion);
            }
            cantidadUrl++;
        }, 1000);

        mouseDentro1 = true;
    }
});

solicitud2.addEventListener("mouseover", function () {
    if (!mouseDentro2) {
        console.log("hizo click");

        function* generador2() {
            for (let i = 6; i < 10; i++) {
                yield `https://swapi.dev/api/people/${i}/?format=json`;

                if (i == 10) {
                    return "Ultimo chao";
                }
            }
        }

        const procesos = generador2();

        let cantidadUrl = 6;

        let impresion = setInterval(() => {
            fetch(`https://swapi.dev/api/people/${cantidadUrl}/?format=json`)
                .then((res) => res.json())
                .then((data) => {
                    const datosApi = data;
                    contenido2.innerHTML += `
                            <div>
                                <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s"
                                style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
                                    <div class="timeline-icon color-icon2"><i class="fa fa-address-card" aria-hidden="true"></i>
                                    </div>
                                        <div class="timeline-text">
                                            <h6>${datosApi.name}</h6>
                                            <p>Alt:${datosApi.height}cm Peso:${datosApi.mass} Kg</p>
                                        </div>
                                </div>
                             </div>                     
        `;
                });
            console.log(procesos.next());

            if (cantidadUrl == 10) {
                clearInterval(impresion);
            }
            cantidadUrl++;
        }, 1000);

        mouseDentro2 = true;
    }
});

solicitud3.addEventListener("mouseover", function () {
    if (!mouseDentro3) {
        console.log("hizo click");

        function* generador3() {
            for (let i = 12; i < 16; i++) {
                yield `https://swapi.dev/api/people/${i}/?format=json`;

                if (i == 16) {
                    return "Ultimo chao";
                }
            }
        }

        const procesos = generador3();

        let cantidadUrl = 12;

        let impresion = setInterval(() => {
            fetch(`https://swapi.dev/api/people/${cantidadUrl}/?format=json`)
                .then((res) => res.json())
                .then((data) => {
                    const datosApi = data;
                    contenido3.innerHTML += `       
                            <div>
                                <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s"
                                style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
                                    <div class="timeline-icon color-icon3"><i class="fa fa-address-card" aria-hidden="true"></i>
                                    </div>
                                        <div class="timeline-text">
                                            <h6>${datosApi.name}</h6>
                                            <p>Alt:${datosApi.height}cm Peso:${datosApi.mass} Kg</p>
                                        </div>
                                </div>
                             </div>                    
        `;
                });
            console.log(procesos.next());

            if (cantidadUrl == 16) {
                clearInterval(impresion);
            }
            cantidadUrl++;
        }, 1000);

        mouseDentro3 = true;
    }
});
