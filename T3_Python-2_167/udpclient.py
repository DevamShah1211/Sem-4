import socket
host=socket.gethostname()
port=8000
client=socket.socket(type=socket.SOCK_DGRAM)
while True:
    msg=input("enter the msg")
    client.sendto(msg.encode(),(host,port))
    data,add=client.recvfrom(1024)
    print("recievd",data.decode())
client.close()
