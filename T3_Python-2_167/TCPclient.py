import socket
host=socket.gethostname()
port=5000

client=socket.socket()
client.connect((host,port))
msg=input("enter your msg")
while msg!="BYE":
    client.send(msg.encode())
    data=client.recv(1024).decode()
    print("REcievd From server ",str(data))
    msg=input("enter your msg")
client.close()
