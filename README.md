# monadLISA
Concepts change according to new understandings.
The importance of establishing the right habitat: Define NodeJs RunTime.

# The Monadology Leibniz:
The Monad of which we shall here speak, is nothing but a simple substance, which enters into compounds. By 'simple' it means 'without pars'. (Theod. 10)

# Deployment and Management of MonadLisa with PM2
This guide would detail steps for installing PM2 (if not already installed), running your monadLisa with PM2, and setting it up to restart automatically on server reboot.

1. Install PM2 globally if it's not already installed:
   ```bash
   npm install pm2 -g
   ```

2. Navigate to your MonadLisa application directory and start it with PM2:
   ```bash
   pm2 start index.js --name "monadLisa"
   ```

3. Ensure PM2 and your application auto-start at server reboot:
   ```bash
   pm2 startup
   pm2 save
   ```

4. Provide commands for monitoring and logs:
   ```bash
   pm2 status
   pm2 logs monadLisa
   ```
