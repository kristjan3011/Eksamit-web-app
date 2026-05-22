import pygame
import sys
import random

pygame.init()

# värvid
red = [255, 0, 0]
lGreen = [153, 255, 153]

# ekraani seaded
screen = pygame.display.set_mode([640, 480])
pygame.display.set_caption("Staatilised ruudud")

# loome ruudud ainult ühe korra
ruudud = []
for i in range(10):
    x = random.randint(0, 620)
    y = random.randint(0, 460)
    ruudud.append([x, y])

gameover = False

while not gameover:

    # sündmuste kontroll
    for i in pygame.event.get():
        if i.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    # taust
    screen.fill(lGreen)

    # joonistame varem loodud ruudud
    for ruut in ruudud:
        pygame.draw.rect(screen, red, [ruut[0], ruut[1], 20, 20])

    pygame.display.flip()

pygame.quit()
