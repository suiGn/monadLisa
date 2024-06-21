# MonadLISA
Install global:
```js
npm install -g monadlisa
```
* Run **.lisa** on your terminal to access.
* Start with :
  ```bash
  .lisa
  ```

## Clone the main repository and fetch all the contents of the submodules to install monadLisa as a the whole monoRepo:
```bash
git clone --recurse-submodules https://github.com/suiGn/monadLisa.git
```
**Modularity and Independence**: Each module within the ecosystem is designed to function independently yet possesses the inherent capability to integrate with other modules, forming more complex systems. **MonadLisa** leverages this principle, demonstrating the power of modular design and the synergistic potential of these modules when combined.

## Pulling Submodule Changes in the Monorepo:
To get the latest commits for all submodules, you can use:
```bash
git pull --recurse-submodules
```
To ensure that the submodules are on the correct commit tracked by the monorepo:
```bash
git submodule update --init --recursive
```

# Deployment:
**PM2:** This guide would detail steps for running your monadLisa with PM2, and setting it up to restart automatically on server reboot: [Click Here](https://www.monadlisa.com/about/docs/deployment-and-management-of-monadlisa-with-pm2)

Make the script executable:
sh
Copy code
chmod +x commit_and_push.sh