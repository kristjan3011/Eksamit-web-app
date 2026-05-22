import math
nimi = input("sisesta sõitja nimi: ") #Sõitja nimi
lubatud = int(input("sisesta lubatud sõidukiirus: ")) #Lubatud kiirus sõites
tegelik = int(input("sisesta päris kiirus: ")) #Kiiruse piirang
a = lubatud
b = tegelik
yletus = (tegelik - lubatud) #Kiiruse vahe
c = str(min (420, yletus*7)) #Trahvi arvutus
x = ("Trahv kiiruse ületamise eest ") + c + "€" #Trahvi määr
t = "Sõitis korralikult" #Sõitja jälgis kiirust
if yletus > 0:
    print (x) #Kui ületada kiirust, siis tuleb trahv
else:
    print (nimi, t) #Kui trahvi ei saadud, siis tuleb vastus