import socket
host=""
port=5000
server=socket.socket()
server.bind((host,port))
server.listen(1)
conn,add=server.accept()

file=conn.recv(1024).decode()
f=open(file,"wb")
while True:
    data=conn.recv(1024)
    if not data:
        break
    f.write(data)
print("success")
conn.close()
