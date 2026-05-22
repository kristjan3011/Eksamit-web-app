#Kristjan Juhansoo-IS25
import math
#küsida arvud, kõigepealt inimeste arv, siis kohtade arv
inimesed = int(input("Sisesta transporditavate inimeste arv: "))
kohad = int(input("Sisesta ühe bussi kohtade arv: "))

if inimesed < 1: 
    print("Inimeste arv peab olema vähemalt 1.")
elif kohad <= 0:
    print("Bussi kohtade arv peab olema positiivne täisarv.")
else:
    bussid = (inimesed + kohad - 1) // kohad #Vajalik busside koguarv
    jaak = inimesed % kohad #jäägi arvutamine
    viimases = jaak if jaak != 0 else kohad #Inimeste arv viimasesse bussi
    print(f"Vajalik busside arv: {bussid}")
    print(f"Inimesi viimases bussis: {viimases}")
