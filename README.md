<h1>Zerodha Clone Project Installation Guide</h1>
This guide will walk you through the installation process for the Wanderlust web project. Follow the steps below to set up the project locally on your machine.

<h2>Prerequisites</h2>
Before you begin, make sure you have the following installed on your system:

Node.js (version 18 recommended)
MongoDB
Nodemon (installed globally)
<h2>Installation Steps</h2>
1. Clone the Zerodha Clone repository from GitHub:

git clone https://github.com/PranavMehunkar/zerodha-clone.git

2. Set up the database:

Create a .env file in the root directory of the project.

Add the following line to the .env file:

ATLASDB_URL=mongodb://127.0.0.1:27017/ZerodhaClone

3. Set up Cloudinary:

Go to Cloudinary and sign up for a free account.

Once logged in, obtain your Cloudinary CLOUD_NAME, CLOUD_API_KEY, and CLOUD_API_SECRET.

Add these values to the .env file:

CLOUD_NAME=your_cloud_name

CLOUD_API_KEY=your_api_key

CLOUD_API_SECRET=your_api_secret

4. Set the secret for your Cloudinary storage:

Add a SECRET key to your .env file and set it to a secure value:

SECRET=your_cloudinary_secret

5. Install project dependencies using npm:

npm install

6. Run the application:

npm start

7. Access the project:

Once the server is running, you can access the project at http://localhost:3000.
That's it! You have successfully installed and set up the Zerodha Clone project on your local machine. If you encounter any issues during the installation process, feel free to reach out for assistance.
