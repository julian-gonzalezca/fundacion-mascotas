let header = `
<div class=header>
    <div class="contenedor">
        <div class="barra">
            <a class="logo" href="index.html">
                <h1 class="logo__bold no-margin centrar-texto "><span class="logo__nombre">+</span>Mascotas</h1>
            </a>
            <nav class="navegacion">
                <a class="navegacion__enlace" href="adopciones.html">Adopciones</a>
                <a class="navegacion__enlace" href="requisitos.html">Requisitos</a>
                <a class="navegacion__enlace" href="ubicacion.html">Ubicaciones</a>
            </nav>
        </div>
    </div>
</div>
`
document.getElementById("idheader").innerHTML = header

let pie = `
<div class=footer>
        <div class="contenedor">
            <div class="barra ">
                <a class="logo " href="index.html ">
                    <h1 class="logo__bold logo__inferior no-margin centrar-texto "><span class="logo__nombre ">+</span>Mascotas</h1>
                </a>
                <div class="iconos">
                    <a href="https://www.facebook.com/jgonzalezcard/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>
                    </a>
                    <a href="https://twitter.com/home?lang=es/jgonzalezcard" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                        </svg>
                    </a>
                </div>
                <nav class="navegacion">
                    <a class="navegacion__enlace-inferior" href="adopciones.html">Adopciones</a>
                    <a class="navegacion__enlace-inferior" href="requisitos.html">Requisitos</a>
                    <a class="navegacion__enlace-inferior" href="ubicacion.html">Ubicaciones</a>
                </nav>
            </div>
        </div>
</div>
`

document.getElementById("idfooter").innerHTML = pie