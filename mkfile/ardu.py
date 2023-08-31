import serial

ardu = serial.Serial(port="COM5", baudrate=9600,)

print(ardu.readline().decode())