#Beineke Full Screen Site
##Installation Instructions
###Installing Git & Downloading Files

1. Make sure you have a BitBucket user and have been added to the project. You can create a user here: [bitbucket.org](https://bitbucket.org/).
2. Follow instructions posted on the git website [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) for the operating system of your choice.
3. Open Terminal on Mac or Command Prompt on PC.
4. CD into the folder you want the site files to go.
5. Clone the repository to your computer.

**CD into folder Mac:**
	``cd path/to/folder``

**CD into folder PC:**
	``cd path\to\folder``

**Clone Repo:**
	``git clone git@bitbucket.org:audioroger/beineke.git``


##Managing Site Files
The "beineke" folder has two subfolders:

1. site1
2. site2

Each will run as a full website, just unload the contents of the folder for the site you want into the web root directory of the hosting server.

##Managing Site Content
In the **"/contentcsv"** folder you will find the spreadsheet being used for the most current content available. This has then been converted into JSON and placed into the **content.json** file in the root of the site.

###Editing Content
1. Duplicate the latest version in the **"/contentcsv"** folder.
2. Open in Excell or Numbers.
3. Edit content as needed.
4. Export as a CSV with **Unicode (UTF-8)** encoding. **THIS IS SUPER IMPORTANT!**
5. Rename the csv with today's date and save back to the site folder. (example filename: "beineke-site1-20161209.csv")
5. Convert the CSV to JSON:
	6. Go to this site [convertcsv.com](http://www.convertcsv.com/csv-to-json.htm).
	7. Click "Clear Input" on Step 1 -> Option 3.
	8. Upload the CSV file to the website, under Step 1 -> Option 1.
	9. Select all and copy the JSON generated in Step 5.
	10. Paste this content into the **content.json** file for the website.
11. Reload the site to see the updated content.

###File Types
1. Audio:
	2. Audio must be in .wav format. 
	2. Audio file path: "assets/audio/"
2. Video:
	3. Videos must be in .mp4 format. 
	3. Video file path: "assets/video/"

###Missing files
If a file is referenced in the content document, but does not exist in the folder, the media player will not work. Please ensure all files are correctly referenced.

##Running the Server
Due to the way the site imports dynamic content, there must be a valid web server running in order for the site to load properly. The application is technology agnostic to the type of server run, however, it has been tested with PHP on UNIX/Linux.

###Setting up PHP Server
1. Ensure PHP is installed on the host machine. If it's not, follow the setup instructions for your operating system [here](https://secure.php.net/manual/en/install.php). 
2. Open Terminal on Mac or Command Prompt on PC.
4. CD into the folder you want to run on the server.
5. Type the following command to run a simple PHP server. ``php -S localhost:8000``

###Running the Site
6. Type ``localhost:8000`` into the URL bar of your favorite web browser (the site has been tested in the latest version of Chrome).
7. Put the browser in full screen mode and hide the toolbar.