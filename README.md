# **PINsafe, Proyecto Cipher**
﻿
  Bienvenido a "PINsafe",  una plataforma que permite enviar información de cuentas bancarias a través de canales poco seguros, de forma protegida.  


![
](https://lh3.googleusercontent.com/eXtrpG7GUjXSwbdqE83SCH4w0JaZywwupSbSAVuzmoaSs7ShLXkvL7Zb5PVcBIznCEROs9yGQLVS "Prototipo 5C")

![
](https://lh3.googleusercontent.com/ox9L1V6ByEnE1HUujRHj_-dGUq72Csj5PSq652RoKGMkl64oEzX0zo8Yh7Oazmef1MJQrS0HIq_n "Prototipo 5B")



![
](https://lh3.googleusercontent.com/8Rez-lC2tHOk_NAb2lu_8UDbBbVh5TyibM-z3qRKRykfSlQDMbzceopSZRgkWo7Wh7aF6n7AcZ_0 "Prototipo 5A")


![
](https://lh3.googleusercontent.com/3VWFipJmOgBeaMMFLirbFAjzm08_dKUplftLY5B9HLePzhZwS33qTTyXkHBSGQnchEnx39KQl5aj "Header")




# **Definición del Usuario**
## **Usuario**


Persona que necesita enviar por mensaje via internet, información confidencial, como los datos de una tarjeta de crédito, al dueño de esta tarjeta que olvido portarla.


## **Necesidades**

La persona necesita enviar esta información de manera segura, ya que quiere evitar enviar fotografías o ser muy explícita mediante mensajería por internet. Además, necesita enviar la información de manera rápida y eficiente, ya que está de por medio su propio tiempo.

## **Objetivos**

Cifrar información personal volviendola "secreta" y enviarla a través de un mensaje, de manera rápida, fácil y segura.
# **Definición del Producto**


## **Experiencia**

PINsafe, es una plataforma que permite cifrar información personal como datos de tarjetas de crédito y enviar esta información a través canales poco seguros como wathsapp. A través del Cifrado César, el usuario deberá escribir su texto e indicar un número de desplazamiento, mismo número que será necesario al momento de querer descifrar el texto. La aplicación le entregará un mensaje cifrado para enviar a terceros o bien podrá descifar mensajes que se le haya enviado ya cifrados. La plataforma es simple de usar, y en pocos pasos  permite lograr el objetivo.

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
![
](https://lh3.googleusercontent.com/DFmIRfbsguZ6gFutI_bcSDLJrzQLPTm2WxH9_C7N2O0YUfKLW_3rs8p2frUOt8PiGTuATjUEOgpv "mockup1")
![
](https://lh3.googleusercontent.com/VBwNyqaI3gaxwu26ie9JpnJB-GtHiqlpfb8fDBnLJDSkRLR3XLMOLIUmjZjup_a0rujKIqLiujW0 "mockup2")
![
](https://lh3.googleusercontent.com/TMUPQDYnvLzI4fUXE0ERgJfLNCBYSoHRnshkOWJ1pGU7rqDLaFgP2WngAoAu4OkT0GN9EUKHxxf3 "mockup3")
![
](https://lh3.googleusercontent.com/qBjd6IK602FzRvdVsksU62-Gc8fnoXlcLg4nRzIG5yNdkYl-qpA00aOypiRfPGcZsyyp7KvwtX9T "mockup4")

## **Desarrollo de Interfaz UI

- Diseño 1
![
](https://lh3.googleusercontent.com/Rbq2S5NuQO0HxiIldx3S4BQgMknBl-DL1pafpv82PjuDwgSjT9F6IFXtJmHzYP5dEU3c-YcZEVo4 "webA")

- Diseño 2
![
](https://lh3.googleusercontent.com/b9puFYcDa_gAsHnRd4_XPAKzDaR90Dy07hykdO8p1OxxzNZ9XwHhIvOpP0NKahq7y0mgL25YnBNo "webB")

# Testeos de Usuario

**Primer testeo, ***Feedback e Insights*****
La persona comprende el concepto y funcionamiento. Comenta lo siguiente:

- "En el nivel de seguridad de código, todos querrán poner 10."

>Reemplazar por:
1. >"Elige un número del 1 al 10. (Este es el número secreto que permitirá descifrar tu código)".

2. >“Esta es la clave para descifrar el código”.

3. >"Ingresa el número que será la clave para tu código:"

>//¿La persona entenderá que debe enviársela a la otra persona?
		>No entienden la razón de uso y tampoco la redacción, se cambia la frase por una explicación en las instrucciones:
4. >"Si serás quien ocultará el texto, debes crear una contraseña numérica y enviarla junto con el texto oculto al receptor. Esta contraseña le permitirá descubrir cual es el verdadero texto.
		Si en cambio quieres descubrir un texto oculto, debes pegar la contraseña que te fue enviada."
		**>En página de cifrado: "Crea o pega tu contraseña numérica:"** Usamos la palabra contraseña, dandole mayor importancia y una razón simple. Indicamos que el valor debe ser numérico, para que no hayan errores.

- Las palabras “cifrar y “descifrar” son confusas para algunas personas.

1. >Se reemplaza por “ocultar” y “mostrar“

- La gráfica de instrucciones tiene demasiado contenido y al ser una captura de la pantalla de cifrado, la primera reacción de la persona es de interactuar con la imágen.

![
](https://lh3.googleusercontent.com/XALy8XjskeSpkzrjsZxJZgHM4IzYsgI0gp3iVUK0PPKxvz9aH3dC-vWrn8_eMcJV5q1Rn72CVwIi "cifrarNueva")






## Rediseño de la UI
Para realizar de manera fácil el envío de esta información, la aplicación consta solo de dos pantallas.

![
](https://lh3.googleusercontent.com/qjTIXogh-YsDeutCPCNjrucjtsE8PcbVBGBPocdAJ5Lp5p-WXxv9YyiwsA4pQkrqUV3qAnMGCuzK "web1")
En la primera pantalla se muestran **"instrucciones gráficas"**, las que hacen énfasis en mostrar la diferencia entre el cifrado y descifrado. Para una mejor comprensión, se usan las palabras **"ocultar"** y **"mostrar"**  en reemplazo de **"cifrado"** y **"descifrado"**.

![
](https://lh3.googleusercontent.com/B8N_CL1bv9etztZEJSL0B5Cak6aqmz3-q2t9rvAeijV1sC70pzVOVyQiQrWwoyxsQ8uCfQWZ3Ux7 "web2")
En la segunda pantalla, la palabra **"offset"**, puede sonar confusa para quien este usando la plataforma. Para indicar que deben ingresar un número sin que hayan confusiones, se usó primero la frase :
- **"Nivel de seguridad de tu código (Entre 1 - 10):"**
- Luego se probó: **"Ingresa el número que será la clave para tu código:"**
- Finalmente se cambió a  la actual: **"Crea o pega tu contraseña numérica:"**
>Las razones de estos cambios en el apartado Testeos de Usuario.

Se usó la frase: **"Crea o pega tu mensaje"** para hacerle saber a la persona que no solamente puedo ingresar ahí mi mensaje creado, sino que ahi también es donde se debe pegar un mensaje cifrado. Dentro del cuadro, muestra la advertencia de no ingresar la letra "Ñ".

Los botones de **"Ocultar"** y **"Mostrar"** llevan colores distintos para demostrar que son acciones opuestas. Se ocupan también en las instrucciones, y en el logo.

![
](https://picasaweb.google.com/112666687935106469770/6632088674809671697#6632088677799867602 "web3")
![
](https://picasaweb.google.com/112666687935106469770/6632090072246968497#6632090072290707986 "web3")![
](https://lh3.googleusercontent.com/ep7Gm0oRkPSgr1eh3eYn80K3Z5OmI9PrkcdEAcuWU4UyhqKxYzClzR-7CAXAGaAUIB3ynKe5LLqk "web3")
Al presionar ocultar o mostrar un mensaje, junto con el nuevo mensaje, se muestra la frase: **"¡Este es tu mensaje! Si lo vas a enviar, recuerda indicar la contraseña"**. Recordando una vez más que necesitan enviar el offset para que el mensaje pueda ser descifrado.

<!--stackedit_data:
eyJoaXN0b3J5IjpbNTI2MDQ2ODcsMTQ3NDc4MjEwNyw4NzQxND
MxMDNdfQ==
-->