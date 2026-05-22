#Mikk-Gregor Rännel, Kristjan Juhansoo IS25
'''
#ül 1.
linnad = ["Tallinn", "Tartu", "Narva", "Pärnu", "Viljandi", "Rakvere", "Kuressaare"]
linnad.sort()
linna_arv = len(linnad)
print("Tähestiku järjekorras linnad:", linnad)
print(f"Järjendis on kokku {linna_arv} linna. ")
'''
'''
#ül 2.

a = [2, 3, 1, 5]
b = [6, 4]
c = sorted (a + b)
print(c)
'''
#ül 3.

linnad = ["Tallinn", "Tartu", "Narva", "Pärnu", "Viljandi", "Rakvere", "Kuressaare"]
print("linnade loetelu:")
for linn in linnad:
    print(linn)
    
'''
#ÜL4
import turtle

kilpkonn = turtle.Turtle()

for _ in range(4):
    kilpkonn.forward(100)
    kilpkonn.right(90)

turtle.done()

#ÜL5
'''
arvud = [1, 2, 3, 4, 5]

summa = 0

for arv in arvud:
    summa += arv

print("summa on:", summa)
'''
#ÜL6

arvud = [1, 2, 3, 4, 5]
summa = 0
for arv in arvud: summa += arv
print(summa)
'''
#ÜL7
kuud = {
    "01": "jaanuar", "02": "veebruar", "03": "märts", "04": "aprill",
    "05": "mai", "06": "juuni", "07": "juuli", "08": "august",
    "09": "september", "10": "oktoober", "11": "november", "12": "detsember"
}

kuupaev = input("Sisesta kuupäev kujul pp.kk.aaaa: ")

try:
    paev, kuu, aasta = kuupaev.split(".")
    if kuu in kuud:
        print(f"{int(paev)}. {kuud[kuu]} {aasta}")
    else:
        print("error: kuu peab olema 01–12.")
except ValueError:
    print("error kuupäev peab olema pp.kk.aaaa.")
'''