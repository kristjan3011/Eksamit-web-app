#Kristjan Juhansoo-IS25

#Küsi info inimese kohta
vanus = int(input("Sisestage enda vanus: "))
sugu = input("Sisestage enda sugu (M/m või N/n): ").strip()

#Maksimaalse pulsi arvutus
if sugu.lower() == 'm':
    max_pulss = 220 - vanus
elif sugu.lower() == 'n':
    max_pulss = 206 - 0.88 * vanus
else:
    print("Tundmatu sugu. Kasutage M/m või N/n.")
    exit()
# Treeningtsooni protsendid
tyyp = int(input("Sisestage treeningu tüüp (1, 2 või 3): "))
if tyyp == 1:
    alumine_protsent, ulempiir_protsent = 0.50, 0.70
elif tyyp == 2:
    alumine_protsent, ulempiir_protsent = 0.70, 0.80
elif tyyp == 3:
    alumine_protsent, ulempiir_protsent = 0.80, 0.87
else:
    print("Tundmatu treeningu tüüp. Kasutage 1, 2 või 3.")
    exit()

# Vahemiku arvutus ja ümardamine täisarvudeks
vähim = round(max_pulss * alumine_protsent)
suurim = round(max_pulss * ulempiir_protsent)

print(f"Pulsisagedus peaks olema vahemikus {vähim} kuni {suurim}.")
