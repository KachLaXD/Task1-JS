function writeText(s){
    document.write("<p style='font-size: 25px; margin:0 '>"+"Task1"+"</p>")
    document.write("<p class='p1'>"+s+"</p>")
    document.write("<hr>")
}

writeText('JavaScript')




function sum(a, b){
    document.write("<p style='font-size: 25px; margin:0 '>"+"Task2"+"</p>")
    document.write(a + b)
    document.write("<hr>")
}

sum(10, 36)



function changeSize(s1, size){
    document.write("<p style='font-size: 25px; margin:0 '>"+"Task3"+"</p>")
    document.write("<p style='font-size: "+size+"px'>"+s1+"</p>")
    document.write("<hr>")
}

changeSize('programing', 35)




function changeWidth(w){
    document.write("<p style='font-size: 10px; margin:0 '>"+"Task4"+"</p>")
    document.write("<table border='1' width='"+w+"px'>")
    document.write("<tr>")
    document.write("<td>1</td>")
    document.write("<td>1</td>")
    document.write("</tr>")

    document.write("<tr>")
    document.write("<td>1</td>")
    document.write("<td>1</td>")
    document.write("</tr>")

    document.write("</table>")
    document.write("<hr>")
}

changeWidth(200);




function changeHeight(h){
    document.write("<p style='font-size: 15px; margin:0 '>"+"Task5"+"</p>")
    document.write("<table border='1' height='"+h+"px'>")
    document.write("<tr>")
    document.write("<td>1</td>")
    document.write("<td>1</td>")
    document.write("</tr>")

    document.write("<tr>")
    document.write("<td>1</td>")
    document.write("<td>1</td>")
    document.write("</tr>")

    document.write("</table>")
    document.write("<hr>")
}

changeHeight(150)





function makeTable(width, height){
    document.write("<p style='font-size: 25px; margin:0 '>"+"Task6"+"</p>")
    document.write("<table border='1' width='"+width+"px' height='"+height+"px'>")
    document.write("<tr>")
    document.write("<td>1</td>")
    document.write("<td>1</td>")
    document.write("</tr>")

    document.write("<tr>")
    document.write("<td>1</td>")
    document.write("<td>1</td>")
    document.write("</tr>")

    document.write("</table>")
    document.write("<hr>")
}

makeTable(500, 300)





function changeColor(color1, color2){
    document.write("<p style='font-size: 35px; margin:0 '>"+"Task7"+"</p>")
    document.write("<table border='1' width='300px' height='300px'>")
    document.write("<tr bgcolor="+color1+">")
    document.write("<td>1</td>")
    document.write("<td>1</td>")
    document.write("</tr>")

    document.write("<tr bgcolor="+color2+">")
    document.write("<td>1</td>")
    document.write("<td>1</td>")
    document.write("</tr>")

    document.write("</table>")
    document.write("<hr>")
}

changeColor('blue', 'brown')





function changeBorderSize(num){
    document.write("<p style='font-size: 25px; margin:0 '>"+"Task8"+"</p>")
    document.write("<table border='"+num+"' width='150px' height='150px'>")
    document.write("<tr>")
    document.write("<td>1</td>")
    document.write("<td>1</td>")
    document.write("</tr>")

    document.write("<tr>")
    document.write("<td>1</td>")
    document.write("<td>1</td>")
    document.write("</tr>")

    document.write("</table>")
    document.write("<hr>")
}

changeBorderSize(10)




function buildTable(w1, h1, b, c){
    document.write("<p style='font-size: 25px; margin:0 '>"+"Task9/10"+"</p>")
    document.write("<table border='"+b+"' width='"+w1+"px' height='"+h1+"px'>")
    document.write("<tr bgcolor='"+c+"'>")
    document.write("<td>1</td>")
    document.write("<td>1</td>")
    document.write("</tr>")

    document.write("<tr bgcolor='"+c+"'>")
    document.write("<td>1</td>")
    document.write("<td>1</td>")
    document.write("</tr>")

    document.write("</table>")
    document.write("<hr>")
}

buildTable(300, 350, 15, 'cyan')



buildTable(400, 500, 10, 'pink')





function teenNatural(){

    document.write("<p style='font-size: 25px; margin:0 '>"+"Task11"+"</p>")

    for(let i = 1; i <= 10; i++){
        document.write(i)
    }

    document.write("<hr>")
}

teenNatural()





function naturalNumbers(n){

    document.write("<p style='font-size: 25px; margin:0 '>"+"Task12"+"</p>")

    for(let i = 1; i <= n; i++){
        document.write(i, "<br>")
    }

    document.write("<hr>")
}

naturalNumbers(28)



function naturalNumbers1(m, n){

    document.write("<p style='font-size: 25px; margin:0 '>"+"Task13"+"</p>")

    for(let i = m; i <= n; i++){
        document.write(i, "<br>")
    }

    document.write("<hr>")
}

naturalNumbers1(24, 56)
