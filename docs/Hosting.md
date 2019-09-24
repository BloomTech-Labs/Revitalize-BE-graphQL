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
- `@157.245.187.82` is the server you're connecting to.
- Last but not least! If connected to the server properly you should see something like such

    ![SHH Success](https://i.imgur.com/c1kEx5e.png)

## 3️⃣ **Installing Packages** 📦
Now that we've Created our Droplet and have connected to it. Let's go ahead and install the two necessary packages to get up in running like, [Node](https://nodejs.org/en/) and [Nginx](https://www.nginx.com/).

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

**Installing _`Nginx`_**

1) Install Nginx
    - `sudo apt-get install nginx -y`

2) Reconfigures our firewall to allow Nginx services
    - `sudo ufw allow 'Nginx HTTP'`

3) Starts Nginx automatically when the server starts
    - `sudo systemctl enable nginx`

If Nginx was successfully configured, you should be greeted by this beautiful page when you head to your _`ipv4`_ address _e.g_ [http://157.245.187.82/](http://157.245.187.82/)

![](https://i.imgur.com/Dn815FG.png)

You'll notice some more configuration needs to be done, but we'll do that after we've gotten our nodejs application up and running.

## 4️⃣ **Starting our application** 🔥
