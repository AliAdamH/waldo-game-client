# Project - Photo Tagging App (Where's Waldo)


This project is part of the **Odin Project** curriculum.
[Link to the full description](https://www.theodinproject.com/lessons/javascript-where-s-waldo-a-photo-tagging-app)

<br>

This app's works how a typical where's waldo game would. A player
needs to choose a playground where four main characters are scattered (Waldo, Wizard, Wilma, Odlaw). The goal is to find each character in the fastest possible time.



## **Takeaway**


<br>

To enable the photo tagging ability I first had to manually record  the position of each character on each playground. The position was defined
by recording four points (width and height) of the visible portion of the character, creating a box target as illustrated by the images below :


<br>

This means any clicks within that box are valid.


<br>

It is important to note that measures were done using the following steps :
1. Get the width and height from the bounding client rectangle in order to get the size of the image on the user's device (it can vary)

<br>

2. Calculate the coordinates ratio relative to the image's dimensions and using offsetX/offsetY. however I noticed a weird bug : when using offsetX/offsetY in Firefox through React's nativeEvent (since synthetic events don't include offset properties), the value is always 0, therefore LayerX and LayerY (which hold the same values as offset in both Chrome and Firefox) were chosen as an alternative.

<br>

```javascript
 const { width, height } = e.target.getBoundingClientRect();
    let positionObject = {
      height: (e.nativeEvent.layerY / height).toFixed(3),
      width: (e.nativeEvent.layerX / width).toFixed(3),
    };
    requestCoordValidity(positionObject);
```
<br>

3. Validation of the coordinates ratio is done server-side through an api
as it was required by the assignement that we _should not_ send the location of each character with the image and performing the validation on the client.

