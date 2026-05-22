#Kristjan Juhansoo-IS25
suurus = float(input("Sisesta kirja suurus megabaitides: ")) #megabaitide kogus
teema = input("Sisesta kirja teema pealkiri: ") #kas kirjal on pealkiri
on_manus = input("Kas kirjaga on kaasas fail: ").strip().lower() == "jah"#kaasas on pilt
on_spamm = (teema.strip() == "") or (on_manus and suurus > 1.0) #vastus valimine

if on_spamm:
    print("Kiri on spämm")
else:
    print("Kiri ei ole spämm")
