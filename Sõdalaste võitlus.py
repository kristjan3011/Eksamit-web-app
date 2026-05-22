import random                          # toome sisse mooduli juhusliku valiku jaoks

class Sodalane:                        # klass, mis kirjeldab uhte voitlusosalist
    def __init__(self, nimi):          # konstruktor, mis loob uue sodalase
        self.nimi = nimi               # salvestab sodalase nime
        self.tervis = 100              # iga sodalane alustab 100 tervisepunktiga

    def saa_tabamuse(self):            # funktsioon, mis rakendab tabamust
        self.tervis -= 20              # tabamus vahendab tervist 20 punkti vorra

    def on_elus(self):                 # funktsioon, mis kontrollib, kas sodalane on elus
        return self.tervis > 0         # tagastab True, kui tervist on alles


# Loome kaks sodalast
s1 = Sodalane("sodalane 1")            # esimene sodalane nimega "sodalane 1"
s2 = Sodalane("sodalane 2")            # teine sodalane nimega "sodalane 2"

while s1.on_elus() and s2.on_elus():   # tsukkel kaib edasi ainult siis, kui molemad elus

    ryndaja = random.choice([s1, s2])  # valime juhuslikult, kumb sodalane ryndab
    siht = s2 if ryndaja is s1 else s1 # teine sodalane saab tabamuse

    siht.saa_tabamuse()                # rakendame tabamuse sihtmargile

    print(f"{ryndaja.nimi} ryndas! {siht.nimi} tervis: {siht.tervis}")
                                       # kuvame, kes ryndas ja palju tervist sihtmargil alles on

# Kui tsukkel loppeb, on uks sodalane langenud
voitja = s1 if s1.on_elus() else s2    # maarame, kumb sodalane jai ellu

print(f"Voitja on: {voitja.nimi}")     # kuvame voitja nime