import socket
host=""
port=5000
client=socket.socket()
f="1.txt"
try:
    client.connect((host,port))
    client.send(f.encode())
    f1=open(f,"rb")
    data=f1.read(1024)
    while data:
        client.send(data)
        data=f.read(1024)
    print("sent")
except Exception as e:
    print(e)
    
finally:
    client.close()
