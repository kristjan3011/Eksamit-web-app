#Kristjan Juhansoo IS25
from turtle import* #loob kilpkonna
kylg = int(input("Külje pikkus: ")) #küsib külje pikkuse
x = 0
while x < 4: #kuni X on väiksem kui 4, joonstab ruudu
    fd(kylg)
    lt(90)
    x += 1

exitonclick()