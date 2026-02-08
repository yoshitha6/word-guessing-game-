import random

# Computer selects random number
secret_number = random.randint(1, 100)

print("🎯 Welcome to Number Guessing Game")
print("Guess a number between 1 and 100")

attempts = 0

while True:
    guess = int(input("Enter your guess: "))
    attempts += 1

    if guess < secret_number:
        print("Too Low 📉")

    elif guess > secret_number:
        print("Too High 📈")

    else:
        print("🎉 Correct! You guessed the number.")
        print("Attempts:", attempts)
        break