# **Introducción al Proyecto**
Bienvenido a **"PINsafe"**,  una plataforma que permite proteger tu información personal y enviarla de manera segura.


# **Definición del Usuario**
## **Usuario**


Persona que necesita enviar información confidencial, como los datos de una tarjeta de crédito, al dueño de esta tarjeta que olvido portarla.


## **Necesidades**

La persona necesita enviar esta información de manera segura, ya que quiere evitar enviar fotografías o ser muy explícita mediante mensajería por internet. Además, necesita enviar la información de manera rápida y eficiente, ya que está de por medio su propio tiempo.

## **Objetivos**

Cifrar información personal volviendola "secreta" y enviarla a través de un mensaje, de manera rápida, fácil y segura.
# **Definición del Producto**


## **Experiencia (como resuelve el problema)**

PINsafe, es una plataforma que permite cifrar información personal como datos de tarjetas de crédito y enviarla de manera segura. A través del Cifrado César, el usuario deberá escribir su texto e indicar un número de desplazamiento, mismo número que será necesario al momento de querer descifrar el texto. La plataforma es simple de usar, y en pocos pasos  permite lograr el objetivo.

## **Planificación**
**Historias de usuario**

Para poder realizar la planificación se enlistaron las siguientes historias de usuario, las cuales desglozan las funciones que debe tener la plataforma web:
- Recibir bienvenida

- Leer instrucciones

- Presionar comenzar

- Elegir un offset

- Ingresar texto a cifrar o descifrar

- Leer instrucciones de ingreso de texto

- Elegir CIFRAR o DESCIFRAR

- Ver nuevo código

- Limpiar/volver a hacer

	
	
> Más detalles de la planificación en este tablero de [Trello](https://trello.com/b/q14j2H8p/cifrado-césar).


## Mapa de flujo para el desarrollo
A partir de las historias de usuario se diseñaron mapas de flujo, los cuales recibieron iteraciones a medida que se recibía feedback del squad.
![
](https://picasaweb.google.com/112666687935106469770/6632082481525797937#6632082485448178178 "mapadeflujo1")![
](https://lh3.googleusercontent.com/bpmA51HtisjieVEbUyLEfto2iUTrNAuRHj9wrZO9yZac44DVfTD-hCmca-A40h6BoGlIht4mNXpR "mapadeflujo1")
![enter image description here](https://lh3.googleusercontent.com/cNeJhxqnJySwTb7p8cagwBF7YxOiZSdSZJGzR8m2cS-2eazMfyWGvbYxdf2nVyj7mGpNvVImq8i0 "mapa de flujo2")
![
](https://lh3.googleusercontent.com/N-Y0y0f3TM5jqi3p28LPsBZtHJpC1DopQKH7naClczBzirIgEJNvhpUo8_0CZokbpkPJlv3pyYFE "mapadeflujo3")

## Mockup para desarrollo 


## **Desarrollo de Interfaz UI (detalle del funcionamiento)**

Para realizar de manera fácil el envío de esta información, la aplicación consta solo de dos pantallas, la primera donde se pueden ver las instrucciones, las que hacen énfasis en mostrar la diferencia entre el cifrado y descifrado.


Acá la persona debe ingresar los datos. Se describe el ingreso de offset como “selecciona
## Detalles del Diseño
- En la primera pantalla se mostrarán **instrucciones gráficas** de uso, para que especificamente no hayan confusiones entre la palabra **"Cifrado"** y **"Descifrado"**

- La palabra **"offset"**, puede sonar confusa para quien este usando la plataforma. Para indicar que deben ingresar un número sin que hayan confusiones, se usará la frase **"Nivel de seguridad de tu código (Entre 1 - 10):" **
- Los botones de **"Cifrar"** y **"Descifrar"** llevan colores distintos para demostrar que son acciones opuestas.
- Se diseño el logo

![
](https://lh3.googleusercontent.com/gVouBCGLFdVM81GfTmjpnuXVjXTB6am_6TYIGFUa05m3duEhjY7J-v1-e51TNK5caJ_D7x-pHLo3 "mapa")



![
](https://lh3.googleusercontent.com/U063yylLq-ycBAejNpqiIrgtSkY7BiQ9f1LLrViNn53-nX6vqINdH9WMxULgHIUZxdV24elEKL0P "usuario")


![
](https://lh3.googleusercontent.com/eaWiUBWb7WNF6Nj4L2w6BIumiwF-BocvLZGh1tOhc2P2d-8NLCjSlg0DhZpsIWMNePAisKT5EkWP "mockup2y3")


![
](https://lh3.googleusercontent.com/DFmIRfbsguZ6gFutI_bcSDLJrzQLPTm2WxH9_C7N2O0YUfKLW_3rs8p2frUOt8PiGTuATjUEOgpv "mockup1")



![
](https://lh3.googleusercontent.com/5qT_kcLx-JCQDi0nwyPYG2YXTGu5PZkphnIpHGL0NjYmtXVn5SZqXU8kH3K4FCtKI3ZSZpo1nruU "mockup1b")



![\](https://picasaweb.google.com/112666687935106469770/6631941019024206849#6631941022225128274 "mapa de flujo")](https://lh3.googleusercontent.com/cNeJhxqnJySwTb7p8cagwBF7YxOiZSdSZJGzR8m2cS-2eazMfyWGvbYxdf2nVyj7mGpNvVImq8i0)
# Testeos de Usuario

**Primer testeo, ***Feedback e Insights*****
La persona comprende el concepto y funcionamiento. Comenta lo siguiente:

- "En el nivel de seguridad de código, todos querrán poner 10."

>Reemplazar por: 
1. >"Elige un número del 1 al 10. (Este es el número secreto que permitirá descifrar tu código)".

2. >“Esta es la clave para descifrar el código”. 
 
3. >"Ingresa el número que será la clave para tu código:"

>//¿La persona entenderá que debe enviársela a la otra persona?
		>No lo entienden, se cambia la frase por una explicación en las instrucciones:
4. >"Si serás quien ocultará el texto, debes crear una contraseña numérica y enviarla junto con el texto oculto al receptor. Esta contraseña le permitirá descubrir cual es el verdadero texto.
		Si en cambio quieres descubrir un texto oculto, debes pegar la contraseña que te fue enviada."
		**>En página de cifrado: "Crea o pega tu contraseña numérica:"**

- Las palabras “cifrar y “descifrar” son confusas para algunas personas.

1. >Se reemplaza por “ocultar” y “mostrar“

- La gráfica de instrucciones tiene demasiado contenido y al ser una captura de la pantalla de cifrado, la primera reacción de la persona es de interactuar con la imágen.

![
](https://lh3.googleusercontent.com/XALy8XjskeSpkzrjsZxJZgHM4IzYsgI0gp3iVUK0PPKxvz9aH3dC-vWrn8_eMcJV5q1Rn72CVwIi "cifrarNueva")
- Se reemplaza por la siguiente gráfica, la cual busca explicar de forma más simple y con un lenguaje distinto. Además se explica rapidamente la funcionalidad de la "contraseña".

![
](https://lh3.googleusercontent.com/xjFjGh_B0RaDSPVhzu2IvFCGRDQtE3dtlPkPpyx87L-YcLROiGq_BqX_OCrVqKGGZGYoRg6dPYEF "cifrarNueva")

# Rediseño

![
](https://lh3.googleusercontent.com/y0hrofmeJAPhEopQaMDvZr4L17LMAEDehdCOjErrAOpoJ4NURMVEaHof0MRVsEK00meL0Q03IsoZ "web1")
- Se cambiaron las instrucciones, para no generar confusiones. Se explica de forma más gráfica, cómo funciona el cifrado.

![
](https://lh3.googleusercontent.com/P8OgZ-a1kOWGp6Wxa0StzgE9jGTvZm4QxxyJ86OUWClxhFtT7uyGIJgbDmTvzSOx2pq0b419enTC "web2")
- Se cambio "cifrar" y "descifrar" por palabras más comunes, "ocultar" y "mostrar".
- Se cambiaron las instrucciones a palabras simples. Al "offset" se le camufla con la palabra "contraseña" y se especifíca que esta sea numérica.

Maqueta aún por testear.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTk4NTIzMDM0OCwtMTcwOTg3MTkyMCwxNT
EzNTA5MjQzLDM4NDg1ODU2MSwxMjMzNzg4OTQzLC0xMjMyODc3
ODM3LC03NTY2OTg5MDYsLTE3NDUwNjg3MDIsNTEwOTQ3OTQzLD
YwNDg5MjE3MiwxNDg0Mzk5NTI5LC0yNjg2NTk2NzksOTM0MzQ5
NDc2LC0xMDkxMTE5MzQzLC0xNDI5MjYwOSwxODYyMzgwMDMxLC
03MjE2NjI1MDJdfQ==
-->