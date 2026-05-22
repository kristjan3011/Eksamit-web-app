import random   # kasutame juhuslike numbrite loosimiseks


# Funktsioon, mis loob uue 5x5 BINGO kaardi numbritega 1..75
def loo_bingo_kaart():
    numbrid = list(range(1, 76))      # koik voimalikud numbrid 1 kuni 75
    random.shuffle(numbrid)           # segame numbrid labi
    kaart = []                        # siia salvestame 5 rida

    # votame esimesed 25 numbrit ja jaotame need 5x5 maatriksiks
    for r in range(5):
        rida = numbrid[r*5:(r+1)*5]   # igale reale 5 numbrit
        kaart.append(rida)            # lisame rea kaardile

    return kaart                      # tagastame 5x5 kaardi


# Funktsioon, mis loob sama suurusega markeeringute maatriksi (koik False)
def loo_markeeringud():
    return [[False for _ in range(5)] for _ in range(5)]  # 5x5 False maatriks


# Funktsioon, mis prindib kaardi koos markeeringutega
def prindi_kaart(kaart, markeeringud):
    print("BINGO KAART:")
    for r in range(5):
        rida_str = ""
        for c in range(5):
            val = kaart[r][c]            # selle lahtri number
            mark = markeeringud[r][c]    # kas see lahter on markeeritud
            if mark:
                rida_str += f"[{val:2d}] "   # markeeritud numbrid nurksulgudes
            else:
                rida_str += f" {val:2d}  "   # markeerimata numbrid ilma sulgudeta
        print(rida_str)
    print()  # tyhi rida loetavuse jaoks


# Funktsioon, mis markeerib numbri kaardil, kui see seal leidub
def markeeri_number(kaart, markeeringud, number):
    for r in range(5):                 # kaime koik read labi
        for c in range(5):             # kaime koik veerud reas labi
            if kaart[r][c] == number:  # kui leidsime otsitava numbri
                markeeringud[r][c] = True   # markeerime selle lahtri
                return True                 # tagastame True, et number leiti
    return False                            # kui numbrit ei leitud, tagastame False


# Funktsioon, mis kontrollib, kas kaardil on BINGO
def on_bingo(markeeringud):
    # kontrollime koiki ridu
    for r in range(5):
        if all(markeeringud[r][c] for c in range(5)):  # koik 5 lahtrit reas on True
            return True

    # kontrollime koiki veerge
    for c in range(5):
        if all(markeeringud[r][c] for r in range(5)):  # koik 5 lahtrit veerus on True
            return True

    # kontrollime diagonaali ulemine-vasak -> alumine-parem
    if all(markeeringud[i][i] for i in range(5)):
        return True

    # kontrollime diagonaali ulemine-parem -> alumine-vasak
    if all(markeeringud[i][4 - i] for i in range(5)):
        return True

    # kui uhtegi tingimust ei taidetud, siis BINGO veel ei ole
    return False


# Pohi "mangutsukkel" – loogiline BINGO simulatsioon
def bingo_mang():
    kaart = loo_bingo_kaart()          # loome uue BINGO kaardi
    markeeringud = loo_markeeringud()  # loome markeeringute maatriksi

    loosid = list(range(1, 76))        # koik voimalikud loosinumbrid
    random.shuffle(loosid)             # segame loosinumbrid labi

    print("Alustame BINGO manguga!")
    prindi_kaart(kaart, markeeringud)  # prindime algse kaardi

    for nr in loosid:                  # kaime loosinumbrid uhekaupa labi
        input("Vajuta Enter, et loosida jargmine number...")  # kasutaja saab sammu juhtida
        print(f"Loosisime numbri: {nr}")                      # kuvame loositud numbri

        leiti = markeeri_number(kaart, markeeringud, nr)      # proovime numbrit kaardil markeerida

        if leiti:
            print("See number oli kaardil! Uuendatud kaart:")
        else:
            print("Seda numbrit kaardil ei olnud.")
        prindi_kaart(kaart, markeeringud)                     # prindime kaardi peale igat loosimist

        if on_bingo(markeeringud):                            # kontrollime, kas on BINGO
            print("BINGO! Mang loppeb.")
            break

    print("Mang on loppenud.")


# Kaivitame mangu ainult siis, kui fail kaivitatakse otse
if __name__ == "__main__":   # standardne Python muster
    bingo_mang()             # kaivitame BINGO mangu