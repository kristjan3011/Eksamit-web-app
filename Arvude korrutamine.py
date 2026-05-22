#Kristjan juhansoo IS25
while True:
    try:
        a = int(input("Sisesta esimene arv: "))
        if a > 0:
            break
        print("Arv peab olema positiivne")
    except:
        print("Palun sisesta täisarv")
while True:
    try:
        b = int(input("Sisesta teine arv: "))
        if b > 0:
            break
        print("Arv peab olema positiivne")
    except:
        print("Palun sisesta täisarv")
tulemus = 0
for _ in range(b):
    tulemus += a
print(f"{a} * {b} = {tulemus}")