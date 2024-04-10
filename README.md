# MonadLISA
Concepts change according to new understandings.
The importance of establishing a **habitat**: NodeJs RunTime.

# The Monadology Leibniz:
The Monad of which we shall here speak, is nothing but a simple substance, which enters into compounds. By 'simple' it means 'without pars'. (Theod. 10)

# Deployment and Management of MonadLisa:
This guide would detail steps for running your monadLisa with PM2, and setting it up to restart automatically on server reboot: [Click Here](https://www.monadlisa.com/about/docs/deployment-and-management-of-monadlisa-with-pm2)

**Modularity and Independence**: Each module within the neurons.me ecosystem is designed to function independently yet possesses the inherent capability to integrate with other modules, forming more complex systems. MonadLisa leverages this principle, demonstrating the power of modular design and the synergistic potential of these modules when combined.

# The Creation of Identity
install globally with npm to get .Lisa command.
```js
npm install -g monadlisa
```

Clone the main repository and fetch all the contents of the submodules to install monadlisa as a the whole monoRepo:
```bash
git clone --recurse-submodules https://github.com/suiGn/monadLisa.git
```

run .lisa on your terminal.

Pulling Submodule Changes in the Monorepo:

To get the latest commits for all submodules, you can use:
sh
Copy code
git pull --recurse-submodules
To ensure that the submodules are on the correct commit tracked by the monorepo:
sh
Copy code
git submodule update --init --recursive

