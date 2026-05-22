#Kristjan Juhansoo IS25
from random import randint
tulemus = randint(1, 999)
kordi = 0
lubatud_kordi = 10
while kordi < lubatud_kordi:
    arv = int(input("Sisesta arv: "))
    if arv < tulemus:
        print ("Arv on liiga väike")
    elif arv > tulemus:
        print ("Arv on liiga suur")
    elif arv == tulemus:
        
        print ("Arv oli õige!")
        break