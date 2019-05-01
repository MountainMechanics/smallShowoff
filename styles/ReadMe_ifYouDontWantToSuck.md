<h1>Docmumentation</h1>
<h5>Purpose of this Project</h5>
<article>
These CSS classes are made for anyone that is too lazy to write their own Styles<br>
I never inteded this to be used professionally because its probably too unoptimized for commercial use.
</article>

#CSS<br>
###Basic-CSS


This File holds "basic" CSS-classes that are used for arranging content within the Page responsively and naturally


###Fonts

>.font-basic <br>
>applies a basic font-layout which is shown in the demo<br>
>Font: Open-sans sans-serif <br>
>weight: auto

>.font-header <br>
>applies a header-specific font-layout which is shown in the demo <br>
>Font: Work-sans sans-serif <br>
>weight: bold

###Cards
Cards are basically anything you want them to be, but they are intended as an easy container to display content like text, pictures or sold goods.

>.card<br>
>displays content semi-responsively
>it does adjust width and height according to the content and the amount of cards in a row, but it doesnt wrap automatically if the screen is too small (maybe a future feature idk) <br>
>other than that:
>* border: lightgray 1px solid;<br>
> to give a basic border nothing special really
>* transition: 0.25s transform, box-shadow ease-out;<br>
> provides good animation if you use .animate on the same object
>* box-shadow: none;

>.animate<br>
>intended for use with .card, to add some visual flair during a hover<br>
>it uses:<br>
>*transform: translateZ(5px) translateX(3px) translateY(-3px);<br>
>*box-shadow: -3px 3px 7px -3px rgba(0, 0, 0, 0.25);<br>

>\#nav <br>
>**ONLY USE IN COMBINATION WITH \#nav-body**<br>
>use \#nav on the item you want to have as a nav-bar <br>
>then use \#nav-body on all other content (wrapper with content in it)

>.center-on-screen<br>
>centers content on screen at a fixxed position

###Grid-layout
I use flex-boxes for a variable and easy to use grid-layout, personally i would use css-grid in my projects but this is also very easy to understand and use for specific needs
>.row<br>
>all children of this item are going to be in the same rows<br>
>give the wrapper the row-class and put your row-items into the wrapper


>.col<br>
>all children of this item are going to be in the same column
>give the wrapper the col-class and put your column-items into the wrapper

>grid<br>
>to make a grid combine the 2 classes above<br>
>give a wrapper .col and put wrappers with .row into it, tada you now have a functioning grid


##Form
The form-classes are still very much work in progress<br>
if you really want to use them just look at the code and the demo, they are very self-explanatory 