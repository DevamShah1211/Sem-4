import socket
host=""
port=5000
server=socket.socket()
server.bind((host,port))
server.listen()
conn,add=server.accept()
while True:
    data=conn.recv(1024).decode()
    if data=="BYE":
        break
    print("msz recieved:",str(data))
    data=input("ENter the message you want to send:")
    conn.send(data.encode())
conn.close()
    
