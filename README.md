### Difference between firstChild and firstElementChild
Important to know that firstChild returns the first child node. So in some instace
if you've got comments like

<div class="__eachProduct">
    <!-- SOME COMMENT -->
    <div class="__eachDetails">
        <div class="__eachContent">
            <h2 class="__eachTitle">T-shirt</h2>
            <span class="__eachPrice">$3.99</span>
        </div>
    </div>
</div>

If firstChild is being used to get the first child of .__eachProduct
it will return the node and in this instace is the comment instead of the .__eachContent

# firstElementChild - ignores text and comment nodes
In that case, you should use firstElementChild to get the element and not the node

firstChild is the same as childNodes[0]