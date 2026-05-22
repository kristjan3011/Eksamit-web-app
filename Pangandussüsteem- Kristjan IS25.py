# Parent Class : User
# Child Class : Bank
# Stores details about the account balance
# Stores details about the amount
# Allows for deposits, withdraw, view_balance

# Parent Class
class User():
    def __init__(self, name, age, gender):
        # Konstruktor, mis salvestab kasutaja põhiandmed
        self.name = name
        self.age = age
        self.gender = gender

    def show_details(self):
        # Meetod, mis kuvab kasutaja isikuandmed
        print("Personal Details")
        print("")
        print("Name:", self.name)
        print("Age:", self.age)
        print("Gender:", self.gender)

# Child Class
class Bank(User):  
    # Bank klass pärib User klassi omadused
    def __init__(self, name, age, gender):
        # Kutsub välja User klassi konstruktori
        super().__init__(name, age, gender)
        # Algne kontojääk on 0
        self.balance = 0

    def deposit(self, amount):
        # Lisame summa kontojäägile
        self.balance = self.balance + amount
        # Salvestame sisestatud summa
        self.amount = amount
        
        # Kuvame uuendatud kontoseisu
        print("Account balance has been updated : €", self.balance)

    def withdraw(self, amount):
        # Salvestame väljavõtu summa
        self.amount = amount
        # Kontrollime, kas kontol on piisavalt raha
        if self.amount > self.balance:
            print("Insufficient funds | balance available : €", self.balance)
        else:
            # Lahutame summa kontojäägist
            self.balance = self.balance - self.amount
            print("Account balance has been updated : €", self.balance)
"""
# Loome uue pangakonto kasutajale "johan"
johan = Bank('johan', 20, 'Male')
# Teeme sissemakse 200€
johan.deposit(200) # johan.withdraw saab kasutada väljavõtmiseks
# Kuvame kasutaja andmed
johan.show_details()
"""