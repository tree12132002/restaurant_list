# Restaurant-List 2.0
* This website provides user with functions to create, read, update, and delete restaurant information.

## Feature
* The user can see the following information about the restaurants on the home page: image, name, category, and rating.
* The user can click the `Detail button` or `restaurant image` to see more information about the restaurant.
* The user can click the `新增餐廳 button` to create a new restaurant with some information.
* The user can click the `Edit button` to edit information about the restaurant.
* The user can click the `Delete button` to delete the restaurant card.
* The user can click the `Sort button` to rearrange the restaurant card.
* The user can search for a specific restaurant by entering the name or category of restaurants in the search bar.
## How to use it 
1. Download with Terminal：
    ```
    git clone https://github.com/tree12132002/restaurant_list
    ```
2. Download on the webpage：
   I. Click『Code』
   II. Choose『Download ZIP』
3. Open Terminal，`cd` to restaurant list file
   I. Install npm packages
    ```
    npm install
    ```
    II. Create default data
    ```
    npm run speed

    ```
4. Start the server
    ```
    npm run dev
    ```
5. When Terminal show `Express is listening on localhost:3000`, you can use any browser and type http://localhost:3000 to enter the website.
6. End the server
   ```
   ctrl + c
   ```
## Packages and versions
* npm： v7.20.3
* express: v4.17.1
* express handlebars: v5.3.3
* nodemon: v2.0.12
* mongoose: v5.13.7
* jquery: v3.5.1
* popper: v1.16.1
* bootstrap: v4.6.0
* font-awesome: v5.15.4
* method-override: v3.0.0

