#Kristjan Juhansoo-IS25
nimi = input("mis on sinu nimi: ") #küsib nime ja perenime
perenimi = input("mis on sinu perekonnanimi: ")
if perenimi[-2:] == "ne": #kui lõpus on "ne" on abielus
    print ("Abielus")
elif perenimi[-2:] == "te": #kui lõpus on "te" on vallaline
    print ("Vallaline")
elif perenimi[-1:] == "e": #kui lõpus on "e" on määramata
    print ("Määramata")
else:
    print("Pole ilmselt leedulanna perekonnanimi") #ilmselt pole leedulanna