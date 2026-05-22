import pygame
import sys
pygame.init()

#värvid
lGreen = [153, 255, 153]
lBlue = [153, 204, 255]

#ekraani seaded
screen=pygame.display.set_mode([640,480])
pygame.display.set_caption("Harjutamine")
screen.fill(lGreen)

gameover = False

while not gameover:

    #Lisame pildid
    youWin = pygame.image.load("youwin.png")
    youWin = pygame.transform.scale(youWin, [300, 220])
    screen.blit(youWin,[180,100])

    pygame.display.flip()

    #mängu sulgemine ristist
    for i in pygame.event.get():
       if i.type == pygame.QUIT:
           sys.exit()

pygame.quit()