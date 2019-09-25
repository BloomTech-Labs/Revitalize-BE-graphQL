# **Production Deployment**

_Note:_ We'll be deploying this back-end to Digital Ocean. If you're a student you can get _`$50`_ in credits [here](https://education.github.com/pack/offers) otherwise you can get a _`$5/mo`_ droplet.

## **Prerequisites**:

- Digital Ocean Account [Create one here](https://www.digitalocean.com/)

## 1️⃣ **Creating a Droplet** 💧

1) Choosing an image
- First head over to droplet creation page
- Under the `Choose an image` section, go ahead and select _`Marketplace`_
- From there locate the `Docker` Image and select it.
- Next scrolldown the _`Choose a Plan`_ section, and select `Standard`, with the _`$5/mo`_ option.

2) Authentication
- Now we'll need to setup Authentication method for our droplet. There's two ways you can do so. The first way it using `SSH Keys`, the second is using `One-time password`.
- We'll be using `SSH Keys` due to them being common, and more secure.
- Click `New SSH Key` and a Modal like such should come up

    ![SSH Modal](https://i.imgur.com/PwNGcp4.png)

- You'll notice a little tutorial on the right, follow that and you'll be good to go!
- Last but not least click the `Create Droplet` button.

## 2️⃣ **Connecting to a Droplet** 💻
Now that we've created our droplet it's time to connect to it.

Before connecting to the Droplet make sure you're using a terminal capable of running [SSH Commands](https://en.wikipedia.org/wiki/Secure_Shell)

- First things first you're going to want to copy the [_`ipv4`_](https://en.wikipedia.org/wiki/IPv4) address associated with your Droplet.
- Once done we can beging connecting to our droplet, to do so, in your terminal, write out this command `ssh root@153.242.182.92` replacing the entered_`ipv4`_ address with yours.

Here's that command broken down.

- `ssh` signifies that we want to run an `ssh` command.
- `root` is saying you want to be logged in as `root`. `root` is a user that comes with linux by default, and has access to all commands and files on a Linux or Unix-like OS.
- `@157.245.187.82` is the server we're connecting to.
- Last but not least! If connected to the server properly you should see something like such

    ![SHH Success](https://i.imgur.com/c1kEx5e.png)

## 3️⃣ **Installing Node** 📦
Now that we've Created our Droplet and have connected to it. Let's install Node!

**Installing the _`Node LTS`_ (Latest Stable Release).**
1) change to the home directory<br>
    - `cd ~` <br>

2) Download the Node LTS PPA and excute it<br>
    - `curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -` <br>

3) Install the Node LTS <br>
    - `sudo apt-get install -y nodejs` <br>

4) The `nodejs` package contains the nodejs binary as well as npm, so we don’t need to install npm separately. However, in order for some npm packages to work (such as those that require compiling code from source), we will need to install the build-essential package <br>
    - `sudo apt-get install build-essential`

The Node.js runtime is now installed, and ready to run our node application! Just in case, let's verify this by running `node -v` which should print out something like `v10.16.3`.

## 4️⃣ **Starting our application** 🔥


## 5️⃣ **Access our node application** 🏁🚘
Now that our application is running, and listening on localhost, we'll need to set up a way for our users to access it. We will set up the [Nginx](https://www.nginx.com) web server as a reverse proxy for this purpose.

**Installing _`Nginx`_**

1) First we need to install the Nginx package
    - `sudo apt-get install nginx -y`

2) Next we'll configure our firewall to allow Nginx services
    - `sudo ufw allow 'Nginx HTTP'`

3) Now we'll start nginx automatically when the server starts
    - `sudo systemctl enable nginx`

4) Next we need to configure our nginx proxy
   - `sudo nano /etc/nginx/sites-available/default`

   Now we need to replace the exist location block.
   ```
    location / {
        random stuff in here
    }
   ```

   with this (the default port is 4000, if you changed it make sure your to use the port you set)

   ```
   location / {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
   ```

5) Next we'll check to make sure the changes we've made were successful
    - `sudo nginx -t` <br>
We should see something like such if they are
        ```
        nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
        nginx: configuration file /etc/nginx/nginx.conf test is successful
        ```

6) Last, but not least, we need to restart nginx
    - `sudo systemctl restart nginx`

Now you should be greeted by this beautiful page when we head to our droplet _`ipv4`_ address _e.g_ [http://157.245.187.82/](http://157.245.187.82/)

![](https://i.imgur.com/mXv0cgS.png)


