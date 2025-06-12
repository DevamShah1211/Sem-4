import socket
host=""
port=8000
server=socket.socket(type=socket.SOCK_DGRAM)
server.bind((host,port))

while True:
    print("WAiting for message")
    conn,add=server.recvfrom(1024)
    print(f"data recievbd from {add} data is {conn.decode()}")
    msg=input("enter the msg")
    server.sendto(msg.encode(),add)
server.close()
