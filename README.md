# hegemone-gui

Repository for the gui application that collects and displays plant data from the hegemone server.

Requires podman and hegemone-server and postgres container

1. Build image

    ```
    podman build -f Containerfile -t redpill-linpro/hegemone-gui .
    ```

2. Create a pod

    ```
    podman pod create -n hegemone -p 8080:8080 -p 5432:5432 -p 3000:3000
    ```

3. Add postgres container

    ```
    podman run -d --oom-score-adj=200 --pod hegemone --name hegemone-postgres -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=planty -e POSTGRES_DB=hegemone postgres:14.2
    ```

4. Add hegemone-server container

    ```
    podman run -d -i --rm --pod hegemone redpill-linpro/hegemone-server
    ```

5. Add hegemone-gui container
    ```
    podman run -d -i --rm --pod hegemone redpill-linpro/hegemone-gui
    ```

6. Check hegemone-server health

    ```
    curl localhost:8080/device-measurements/health
    ```

7. Open a browser and go to 
    ```
    http://localhost:3000/
    ```
