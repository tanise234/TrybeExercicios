import random

random_number = random.randint(1, 10)  # escolhe um número aleatório entre 1 e 10
guess = ""

while True:
    try:
        while guess != random_number:  # enquanto não adivinhar o número
            guess = int(input("Qual o seu palpite? "))  # pergunte a pessoa usuária um número

        print("O número sorteado era: ", guess)
        break
    except ValueError:
        print("Oops!  That was no valid number.  Try again...")